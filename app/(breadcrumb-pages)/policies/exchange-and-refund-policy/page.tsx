import React from "react";
import type { Metadata } from "next";

// SEO metadata for this page
export const metadata: Metadata = {
	title: "Return and Exchange Policy | Jeevika Shah Jewellery",
	description: "Read the return and exchange policy of Jeevika Shah Jewellery. Learn about our resize service, enhancement policy, and our commitment to customer satisfaction.",
	keywords: ["Return Policy", "Exchange Policy", "Resize Service", "Enhancement Policy", "Jeevika Shah", "Jewellery", "Customer Satisfaction", "No Returns", "No Exchange"],
	openGraph: {
		title: "Return and Exchange Policy | Jeevika Shah Jewellery",
		description: "Read the return and exchange policy of Jeevika Shah Jewellery. Learn about our resize service, enhancement policy, and our commitment to customer satisfaction.",
		url: `${process.env.DOMAIN}/policies/exchange-and-refund-policy`,
		siteName: "Jeevika Shah Jewellery",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Return and Exchange Policy | Jeevika Shah Jewellery",
		description: "Read the return and exchange policy of Jeevika Shah Jewellery. Learn about our resize service, enhancement policy, and our commitment to customer satisfaction.",
	},
};

function ReturnAndExchangePage() {
	return (
		<div className="max-w-4xl mx-auto px-4 py-12 text-gray-800 space-y-10">
			<p className="text-3xl font-bold">Return and Exchange Policy</p>
			<section className="space-y-4 leading-[2]">
				<p>
					We at JS understand that finding the perfect fit is essential when it comes to jewelry. That's why we offer a complimentary resize service, ensuring that your piece fits you perfectly and comfortably. If in case any extra metal is used, you will be charged with the
					market rate of metal.
				</p>
				<p>We take pride in our commitment to customer satisfaction. With a generous free enhancement policy applicable for up to 5 years, you can shop with confidence, knowing that you have the option to enhance your purchase within this time frame.</p>
				<p>
					We follow a strong <strong>No returns and exchange policy</strong> as all products listed are made to order.
				</p>
			</section>
		</div>
	);
}

export default ReturnAndExchangePage;
