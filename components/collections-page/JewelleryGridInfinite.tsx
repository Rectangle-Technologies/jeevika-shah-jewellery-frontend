"use client";

import { useEffect, useState, useRef } from "react";
import JewelleryGrid from "@/components/landing-page/JewelleryGrid";
import { getProducts } from "@/utils/functions/collection";
import { MetalPrices } from "@/utils/functions/product";

interface Props {
	slug: string;
	sort: string;
	minPrice: number;
	maxPrice: number;
	metalPrices: MetalPrices | undefined;
}

function sortItems(items: any[], sortBy: string) {
	switch (sortBy) {
		case "a-z":
			return [...items].sort((a, b) => a.name.localeCompare(b.name));
		case "z-a":
			return [...items].sort((a, b) => b.name.localeCompare(a.name));
		case "low-to-high":
			return [...items].sort((a, b) => Number(a?.calculatedPrice?.toFixed(2)) - Number(b?.calculatedPrice?.toFixed(2)));
		case "high-to-low":
			return [...items].sort((a, b) => Number(b?.calculatedPrice?.toFixed(2)) - Number(a?.calculatedPrice?.toFixed(2)));
		case "new-to-old":
			return [...items].sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
		case "old-to-new":
			return [...items].sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime());
		default:
			return items;
	}
}

export default function JewelleryGridInfinite({ slug, sort, minPrice, maxPrice, metalPrices }: Props) {
	const [page, setPage] = useState(1);
	const [items, setItems] = useState<Item[]>([]);
	const [hasMore, setHasMore] = useState(true);
	const [loading, setLoading] = useState(false);
	const loaderRef = useRef<HTMLDivElement | null>(null);
	const loadingRef = useRef(false); // prevents duplicate calls

	// Fetch data when `page` updates
	useEffect(() => {
		const fetchData = async () => {
			if (loadingRef.current || !hasMore) return;
			loadingRef.current = true;
			setLoading(true);

			const res = await getProducts(page, 20, slug, false);
			let totalProducts = [...items, ...res.products];

			totalProducts = totalProducts.filter((item) => {
				const totalCost = Number(item?.calculatedPrice?.toFixed(2));
				return totalCost >= minPrice && totalCost <= maxPrice;
			});

			if (res.products.length === 0) {
				setHasMore(false);
			} else {
				setItems(totalProducts);
			}

			setLoading(false);
			loadingRef.current = false;
		};

		fetchData();
	}, [page, slug, minPrice, maxPrice, hasMore]);

	// Set up the observer
	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				const firstEntry = entries[0];
				if (firstEntry.isIntersecting && !loadingRef.current && hasMore) {
					// Slight debounce
					setTimeout(() => {
						setPage((prev) => prev + 1);
					}, 200);
				}
			},
			{ root: null, rootMargin: "100px", threshold: 1.0 }
		);

		const currentLoader = loaderRef.current;
		if (currentLoader) observer.observe(currentLoader);

		return () => {
			if (currentLoader) observer.unobserve(currentLoader);
		};
	}, [hasMore]);

	const sortedItems = sortItems(items, sort);

	return (
		<>
			<JewelleryGrid jewelleryItems={sortedItems} metalPrices={metalPrices} />
			{loading && <p className="text-center mt-4">Loading more...</p>}
			<div ref={loaderRef} className="h-10 w-full" />
		</>
	);
}
