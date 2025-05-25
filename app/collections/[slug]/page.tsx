import { getProducts } from "@/utils/functions/collection";
import JewelleryGrid from "@/components/landing-page/JewelleryGrid";
import SortDropdown from "@/components/collections-page/SortDropDown";
import FilterSheet from "@/components/collections-page/FilterSheet";

function sortItems(items: any[], sortBy: string) {
	switch (sortBy) {
		case "a-z":
			return [...items].sort((a, b) => a.name.localeCompare(b.name));
		case "z-a":
			return [...items].sort((a, b) => b.name.localeCompare(a.name));
		case "low-to-high":
			return [...items].sort((a, b) => a.costOfDiamond + a.costOfLabour + a.miscellaneousCost - (b.costOfDiamond + b.costOfLabour + b.miscellaneousCost));
		case "high-to-low":
			return [...items].sort((a, b) => b.costOfDiamond + b.costOfLabour + b.miscellaneousCost - (a.costOfDiamond + a.costOfLabour + a.miscellaneousCost));
		case "new-to-old":
			return [...items].sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
		case "old-to-new":
			return [...items].sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime());
		default:
			return items;
	}
}

export default async function CollectionsPage({ params, searchParams }: { params: Promise<{ slug: string }>; searchParams: Promise<{ [key: string]: string | string[] | undefined }> }) {
	const { slug } = await params;
	const sp = await searchParams;
	const sort = sp.sort;

	const minPrice = typeof sp.minPrice === "string" ? parseFloat(sp.minPrice) : 0;
	const maxPrice = typeof sp.maxPrice === "string" ? parseFloat(sp.maxPrice) : Infinity;

	// make the first letter of slug capital
	let modifiedSlug = slug.charAt(0).toUpperCase() + slug.slice(1);
	let items = await getProducts(1, 20, modifiedSlug, false);

	const originalMaxValue = items.reduce((max, item) => Math.max(max, item.costOfDiamond + item.costOfLabour + item.miscellaneousCost), 0);

	// Filter based on price range
	items = items.filter((item) => {
		const totalCost = item.costOfDiamond + item.costOfLabour + item.miscellaneousCost;
		return totalCost >= minPrice && totalCost <= maxPrice;
	});

	// Sort
	const sortOption = typeof sort === "string" ? sort : "";
	const sortedJewellery = sortItems(items, sortOption);

	return (
		<section className="pt-24 md:pt-40 flex flex-col items-center px-3">
			<div className="flex justify-between items-center gap-2 w-full md:w-[95%] mx-auto mb-2 md:mb-5">
				<FilterSheet maxPrice={originalMaxValue} />
				<SortDropdown />
			</div>
			<JewelleryGrid jewelleryItems={sortedJewellery} />
		</section>
	);
}
