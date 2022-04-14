import React from "react";
import { Link } from "react-router-dom";
import AnimatedPage from "./AnimatedPage";
import blog_post_1 from "../src/images/blog_post_1.jpg";
import blog_post_2 from "../src/images/blog_post_2.jpg";
import blog_post_3 from "../src/images/blog_post_3.jpg";
import smiling_man from "../src/images/Testimonials/smiling_man.jpg";
import smiling_man_2 from "../src/images/Testimonials/smiling_man_2.jpg";
import smiling_woman from "../src/images/Testimonials/smiling_woman.jpg";

const Blog = () => {
	return (
		<AnimatedPage>
			<div>
				{/* <!-- Start of Blog--> */}
				<section className="pt-24 pb-40 lg:pt-40 lg:pb-60 flex justify-center">
					<ul className="mx-8 w-full md:mx-auto md:w-11/12 lg:mx-auto lg:w-1/2">
						{/* <!-- 1st Blog Post (Main)--> */}
						<Link to="/blog">
							<div className="md:grid md:grid-cols-5 mb-16 md:mb-12">
								<div className="min-h-0 col-start-1 col-end-4">
									<img
										className="h-full w-full object-cover rounded-md"
										src={blog_post_1}
										alt="An open notebook with a coffee cup on a desk."
									/>
								</div>
								<div className="flex min-h-0 flex-col col-start-4 col-end-6 md:ml-6">
									<div className="mt-2 md:mt-0">
										<span className="uppercase font-semibold text-gray-700 text-xs">
											Advice
										</span>
										<span className="text-gray-400 mx-2 font-medium text-sm">
											Feb 4, 2021
										</span>
									</div>
									<h2 className="font-workSans text-2xl font-semibold my-2 text-gray-700">
										Why You Need an Accountant and How to Pick One
									</h2>
									<p className="text-sm mb-6 flex-grow text-gray-600">
										Lorem ipsum dolor sit amet consectetur adipisicing elit.
										Possimus eligendi libero sit nihil tempora, totam
										reprehenderit aliquam beatae obcaecati ratione. Libero
										consequatur cumque magnam ipsam quae sequi laudantium
										pariatur veritatis? Totam reprehenderit aliquam beatae
										obcaecati. Lorem ipsum dolor sit amet consectetur
										adipisicing elit. Libero consequatur cumque magnam ipsam
										quae sequi laudantium pariatur veritatis?
									</p>
									<div className="flex items-center">
										<div className="h-12 w-12 rounded-full overflow-hidden flex-shrink-0">
											<img
												className="w-full h-full object-cover object-bottom"
												src={smiling_man}
												alt="A smiling female George Orwell."
											/>
										</div>
										<div className="ml-2 text-xs">
											<span className="block font-semibold text-gray-700">
												George Orwell
											</span>
											<span className="block font-medium text-gray-500">
												Lead Happiness Architect
											</span>
										</div>
									</div>
								</div>
							</div>
						</Link>

						<div className="md:flex">
							{/* <!-- 2nd Blog Post--> */}
							<div className="flex flex-col md:w-1/2 md:mr-4 mb-16 md:mb-0">
								<Link to="/blog">
									<div>
										<img
											className="h-full w-full object-cover rounded-md"
											src={blog_post_2}
											alt="An open notebook with a coffee cup on a desk and a tablet"
										/>
									</div>
									<div className="flex flex-col ">
										<div className="mt-2">
											<span className="uppercase font-semibold text-gray-700 text-xs">
												Productivity
											</span>
											<span className="text-gray-400 mx-2 font-medium text-sm">
												Jan 23, 2021
											</span>
										</div>
										<h2 className="font-workSans text-2xl font-semibold my-2 text-gray-700">
											How to Improve Your Tax Workflow
										</h2>
										<p className="text-sm mb-6 flex-grow text-gray-600">
											Lorem ipsum dolor sit amet consectetur adipisicing elit.
											Possimus eligendi libero sit nihil tempora, totam
											reprehenderit aliquam beatae obcaecati ratione. Libero
											consequatur cumque magnam ipsam quae sequi laudantium
											pariatur veritatis?{" "}
										</p>
										<div className="flex items-center">
											<div className="h-12 w-12 rounded-full overflow-hidden flex-shrink-0">
												<img
													className="w-full h-full object-cover object-bottom"
													src={smiling_man_2}
													alt="A smiling Satoshi Nakamoto."
												/>
											</div>
											<div className="ml-2 text-xs">
												<span className="block font-semibold text-gray-700">
													Satoshi Nakamoto
												</span>
												<span className="block font-medium text-gray-500">
													Chief Technical Writer
												</span>
											</div>
										</div>
									</div>
								</Link>
							</div>

							{/* <!-- 3rd Blog Post--> */}
							<div className="flex flex-col md:w-1/2 md:ml-4">
								<Link to="/blog">
									<div>
										<img
											className="h-full w-full object-cover rounded-md"
											src={blog_post_3}
											alt="Typing at desk"
										/>
									</div>
									<div className="flex flex-col">
										<div className="mt-2">
											<span className="uppercase font-semibold text-gray-700 text-xs">
												Advice
											</span>
											<span className="text-gray-400 mx-2 font-medium text-sm">
												Feb 4, 2021
											</span>
										</div>
										<h2 className="font-workSans text-2xl font-semibold my-2 text-gray-700">
											Doing Right by The Law: Tax Returns
										</h2>
										<p className="text-sm mb-6 flex-grow text-gray-600">
											Lorem ipsum dolor sit amet consectetur adipisicing elit.
											Possimus eligendi libero sit nihil tempora, totam
											reprehenderit aliquam beatae obcaecati ratione. Libero
											consequatur cumque magnam ipsam quae sequi laudantium
											pariatur veritatis?
										</p>
										<div className="flex items-center">
											<div className="h-12 w-12 rounded-full overflow-hidden flex-shrink-0">
												<img
													className="w-full h-full object-cover object-bottom"
													src={smiling_woman}
													alt="A smiling female Jackie Johnson."
												/>
											</div>
											<div className="ml-2 text-xs">
												<span className="block font-semibold text-gray-700">
													Jackie Johnson
												</span>
												<span className="block font-medium text-gray-500">
													Lead Editor
												</span>
											</div>
										</div>
									</div>
								</Link>
							</div>
						</div>
					</ul>
				</section>

				{/* <!-- Start of 'Ready To Get Started' Section --> */}
				<section className="get_started__header flex flex-col items-center pt-14 pb-16 lg:pt-18 lg:pb-20 bg-white">
					<h2 className="text-center font-bold px-4 lg:px-0 text-3xl lg:text-4xl uppercase text-gray-700">
						Ready to Get Started?
					</h2>
					<Link
						to="/contact"
						className="link_underline border rounded-full py-2 my-5 px-3 uppercase inline-block text-2xl mt-16 border-green-700 text-green-600 hover:bg-green-700 hover:border-green-700 hover:text-blue-50 focus:ring-2 focus:ring-green-300"
					>
						Request a free consultation
					</Link>
				</section>
			</div>
		</AnimatedPage>
	);
};

export default Blog;
