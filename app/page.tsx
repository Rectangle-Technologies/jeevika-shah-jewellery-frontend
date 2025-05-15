import Banner from "@/components/landing-page/Banner";
import ChatWithUs from "@/components/landing-page/ChatWithUs";
import ContactUsForm from "@/components/landing-page/ContactUsForm";
import JewelleryCategory from "@/components/landing-page/JewelleryCategory";
import JewelleryGrid from "@/components/landing-page/JewelleryGrid";
import PersonalisedPieces from "@/components/landing-page/PersonalisedPieces";
import WhyWeAreHere from "@/components/landing-page/WhyWeAreHere";
import { jewelleryItems } from "@/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jeevika Shah Jewellery | Timeless Designs",
  description:
    "Discover our curated collection of handmade jewellery — perfect for everyday elegance and special occasions. Crafted with love and precision.",
  keywords: [
    "handmade jewellery",
    "gold jewellery",
    "timeless jewellery",
    "custom pieces",
    "personalised jewellery",
    "everyday wear",
    "jewellery gifts",
  ],
  authors: [{ name: "Jeevika Shah", url: process.env.DOMAIN }],
  openGraph: {
    title: "Jeevika Shah Jewellery | Timeless Designs",
    description:
      "Explore handcrafted, personalised jewellery pieces that blend timeless beauty with everyday versatility.",
    url: process.env.DOMAIN,
    siteName: "Jeevika Shah Jewellery",
    images: [
      {
        url: `${process.env.DOMAIN}/assets/logo-primary.png`,
        width: 1200,
        height: 630,
        alt: "Handmade Jewellery Collection",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jeevika Shah Jewellery | Timeless Designs",
    description:
      "Curated handmade jewellery that’s perfect for gifting or personal style — unique, elegant, and made with care.",
    images: [`${process.env.DOMAIN}/assets/logo-primary.png`],
  },
  metadataBase: new URL(process.env.DOMAIN!),
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: process.env.DOMAIN,
  },
};

export default function Home() {
  return (
    <div>
      <Banner />
      <JewelleryGrid jewelleryItems={jewelleryItems} />
      <JewelleryCategory />
      {/* <p className="text-center md:text-3xl text-gray-700 mt-6">Timeless Pieces You'll Reach for Everyday</p> */}
      {/* <JewelleryGrid /> */}
      <ChatWithUs />
      <PersonalisedPieces />
      <WhyWeAreHere />
      <ContactUsForm />
    </div>
  );
}
