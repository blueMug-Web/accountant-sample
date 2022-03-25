import React from "react";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Outlet,
	useLocation,
} from "react-router-dom";
import "./Tailwind.css";
import Nav from "./Nav";
import Home from "./Home";
import Footer from "./Footer";
import AccountingServices from "./AccountingServices";
import AccountingResources from "./AccountingResources";
import Blog from "./Blog";
import About from "./About";
import Contact from "./Contact";
import { AnimatePresence } from "framer-motion";

const RouteSwitch = () => {
	const location = useLocation();
	return (
			<AnimatePresence exitBeforeEnter>
				<Routes key={location.pathname} location={location}>
					<Route path="/" element={<Layout />}>
						<Route index element={<Home />} />
						<Route path="accounting-services" element={<AccountingServices />} />
						<Route path="accounting-resources" element={<AccountingResources />} />
						<Route path="blog" element={<Blog />} />
						<Route path="about" element={<About />} />
						<Route path="contact" element={<Contact />} />
					</Route>
				</Routes>
			</AnimatePresence>
		
        
	);
};
const Layout = () => {
	return (
		<>
            <Nav />
			<Outlet />
            <Footer />
		</>
	);
};

export default RouteSwitch;

/* <Route path="/accounting-services" element={<AccountingServices />} />
				<Route path="/resources" element={<Resources />} />
				<Route path="/blog" element={<Blog />} />
				<Route path="/about" element={<About />} />
				<Route path="/contact" element={<Contact />} /> */
				/* <Route
					path="*"
					element={
						<main style={{ padding: "1rem" }}>
							<p>There's nothing here!</p>
						</main>
					}
				/> */
