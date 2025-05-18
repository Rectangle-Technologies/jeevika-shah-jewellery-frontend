'use server';

import { jewelleryItems } from "@/constants";

export async function getProductDetails(productId: string): Promise<Item | null> {
    try {
        return jewelleryItems.find((item) => item._id === productId) || null;
    } catch (error) {
        console.log(error);
        return null;
    }
}


export async function getRelatedProducts(productCategory: string): Promise<Item[]> {
    try {
        return jewelleryItems.filter((item) => item.category !== productCategory);
    } catch (error) {
        console.log(error);
        return [];
    }
}
