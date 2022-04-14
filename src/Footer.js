import React from "react";
import { SiWebmoney } from "react-icons/si";
import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<footer className="py-16 border-t border-blue-50 bg-white">
			<div className="flex flex-col lg:flex-row items-center justify-between mx-auto max-w-screen-2xl">
				<div className="flex items-center">
					<Link to="/">
						<ul className="flex flex-row ml-auto items-center font-medium text-sm text-gray-600 lg:flex-row">
							<SiWebmoney
								color="#196619"
								size={27}
								className="mx-2  hover:text-gray-700 mb-2 lg:mb-0"
							/>
							<li className=" p-1.5 hover:text-gray-700 mb-2 lg:mb-0">
								MONEY SAVER
							</li>
						</ul>
					</Link>
				</div>
				<ul className="flex flex-col lg:flex-row items-center text-sm font-medium text-gray-500 py-12 lg:py-0">
					<li className="mx-6 w-mc hover:text-green-700 mb-4 lg:mb-0">
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

					<li className="mx-6 w-mc hover:text-green-700 mb-4 lg:mb-0">
						<Link to="/contact">CONTACT</Link>
					</li>
				</ul>
				<div className="flex text-green-700">
					{/* <!-- Twitter Logo --> */}
					<Link className="hover:text-green-200" to="/">
						<svg
							className="mx-4 fill-current"
							width="21"
							height="17"
							viewBox="0 0 21 17"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<title>Twitter</title>
							<path d="M20.92 2C20.15 2.35 19.32 2.58 18.46 2.69C19.34 2.16 20.02 1.32 20.34 0.31C19.51 0.81 18.59 1.16 17.62 1.36C16.83 0.5 15.72 0 14.46 0C12.11 0 10.19 1.92 10.19 4.29C10.19 4.63 10.23 4.96 10.3 5.27C6.74 5.09 3.57 3.38 1.46 0.79C1.09 1.42 0.88 2.16 0.88 2.94C0.88 4.43 1.63 5.75 2.79 6.5C2.08 6.5 1.42 6.3 0.84 6V6.03C0.84 8.11 2.32 9.85 4.28 10.24C3.65073 10.4122 2.9901 10.4362 2.35 10.31C2.62161 11.1625 3.15354 11.9084 3.87102 12.4429C4.5885 12.9775 5.45545 13.2737 6.35 13.29C4.83363 14.4904 2.954 15.1393 1.02 15.13C0.68 15.13 0.34 15.11 0 15.07C1.9 16.29 4.16 17 6.58 17C14.46 17 18.79 10.46 18.79 4.79C18.79 4.6 18.79 4.42 18.78 4.23C19.62 3.63 20.34 2.87 20.92 2Z" />
						</svg>
					</Link>
					{/* <!-- Facebook Logo --> */}
					<Link className="hover:text-green-200" to="/">
						<svg
							className="mx-4 fill-current"
							width="20"
							height="20"
							viewBox="0 0 20 20"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<title>Facebook</title>
							<path d="M10 0C4.5 0 0 4.49 0 10.02C0 15.02 3.66 19.17 8.44 19.92V12.92H5.9V10.02H8.44V7.81C8.44 5.3 9.93 3.92 12.22 3.92C13.31 3.92 14.45 4.11 14.45 4.11V6.58H13.19C11.95 6.58 11.56 7.35 11.56 8.14V10.02H14.34L13.89 12.92H11.56V19.92C13.9164 19.5478 16.0622 18.3455 17.6099 16.5301C19.1576 14.7146 20.0054 12.4056 20 10.02C20 4.49 15.5 0 10 0Z" />
						</svg>
					</Link>
					{/* <!-- Instagram Logo --> */}
					<Link className="hover:text-green-200" to="/">
						<svg
							className="mx-4 fill-current"
							width="20"
							height="20"
							viewBox="0 0 20 20"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<title>Instagram</title>
							<path d="M5.8 0H14.2C17.4 0 20 2.6 20 5.8V14.2C20 15.7383 19.3889 17.2135 18.3012 18.3012C17.2135 19.3889 15.7383 20 14.2 20H5.8C2.6 20 0 17.4 0 14.2V5.8C0 4.26174 0.61107 2.78649 1.69878 1.69878C2.78649 0.61107 4.26174 0 5.8 0ZM5.6 2C4.64522 2 3.72955 2.37928 3.05442 3.05442C2.37928 3.72955 2 4.64522 2 5.6V14.4C2 16.39 3.61 18 5.6 18H14.4C15.3548 18 16.2705 17.6207 16.9456 16.9456C17.6207 16.2705 18 15.3548 18 14.4V5.6C18 3.61 16.39 2 14.4 2H5.6ZM15.25 3.5C15.5815 3.5 15.8995 3.6317 16.1339 3.86612C16.3683 4.10054 16.5 4.41848 16.5 4.75C16.5 5.08152 16.3683 5.39946 16.1339 5.63388C15.8995 5.8683 15.5815 6 15.25 6C14.9185 6 14.6005 5.8683 14.3661 5.63388C14.1317 5.39946 14 5.08152 14 4.75C14 4.41848 14.1317 4.10054 14.3661 3.86612C14.6005 3.6317 14.9185 3.5 15.25 3.5ZM10 5C11.3261 5 12.5979 5.52678 13.5355 6.46447C14.4732 7.40215 15 8.67392 15 10C15 11.3261 14.4732 12.5979 13.5355 13.5355C12.5979 14.4732 11.3261 15 10 15C8.67392 15 7.40215 14.4732 6.46447 13.5355C5.52678 12.5979 5 11.3261 5 10C5 8.67392 5.52678 7.40215 6.46447 6.46447C7.40215 5.52678 8.67392 5 10 5ZM10 7C9.20435 7 8.44129 7.31607 7.87868 7.87868C7.31607 8.44129 7 9.20435 7 10C7 10.7956 7.31607 11.5587 7.87868 12.1213C8.44129 12.6839 9.20435 13 10 13C10.7956 13 11.5587 12.6839 12.1213 12.1213C12.6839 11.5587 13 10.7956 13 10C13 9.20435 12.6839 8.44129 12.1213 7.87868C11.5587 7.31607 10.7956 7 10 7Z" />
						</svg>
					</Link>
				</div>
			</div>

			{/* <!-- Fine Print--> */}
			<div className="flex flex-col items-center mt-24 text-xs text-gray-400">
				<div className="mb-4">
					<Link className="mx-4 hover:text-gray-600" to="/" rel="nofollow">
						Privacy Policy
					</Link>
					<Link className="mx-4 hover:text-gray-600" to="/" rel="nofollow">
						Terms &amp; Conditions
					</Link>
				</div>
				<span>&copy; MoneySaver 2022</span>
			</div>
		</footer>
	);
};

export default Footer;
