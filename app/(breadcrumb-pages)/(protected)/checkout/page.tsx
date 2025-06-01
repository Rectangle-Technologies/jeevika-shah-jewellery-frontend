import LeftSection from "@/components/checkout/LeftSection";
import RightSection from "@/components/checkout/RightSection";

function CheckOutPage() {
	return (
		<div className="flex flex-col lg:flex-row gap-4">
			{/* left section */}
			<LeftSection />

			{/* right section */}
			<RightSection />
		</div>
	);
}

export default CheckOutPage;
