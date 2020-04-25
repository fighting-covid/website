import React, { useState } from "react";
import Link from "next/link";

import { FiHeart } from "react-icons/fi";
import Logo from "../assets/images/brand/mask.svg";

const NavLink = ({ href, title, onClick, end }) => (
	<Link href={href}>
		<a
			onClick={onClick}
			className={`trans block mt-4 lg:inline-block lg:mt-0 text-gray-700 hover:text-dark ${
				end || false ? "" : "mr-4"
			}`}
		>
			{title}
		</a>
	</Link>
);

const Header = () => {
	const [isActive, setActive] = useState(false);
	return (
		<>
			<div className="h-24"></div>
			<header
				id="header"
				className="flex items-center justify-between flex-wrap p-4 md:p-8 w-full fixed bg-light"
				style={{ minHeight: "6rem", zIndex: "1" }}
			>
				<div className="flex-shrink-0 lg:mr-8">
					<Link href="/">
						<a
							onClick={() => {
								setActive(false);
							}}
							className="flex items-center font-bold text-2xl tracking-tight"
						>
							<img src={Logo} alt="Logo" className="h-12 mr-4" />
							<span>Project YCRO</span>
						</a>
					</Link>
				</div>
				<div className="block lg:hidden">
					<button
						onClick={() => setActive(!isActive)}
						className={`hamburger hamburger--3dxy ${isActive ? "is-active" : ""}`}
						aria-label="Menu"
						aria-controls="navigation"
						type="button"
					>
						<span className="hamburger-box">
							<span className="hamburger-inner"></span>
						</span>
					</button>
				</div>
				<nav
					className={`w-full flex-grow lg:flex lg:items-center lg:w-auto ${
						isActive ? "block absolute inset-0 mt-20 flex-col" : "hidden"
					} `}
				>
					<div className={`text-lg lg:flex-grow ${isActive ? "bg-light px-4" : ""}`}>
						<NavLink
							href="/about"
							title="About"
							onClick={() => {
								setActive(false);
							}}
						/>
						<NavLink
							href="/contact"
							title="Contact"
							onClick={() => {
								setActive(false);
							}}
						/>
					</div>
					<div className={`text-lg ${isActive ? "bg-light p-4" : ""}`} style={{ marginTop: "-1rem" }}>
						<NavLink
							href="/ppe-request"
							title="Request PPE"
							onClick={() => {
								setActive(false);
							}}
						/>
						<NavLink
							href="/ppe-donate"
							title="Donate PPE"
							onClick={() => {
								setActive(false);
							}}
							end={true}
						/>
					</div>
				</nav>
				<style jsx>{`
					.hamburger-inner,
					.hamburger-inner::after,
					.hamburger-inner::before {
						height: 3px;
					}
				`}</style>
			</header>
		</>
	);
};

export default Header;
