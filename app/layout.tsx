import "../src/globals.css";
import { Abel, Inter } from "next/font/google";
import Header from "../components/Header";

const abel = Abel({
	weight: "400",
	subsets: ["latin"],
	display: "swap",
	variable: "--font-abel",
});

const inter = Inter({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-inter",
});
export const metadata = {
	title: "Personal Portfolio",
	description: "Portfolio app",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className={`${inter.variable} ${abel.variable}`}>
			<body>{children}</body>
		</html>
	);
}
