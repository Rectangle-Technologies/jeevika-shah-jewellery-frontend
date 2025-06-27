import React from "react";
import type { Metadata } from "next";

// SEO metadata for this page
export const metadata: Metadata = {
	title: "Terms & Conditions | Jeevika Shah Jewellery",
	description: "Read the terms & conditions of Jeevika Shah Jewellery. Learn how we handle your data, our commitment to privacy, and our dedication to providing a secure shopping experience.",
	keywords: ["Terms & Conditions", "Jeevika Shah", "Jewellery", "Ethical Diamonds", "Data Protection", "Customer Privacy", "Secure Shopping", "Jewelry India"],
	openGraph: {
		title: "Terms & Conditions | Jeevika Shah Jewellery",
		description: "Read the terms & conditions of Jeevika Shah Jewellery. Learn how we handle your data, our commitment to privacy, and our dedication to providing a secure shopping experience.",
		url: `${process.env.DOMAIN}/policies/terms-and-conditions`,
		siteName: "Jeevika Shah Jewellery",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Terms & Conditions | Jeevika Shah Jewellery",
		description: "Read the terms & conditions of Jeevika Shah Jewellery. Learn how we handle your data, our commitment to privacy, and our dedication to providing a secure shopping experience.",
	},
};

function PrivacyPolicyPage() {
	return (
		<div className="max-w-4xl mx-auto px-4 py-12 text-gray-800 space-y-10">
			<p className="text-3xl font-bold">Terms & Conditions</p>
            <section className="space-y-4">
				<p>
					Welcome to Jeevika Shah. These Terms and Conditions ("Terms") govern your use of our services and the purchase of jewellery, including both real and lab-grown diamond products, from our brand. By accessing our website, showroom, or placing an order, you agree to be bound by these Terms.
				</p>
			</section>
			<section className="space-y-4">
				<p className="text-bold">1. Company Overview</p>
				<p>
					Jeevika Shah is a fine jewellery brand offering timeless designs crafted with ethically sourced natural diamonds and certified lab-grown diamonds. We are committed to quality, transparency, and customer trust.
				</p>
			</section>
			<section className="space-y-4">
				<p className="text-bold">2. Product Authenticity and Certification</p>
				<p>
					<ul className="list-disc pl-6">
						<li>All diamonds—natural or lab-grown—are accompanied by appropriate certification (e.g., GIA, IGI, SGL, or equivalent).</li>
						<li>Our natural diamonds are responsibly sourced and comply with the Kimberley Process.</li>
						<li>Lab-grown diamonds are chemically and physically identical to natural diamonds, created in controlled environments and certified accordingly.</li>
					</ul>
				</p>
			</section>
			<section className="space-y-4">
				<p className="text-bold">3. Custom Orders & Made-to-Order Jewellery</p>
				<p>
					<ul className="list-disc pl-6">
						<li>Customisation timelines vary depending on the design and setting, typically ranging from 2–6 weeks.</li>
						<li>All customised jewellery is non-returnable and non-refundable unless there is a manufacturing defect.</li>
					</ul>
				</p>
			</section>
			<section className="space-y-4">
				<p className="text-bold">4. Pricing and Payment</p>
				<p>
					<ul className="list-disc pl-6">
						<li>Prices are listed in INR and are inclusive of all applicable taxes unless stated otherwise.</li>
						<li>We accept payments via bank transfer, credit/debit cards, UPI, or in-store payment methods.</li>
						<li>The products listed on the website  are made to order, prices of Gold, Natural Diamonds, Labgrown Diamonds  and Silver are fluctuating and will be changed everyday according to the current market rates.</li>
						<li>For lab-grown diamond pieces, pricing is dynamic and may vary based on market trends and stone sizes.</li>
					</ul>
				</p>
			</section>
			<section className="space-y-4">
				<p className="text-bold">5. Return, Exchange & Repair Policy</p>
				<p>
					<ul className="list-disc pl-6">
						<li>Returns: As products are made to order, we do not accept any returns once the purchase is made.</li>
						<li>Exchanges:  As products are made to order we only accept exchange for any defective products sent by us.</li>
						<li>Repairs: We offer lifetime repair services. Charges may apply depending on the nature of the repair.</li>
						<li>Custom-made jewellery is not eligible for return or exchange.</li>
					</ul>
				</p>
			</section>
			<section className="space-y-4">
				<p className="text-bold">6. Lifetime Buyback & Upgrade Policy</p>
				<p>
					<ul className="list-disc pl-6">
						<li>Natural or Lab grown Diamonds are not included in buyback, only Gold will be considered  with its current price at the time of buyback.</li>
						<li>The upgrade option is available on request, and we encourage customers to retain original certificates and invoices.</li>
					</ul>
				</p>
			</section>
			<section className="space-y-4">
				<p className="text-bold">7. Product Care & Warranty</p>
				<p>
					<ul className="list-disc pl-6">
						<li>We offer a one-year manufacturing warranty on all jewellery. This does not cover normal wear and tear or damage caused by misuse.</li>
						<li>Regular maintenance and cleaning are recommended to preserve shine and quality.</li>
					</ul>
				</p>
			</section>
			<section className="space-y-4">
				<p className="text-bold">8. Intellectual Property</p>
				<p>
					<ul className="list-disc pl-6">
						<li>All content, designs, product photography, and trademarks are the property of Jeevika Shah and cannot be copied, reproduced, or used without written permission.</li>
					</ul>
				</p>
			</section>
			<section className="space-y-4">
				<p className="text-bold">9. Limitation of Liability</p>
				<p>
					<ul className="list-disc pl-6">
						<li>Jeevika Shah shall not be liable for any indirect or consequential loss or damage arising from the use or purchase of our jewellery.</li>
					</ul>
				</p>
			</section>
			<section className="space-y-4">
				<p className="text-bold">10. Contact Us</p>
				<p>
					For questions regarding these Terms or your purchase, please contact us at:
				</p>
                <p>
					Jeevika Shah Jewellery
                    </p>
                <p>
                    <b>Email:</b> Info.tiadesign@gmail.com
                    </p>
                <p>
                    <b>Phone:</b> +91 9879438794
                    </p>
                <p>
                    <b>Studio Address:</b> NEAR JAKATNAKA KHATODRA, Block No. 55, Navarang, Industrial Society, UDHNA MAGDALLA ROAD, Udhana,
                    Surat, Gujarat, 395017
				</p>
			</section>
		</div>
	);
}

export default PrivacyPolicyPage;
