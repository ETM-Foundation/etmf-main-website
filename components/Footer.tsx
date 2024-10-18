"use client";

import Image from "next/image";

export default function Footer(): React.ReactElement {
	return (
		<>
			<footer className="bg-gray-100 h-screen w-full">
				<div className="grid grid-cols-2 justify-center items-center w-full h-full">
					<div className="w-full h-full bg-gray-500 relative">
						<Image
							className="object-cover w-auto h-auto"
							src={
								"https://res.cloudinary.com/dnmdoncxt/image/upload/f_auto,q_auto/cld-sample"
							}
							alt="background img"
							fill
							sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
						/>
					</div>
					<div className="w-full h-full bg-gray-700"></div>
				</div>
			</footer>
		</>
	);
}
