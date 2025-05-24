import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

function JewelleryOriginTab() {
	return (
		<Tabs defaultValue="natural">
			<TabsList>
				<TabsTrigger value="natural">Natural Diamond</TabsTrigger>
				<TabsTrigger value="lab">Lab Grown Diamond</TabsTrigger>
			</TabsList>
			<TabsContent value="natural">Natural</TabsContent>
			<TabsContent value="lab">Lab Grown</TabsContent>
		</Tabs>
	);
}

export default JewelleryOriginTab;
