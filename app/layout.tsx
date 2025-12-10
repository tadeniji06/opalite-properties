import type { Metadata } from "next";
import "./globals.css";
import Header from "@/layouts/Header";
import Footer from "@/layouts/Footer";
import ClarityScript from "@/components/Clarity";

export const metadata: Metadata = {
	title: "Opalite Properties",
	description: "Opalite Properties",
	icons: {
		icon: "/opal.png",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className='antialiased'>
				<Header />
				{children}
				<Footer />
				<ClarityScript />
			</body>
		</html>
	);
}
