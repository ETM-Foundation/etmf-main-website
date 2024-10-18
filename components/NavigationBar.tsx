// "Use Client" allows this component to be client side, not server side (server side is by default).
"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { SetStateAction, useEffect, useState } from "react";

// Define the types for the URL list below
interface urlListTypes {
	text: string;
	urlPath: string;
}

export default function NavigationBar(): React.ReactElement {
	// Define the list of URLs for the navigation bar at the top
	const URLList: urlListTypes[] = [
		{ text: "Home", urlPath: "/" },
		{ text: "About Us", urlPath: "/aboutus" },
		{ text: "Programs", urlPath: "/programs" },
		{ text: "Get Involved", urlPath: "/getinvolved" },
		{ text: "Resources", urlPath: "/resources" },
		{ text: "Contact Us", urlPath: "/contact" },
	];

	// State to keep track of the current page
	const [currentPage, setCurrentPage] = useState<string>("");
	const [openMobileNavbar, setOpenMobileNavbar] = useState<boolean>(false);

	// Set the "setCurrentPage" to the current URL path when the component mounts or when the page loads up
	useEffect(() => {
		setCurrentPage(window.location.pathname);
	}, []);

	const handleOpenMobileNavbar = () => {
		setOpenMobileNavbar(!openMobileNavbar);
	};

	return (
		<>
			<nav className="bg-[rgba(255,255,255,0.5)] backdrop-blur-md h-fit w-full sticky top-0 left-0 text-black z-50 px-5 sm:px-10 py-4">
				{/* Tablet/Desktop Navigation Bar */}
				<div className="hidden md:flex w-full h-fit flex-row justify-between items-center gap-4">
					{/* Render the logo */}
					<Image
						className="object-cover w-auto h-full"
						src="/etm_foundation_text_black.png"
						alt="logo"
						width={70}
						height={70}
						priority={true}
					/>

					<div className="flex flex-row gap-4 text-lg">
						{/* Map through URLList to create navigation buttons */}
						{URLList.map((item: urlListTypes, index: number) => {
							return (
								<URLs
									key={index}
									item={item}
									setCurrentPage={setCurrentPage}
									currentPage={currentPage}
									setOpenMobileNavbar={setOpenMobileNavbar}
								/>
							);
						})}
					</div>
				</div>

				{/* Mobile Navigation Bar */}
				<div className="flex md:hidden w-full h-fit flex-col justify-between items-center gap-4">
					<div className="flex flex-row justify-between items-center gap-4 w-full">
						{/* Render the logo */}
						<Image
							src="/etm_foundation_logo.png"
							alt="logo"
							width={50}
							height={50}
							priority={true}
						/>

						<>
							{/* Open & Close Navbar */}
							{openMobileNavbar ? (
								<button
									onClick={handleOpenMobileNavbar}
									className="no-style-btn w-fit"
								>
									<Image
										src="/icons/close.svg"
										alt="logo"
										width={30}
										height={30}
									/>
								</button>
							) : (
								<button
									onClick={handleOpenMobileNavbar}
									className="no-style-btn w-fit"
								>
									<Image
										src="/icons/menu.svg"
										alt="logo"
										width={30}
										height={30}
									/>
								</button>
							)}
						</>
					</div>

					{openMobileNavbar && (
						<div className="flex flex-col gap-4 text-lg">
							{/* Map through URLList to create navigation buttons */}
							{URLList.map((item: urlListTypes, index: number) => {
								return (
									<URLs
										key={index}
										item={item}
										setCurrentPage={setCurrentPage}
										currentPage={currentPage}
										setOpenMobileNavbar={setOpenMobileNavbar}
									/>
								);
							})}
						</div>
					)}
				</div>
			</nav>
		</>
	);
}

// Define the URL's component
const URLs = ({
	item,
	setCurrentPage,
	currentPage,
	setOpenMobileNavbar,
}: {
	item: urlListTypes;
	setCurrentPage: React.Dispatch<SetStateAction<string>>;
	currentPage: string;
	setOpenMobileNavbar: React.Dispatch<SetStateAction<boolean>>;
}): React.ReactElement => {
	const router = useRouter();

	// Function to handle URL path change
	const handleCheckURLPath = () => {
		setOpenMobileNavbar(false);
		setCurrentPage(item.urlPath);
		router.push(item.urlPath);
	};

	return (
		<>
			{/* Display the text for the navigation item */}

			{/* Shows and styles the active URL */}
			{item.urlPath === currentPage ? (
				<button
					onClick={handleCheckURLPath}
					className={`relative w-fit opacity-50`}
				>
					<p>{item.text}</p>
					<div className={`navbar-link-underline`} />
				</button>
			) : (
				// Shows the unactive URLs
				<button
					onClick={handleCheckURLPath}
					className={`relative w-fit no-style-btn`}
				>
					<p>{item.text}</p>
				</button>
			)}
		</>
	);
};
