import MainDisplay from "@/components/product/MainDisplay";
import YouMayAlsoLike from "@/components/product/YouMayAlsoLike";
import { getProducts } from "@/utils/functions/collection";
import { getProductDetails } from "@/utils/functions/product";
import React from "react";

async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
	const { id } = await params;

	const product = await getProductDetails(id);
	const relatedProducts = await getProducts(1, 20, product?.category || "all", false);
	return (
		<div className=" pb-3 md:px-3">
			{product && <MainDisplay jewellery={product} />}
			<YouMayAlsoLike suggestedItems={relatedProducts.filter((item) => item._id !== product?._id)} />
		</div>
	);
}

export default ProductPage;
