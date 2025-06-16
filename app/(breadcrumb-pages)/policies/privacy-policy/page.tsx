import React from "react";
import type { Metadata } from "next";

// SEO metadata for this page
export const metadata: Metadata = {
	title: "Privacy Policy | Jeevika Shah Jewellery",
	description: "Read the privacy policy of Jeevika Shah Jewellery. Learn how we handle your data, our commitment to privacy, and our dedication to providing a secure shopping experience.",
	keywords: ["Privacy Policy", "Jeevika Shah", "Jewellery", "Ethical Diamonds", "Data Protection", "Customer Privacy", "Secure Shopping", "Jewelry India"],
	openGraph: {
		title: "Privacy Policy | Jeevika Shah Jewellery",
		description: "Read the privacy policy of Jeevika Shah Jewellery. Learn how we handle your data, our commitment to privacy, and our dedication to providing a secure shopping experience.",
		url: `${process.env.DOMAIN}/policies/privacy-policy`,
		siteName: "Jeevika Shah Jewellery",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Privacy Policy | Jeevika Shah Jewellery",
		description: "Read the privacy policy of Jeevika Shah Jewellery. Learn how we handle your data, our commitment to privacy, and our dedication to providing a secure shopping experience.",
	},
};

function PrivacyPolicyPage() {
	return (
		<div className="max-w-4xl mx-auto px-4 py-12 text-gray-800 space-y-10">
			<p className="text-3xl font-bold">Privacy Policy</p>
			<section className="space-y-4">
				<p>Our label Jeevika Shah offers a stunning collection of high-quality jewelry, hand-finished in India, that is sure to captivate anyone seeking elegance. One of the standout features of JS is their commitment to ethically sourced diamonds and gemstones.</p>
				<p>
					Each piece is crafted with precious metals and adorned with beautiful gemstones, ensuring not only a luxurious look but also peace of mind knowing that the materials have been responsibly sourced and customised to adorn you. Please note that the standard of our diamonds
					is VVS-VS clarity with F/G color unless mentioned otherwise.
				</p>
				<p>
					We are dedicated to provide a seamless and enjoyable shopping experience. From the moment you browse our collection to the moment you receive your carefully packaged jewelry, you can expect nothing less than exceptional service and attention to detail. Explore our
					collection today and discover the perfect piece to add a touch of luxury to your style.
				</p>
			</section>
		</div>
	);
}

export default PrivacyPolicyPage;
