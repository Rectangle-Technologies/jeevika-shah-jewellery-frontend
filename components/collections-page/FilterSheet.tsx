"use client";
import React, { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "../ui/sheet";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ListFilterPlusIcon } from "lucide-react";
import { Slider } from "../ui/slider";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";

interface FilterSheetProps {
	maxPrice: number;
}

function FilterSheet({ maxPrice }: FilterSheetProps) {
	const router = useRouter();
	const searchParams = useSearchParams();

	const [price, setPrice] = React.useState<number[]>([0, maxPrice]);

	// Sync price state with URL or new maxPrice
	useEffect(() => {
		const min = Number(searchParams.get("minPrice")) || 0;
		const max = Number(searchParams.get("maxPrice")) || maxPrice;
		setPrice([min, max]);
	}, [searchParams, maxPrice]);

	const handleFilterApply = () => {
		const current = new URLSearchParams(searchParams.toString());
		current.set("minPrice", String(price[0]));
		current.set("maxPrice", String(price[1]));
		router.push(`?${current.toString()}`);
	};

	return (
		<Sheet>
			<SheetTrigger className="flex items-center gap-2 cursor-pointer">
				<ListFilterPlusIcon />
				Filter
			</SheetTrigger>
			<SheetContent side="left">
				<SheetHeader className="bg-gray-200 text-center">
					<SheetTitle>FILTER</SheetTitle>
					<SheetDescription></SheetDescription>
				</SheetHeader>

				<div className="p-3">
					<Accordion type="single" collapsible defaultValue="price">
						<AccordionItem value="price">
							<AccordionTrigger>PRICE</AccordionTrigger>
							<AccordionContent className="p-3 flex flex-col gap-4">
								<Slider value={price} onValueChange={setPrice} min={0} max={maxPrice} step={1} />
								<p>
									Price: ₹{price[0].toLocaleString("en-IN", { maximumFractionDigits: 0 })} - ₹{price[1].toLocaleString("en-IN", { maximumFractionDigits: 0 })}
								</p>
							</AccordionContent>
						</AccordionItem>
					</Accordion>
					<Separator />
				</div>
				<SheetFooter>
					<SheetClose asChild>
						<Button onClick={handleFilterApply}>Apply</Button>
					</SheetClose>
				</SheetFooter>
			</SheetContent>
		</Sheet>
	);
}

export default FilterSheet;
