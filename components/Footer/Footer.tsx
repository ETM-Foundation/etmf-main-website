"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import SubscribeForm from "./SubscribeForm";

// Define an interface for the social media links data
interface SocialListTypes {
	name: string; // Name of the social media platform
	href: string; // URL of the social media profile
	img: string; // Path to the social media icon image
}

export default function Footer(): React.ReactElement {
	// Array of social media link objects
	const socialList: SocialListTypes[] = [
		{
			name: "Instagram",
			href: "https://www.instagram.com/etm.foundation/",
			img: "/icons/instagram.svg",
		},
		{
			name: "LinkedIn",
			href: "https://www.linkedin.com/company/the-etm-foundation",
			img: "/icons/linkedin.svg",
		},
		{
			name: "YouTube",
			href: "https://www.youtube.com/@ETMFoundation",
			img: "/icons/youtube.svg",
		},
	];

	return (
		<>
			<footer className="bg-gray-100 h-full w-full">
				<div className="flex flex-col md:grid md:grid-cols-[50%_50%] justify-center items-center w-full h-full z-50">
					{/* Left Column - Background Image with Overlay */}
					<div className="w-full h-[400px] md:h-full bg-gray-500 relative">
						<Image
							className="object-cover w-auto h-auto"
							src={
								"https://res.cloudinary.com/dnmdoncxt/image/upload/f_auto,q_auto/footer-img"
							}
							alt="background img"
							fill
							sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
						/>

						<div className="absolute top-0 left-0 bg-[rgba(6,64,48,0.7)] w-full h-full flex flex-col justify-center items-center gap-1">
							{/* Social Links Container (Hidden on Mobile) */}
							<div className="hidden md:flex flex-row justify-center items-center gap-3 relative left-20 top-16">
								{/* Map through the socialList array to render social links */}
								{socialList?.map((social: SocialListTypes, index: number) => {
									return (
										<React.Fragment key={index}>
											<Link
												className="no-style-btn"
												href={social.href}
												target="_blank"
											>
												<Image
													className="w-auto h-[40px]"
													src={social.img}
													alt={`Social ${index + 1}`}
													width={50}
													height={50}
												/>
											</Link>
										</React.Fragment>
									);
								})}
							</div>

							<Image
								className="w-auto h-auto object-cover"
								src={"/etm_foundation_text_white.png"}
								alt="logo"
								width={300}
								height={300}
							/>
						</div>
					</div>

					{/* Right Column - Text Content and Social Links (Mobile) */}
					<div className="w-full h-full bg-[#104030] p-5 sm:p-10 flex flex-col gap-5">
						<div className="flex md:hidden flex-row justify-center items-center gap-3">
							{/* Map through the socialList array to render social links */}
							{socialList?.map((social: SocialListTypes, index: number) => {
								return (
									<React.Fragment key={index}>
										<Link
											className="no-style-btn"
											href={social.href}
											target="_blank"
										>
											<Image
												className="w-auto h-[40px]"
												src={social.img}
												alt={`Social ${index + 1}`}
												width={50}
												height={50}
											/>
										</Link>
									</React.Fragment>
								);
							})}
						</div>

						<SubscribeForm />
					</div>
				</div>
			</footer>
		</>
	);
}
