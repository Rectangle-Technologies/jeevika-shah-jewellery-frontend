import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import React from "react";
import type { Metadata } from "next";

// SEO metadata for this page
export const metadata: Metadata = {
	title: "Gold Hallmark | Jeevika Shah Jewellery",
	description: "Learn about gold hallmarking at Jeevika Shah Jewellery. We are a BIS-Certified Jeweller, ensuring the highest standards of gold purity and authenticity for our customers.",
	keywords: ["Gold Hallmark", "BIS Certified", "Gold Purity", "Jeevika Shah", "Jewellery", "18K Gold", "14K Gold", "Fitness Number", "Jewelry India"],
	openGraph: {
		title: "Gold Hallmark | Jeevika Shah Jewellery",
		description: "Learn about gold hallmarking at Jeevika Shah Jewellery. We are a BIS-Certified Jeweller, ensuring the highest standards of gold purity and authenticity for our customers.",
		url: `${process.env.DOMAIN}/policies/gold-hallmark`,
		siteName: "Jeevika Shah Jewellery",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Gold Hallmark | Jeevika Shah Jewellery",
		description: "Learn about gold hallmarking at Jeevika Shah Jewellery. We are a BIS-Certified Jeweller, ensuring the highest standards of gold purity and authenticity for our customers.",
	},
};

function GoldHallMarkPage() {
	return (
		<div className="max-w-4xl mx-auto px-4 py-12 text-gray-800 space-y-10">
			<p className="text-3xl font-bold">Gold Hallmark</p>
			<section className="space-y-4 leading-[2]">
				<p>
					Jeevika Shah is a <strong>BIS-Certified Jeweller</strong>, and it ensures to meet all standards to provide our customers with the purest and finest precious metal articles.
				</p>
				<Table className="border border-gray-300 border-collapse mt-6">
					<TableHeader>
						<TableRow className="border border-gray-300">
							<TableHead className="border border-gray-300 font-semibold text-base">FITNESS NUMBER</TableHead>
							<TableHead className="border border-gray-300 font-semibold text-base">GOLD PURITY</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						<TableRow className="border border-gray-300">
							<TableCell className="border border-gray-300">18K750</TableCell>
							<TableCell className="border border-gray-300">18 KARAT</TableCell>
						</TableRow>
						<TableRow className="border border-gray-300">
							<TableCell className="border border-gray-300">14K585</TableCell>
							<TableCell className="border border-gray-300">14 KARAT</TableCell>
						</TableRow>
					</TableBody>
				</Table>
			</section>
		</div>
	);
}

export default GoldHallMarkPage;
