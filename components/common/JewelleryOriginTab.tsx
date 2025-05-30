import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface JwelleryOriginTabProps {
	setType: React.Dispatch<React.SetStateAction<string>>;
}

function JewelleryOriginTab({ setType }: JwelleryOriginTabProps) {
	return (
		<Tabs onValueChange={(value) => setType(value)} defaultValue="natural">
			<TabsList>
				<TabsTrigger value={"natural"}>Natural Diamond</TabsTrigger>
				<TabsTrigger value={"lab-grown"}>Lab Grown Diamond</TabsTrigger>
			</TabsList>
			{/* <TabsContent value="natural">Natural</TabsContent> */}
			{/* <TabsContent value="lab">Lab Grown</TabsContent> */}
		</Tabs>
	);
}

export default JewelleryOriginTab;
