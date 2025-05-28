import React from "react";

function BuyBackPolicyPage() {
	return (
		<div className="flex flex-col gap-3 p-4">
			<p className="text-2xl policy-header">Buy Back Policy</p>
			<div className="leading-[2]">
				<p>
					We have a <strong>100% gold buy back policy</strong>.
				</p>
				<p>Considering you have the orignal purchase receipt available with you as well as the JS authentication card provided at the time of purchase. Gold prices would be according to the current market rates.</p>
				<p>Jewellery will be inspected by our manufacturing team and in case of no tempering the amount would be refunded to you in the span of 15-20 days.</p>
				<p>Please note that we dont buyback diamonds.</p>
			</div>
		</div>
	);
}

export default BuyBackPolicyPage;
