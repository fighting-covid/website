import { FiInstagram, FiFacebook } from "react-icons/fi";

const Footer = () => (
  <footer className="p-8 bg-dark text-light flex">
    <div className="md:w-1/2 w-full">
      Copyright &copy; 2020 <strong>Youth COVID-19 Relief Organization</strong>.
      All rights reserved.
    </div>
    <div className="md:w-1/2 w-full flex justify-end text-2xl">
      <a className="mx-2" href="https://www.facebook.com/projectycro/">
        <FiFacebook />
      </a>
      <a className="mx-2" href="https://www.instagram.com/projectycro/?hl=en">
        <FiInstagram />
      </a>
    </div>
  </footer>
);

export default Footer;
