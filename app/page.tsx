import Banner from "@/components/landing-page/Banner";
import ChatWithUs from "@/components/landing-page/ChatWithUs";
import ContactUsForm from "@/components/landing-page/ContactUsForm";
import JewelleryCategory from "@/components/landing-page/JewelleryCategory";
import JewelleryGrid from "@/components/landing-page/JewelleryGrid";
import PersonalisedPieces from "@/components/landing-page/PersonalisedPieces";
import WhyWeAreHere from "@/components/landing-page/WhyWeAreHere";

export default function Home() {
	return (
		<div>
			<Banner />
			<JewelleryGrid />
			<JewelleryCategory />
			<p className="text-center text- md:text-3xl text-gray-700 mt-6">Timeless Pieces You'll Reach for Everyday</p>
			<JewelleryGrid />
			<ChatWithUs />
			<PersonalisedPieces />
			<WhyWeAreHere />
			<ContactUsForm />
		</div>
	);
}
