"use client";

import Image from "next/image";
import React, { MouseEventHandler, useState } from "react";

export default function AIAssistant(): React.ReactElement {
	const [openAIAssistant, setOpenAIAssistant] = useState<boolean>(false);

	const handleOpenAIAssistant: MouseEventHandler<HTMLButtonElement> = () => {
		setOpenAIAssistant(!openAIAssistant);
	};

	return (
		<>
			<button
				onClick={handleOpenAIAssistant}
				className="no-style-btn relative z-50"
			>
				<div className="fixed bottom-5 right-5 rounded-full w-16 h-16 bg-green-3 flex justify-center items-center z-50">
					{openAIAssistant ? (
						<>
							<Image
								className="w-auto h-[25px]"
								src={"/icons/search-white.svg"}
								alt="AI assistants"
								width={25}
								height={25}
							/>
						</>
					) : (
						<>
							<Image
								className="w-auto h-[25px]"
								src={"/icons/search-white.svg"}
								alt="AI assistants"
								width={25}
								height={25}
							/>
						</>
					)}
				</div>
			</button>

			{openAIAssistant && (
				<div className="fixed bottom-16 right-16 w-64 h-80 bg-white rounded-2xl shadow-xl flex flex-col justify-center items-center p-5 z-50">
					<p>AI Assistant</p>
				</div>
			)}
		</>
	);
}
