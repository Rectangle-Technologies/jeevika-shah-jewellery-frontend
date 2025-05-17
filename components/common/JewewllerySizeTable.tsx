import React from "react";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

interface JewewllerySizeTableProps {
	jewellerySizes: {
		displayName: string;
		weightOfMetal: number;
	}[];
}

function JewewllerySizeTable({ jewellerySizes }: JewewllerySizeTableProps) {
	return (
		<Table>
			{/* <TableCaption>A list of your recent invoices.</TableCaption> */}
			<TableHeader>
				<TableRow>
					<TableHead className="w-[100px]">Size</TableHead>
					<TableHead className="text-right">Weight</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				{jewellerySizes.map((jewellerySize) => (
					<TableRow key={jewellerySize.displayName}>
						<TableCell className="font-medium">{jewellerySize.displayName}</TableCell>
						<TableCell className="text-right">{jewellerySize.weightOfMetal}</TableCell>
					</TableRow>
				))}
			</TableBody>
		</Table>
	);
}

export default JewewllerySizeTable;
