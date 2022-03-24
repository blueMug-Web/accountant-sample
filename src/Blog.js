import React from "react";

const Blog = () => {
	return (
		<>
			{/* <!-- Start of Blog--> */}
			<section class="pt-24 pb-40 lg:pt-40 lg:pb-60 flex justify-center">
				<ul class="mx-8 w-full md:mx-auto md:w-11/12 lg:mx-auto lg:w-1/2">
					{/* <!-- 1st Blog Post (Main)--> */}
					<a href="/why-you-need-an-accountant.html">
						<div class="md:grid md:grid-cols-5 mb-16 md:mb-12">
							<div class="min-h-0 col-start-1 col-end-4">
								<img
									class="h-full w-full object-cover rounded-md"
									src="./images/blog-post-1.jpg"
									alt="An open notebook with a coffee cup on a desk."
								/>
							</div>
							<div class="flex min-h-0 flex-col col-start-4 col-end-6 md:ml-6">
								<div class="mt-2 md:mt-0">
									<span class="uppercase font-semibold text-gray-700 text-xs">
										Advice
									</span>
									<span class="text-gray-400 mx-2 font-medium text-sm">
										Feb 4, 2021
									</span>
								</div>
								<h2 class="font-workSans text-2xl font-semibold my-2 text-gray-700">
									Why You Need an Accountant and How to Pick One
								</h2>
								<p class="text-sm mb-6 flex-grow text-gray-600">
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Possimus eligendi libero sit nihil tempora, totam
									reprehenderit aliquam beatae obcaecati ratione. Libero
									consequatur cumque magnam ipsam quae sequi laudantium pariatur
									veritatis? Totam reprehenderit aliquam beatae obcaecati. Lorem
									ipsum dolor sit amet consectetur adipisicing elit. Libero
									consequatur cumque magnam ipsam quae sequi laudantium pariatur
									veritatis?
								</p>
								<div class="flex items-center">
									<div class="h-12 w-12 rounded-full overflow-hidden flex-shrink-0">
										<img
											class="w-full h-full object-cover object-bottom"
											src="./images/writer.png"
											alt="A smiling female George Orwell."
										/>
									</div>
									<div class="ml-2 text-xs">
										<span class="block font-semibold text-gray-700">
											George Orwell
										</span>
										<span class="block font-medium text-gray-500">
											Lead Happiness Architect
										</span>
									</div>
								</div>
							</div>
						</div>
					</a>

					<div class="md:flex">
						{/* <!-- 2nd Blog Post--> */}
						<div class="flex flex-col md:w-1/2 md:mr-4 mb-16 md:mb-0">
							<a href="/blog">
								<div>
									<img
										class="h-full w-full object-cover rounded-md"
										src="./images/blog-post-2.jpg"
										alt="An open notebook with a coffee cup on a desk."
									/>
								</div>
								<div class="flex flex-col ">
									<div class="mt-2">
										<span class="uppercase font-semibold text-gray-700 text-xs">
											Productivity
										</span>
										<span class="text-gray-400 mx-2 font-medium text-sm">
											Jan 23, 2021
										</span>
									</div>
									<h2 class="font-workSans text-2xl font-semibold my-2 text-gray-700">
										How to Improve Your Tax Workflow
									</h2>
									<p class="text-sm mb-6 flex-grow text-gray-600">
										Lorem ipsum dolor sit amet consectetur adipisicing elit.
										Possimus eligendi libero sit nihil tempora, totam
										reprehenderit aliquam beatae obcaecati ratione. Libero
										consequatur cumque magnam ipsam quae sequi laudantium
										pariatur veritatis?{" "}
									</p>
									<div class="flex items-center">
										<div class="h-12 w-12 rounded-full overflow-hidden flex-shrink-0">
											<img
												class="w-full h-full object-cover object-bottom"
												src="./images/writer-3.png"
												alt="A smiling Satoshi Nakamoto."
											/>
										</div>
										<div class="ml-2 text-xs">
											<span class="block font-semibold text-gray-700">
												Satoshi Nakamoto
											</span>
											<span class="block font-medium text-gray-500">
												Chief Technical Writer
											</span>
										</div>
									</div>
								</div>
							</a>
						</div>

						{/* <!-- 3rd Blog Post--> */}
						<div class="flex flex-col md:w-1/2 md:ml-4">
							<a href="/blog">
								<div>
									<img
										class="h-full w-full object-cover rounded-md"
										src="./images/blog-post-3.jpg"
										alt="An open notebook with a coffee cup on a desk."
									/>
								</div>
								<div class="flex flex-col">
									<div class="mt-2">
										<span class="uppercase font-semibold text-gray-700 text-xs">
											Advice
										</span>
										<span class="text-gray-400 mx-2 font-medium text-sm">
											Feb 4, 2021
										</span>
									</div>
									<h2 class="font-workSans text-2xl font-semibold my-2 text-gray-700">
										Doing Right by The Law: Tax Returns
									</h2>
									<p class="text-sm mb-6 flex-grow text-gray-600">
										Lorem ipsum dolor sit amet consectetur adipisicing elit.
										Possimus eligendi libero sit nihil tempora, totam
										reprehenderit aliquam beatae obcaecati ratione. Libero
										consequatur cumque magnam ipsam quae sequi laudantium
										pariatur veritatis?
									</p>
									<div class="flex items-center">
										<div class="h-12 w-12 rounded-full overflow-hidden flex-shrink-0">
											<img
												class="w-full h-full object-cover object-bottom"
												src="./images/writer-2.png"
												alt="A smiling female Jack Johnson."
											/>
										</div>
										<div class="ml-2 text-xs">
											<span class="block font-semibold text-gray-700">
												Jack Johnson
											</span>
											<span class="block font-medium text-gray-500">
												Lead Editor
											</span>
										</div>
									</div>
								</div>
							</a>
						</div>
					</div>
				</ul>
			</section>

			{/* <!-- Start of 'Ready To Get Started' Section --> */}
			<section class="get_started__header flex flex-col items-center pt-14 pb-16 lg:pt-18 lg:pb-20 bg-white">
				<h2 class="text-center font-bold px-4 lg:px-0 text-3xl lg:text-4xl uppercase text-gray-700">
					Ready to Get Started?
				</h2>
				<a
					class="link_underline inline-block text-2xl mt-16 text-gray-600"
					href="/"
				>
					Request a free consultation.
				</a>
			</section>
		</>
	);
};

export default Blog;
