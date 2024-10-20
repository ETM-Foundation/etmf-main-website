"use client";

import Link from "next/link";
import React, { ChangeEventHandler, MouseEventHandler, useState } from "react";

export default function SubscribeForm(): React.ReactElement {
	const [email, setEmail] = useState<string>("");

	// Event handler for changes in the email input field.
	const handleEmailOnChange: ChangeEventHandler<HTMLInputElement> = (
		e: React.ChangeEvent<HTMLInputElement>
	) => {
		// Update the 'email' state with the current value from the input field.
		setEmail(e.target.value);
	};

	const handleSubscribeBtn: MouseEventHandler<HTMLButtonElement> = () => {
		// Regular expression to validate email format.
		const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

		// Test if the entered email matches the regex pattern.
		const checkEmail = emailRegex.test(email);

		// If the email is valid, clear the input field.
		if (checkEmail) setEmail("");

		// TODO: add the MailChimp API
	};

	return (
		<>
			<div className="flex flex-col justify-center items-center gap-10 text-white w-full lg:w-[400px] md:m-auto">
				<div className="flex flex-col gap-2 text-center md:text-start md:w-full">
					<h1 className="montserrat-bold text-3xl">Contact Us</h1>

					<div className="flex flex-wrap gap-1">
						<p>etmfoundation.business@gmail.com</p>
					</div>
				</div>

				<div className="flex flex-col gap-4 text-center md:text-start w-full">
					<h1 className="montserrat-bold text-3xl">Stay Informed</h1>

					<div className="bg-white text-black p-5 rounded-lg flex flex-col justify-center items-center md:justify-start md:items-start gap-2 max-w-[380px] md:max-w-full mx-auto">
						<h3>
							Stay updated on the latest happenings at the foundation!{" "}
							<span className="lato-bold">
								Make sure it's a valid email address
							</span>
						</h3>

						<div className="flex flex-col gap-2 w-full">
							<input
								className="bg-gray-200 input-field-style"
								type="email"
								name="email"
								placeholder="Email"
								onChange={handleEmailOnChange}
								value={email}
							/>

							<button
								onClick={handleSubscribeBtn}
								className="w-full styled-btn"
							>
								Subscribe
							</button>
						</div>
					</div>
				</div>
			</div>

			<div className="text-center opacity-30 text-sm text-white flex flex-col justify-center items-center pt-10">
				<p>Copyright © 2024</p>
				<p>Empowerment Through Mindset Foundation</p>

				<div className="flex flex-wrap gap-1 w-full justify-center items-center">
					<Link className="underline no-style-btn" href={""}>
						Privacy Policy
					</Link>
					|
					<Link className="underline no-style-btn" href={""}>
						Terms of Service
					</Link>
				</div>
			</div>
		</>
	);
}
