import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "../ui/label";

interface JwelleryOriginTabProps {
	setType: React.Dispatch<React.SetStateAction<string>>;
}

function JewelleryOriginTab({ setType }: JwelleryOriginTabProps) {
	return (
		<div className="w-full">
			<Label className="mb-2 text-md">Select type:</Label>
			<Tabs onValueChange={(value) => setType(value)} defaultValue="natural">
				<TabsList>
					<TabsTrigger value={"natural"}>Natural Diamond</TabsTrigger>
					<TabsTrigger value={"lab-grown"}>Lab Grown Diamond</TabsTrigger>
				</TabsList>
				<TabsContent value="natural">Natural</TabsContent>
				<TabsContent value="lab-grown">Lab Grown</TabsContent>
			</Tabs>
		</div>
	);
}

export default JewelleryOriginTab;
