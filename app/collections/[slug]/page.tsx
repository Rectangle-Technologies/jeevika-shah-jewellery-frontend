import FilterSheet from "@/components/collections-page/FilterSheet";
import SortDropdown from "@/components/collections-page/SortDropDown";
import JewelleryGridInfinite from "@/components/collections-page/JewelleryGridInfinite";
import { getProducts } from "@/utils/functions/collection";

export default async function CollectionsPage({ params, searchParams }: { params: Promise<{ slug: string }>; searchParams: Promise<{ [key: string]: string | string[] | undefined }> }) {
	const { slug } = await params;
	const sp = await searchParams;

	const sort = typeof sp.sort === "string" ? sp.sort : "";
	const minPrice = typeof sp.minPrice === "string" ? parseFloat(sp.minPrice) : 0;
	const maxPrice = typeof sp.maxPrice === "string" ? parseFloat(sp.maxPrice) : Infinity;

	const modifiedSlug = slug.charAt(0).toUpperCase() + slug.slice(1);

	const preview = await getProducts(1, 1, modifiedSlug, false); // To extract metalPrices
	const originalMaxValue = 700000;

	return (
		<section className="pt-28 md:pt-40 flex flex-col items-center px-3">
			<div className="flex justify-between items-center gap-2 w-full md:w-[95%] mx-auto mb-2 md:mb-5">
				<FilterSheet maxPrice={originalMaxValue} />
				<SortDropdown />
			</div>
			<JewelleryGridInfinite slug={modifiedSlug} sort={sort} minPrice={minPrice} maxPrice={maxPrice} metalPrices={preview.metalPrices} />
		</section>
	);
}
