import React from "react";
import resources from './images/resources.jpg'

const AccountingResources = () => {
	return (
		<>
			{/* <!-- Start of 'Resources' Landing --> */}
			<section class="flex px-8 lg:px-0 justify-center bg-gray-100">
				<div class="flex flex-col lg:flex-row items-center max-w-screen-xl lg:px-8">
					<div class="pt-32 pb-20 lg:pt-44 lg:pb-32">
						<h1 class="text-xs lg:text-base uppercase font-bold mb-2 lg:mb-4 text-gray-400">
							RESOURCES
						</h1>
						<h2 class="font-semibold text-3xl lg:text-5xl text-gray-700 mb-8">
							Helpful Links & Tools
						</h2>
						<p class="text-xl lg:text-2xl max-w-prose lg:pr-16 leading-relaxed text-gray-600">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
							sed pharetra magna tortor at ultrices nisi id orci.
						</p>
					</div>
					{/* <!-- Resources Overlapping Image --> */}
					<div class="lg:pt-28 -mb-12 lg:-mb-16 w-1/2">
						<img
							class="max-h-ful object-cover shadow-lg"
							src={resources}
							alt="Calculators on a woodern desk"
						/>
					</div>
				</div>
			</section>

			{/* <!-- Start of Resources--> */}
			<section class="pt-48 pb-40 lg:pt-40 lg:pb-60 flex justify-center -mt-8">
				<ul class="mx-8 w-full md:mx-auto md:w-2/3 lg:mx-auto lg:w-1/2">
					{/* <!-- 1st drop down subsection--> */}
					<div>
						<div class="mb-14 lg:mb-18">
							<div class="inline-block rounded-full p-3 bg-blue-100 mb-2">
								<svg
									class="text-blue- h-8 w-8"
									width="22"
									height="32"
									viewBox="0 0 22 32"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M17.7778 7.11111V0H14.2222V7.11111H7.11111V0H3.55556V7.11111C1.77778 7.11111 0 8.88889 0 10.6667V20.4444L6.22222 26.6667V32H15.1111V26.6667L21.3333 20.4444V10.6667C21.3333 8.88889 19.5556 7.11111 17.7778 7.11111ZM17.7778 18.9689L12.6044 24.16L11.8578 24.8889H9.47556L8.74667 24.16L3.55556 18.9689V10.8267C3.55556 10.7733 3.66222 10.6667 3.71556 10.6667H17.6356C17.6889 10.6667 17.7778 10.7733 17.7778 10.8267V18.9689Z"
										fill="#2368A2"
									/>
								</svg>
							</div>
							<h3 class="font-workSans text-lg uppercase font-semibold text-gray-500">
								Productivity
							</h3>
						</div>

						{/* <!-- Resource --> */}
						<li class="flex flex-col lg:flex-row w-full my-14">
							<h4 class="font-semibold text-lg flex-shrink-0 text-gray-700">
								Tool #1
							</h4>
							<p class="py-4 lg:py-0 lg:px-24 flex-grow text-gray-600">
								Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad
								accusamus eius facere dolores, corporis excepturi fugiat. Ad
								accusamus eius facere dolores.
							</p>
							<div>
								<a
									class="inline-block text-sm lg:text-xs py-1 px-2 uppercase border border-blue-500 text-blue-500 hover:bg-blue-400 hover:border-blue-400 hover:text-blue-50 focus:ring-2 focus:ring-blue-300"
									href="/"
								>
									Explore
								</a>
							</div>
						</li>

						{/* <!-- Resource --> */}
						<li class="flex flex-col lg:flex-row w-full my-14">
							<h4 class="font-semibold text-lg flex-shrink-0 text-gray-700">
								Tool #2
							</h4>
							<p class="py-4 lg:py-0 lg:px-24 flex-grow text-gray-600">
								Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem,
								ipsum dolor sit amet consectetur adipisicing elit. Planning and
								such.
							</p>
							<div>
								<a
									class="inline-block text-sm lg:text-xs py-1 px-2 uppercase border  border-blue-500 text-blue-500 hover:bg-blue-400 hover:border-blue-400 hover:text-blue-50 focus:ring-2 focus:ring-blue-300"
									href="/"
								>
									Explore
								</a>
							</div>
						</li>

						{/* <!-- Resource --> */}
						<li class="flex flex-col lg:flex-row w-full my-14">
							<h4 class="font-semibold text-lg flex-shrink-0 text-gray-700">
								Tool #3
							</h4>
							<p class="py-4 lg:py-0 lg:px-24 flex-grow text-gray-600">
								Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad
								accusamus eius facere dolores, corporis excepturi fugiat.
								Importance of taxes.
							</p>
							<div>
								<a
									class="inline-block text-sm lg:text-xs py-1 px-2 uppercase border  border-blue-500 text-blue-500 hover:bg-blue-400 hover:border-blue-400 hover:text-blue-50 focus:ring-2 focus:ring-blue-300"
									href="/"
								>
									Explore
								</a>
							</div>
						</li>
					</div>

					{/* <!-- 2nd drop down subsection--> */}
					<div class="mt-40">
						<div class="mb-14 lg:mb-18">
							<div class="inline-block rounded-full p-3 bg-blue-100 mb-2">
								<svg
									width="32"
									height="32"
									viewBox="0 0 32 32"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M25.6984 21.8267C25.3384 22.24 24.7117 22.8933 23.6984 22.8933C22.2851 22.8933 21.8184 21.8667 21.3917 20.7867L19.2584 15.5467L17.1251 20.7867C16.7784 21.6667 16.3784 22.8933 14.8184 22.8933C13.2584 22.8933 12.8717 21.6667 12.4984 20.7867L8.92505 11.96H11.9384L14.8184 19.2267L16.9651 13.9333C17.2984 13.0933 17.6984 11.8267 19.2584 11.8267C20.7784 11.8267 21.2051 13.0933 21.5517 13.9333L23.8851 19.6667C25.0717 17.8533 25.5784 15.6667 25.2851 13.52C24.9946 11.3702 23.9333 9.39914 22.2984 7.97333C20.6677 6.54314 18.5741 5.75212 16.4051 5.74667C14.1517 5.73333 11.9651 6.44 10.1117 7.74667C8.31094 9.07311 6.96863 10.9281 6.27172 13.0533C5.57838 15.1867 5.57838 17.4933 6.27172 19.6267C6.96505 21.76 8.32505 23.6133 10.1517 24.92C11.9784 26.24 14.1651 26.9333 16.4051 26.92C17.3784 26.92 18.3384 26.7867 19.2717 26.52V29.3333C18.3251 29.5467 17.3651 29.6667 16.4051 29.6667C13.5917 29.6667 10.8317 28.7867 8.53838 27.1333C6.24505 25.48 4.53838 23.1467 3.67172 20.4667C2.78068 17.7839 2.776 14.8857 3.65838 12.2C4.53838 9.52 6.24505 7.18667 8.53838 5.53333C10.8184 3.88 13.5784 3 16.4051 3C22.8584 3 28.1117 8.25333 28.1117 14.72C28.1117 17.28 27.2584 19.7867 25.6984 21.8267V21.8267Z"
										fill="#2368A2"
									/>
								</svg>
							</div>
							<h3 class="font-workSans text-lg uppercase font-semibold text-gray-500">
								Logistics
							</h3>
						</div>

						{/* <!-- Resource --> */}
						<li class="flex flex-col lg:flex-row w-full my-14">
							<h4 class="font-semibold text-lg flex-shrink-0 text-gray-700">
								Tool #1
							</h4>
							<p class="py-4 lg:py-0 lg:px-24 flex-grow text-gray-600">
								Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad
								accusamus eius facere dolores, corporis excepturi fugiat. Ad
								accusamus eius facere dolores.
							</p>
							<div>
								<a
									class="inline-block text-sm lg:text-xs py-1 px-2 uppercase border  border-blue-500 text-blue-500 hover:bg-blue-400 hover:border-blue-400 hover:text-blue-50 focus:ring-2 focus:ring-blue-300"
									href="/"
								>
									Explore
								</a>
							</div>
						</li>

						{/* <!-- Resource --> */}
						<li class="flex flex-col lg:flex-row w-full my-14">
							<h4 class="font-semibold text-lg flex-shrink-0 text-gray-700">
								Tool #2
							</h4>
							<p class="py-4 lg:py-0 lg:px-24 flex-grow text-gray-600">
								Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem,
								ipsum dolor sit amet consectetur adipisicing elit. Planning and
								such.
							</p>
							<div>
								<a
									class="inline-block text-sm lg:text-xs py-1 px-2 uppercase border  border-blue-500 text-blue-500 hover:bg-blue-400 hover:border-blue-400 hover:text-blue-50 focus:ring-2 focus:ring-blue-300"
									href="/"
								>
									Explore
								</a>
							</div>
						</li>
					</div>

					{/* <!-- 3rd drop down subsection--> */}
					<div class="mt-40">
						<div class="mb-14 lg:mb-18">
							<div class="inline-block rounded-full p-3 bg-blue-100 mb-2">
								<svg
									width="32"
									height="32"
									viewBox="0 0 32 32"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M15 12.3333H17.6667V9.66667H15V12.3333ZM16.3333 27C10.4533 27 5.66667 22.2133 5.66667 16.3333C5.66667 10.4533 10.4533 5.66667 16.3333 5.66667C22.2133 5.66667 27 10.4533 27 16.3333C27 22.2133 22.2133 27 16.3333 27ZM16.3333 3C14.5824 3 12.8486 3.34488 11.2309 4.01494C9.61321 4.685 8.14336 5.66713 6.90524 6.90524C4.40476 9.40573 3 12.7971 3 16.3333C3 19.8696 4.40476 23.2609 6.90524 25.7614C8.14336 26.9995 9.61321 27.9817 11.2309 28.6517C12.8486 29.3218 14.5824 29.6667 16.3333 29.6667C19.8696 29.6667 23.2609 28.2619 25.7614 25.7614C28.2619 23.2609 29.6667 19.8696 29.6667 16.3333C29.6667 14.5824 29.3218 12.8486 28.6517 11.2309C27.9817 9.61321 26.9995 8.14336 25.7614 6.90524C24.5233 5.66713 23.0535 4.685 21.4358 4.01494C19.8181 3.34488 18.0843 3 16.3333 3V3ZM15 23H17.6667V15H15V23Z"
										fill="#2368A2"
									/>
								</svg>
							</div>
							<h3 class="font-workSans text-lg uppercase font-semibold text-gray-500">
								Information
							</h3>
						</div>

						{/* <!-- Resource --> */}
						<li class="flex flex-col lg:flex-row w-full my-14">
							<h4 class="font-semibold text-lg flex-shrink-0 text-gray-700">
								Tool #1
							</h4>
							<p class="py-4 lg:py-0 lg:px-24 flex-grow text-gray-600">
								Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad
								accusamus eius facere dolores, corporis excepturi fugiat. Ad
								accusamus eius facere dolores.
							</p>
							<div>
								<a
									class="inline-block text-sm lg:text-xs py-1 px-2 uppercase border  border-blue-500 text-blue-500 hover:bg-blue-400 hover:border-blue-400 hover:text-blue-50 focus:ring-2 focus:ring-blue-300"
									href="/"
								>
									Explore
								</a>
							</div>
						</li>

						{/* <!-- Resource --> */}
						<li class="flex flex-col lg:flex-row w-full my-14">
							<h4 class="font-semibold text-lg flex-shrink-0 text-gray-700">
								Tool #2
							</h4>
							<p class="py-4 lg:py-0 lg:px-24 flex-grow text-gray-600">
								Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem,
								ipsum dolor sit amet consectetur adipisicing elit. Planning and
								such.
							</p>
							<div>
								<a
									class="inline-block text-sm lg:text-xs py-1 px-2 uppercase border  border-blue-500 text-blue-500 hover:bg-blue-400 hover:border-blue-400 hover:text-blue-50 focus:ring-2 focus:ring-blue-300"
									href="/"
								>
									Explore
								</a>
							</div>
						</li>
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

export default AccountingResources;
