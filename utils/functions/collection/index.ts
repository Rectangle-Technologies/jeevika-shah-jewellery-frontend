'use server'

import { jewelleryItems } from "@/constants";


export async function getItemsForCollection(collectionName: string): Promise<Item[]> {
  try {
    return jewelleryItems;
  } catch (error) {
    return [];
  }
}

