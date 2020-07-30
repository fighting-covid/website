import Head from "next/head";
import yaml from "js-yaml";
import fs from "fs";
import path from "path";
import axios from "axios";
import { useState } from "react";

import Markdown from "react-markdown";
import { Formik, Form, Field, ErrorMessage } from "formik";
import ReCAPTCHA from "react-google-recaptcha";
import SEO from "../components/seo";
import ReactGA from "react-ga";
ReactGA.initialize("UA-167321699-1");
ReactGA.pageview("/contact");

const FormField = ({ title, type }) => (
  <div className="mb-4">
    <label className="text-lg block mb-2">{title}</label>
    <Field
      type={type}
      as={type === "textarea" ? "textarea" : "input"}
      rows="6"
      name={title.toLowerCase()}
      className="text-lg w-full border-2 border-gray-500 focus:border-accent rounded p-4 mb-2"
    />
    <ErrorMessage
      name={title.toLowerCase()}
      component="div"
      className="text-accent mb-6"
    />
  </div>
);

const ContactPage = ({ data }) => {
  const [formResult, setFormResult] = useState(null);

  const CaptchaField = ({ field, form, ...props }) => {
    return (
      <div>
        <ReCAPTCHA
          sitekey={process.env.GOOGLE_RECAPTCHA_KEY}
          onChange={() => form.setFieldValue("captcha", true)}
        />
        {form.touched[field.name] && form.errors[field.name] && (
          <div className="text-accent mb-6 mt-3">{form.errors[field.name]}</div>
        )}
      </div>
    );
  };

  return (
    <>
      <SEO title="Contact" />
      <main className="container mx-auto">
        <section className="p-8">
          <div className="text-center">
            <h1 className="heading mb-8">{data.title}</h1>
          </div>
          <Markdown className="text-xl markdown-body mx-auto text-center">
            {data.subtitle}
          </Markdown>
          {formResult === null || (
            <p
              className={`text-xl ${
                formResult.success ? "text-green-600" : "text-red-700"
              }`}
            >
              {formResult.message}
            </p>
          )}
        </section>
        <section className="p-8">
          <Formik
            initialValues={{ name: "", email: "", message: "", captcha: false }}
            validate={(values) => {
              const errors = {};

              console.log(values);

              if (!values.name) {
                errors.name = "A name is required";
              }

              if (!values.email) {
                errors.email = "An email is required";
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              ) {
                errors.email = "Invalid email address";
              }

              if (!values.message) {
                errors.message = "A message is required";
              }

              if (!values.captcha) {
                errors.captcha = "Please complete the captcha";
              }

              return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                axios
                  .post("/api/contact", values)
                  .then(function (response) {
                    setFormResult({
                      success: true,
                      message: response.data.message,
                    });
                  })
                  .catch(function (error) {
                    setFormResult({
                      success: false,
                      message: error.message,
                    });
                  });
                setSubmitting(false);
              }, 400);
            }}
          >
            {({ isSubmitting, setFieldValue }) => {
              return (
                <Form className="md:w-1/2 md:mx-auto w-full">
                  <FormField title="Name" type="text" />
                  <FormField title="Email" type="email" />
                  <FormField title="Message" type="textarea" />
                  <Field name="captcha" component={CaptchaField} />
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="block cursor-pointer mt-6 mx-auto"
                  >
                    <p className="trans button text-lg">Submit</p>
                  </button>
                </Form>
              );
            }}
          </Formik>
        </section>
      </main>
    </>
  );
};

export async function getStaticProps() {
  const dataPath = path.join(process.cwd(), "data/contact.yml");
  const data = yaml.safeLoad(fs.readFileSync(dataPath));
  return { props: { data } };
}

export default ContactPage;
