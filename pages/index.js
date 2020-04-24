import yaml from "js-yaml";
import fs from "fs";
import path from "path";
import axios from "axios";
import { useState, useEffect } from "react";

import Markdown from "react-markdown";
import {
	ResponsiveContainer,
	BarChart,
	Bar,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	LabelList,
} from "recharts";
import SEO from "../components/seo";

const HomePage = ({ data }) => {
	const [graphData, setGraphData] = useState(null);
	useEffect(() => {
		const getGraphData = async () => {
			const res = await axios.get("/api/data");
			setGraphData(res.data);
		};
		getGraphData();
	}, []);

	return (
		<>
			<SEO title="Home" />
			<main>
				<section
					className="md:mb-16 flex flex-col-reverse md:flex-wrap-reverse md:flex-row"
					style={{ minHeight: "calc(100vh - 6rem)" }}
				>
					<div className="md:w-1/2 w-full md:p-16 p-8 flex flex-col md:justify-center">
						<p className="font-bold font-serif md:text-5xl text-4xl pb-4">{data.title}</p>
						<div className="font-sans lg:text-2xl text-xl">
							<Markdown className="markdown-body">{data.subtitle}</Markdown>
						</div>
					</div>
					<div
						className="md:w-1/2 w-full flex flex-col bg-local bg-cover bg-no-repeat bg-center"
						style={{
							backgroundImage: `url(${require("../assets/images/mask.jpg")})`,
							minHeight: "30vh",
						}}
					></div>
				</section>

				<section className="md:p-16 p-8 flex flex-wrap-reverse">
					<div className="border-2 border-gray-500 md:w-1/2 w-full">
						<iframe
							className="visual"
							src="https://www.google.com/maps/d/u/0/embed?mid=1EYwPfRTAqljYRM2A5VL514hlb2igE-J0&zoom=10"
							style={{ width: "100%", height: "100%", border: "none" }}
						></iframe>
					</div>
					<div className="md:pl-16 py-8 md:w-1/2 w-full flex flex-col md:justify-center justify-end">
						<div>
							<h2 className="font-serif font-bold md:text-4xl text-3xl heading">Hospitals</h2>
						</div>
						<Markdown className="markdown-body text-lg">{data.statistics.map}</Markdown>
					</div>
				</section>

				<section className="md:p-16 p-8 flex flex-wrap">
					<div className="md:pr-16 py-8 md:w-1/2 w-full flex flex-col md:justify-center justify-end">
						<div>
							<h2 className="font-serif font-bold md:text-4xl text-3xl heading">Requests</h2>
						</div>
						<Markdown className="markdown-body text-lg">{data.statistics.graph}</Markdown>
					</div>

					<div
						className="md:w-1/2 w-full flex flex-col md:justify-center justify-start"
						style={{ height: "60vh" }}
					>
						{graphData !== null ? (
							<ResponsiveContainer width="100%" height="100%">
								<BarChart data={graphData}>
									<CartesianGrid strokeDasharray="3 3" />
									<XAxis dataKey="name" orientation="bottom" />
									<YAxis />
									<Tooltip />
									<Legend />
									<Bar dataKey="masks" name="Face Masks" stackId="a" fill="#8884d8" />
									<Bar dataKey="shields" name="Face Shields" stackId="a" fill="#75b4ca" />
								</BarChart>
							</ResponsiveContainer>
						) : (
							<div></div>
						)}
					</div>
				</section>
			</main>
			{/* <main>
				<section className="mb-16">
					<div className="flex flex-wrap-reverse" style={{ minHeight: "calc(100vh - 100px)" }}>
						<div className="md:w-1/2 w-full md:p-16 p-8 flex flex-col md:justify-center">
							<div className="md:w-3/4 h-full flex flex-col md:justify-center justify-start">
							<p className="font-bold font-serif md:text-5xl text-4xl pb-4">{data.title}</p>
							<div className="font-sans lg:text-2xl text-xl">
								<Markdown className="markdown-body">{data.subtitle}</Markdown>
							</div>
							</div>
						</div>
						<div
							className="md:w-1/2 w-full flex flex-col bg-local bg-cover bg-no-repeat bg-center"
							style={{
								backgroundImage: `url(${require("../assets/images/mask.jpg")})`,
								minHeight: "30vh",
							}}
						></div>
					</div>
				</section>

				<section className="md:p-16 p-8 flex flex-wrap-reverse" style={{ height: "60vh" }}>
					<div className="border-2 border-gray-500 md:w-1/2 w-full">
						<iframe
							className="visual"
							src="https://www.google.com/maps/d/u/0/embed?mid=1EYwPfRTAqljYRM2A5VL514hlb2igE-J0&zoom=10"
							style={{ width: "100%", height: "100%", border: "none" }}
						></iframe>
					</div>
					<div className="md:pl-16 py-8 md:w-1/2 w-full flex flex-col md:justify-center justify-end">
						<div>
							<h2 className="font-serif font-bold md:text-4xl text-3xl heading">Hospitals</h2>
						</div>
						<Markdown className="markdown-body text-lg">{data.statistics.map}</Markdown>
					</div>
				</section>

				<section className="md:p-16 p-8 flex flex-wrap">
					<div className="md:pr-16 py-8 md:w-1/2 w-full flex flex-col md:justify-center justify-end">
						<div>
							<h2 className="font-serif font-bold md:text-4xl text-3xl heading">Requests</h2>
						</div>
						<Markdown className="markdown-body text-lg">{data.statistics.graph}</Markdown>
					</div>

					<div
						className="md:w-1/2 w-full flex flex-col md:justify-center justify-start"
						style={{ height: "60vh" }}
					>
						{graphData !== null ? (
							<ResponsiveContainer width="100%" height="100%">
								<BarChart data={graphData}>
									<CartesianGrid strokeDasharray="3 3" />
									<XAxis dataKey="name" orientation="bottom" />
									<YAxis />
									<Tooltip />
									<Legend />
									<Bar dataKey="masks" name="Face Masks" stackId="a" fill="#8884d8" />
									<Bar dataKey="shields" name="Face Shields" stackId="a" fill="#75b4ca" />
								</BarChart>
							</ResponsiveContainer>
						) : (
							<div></div>
						)}
					</div>
				</section>
			</main> */}
		</>
	);
};

export async function getStaticProps() {
	const dataPath = path.join(process.cwd(), "data/index.yml");
	const data = yaml.safeLoad(fs.readFileSync(dataPath));
	return { props: { data } };
}

export default HomePage;
