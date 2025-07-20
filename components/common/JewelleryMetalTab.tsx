import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "../ui/label";

interface JewelleryMetalTabProps {
	setKaratOfGold: React.Dispatch<React.SetStateAction<number>>;
}

function JewelleryMetalTab({ setKaratOfGold }: JewelleryMetalTabProps) {
	return (
		<div className="w-full">
			<Label className="mb-2 text-md">Select metal type:</Label>
			<Tabs onValueChange={(value) => setKaratOfGold(Number(value))} defaultValue="14">
				<TabsList>
					<TabsTrigger value={"18"}>18K Gold</TabsTrigger>
					<TabsTrigger value={"14"}>14K Gold</TabsTrigger>
				</TabsList>
			</Tabs>
		</div>
	);
}

export default JewelleryMetalTab;
