import LeftSection from "@/components/checkout/LeftSection";
import RightSection from "@/components/checkout/RightSection";

function CheckOutPage() {
	return (
		<div className="flex flex-col-reverse lg:flex-row mt-6 gap-4">
			{/* left section */}
			<LeftSection />

			{/* right section */}
			<RightSection />
		</div>
	);
}

export default CheckOutPage;
