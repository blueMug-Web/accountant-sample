import React from "react";
import { Link } from "react-router-dom";
import services from "./images/services.jpg";
import trophy from "./images/trophy.png";
import smiling_man from "../src/images/Testimonials/smiling_man.jpg";
import smiling_man_2 from "../src/images/Testimonials/smiling_man_2.jpg";
import smiling_woman from "../src/images/Testimonials/smiling_woman.jpg";
import AnimatedPage from "./AnimatedPage";

const AccountingServices = () => {
	return (
		<AnimatedPage>
			{/* {Start of 'Services' Landing */}
			<div>
				<section className="flex px-8 lg:px-0 justify-center bg-gray-100">
					<div className="flex flex-col lg:flex-row items-center max-w-screen-xl lg:px-8">
						<div className="pt-24 pb-12 lg:pt-44 lg:pb-32 lg:pr-16 ">
							<h1 className="text-xs lg:text-base uppercase font-bold mb-2 lg:mb-4 text-gray-400">
								SERVICES
							</h1>
							<h2 className="font-semibold text-3xl lg:text-5xl text-gray-700 mb-8">
								How We Can Help You
							</h2>
							<p className="text-xl lg:text-2xl max-w-prose leading-relaxed text-gray-600">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit.
								Maecenas sed pharetra magna tortor at ultrices nisi id orci.
							</p>
						</div>
						{/* <!-- Services Overlapping Image --> */}
						<div className="lg:pt-28 -mb-12 lg:-mb-16 w-full lg:w-1/2">
							<img
								className="max-h-full object-cover shadow-lg "
								src={services}
								alt="An ecstatic man."
							/>
						</div>
					</div>
				</section>
				{/* <!-- Start of Services--> */}
				<section className="pt-20 lg:py-72 -mt-8 mx-6 md:mx-32 lg:mx-auto max-w-screen-xl">
					{/* <!-- Service 1 --> */}
					<div id="service1" className="mt-16 md:mt-20 lg:mb-72">
						<div className="font-plexSerif font-bold flex flex-col lg:flex-row lg:mb-36">
							<span className="text-5xl lg:text-7xl lg:mr-22 mb-4 lg:mb-0 text-gray-300">
								#1
							</span>
							<span className="text-2xl  lg:text-5xl lg:mr-40 text-gray-700">
								Accounting services that'll set you apart from your competitors.
							</span>
						</div>
						<div className="flex flex-col lg:flex-row">
							<div className="hidden w-full lg:block lg:mr-20 shadow-lg">
								<img
									className="w-full h-full object-cover"
									src={trophy}
									alt="A small golden trophy"
								/>
							</div>
							<div className="w-full mt-8 lg:mt-0">
								<p className="text-lg lg:text-2xl font-medium mb-8 text-gray-600">
									Lorem ipsum dolor sit amet. Consectetur adipiscing elit
									maecenas sed pharetra magna tortor.
								</p>
								<p className="text-gray-500 leading-loose">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit.
									Facilisis gravida sagittis purus eget vitae faucibus sed
									tortor blandit. Tristique sit viverra posuere vestibulum
									bibendum donec. Placerat amet tellus mauris quis aliquet fames
									aliquam. Sagittis, morbi suspendisse vitae mollis bibendum.
									Dolor, vitae, amet purus feugiat malesuada molestie. Nibh
									malesuada viverra turpis id. Euismod molestie fermentum
									volutpat bibendum arcu cursus non. Augue leo sollicitudin ut
									pretium quis et cursus nunc. Tristique sit viverra posuere
									vestibulum bibendum donec. Placerat amet tellus mauris quis
									aliquet fames aliquam.
								</p>
								<div className="flex justify-center mt-5 md:mt-10 lg:hidden">
									<div className="inline-block rounded-full p-3 bg-blue-100">
										<svg
											className="h-8 w-8 lg:h-5 lg:w-5"
											width="32"
											height="32"
											viewBox="0 0 32 32"
											fill="none"
											xmlns="http://www.w3.org/  2000/svg"
										>
											<path
												d="M16.96 14.4C16.32 14.24 15.68 13.9199 15.2 13.4399C14.72 13.28 14.56 12.8 14.56 12.48C14.56 12.16 14.72 11.68 15.04 11.5199C15.52 11.2 16 10.88 16.48 11.04C17.44 11.04 18.24 11.52 18.72 12.16L20.16 10.24C19.68 9.75995 19.2 9.43995 18.72 9.11995C18.24 8.79995 17.6 8.63995 16.96 8.63995V6.39995H15.04V8.63995C14.24 8.79995 13.44 9.27995 12.8 9.91995C12.16 10.72 11.68 11.68 11.84 12.64C11.84 13.6 12.16 14.56 12.8 15.2C13.6 16 14.72 16.48 15.68 16.96C16.16 17.12 16.8 17.44 17.28 17.76C17.6 18.08 17.76 18.5599 17.76 19.0399C17.76 19.5199 17.6 20 17.28 20.4799C16.8 20.9599 16.16 21.1199 15.68 21.1199C15.04 21.1199 14.24 20.9599 13.76 20.4799C13.28 20.16 12.8 19.68 12.48 19.2L10.88 20.96C11.36 21.6 11.84 22.08 12.48 22.5599C13.28 23.04 14.24 23.5199 15.2 23.5199V25.5999H16.96V23.1999C17.92 23.0399 18.72 22.5599 19.36 21.92C20.16 21.1199 20.64 19.84 20.64 18.7199C20.64 17.7599 20.32 16.64 19.52 16C18.72 15.2 17.92 14.72 16.96 14.4ZM16 3.19995C8.96 3.19995 3.2 8.95995 3.2 16C3.2 23.0399 8.96 28.7999 16 28.7999C23.04 28.7999 28.8 23.0399 28.8 16C28.8 8.95995 23.04 3.19995 16 3.19995ZM16 27.0399C9.92 27.0399 4.96 22.08 4.96 16C4.96 9.91995 9.92 4.95995 16 4.95995C22.08 4.95995 27.04 9.91995 27.04 16C27.04 22.08 22.08 27.0399 16 27.0399Z"
												fill="#2368A2"
											/>
										</svg>
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* <!-- Service 2 --> */}
					<div id="service2" className="mt-16 md:mt-20 lg:mb-72">
						<div className="font-plexSerif font-bold flex flex-col lg:flex-row-reverse lg:mb-36">
							<span className="text-5xl lg:text-7xl mb-4 lg:mb-0 text-gray-300">
								#2
							</span>
							<span className="text-2xl  lg:text-5xl lg:mr-22 text-gray-700">
								Another brilliant service that you will benefit a great deal
								from.
							</span>
						</div>
						<div className="flex flex-col lg:flex-row-reverse">
							<div className="hidden w-full lg:block lg:ml-20">
								<img
									className="w-full h-full object-cover"
									src={trophy}
									alt="A small golden trophy"
								/>
							</div>
							<div className="w-full mt-8 lg:mt-0">
								<p className="text-lg lg:text-2xl font-medium mb-8 text-gray-600">
									Lorem ipsum dolor sit amet. Consectetur adipiscing elit
									maecenas sed pharetra magna tortor.
								</p>
								<p className="text-gray-500 leading-loose">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit.
									Facilisis gravida sagittis purus eget vitae faucibus sed
									tortor blandit. Tristique sit viverra posuere vestibulum
									bibendum donec. Placerat amet tellus mauris quis aliquet fames
									aliquam. Sagittis, morbi suspendisse vitae mollis bibendum.
									Dolor, vitae, amet purus feugiat malesuada molestie. Nibh
									malesuada viverra turpis id. Euismod molestie fermentum
									volutpat bibendum arcu cursus non. Augue leo sollicitudin ut
									pretium quis et cursus nunc. Tristique sit viverra posuere
									vestibulum bibendum donec. Placerat amet tellus mauris quis
									aliquet fames aliquam.
								</p>
								<div className="flex justify-center mt-5 md:mt-10 lg:hidden">
									<div className="inline-block rounded-full p-3 bg-blue-100">
										<svg
											className="h-8 w-8 lg:h-5 lg:w-5"
											width="32"
											height="32"
											viewBox="0 0 32 32"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M7.99999 2.66663C7.29275 2.66663 6.61447 2.94758 6.11438 3.44767C5.61428 3.94777 5.33333 4.62605 5.33333 5.33329V26.6666C5.33333 27.3739 5.61428 28.0521 6.11438 28.5522C6.61447 29.0523 7.29275 29.3333 7.99999 29.3333H24C24.7072 29.3333 25.3855 29.0523 25.8856 28.5522C26.3857 28.0521 26.6667 27.3739 26.6667 26.6666V10.6666L18.6667 2.66663H7.99999ZM7.99999 5.33329H17.3333V12H24V26.6666H7.99999V5.33329ZM10.6667 16V18.6666H21.3333V16H10.6667ZM10.6667 21.3333V24H17.3333V21.3333H10.6667Z"
												fill="#2368A2"
											/>
										</svg>
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* <!-- Service 3 --> */}
					<div id="service3" className="mt-16 md:mt-20 lg:mb-72">
						<div className="font-plexSerif font-bold flex flex-col lg:flex-row lg:mb-36">
							<span className="text-5xl lg:text-7xl lg:mr-22 mb-4 lg:mb-0 text-gray-300">
								#3
							</span>
							<span className="text-2xl  lg:text-5xl lg:mr-40 text-gray-700">
								Another brilliant service that you will benefit a great deal
								from.
							</span>
						</div>
						<div className="flex flex-col lg:flex-row">
							<div className="hidden w-full lg:block lg:mr-20 shadow-lg">
								<img
									className="w-full h-full object-cover"
									src={trophy}
									alt="A small golden trophy"
								/>
							</div>
							<div className="w-full mt-8 lg:mt-0">
								<p className="text-lg lg:text-2xl font-medium mb-8 text-gray-600">
									Lorem ipsum dolor sit amet. Consectetur adipiscing elit
									maecenas sed pharetra magna tortor.
								</p>
								<p className="text-gray-500 leading-loose">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit.
									Facilisis gravida sagittis purus eget vitae faucibus sed
									tortor blandit. Tristique sit viverra posuere vestibulum
									bibendum donec. Placerat amet tellus mauris quis aliquet fames
									aliquam. Sagittis, morbi suspendisse vitae mollis bibendum.
									Dolor, vitae, amet purus feugiat malesuada molestie. Nibh
									malesuada viverra turpis id. Euismod molestie fermentum
									volutpat bibendum arcu cursus non. Augue leo sollicitudin ut
									pretium quis et cursus nunc. Tristique sit viverra posuere
									vestibulum bibendum donec. Placerat amet tellus mauris quis
									aliquet fames aliquam.
								</p>
								<div className="flex justify-center mt-5 md:mt-10 lg:hidden">
									<div className="inline-block rounded-full p-3 bg-blue-100">
										<svg
											className="h-8 w-8 lg:h-5 lg:w-5"
											width="32"
											height="32"
											viewBox="0 0 32 32"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M5.33333 8.00004H26.6667V21.3334H5.33333V8.00004ZM26.6667 24C27.3739 24 28.0522 23.7191 28.5523 23.219C29.0524 22.7189 29.3333 22.0406 29.3333 21.3334V8.00004C29.3333 7.2928 29.0524 6.61452 28.5523 6.11442C28.0522 5.61433 27.3739 5.33337 26.6667 5.33337H5.33333C3.85333 5.33337 2.66667 6.52004 2.66667 8.00004V21.3334C2.66667 22.0406 2.94762 22.7189 3.44772 23.219C3.94781 23.7191 4.62609 24 5.33333 24H0V26.6667H32V24H26.6667Z"
												fill="#2368A2"
											/>
										</svg>
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* <!-- Service 4 --> */}
					<div id="service4" className="mt-16 md:mt-20 lg:mb-72">
						<div className="font-plexSerif font-bold flex flex-col lg:flex-row-reverse lg:mb-36">
							<span className="text-5xl lg:text-7xl lg:mr-22 mb-4 lg:mb-0 text-gray-300">
								#4
							</span>
							<span className="text-2xl  lg:text-5xl lg:mr-40 text-gray-700">
								Another brilliant service that you will benefit a great deal
								from.
							</span>
						</div>
						<div className="flex flex-col lg:flex-row-reverse">
							<div className="hidden w-full lg:block lg:ml-20 shadow-lg">
								<img
									className="w-full h-full object-cover"
									src={trophy}
									alt="A small golden trophy"
								/>
							</div>
							<div className="w-full mt-8 lg:mt-0">
								<p className="text-lg lg:text-2xl font-medium mb-8 text-gray-600">
									Lorem ipsum dolor sit amet. Consectetur adipiscing elit
									maecenas sed pharetra magna tortor.
								</p>
								<p className="text-gray-500 leading-loose">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit.
									Facilisis gravida sagittis purus eget vitae faucibus sed
									tortor blandit. Tristique sit viverra posuere vestibulum
									bibendum donec. Placerat amet tellus mauris quis aliquet fames
									aliquam. Sagittis, morbi suspendisse vitae mollis bibendum.
									Dolor, vitae, amet purus feugiat malesuada molestie. Nibh
									malesuada viverra turpis id. Euismod molestie fermentum
									volutpat bibendum arcu cursus non. Augue leo sollicitudin ut
									pretium quis et cursus nunc. Tristique sit viverra posuere
									vestibulum bibendum donec. Placerat amet tellus mauris quis
									aliquet fames aliquam.
								</p>
								<div className="flex justify-center mt-5 md:mt-10 lg:hidden">
									<div className="inline-block rounded-full p-3 bg-blue-100">
										<svg
											className="h-8 w-8 lg:h-5 lg:w-5"
											width="31"
											height="20"
											viewBox="0 0 31 20"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M16.3333 8.66663C17.1245 8.66663 17.8978 8.43203 18.5556 7.99251C19.2134 7.55298 19.7261 6.92827 20.0288 6.19736C20.3316 5.46646 20.4108 4.66219 20.2565 3.88627C20.1021 3.11034 19.7212 2.39761 19.1618 1.8382C18.6023 1.27879 17.8896 0.897828 17.1137 0.743487C16.3378 0.589146 15.5335 0.668359 14.8026 0.97111C14.0717 1.27386 13.447 1.78655 13.0074 2.44435C12.5679 3.10214 12.3333 3.8755 12.3333 4.66663C12.3333 5.72749 12.7548 6.74491 13.5049 7.49506C14.255 8.2452 15.2725 8.66663 16.3333 8.66663ZM16.3333 3.33329C16.597 3.33329 16.8548 3.41149 17.0741 3.558C17.2934 3.70451 17.4643 3.91275 17.5652 4.15638C17.6661 4.40002 17.6925 4.66811 17.641 4.92675C17.5896 5.18539 17.4626 5.42297 17.2761 5.60944C17.0897 5.79591 16.8521 5.92289 16.5934 5.97434C16.3348 6.02579 16.0667 5.99938 15.8231 5.89847C15.5794 5.79755 15.3712 5.62665 15.2247 5.40739C15.0782 5.18812 15 4.93034 15 4.66663C15 4.31301 15.1405 3.97387 15.3905 3.72382C15.6406 3.47377 15.9797 3.33329 16.3333 3.33329ZM21.8133 8.47996C22.5934 7.36133 23.0116 6.03038 23.0116 4.66663C23.0116 3.30287 22.5934 1.97192 21.8133 0.853294C22.1968 0.729845 22.5971 0.666869 23 0.666627C24.0609 0.666627 25.0783 1.08805 25.8284 1.8382C26.5786 2.58835 27 3.60576 27 4.66663C27 5.72749 26.5786 6.74491 25.8284 7.49506C25.0783 8.2452 24.0609 8.66663 23 8.66663C22.5971 8.66639 22.1968 8.60341 21.8133 8.47996ZM16.3333 11.3333C8.33333 11.3333 8.33333 16.6666 8.33333 16.6666V19.3333H24.3333V16.6666C24.3333 16.6666 24.3333 11.3333 16.3333 11.3333ZM11 16.6666C11 16.28 11.4267 14 16.3333 14C21 14 21.5867 16.08 21.6667 16.6666H11ZM31 16.6666V19.3333H27V16.6666C26.9688 15.6755 26.7406 14.7005 26.3285 13.7985C25.9164 12.8965 25.3288 12.0857 24.6 11.4133C31 12.0666 31 16.6666 31 16.6666ZM8.78666 5.89329L10.3333 7.77329L3.99999 14.1066L0.333328 10.1066L1.87999 8.55996L3.99999 10.6666L8.78666 5.89329Z"
												fill="#2368A2"
											/>
										</svg>
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* <!-- Service 5 --> */}
					<div id="service5" className="mt-16 md:mt-20 lg:mb-72">
						<div className="font-plexSerif font-bold flex flex-col lg:flex-row lg:mb-36">
							<span className="text-5xl lg:text-7xl lg:mr-22 mb-4 lg:mb-0 text-gray-300">
								#5
							</span>
							<span className="text-2xl  lg:text-5xl lg:mr-40 text-gray-700">
								Another brilliant service that you will benefit a great deal
								from.
							</span>
						</div>
						<div className="flex flex-col lg:flex-row">
							<div className="hidden w-full lg:block lg:mr-20 shadow-lg">
								<img
									className="w-full h-full object-cover"
									src={trophy}
									alt="A small golden trophy"
								/>
							</div>
							<div className="w-full mt-8 lg:mt-0">
								<p className="text-lg lg:text-2xl font-medium mb-8 text-gray-600">
									Lorem ipsum dolor sit amet. Consectetur adipiscing elit
									maecenas sed pharetra magna tortor.
								</p>
								<p className="text-gray-500 leading-loose">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit.
									Facilisis gravida sagittis purus eget vitae faucibus sed
									tortor blandit. Tristique sit viverra posuere vestibulum
									bibendum donec. Placerat amet tellus mauris quis aliquet fames
									aliquam. Sagittis, morbi suspendisse vitae mollis bibendum.
									Dolor, vitae, amet purus feugiat malesuada molestie. Nibh
									malesuada viverra turpis id. Euismod molestie fermentum
									volutpat bibendum arcu cursus non. Augue leo sollicitudin ut
									pretium quis et cursus nunc. Tristique sit viverra posuere
									vestibulum bibendum donec. Placerat amet tellus mauris quis
									aliquet fames aliquam.
								</p>
								<div className="flex justify-center mt-5 md:mt-10 lg:hidden">
									<div className="inline-block rounded-full p-3 bg-blue-100">
										<svg
											className="h-8 w-8 lg:h-5 lg:w-5"
											width="32"
											height="32"
											viewBox="0 0 32 32"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M26.3867 20.5466C27.6533 17.6533 27.6533 14.3333 26.3867 11.4533L22.7333 13.1066C23.5333 14.9466 23.5333 17.04 22.7467 18.8933L26.3867 20.5466ZM20.56 5.61329C19.1238 4.98668 17.5737 4.66326 16.0067 4.66326C14.4397 4.66326 12.8896 4.98668 11.4533 5.61329L13.1067 9.25329C14.96 8.46663 17.0533 8.46663 18.9067 9.26663L20.56 5.61329ZM5.61334 11.44C4.98671 12.8785 4.66331 14.4308 4.66331 16C4.66331 17.5691 4.98671 19.1214 5.61334 20.56L9.26667 18.8933C8.46667 17.0533 8.46667 14.9466 9.26667 13.0933L5.61334 11.44ZM11.4533 26.3866C12.8897 27.0143 14.4406 27.3372 16.0081 27.3349C17.5756 27.3326 19.1255 27.0052 20.56 26.3733L18.9067 22.7333C17.9935 23.1279 17.0095 23.3326 16.0147 23.3349C15.0199 23.3372 14.035 23.137 13.12 22.7466L11.4533 26.3866ZM16 2.66663C17.751 2.66663 19.4848 3.0115 21.1025 3.68157C22.7201 4.35163 24.19 5.33375 25.4281 6.57187C26.6662 7.80998 27.6483 9.27984 28.3184 10.8975C28.9885 12.5152 29.3333 14.249 29.3333 16C29.3333 19.5362 27.9286 22.9276 25.4281 25.4281C22.9276 27.9285 19.5362 29.3333 16 29.3333C14.249 29.3333 12.5152 28.9884 10.8976 28.3184C9.27988 27.6483 7.81003 26.6662 6.57191 25.4281C4.07143 22.9276 2.66667 19.5362 2.66667 16C2.66667 12.4637 4.07143 9.07235 6.57191 6.57187C9.0724 4.07138 12.4638 2.66663 16 2.66663ZM16 10.6666C14.5855 10.6666 13.229 11.2285 12.2288 12.2287C11.2286 13.2289 10.6667 14.5855 10.6667 16C10.6667 17.4144 11.2286 18.771 12.2288 19.7712C13.229 20.7714 14.5855 21.3333 16 21.3333C17.4145 21.3333 18.771 20.7714 19.7712 19.7712C20.7714 18.771 21.3333 17.4144 21.3333 16C21.3333 14.5855 20.7714 13.2289 19.7712 12.2287C18.771 11.2285 17.4145 10.6666 16 10.6666Z"
												fill="#2368A2"
											/>
										</svg>
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* <!-- Service 6 --> */}
					<div id="service6" className="mt-20">
						<div className="font-plexSerif font-bold flex flex-col lg:flex-row-reverse lg:mb-36">
							<span className="text-5xl lg:text-7xl lg:mr-22 mb-4 lg:mb-0 text-gray-300">
								#6
							</span>
							<span className="text-2xl  lg:text-5xl lg:mr-40 text-gray-700">
								Another brilliant service that you will benefit a great deal
								from.
							</span>
						</div>
						<div className="flex flex-col lg:flex-row-reverse">
							<div className="hidden w-full lg:block lg:ml-20 shadow-lg">
								<img
									className="w-full h-full object-cover"
									src={trophy}
									alt="A small golden trophy"
								/>
							</div>
							<div className="w-full mt-8 lg:mt-0">
								<p className="text-lg lg:text-2xl font-medium mb-8 text-gray-600">
									Lorem ipsum dolor sit amet. Consectetur adipiscing elit
									maecenas sed pharetra magna tortor.
								</p>
								<p className="text-gray-500 leading-loose">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit.
									Facilisis gravida sagittis purus eget vitae faucibus sed
									tortor blandit. Tristique sit viverra posuere vestibulum
									bibendum donec. Placerat amet tellus mauris quis aliquet fames
									aliquam. Sagittis, morbi suspendisse vitae mollis bibendum.
									Dolor, vitae, amet purus feugiat malesuada molestie. Nibh
									malesuada viverra turpis id. Euismod molestie fermentum
									volutpat bibendum arcu cursus non. Augue leo sollicitudin ut
									pretium quis et cursus nunc. Tristique sit viverra posuere
									vestibulum bibendum donec. Placerat amet tellus mauris quis
									aliquet fames aliquam.
								</p>
								<div className="flex justify-center mt-5 md:mt-10 lg:hidden">
									<div className="inline-block rounded-full p-3 bg-blue-100">
										<svg
											className="h-8 w-8 lg:h-5 lg:w-5"
											width="26"
											height="31"
											viewBox="0 0 26 31"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M23.24 0.61438H2.76001C1.35201 0.61438 0.200012 1.7203 0.200012 3.07198V27.648C0.200012 28.9997 1.35201 30.1056 2.76001 30.1056H23.24C24.648 30.1056 25.8 28.9997 25.8 27.648V3.07198C25.8 1.7203 24.648 0.61438 23.24 0.61438ZM7.88001 25.1904C7.88001 25.8662 7.30401 26.4192 6.60001 26.4192H4.04001C3.33601 26.4192 2.76001 25.8662 2.76001 25.1904V24.576C2.76001 23.9001 3.33601 23.3472 4.04001 23.3472H6.60001C7.30401 23.3472 7.88001 23.9001 7.88001 24.576V25.1904ZM7.88001 20.2752C7.88001 20.951 7.30401 21.504 6.60001 21.504H4.04001C3.33601 21.504 2.76001 20.951 2.76001 20.2752V19.6608C2.76001 18.9849 3.33601 18.432 4.04001 18.432H6.60001C7.30401 18.432 7.88001 18.9849 7.88001 19.6608V20.2752ZM7.88001 15.36C7.88001 16.0358 7.30401 16.5888 6.60001 16.5888H4.04001C3.33601 16.5888 2.76001 16.0358 2.76001 15.36V14.7456C2.76001 14.0697 3.33601 13.5168 4.04001 13.5168H6.60001C7.30401 13.5168 7.88001 14.0697 7.88001 14.7456V15.36ZM15.56 25.1904C15.56 25.8662 14.984 26.4192 14.28 26.4192H11.72C11.016 26.4192 10.44 25.8662 10.44 25.1904V24.576C10.44 23.9001 11.016 23.3472 11.72 23.3472H14.28C14.984 23.3472 15.56 23.9001 15.56 24.576V25.1904ZM15.56 20.2752C15.56 20.951 14.984 21.504 14.28 21.504H11.72C11.016 21.504 10.44 20.951 10.44 20.2752V19.6608C10.44 18.9849 11.016 18.432 11.72 18.432H14.28C14.984 18.432 15.56 18.9849 15.56 19.6608V20.2752ZM15.56 15.36C15.56 16.0358 14.984 16.5888 14.28 16.5888H11.72C11.016 16.5888 10.44 16.0358 10.44 15.36V14.7456C10.44 14.0697 11.016 13.5168 11.72 13.5168H14.28C14.984 13.5168 15.56 14.0697 15.56 14.7456V15.36ZM23.24 25.1904C23.24 25.8662 22.664 26.4192 21.96 26.4192H19.4C18.696 26.4192 18.12 25.8662 18.12 25.1904V24.576C18.12 23.9001 18.696 23.3472 19.4 23.3472H21.96C22.664 23.3472 23.24 23.9001 23.24 24.576V25.1904ZM23.24 20.2752C23.24 20.951 22.664 21.504 21.96 21.504H19.4C18.696 21.504 18.12 20.951 18.12 20.2752V19.6608C18.12 18.9849 18.696 18.432 19.4 18.432H21.96C22.664 18.432 23.24 18.9849 23.24 19.6608V20.2752ZM23.24 15.36C23.24 16.0358 22.664 16.5888 21.96 16.5888H19.4C18.696 16.5888 18.12 16.0358 18.12 15.36V14.7456C18.12 14.0697 18.696 13.5168 19.4 13.5168H21.96C22.664 13.5168 23.24 14.0697 23.24 14.7456V15.36ZM23.24 9.83038C23.24 10.5062 22.664 11.0592 21.96 11.0592H4.04001C3.33601 11.0592 2.76001 10.5062 2.76001 9.83038V4.91518C2.76001 4.23934 3.33601 3.68638 4.04001 3.68638H21.96C22.664 3.68638 23.24 4.23934 23.24 4.91518V9.83038Z"
												fill="#2368A2"
											/>
										</svg>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				{/* Start of Testimonials Section  */}
				<section className="flex flex-col items-center pt-20 lg:pt-40 pb-48">
					<h2 className="thick_underline uppercase tracking-wider text-4xl lg:text-5xl text-gray-700">
						Testimonials
					</h2>
					<div className="flex flex-row flex-wrap justify-center pt-40 pb-18 max-w-screen-2xl">
						{/* Start of Testimonial Card */}
						<div className="w-72 lg:w-72 mx-10 shadow-md bg-white mb-16 lg:mb-0">
							<p className="px-6 pt-8 pb-20 text-center text-gray-500">
								“Nec gravida tempus, lobortis elit augue tellus. Dolor, et ipsum
								porta pharetra. Risus nunc turpis vehicula sed. Volutpat mollis
								quam volutpat nulla pellentesque.”
							</p>
							<div className="flex flex-col items-center pb-6 bg-gray-100">
								<img
									className="rounded-full w-24 border-4 -mt-12 border-white shadow-inner"
									src={smiling_man}
									alt=""
								/>
								<span className="text-sm font-bold mt-2 tracking-wider text-gray-600">
									Thom Yorke
								</span>
								<span className="text-sm text-gray-400">
									Founder, Radiohead
								</span>
							</div>
						</div>
						{/* End of Testimonial Card */}

						{/* Start of Testimonial Card */}
						<div className="w-72 lg:w-72 mx-10 shadow-md bg-white mb-16 lg:mb-0">
							<p className="px-6 pt-8 pb-20 text-center text-gray-500">
								“Nec gravida tempus, lobortis elit augue tellus. Dolor, et ipsum
								porta pharetra. Risus nunc turpis vehicula sed. Volutpat mollis
								quam volutpat nulla pellentesque.”
							</p>
							<div className="flex flex-col items-center pb-6 bg-gray-100">
								<img
									className="rounded-full w-24 border-4 -mt-12 border-white shadow-inner"
									src={smiling_woman}
									alt=""
								/>
								<span className="text-sm font-bold mt-2 tracking-wider text-gray-600">
									Alfa Mist
								</span>
								<span className="text-sm text-gray-400">
									Creative Director, Antiphon
								</span>
							</div>
						</div>
						{/* End of Testimonial Card */}

						{/* Start of Testimonial Card */}
						<div className="w-72 lg:w-72 mx-10 shadow-md bg-white mb-16 lg:mb-0">
							<p className="px-6 pt-8 pb-20 text-center text-gray-500">
								“Nec gravida tempus, lobortis elit augue tellus. Dolor, et ipsum
								porta pharetra. Risus nunc turpis vehicula sed. Volutpat mollis
								quam volutpat nulla pellentesque.”
							</p>
							<div className="flex flex-col items-center pb-6 bg-gray-100">
								<img
									className="rounded-full w-24 border-4 -mt-12 border-white shadow-inner"
									src={smiling_man_2}
									alt=""
								/>
								<span className="text-sm font-bold mt-2 tracking-wider text-gray-600">
									Rory Ferreira
								</span>
								<span className="text-sm text-gray-400">Artist, Milo</span>
							</div>
						</div>
						{/* End of Testimonial Card */}
					</div>
					<Link
						className="inline-block py-2 my-5 px-3 uppercase border  rounded-full border-green-700 text-green-600 hover:bg-green-700 hover:border-green-700 hover:text-blue-50 focus:ring-2 focus:ring-green-300"
						to="/blog"
					>
						Read More
					</Link>
				</section>
				{/* Start of 'Ready To Get Started' Section */}
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

export default AccountingServices;
