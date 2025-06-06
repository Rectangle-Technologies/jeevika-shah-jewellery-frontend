import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/common/Navbar";
import ScrollToTop from "@/components/landing-page/ScrollToTop";
import WhatsAppFloatingButton from "@/components/landing-page/WhatsAppFloatingButton";
import Footer from "@/components/common/Footer";
import Script from "next/script";
import { CartStoreProvider } from "@/providers/cart-store-providers";
import { getNavbarOptions } from "@/utils/functions/collection";
import AuthInitializer from "@/components/auth/AuthInitializer";

const poppins = Poppins({
	subsets: ["latin"],
	weight: ["300", "400", "500", "600", "700"],
	variable: "--font-poppins",
});

export const metadata: Metadata = {
	title: "Jeevika Shah Jewellery",
	description: "Discover jewelry that you will be proud to wear, exactly the way you want them",
	icons: {
		icon: "/favicon.ico",
		apple: "/apple-touch-icon.png",
	},
	// manifest: "/site.webmanifest",
};

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const navbarLinks = await getNavbarOptions();
	return (
		<html lang="en">
			<head>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta name="theme-color" content="#ffffff" />
				<meta name="mobile-web-app-capable" content="yes" />
				<meta name="apple-mobile-web-app-title" content="Jeevika Shah Jewellery" />
				<Script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify({
							"@context": "https://schema.org",
							"@type": "Organization",
							name: "Jeevika Shah Jewellery",
							url: process.env.DOMAIN,
							logo: `${process.env.DOMAIN}/assets/logo-primary.png`,
							description: "Curated handmade jewellery for all occasions.",
							founder: {
								"@type": "Person",
								name: "Jeevika Shah",
							},
						}),
					}}
				/>
			</head>
			<body className={`${poppins.variable} antialiased`}>
				<CartStoreProvider>
					<AuthInitializer />
					<Navbar navbarLinks={navbarLinks} />
					{children}
					<Footer />
					<WhatsAppFloatingButton />
					<ScrollToTop />
				</CartStoreProvider>
			</body>
		</html>
	);
}
