import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import React from "react";

function GoldHallMarkPage() {
	return (
		<div className="flex flex-col gap-3 p-4">
			<p className="text-2xl policy-header">Gold Hallmark</p>
			<p>Jeevika Shah is a BIS-Certified Jeweller, and it ensures to meet all standards to provide our customers with the purest and finest precious metal articles.</p>
			<Table className="border border-gray-300 border-collapse">
				<TableHeader>
					<TableRow className="border border-gray-300">
						<TableHead className="border border-gray-300">FITNESS NUMBER</TableHead>
						<TableHead className="border border-gray-300">GOLD PURITY</TableHead>
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
		</div>
	);
}

export default GoldHallMarkPage;
