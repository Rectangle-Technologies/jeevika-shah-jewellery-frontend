import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/common/Navbar";
import { StoreProvider } from "@/contexts/storeProvider";
import ScrollToTop from "@/components/landing-page/ScrollToTop";
import WhatsAppFloatingButton from "@/components/landing-page/WhatsAppFloatingButton";

const poppins = Poppins({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"],
	variable: "--font-poppins",
});

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Discover jewelry that you will be proud to wear, exactly the way you want them",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${poppins.variable} ${poppins.variable} antialiased`}>
				<StoreProvider>
					<Navbar />
				</StoreProvider>
				{children}
				<WhatsAppFloatingButton />
				<ScrollToTop />
			</body>
		</html>
	);
}
