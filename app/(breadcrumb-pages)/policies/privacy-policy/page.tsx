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
				<p className="text-bold">1. Overview & Commitment to Privacy</p>
				<p>
					We, <b>Jeevika Shah</b> ("we", "us", or "our"), operate our business through our website (www.jeevikashah.com). At <b>Jeevika Shah</b>, we respect your privacy and are committed to taking reasonable precautions to protect your information and comply with our obligations related to privacy.
				</p>
				<p>
					This policy ("Privacy Policy") outlines the manner in which your information is collected by us through various interactions with you on the Platform, and the manner in which the information so collected is used by us.
				</p>
				<p>
					Please note that this Privacy Policy may be amended or updated from time to time to reflect changes in our practices with respect to the processing of personal data or changes in applicable law. We encourage you to read this Privacy Policy carefully, and to regularly check it to review any changes that we might make to it.
				</p>
				<p>
					By accessing the services provided by the Platform, you agree to the collection, use, sharing and storage of your information by <b>Jeevika Shah</b> in the manner provided in this Privacy Policy.
				</p>
			</section>
			<section className="space-y-4">
				<p className="text-bold">2. What Information We Collect</p>
				<p>
					We collect the details provided by you on registration (if any), together with information we learn about you from your use of our services and your visits to the Platform.
				</p>
				<p>
					We may collect the following personally identifiable information about you when you are transacting on the Platform:
					<ul className="list-disc pl-6">
						<li>First and last name</li>
						<li>Email address</li>
						<li>Contact details including mobile phone numbers</li>
						<li>PIN/ZIP code</li>
						<li>Demographic profile (such as your age, gender, date of birth, date of anniversary, date of spouse's birthday, and address) and</li>
						<li>Your opinion on services, products, features, etc., on our Platform.</li>
					</ul>
				</p>
				<p>
					We also collect certain data as you access and use our services on the Platform, which includes the following:
					<ul className="list-disc pl-6">
						<li>Device information</li>
						<li>Domain server</li>
						<li>Location information</li>
						<li>IP address</li>
						<li>Type of web browser you are using</li>
						<li>Network carrier.</li>
					</ul>
				</p>
				<p>
					We may also collect information about:
					<ul className="list-disc pl-6">
						<li>The pages you visit/access</li>
						<li>The links you click on our Platform</li>
						<li>The number of times you access the page and</li>
						<li>Things you view, add to bag, add to wishlist.</li>
					</ul>
				</p>
				<p>
					If you make a purchase, we collect sensitive personal data in connection with the purchase. This includes your payment data, such as your credit or debit card number and other card or bank account details, and other account and authentication information, as well as billing, shipping, and contact details.
				</p>
				<p>
					We may collect additional information in connection with your participation in any schemes, promotions or contests offered by us and information you provide when giving us feedback or completing profile forms. We may also monitor customer traffic patterns and Platform use, which enables us to improve the service we provide to customers.
				</p>
			</section>
			<section className="space-y-4">
				<p className="text-bold">3. How We Use Your Information</p>
				<p>
					We use personal information to provide the products and services on the Platform and for general business purposes. Collection of email enables us to improve your shopping experience. Further, we use your personal information and your contact information to send you registration confirmation, special offers, recommendations (based on your previous orders, browsing history, and interests), changes in service policies or terms of use, event-based communications such as order information, renewal notices, invites, reminders, etc.; to troubleshoot problems, to measure interest in our products and services, and to inform you about online offers and customize your experience.
				</p>
				<p>
					In our efforts to continually improve our product and service offerings, we analyze demographic information and profile data about user activity on the Platform. All personal data and information collected by us is used only for the purpose specified in this Privacy Policy.
				</p>
			</section>
			<section className="space-y-4">
				<p className="text-bold">4. Cookies & Tracking Technologies</p>
				<p>
					We may use cookies and other technologies to provide, protect, and improve our products and services, such as by personalizing content, offering and measuring advertisements, understanding user behavior, and providing a safer experience.
				</p>
				<p>
					You can remove or reject cookies using your browser or device settings, but in some cases doing so may affect your ability to use the Platform or our services.
				</p>
			</section>
			<section className="space-y-4">
				<p className="text-bold">5. Disclosure of Personal Information</p>
				<p>
					We may share your personal information (on a need-to-know basis) with third parties that provide services on our behalf and/or generally in connection with our Platform offerings, such as website hosting, email services, marketing, fulfilling customer orders, transaction processing, data analytics, providing customer service, and conducting customer research and satisfaction surveys. These service providers are obligated to protect your data under law.
				</p>
				<p>
					We may also disclose personal information such as name, email, mobile phone number, device information, location, network carrier, etc., to certain third-party service providers, on a need-to-know basis. This information is shared with these providers so that we can (a) personalize the Platform for you and (b) perform behavioral analytics.
				</p>
				<p>
					We reserve the right to disclose your personally identifiable information as required by law and/or when we believe that disclosure is necessary to protect our rights and/or comply with a judicial proceeding, legal process, or court order.
				</p>
				<p>
					We do not sell, share, or distribute any personal information with third parties for their own marketing or advertising purposes without your prior express consent.
				</p>
			</section>
			<section className="space-y-4">
				<p className="text-bold">6. Your Consent</p>
				<p>
					By using our Platform and/or by providing your information, you consent to the collection, sharing, storage and use of the information you disclose on the Platform in accordance with the Privacy Policy, including but not limited to your consent for sharing your information as described herein.
				</p>
			</section>
			<section className="space-y-4">
				<p className="text-bold">7. Your Rights</p>
				<p>
					You have the right to access or correct the personal information that we collect. You are also entitled to restrict or object, at any time, to the further processing of your personal information. You may write to us at <b>info.tiadesign@gmail.com</b> regarding the personal information collected by us.
				</p>
				<p>
					If you believe that any information we are holding on you is incorrect or incomplete, you may write to us at the above-mentioned email address. We will promptly correct any incorrect information in our records.
				</p>
				<p>
					For any uses of your personal information that require your consent, note that you may withdraw your consent by writing to us at the email addresses mentioned above. If you refuse to share information or withdraw consent to process information that you have previously given, we reserve the right to restrict or deny access to the Platform and the services for which we consider such information necessary.
				</p>
			</section>
			<section className="space-y-4">
				<p className="text-bold">8. Protecting Your Information</p>
				<p>
					Our Platform has in place security measures and standards (as required under applicable law) to protect against loss, misuse, and alteration of the information under our control. Whenever you access your registered account or process a transaction, we offer the use of a secure server. However, despite our best efforts, no security system is completely impenetrable.
				</p>
			</section>
			<section className="space-y-4">
				<p className="text-bold">9. Profile Deactivation</p>
				<p>
					Our Platform enables you to temporarily freeze your profile. This action will result in no access to your account and associated benefits like past orders, wishlists, and other personalized services.
				</p>
			</section>
			<section className="space-y-4">
				<p className="text-bold">10. Changes to the Privacy Policy:</p>
				<p>
					We may update this Privacy Policy at any time to reflect changes in our practices and service offerings. If we modify this Privacy Policy, we will update the date on which the new Privacy Policy will be effective. We will notify you of any material changes in the way we treat your information by placing a prominent notice on our website/Application.
				</p>
			</section>
		</div>
	);
}

export default PrivacyPolicyPage;
