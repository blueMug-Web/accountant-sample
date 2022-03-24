import React from "react";

const About = () => {
	return (
		<>
			{/* <!-- Start of 'About Us' Landing --> */}
			<section class="pt-32 px-12 pl-6 pb-24 lg:pt-44 lg:pb-32 lg:pl-32">
				<h1 class="text-xs lg:text-base uppercase font-bold mb-3 lg:mb-6 text-gray-400">
					About Us
				</h1>
				<p class="font-semibold lg:w-1/2 text-3xl lg:text-5xl max-w-prose text-gray-700">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet nisi
					risus ac, elit malesuada massa. Tristique porttitor sed odio enim sit
					molestie.
				</p>
			</section>

			{/* <!-- About Us background image --> */}
			<div class="about_us-image h-80 lg:h-screen"></div>

			{/* <!-- Start of 'About Us' longer description/story --> */}
			<section class="flex flex-col items-center pt-16 lg:pt-20 pb-40">
				<h2 class="thick_underline tracking-wider font-bold text-3xl lg:text-4xl uppercase text-gray-700">
					A Closer Look
				</h2>
				<p class="max-w-prose pt-20 pb-0 px-8 lg:py-24 lg:px-0 text-gray-700">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius
					integer odio vulputate ac pharetra eget nascetur. Ac turpis enim
					condimentum tortor sagittis.
					<br />
					<br />
					Vulputate tincidunt mollis cursus gravida amet ullamcorper sit. Tellus
					purus semper mus vestibulum cras. Odio augue pellentesque pharetra
					euismod volutpat vitae rhoncus, dolor. Massa, lacus, felis ` ligula
					neque odio vestibulum.
					<br />
					<br />
					Egestas elementum non augue ipsum auctor sem. Phasellus massa aliquam,
					eget enim. Suspendisse ` habitasse amet at orci nulla interdum gravida
					pellentesque fringilla. Ullamcorper fusce nulla integer pharetra sit
					sed elit.
					<br />
					<br />
					Tellus lacinia diam odio aliquam maecenas. Scelerisque phasellus eu,
					porttitor facilisis. Nec est a ` tincidunt faucibus molestie ultrices.
					Amet, nullam ultrices aliquet consectetur dignissim purus egestas
					ornare neque.
					<br />
					<br />
					Erat mauris, ac proin sed in. Consectetur aliquet vestibulum quam
					malesuada. Pretium rhoncus cursus ` sapien urna. Ac non at sit enim
					eu, tellus diam arcu faucibus. In a et magna quis felis. Nec, sit
					ipsum consectetur tempus morbi interdum non at.
					<br />
					<br />
					<span class="text-sm font-semibold text-gray-600">
						- Dennis Bergkamp, Director
					</span>
				</p>
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

export default About;
