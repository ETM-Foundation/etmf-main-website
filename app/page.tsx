import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
	title: "Home",
	description:
		"Explore our innovative programs designed to cultivate leadership skills, ignite entrepreneurial spirit, and foster mental empowerment. Join a vibrant community of passionate learners, all united by a shared vision of growth and success.",
};

export default function Home() {
	return (
		<>
			<div className="w-full grid grid-cols-2 gap-5">
				<div className="w-full h-fit flex flex-col gap-5"></div>

				<div className="w-full relative"></div>
			</div>
		</>
	);
}
