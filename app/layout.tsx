import "./globals.css";
import Footer from "@/components/Footer/Footer";
import NavigationBar from "@/components/NavigationBar";
import AIAssistant from "@/components/AIAssistant/AIAssistant";

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
				<link rel="icon" href="/etm_foundation_logo.png" />
				<link rel="apple-touch-icon" href="/etm_foundation_logo.png" />
				<meta name="apple-mobile-web-app-title" content="ETM Foundation" />
			</head>

			<body className="h-auto w-full lato-regular">
				<main className="min-h-[100vw] w-full relative">
					<NavigationBar />
					<AIAssistant />

					<div className="w-full h-auto border-4 border-[#104030] p-10 relative">
						{children}
					</div>
				</main>

				<Footer />
			</body>
		</html>
	);
}
