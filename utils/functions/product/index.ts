'use server';

import { jewelleryItems } from "@/constants";

export async function getProductDetails(productId: string): Promise<Item | null> {
    try {
        const res = await fetch(`${process.env.API_URL}/products/get/${productId}`);
        const data = await res.json();
        if (data.result && data.result.toLocaleLowerCase() === 'success') {
            return data.body;
        } else {
            console.log(data);
            return null
        }
    } catch (error) {
        console.log(error);
        return null;
    }
}

