import React, { useState } from "react";
import { Link } from "react-router-dom";
import { SiWebmoney } from "react-icons/si";

const Nav = () => {
	const [toggleMenu, setToggleMenu] = useState(false);

	return (
		<header className="fixed w-full bg-gray-50 z-50 shadow-md">
			<nav
				className="max-w-screen-2xl flex flex-row flex-wrap justify-between my-3 ml-auto mr-auto "
				role="navigation"
			>
				{/* <!-- COMPANY LOGO (SVG) --> */}
				<div className="flex items-center ml-3">
					<Link to="/">
						<ul className="flex flex-row ml-auto items-center font-medium text-sm text-gray-600 lg:flex-row">
							<SiWebmoney color="#196619" size={27} />
							<li className="mx-2 p-1.5 hover:text-gray-700 mb-2 lg:mb-0">
								MONEY SAVER
							</li>
						</ul>
					</Link>
				</div>
				<div className="inline-block h-8 mr-3 lg:hidden">
					<button
						id="nav_toggle"
						className="h-full w-full"
						onClick={
							toggleMenu
								? () => setToggleMenu(false)
								: () => {
										return setToggleMenu(true);
								  }
						}
					>
						<svg
							className="h-full w-auto"
							xmlns="http://www.w3.org/2000/svg"
							width="192"
							height="192"
							fill="#3b82f6"
							viewBox="0 0 256 256"
						>
							<rect width="256" height="256" fill="none"></rect>
							<line
								x1="40"
								y1="128"
								x2="216"
								y2="128"
								stroke="#006400"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="16"
							></line>
							<line
								x1="40"
								y1="64"
								x2="216"
								y2="64"
								stroke="#006400"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="16"
							></line>
							<line
								x1="40"
								y1="192"
								x2="216"
								y2="192"
								stroke="#006400"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="16"
							></line>
						</svg>
					</button>
				</div>
				<div
					id="nav_content"
					className={`w-full ${
						!toggleMenu ? "hidden" : ""
					} py-8 mr-3 lg:flex lg:w-auto lg:py-0 lg:items-center`}
				>
					<ul className="flex flex-col ml-auto items-center font-medium text-sm text-gray-600 lg:flex-row">
						<li className="mx-6 w-mc hover:text-green-700 mb-4 lg:mb-0">
							{/* <a href="/accounting-services.html">ACCOUNTING SERVICES</a> */}
							<Link to="/accounting-services">ACCOUNTING SERVICES</Link>
						</li>

						<li className="mx-6 w-mc hover:text-green-700 mb-4 lg:mb-0">
							<Link to="/accounting-resources">RESOURCES</Link>
						</li>

						<li className="mx-6 w-mc hover:text-green-700 mb-4 lg:mb-0">
							<Link to="/blog">BLOG</Link>
						</li>

						<li className="mx-6 w-mc hover:text-green-700 mb-4 lg:mb-0">
							<Link to="/about">ABOUT</Link>
						</li>
						<li className="inline-block p-2 font-medium text-sm border rounded-full mt-2 lg:mt-0 text-green-700 border-green-700 ml-6 hover:bg-green-700 hover:text-blue-50">
							<Link to="/contact">GET IN TOUCH</Link>
						</li>
					</ul>
					{/* <Link
						to="/contact"
						className="inline-block p-2 font-medium text-sm border mt-2 lg:mt-0 text-blue-500 border-blue-500 ml-6 hover:bg-blue-500 hover:text-blue-50"
					>
						GET IN TOUCH
					</Link> */}
				</div>
			</nav>
		</header>
	);
};

export default Nav;
