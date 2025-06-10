import MainDisplay from "@/components/product/MainDisplay";
import YouMayAlsoLike from "@/components/product/YouMayAlsoLike";
import { getProducts } from "@/utils/functions/collection";
import { getProductDetails } from "@/utils/functions/product";
import React from "react";

async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
	const { id } = await params;

	const details = await getProductDetails(id);
	const product = details?.product[0];
	const relatedProducts = details?.recommendations || (await getProducts(1, 5, product?.category || "", false));
	return (
		<div className=" pb-3 md:px-3">
			{product && <MainDisplay jewellery={product} />}
			<YouMayAlsoLike suggestedItems={relatedProducts} />
		</div>
	);
}

export default ProductPage;
