import MainDisplay from "@/components/product/MainDisplay";
import YouMayAlsoLike from "@/components/product/YouMayAlsoLike";
import { getProductDetails, getRelatedProducts } from "@/utils/functions/product";
import React from "react";

async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
	const { id } = await params;

	const product = await getProductDetails(id);
    const relatedProdcuts = await getRelatedProducts(product?.category || "");
	return (
		<div className=" pb-3 md:px-3">
			{product && <MainDisplay jewellery={product} />}
			<YouMayAlsoLike suggestedItems={relatedProdcuts} />
		</div>
	);
}

export default ProductPage;
