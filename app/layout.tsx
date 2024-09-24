import "./globals.css";

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
				<link rel="icon" href="/favicon.ico" />
				<link rel="apple-touch-icon" href="/favicon.ico" />
				<meta name="apple-mobile-web-app-title" content="ETM Foundation" />
			</head>
			<body className="">{children}</body>
		</html>
	);
}
