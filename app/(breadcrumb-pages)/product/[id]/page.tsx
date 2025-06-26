import MainDisplay from "@/components/product/MainDisplay";
import YouMayAlsoLike from "@/components/product/YouMayAlsoLike";
import { getProductDetails } from "@/utils/functions/product";
import React from "react";

async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
	const { id } = await params;

	const details = await getProductDetails(id);
	const product = details?.product[0];
	const relatedProducts = details?.recommendations || [];
	const metalPrices = details?.metalPrices;
	return (
		<div className=" pb-3 md:px-3">
			{product && <MainDisplay metalPrices={metalPrices} jewellery={product} />}
			<YouMayAlsoLike suggestedItems={relatedProducts} />
		</div>
	);
}

export default ProductPage;
