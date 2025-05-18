import { getItemsForCollection } from "@/utils/functions/collection";
import JewelleryGrid from "@/components/landing-page/JewelleryGrid";
import SortDropdown from "@/components/collections-page/SortDropDown";

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
	const sort = (await searchParams).sort;
	const items = await getItemsForCollection(slug);

	const sortOption = typeof sort === "string" ? sort : "";

	const sortedJewellery = sortItems(items, sortOption);

	return (
		<section className="pt-40 flex flex-col items-center px-3">
			<div className="flex justify-end items-center gap-2 w-full md:w-[95%] mx-auto mb-2 md:mb-5">
				<SortDropdown />
			</div>
			<JewelleryGrid jewelleryItems={sortedJewellery} />
		</section>
	);
}
