import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Home | ETM Foundation",
	description:
		"Explore our innovative programs designed to cultivate leadership skills, ignite entrepreneurial spirit, and foster financial and mental well-being. Join a vibrant community of passionate learners and experienced mentors, all united by a shared vision of growth and success.",
};

export default function Home() {
	return (
		<>
			<div className="m-10">
				<h1 className="">Home Page</h1>
				<p>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. At nam modi
					necessitatibus nisi ab voluptatum voluptatem est soluta aperiam
					quisquam accusantium, similique animi, eaque quam, quasi cum ut
					commodi neque?
				</p>
			</div>
		</>
	);
}
