import { footerOptions } from "@/constants";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Policies | Jeevika Shah Jewellery",
	description: "Explore all the policies of Jeevika Shah Jewellery, including privacy, shipping, returns, and more. Stay informed about our practices and your rights as a customer.",
	keywords: ["Policies", "Jeevika Shah", "Jewellery", "Privacy Policy", "Shipping Policy", "Return Policy", "Terms and Conditions", "Customer Rights", "Jewelry India"],
	openGraph: {
		title: "Policies | Jeevika Shah Jewellery",
		description: "Explore all the policies of Jeevika Shah Jewellery, including privacy, shipping, returns, and more. Stay informed about our practices and your rights as a customer.",
		url: `${process.env.DOMAIN}/policies`,
		siteName: "Jeevika Shah Jewellery",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Policies | Jeevika Shah Jewellery",
		description: "Explore all the policies of Jeevika Shah Jewellery, including privacy, shipping, returns, and more. Stay informed about our practices and your rights as a customer.",
	},
};

function PolicyPage() {
	return (
		<div className="max-w-4xl mx-auto px-4 py-12 text-gray-800 space-y-10">
			<p className="text-3xl font-bold">Policies</p>
			<ul className="list-disc pl-5">
				{footerOptions.map((option) => (
					<li className="hover:underline" key={option.title}>
						<Link href={option.link} className=" flex items-center gap-2 my-2" target="_blank">
							{option.title} <ExternalLink />
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
}

export default PolicyPage;
