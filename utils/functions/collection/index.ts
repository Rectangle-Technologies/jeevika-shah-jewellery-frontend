'use server'

import { MetalPrices } from "../product";


export async function getNavbarOptions() {
  const navbarLinks: { title: string; link?: string; subLinks?: { title: string; link: string }[] }[] = [
    {
      title: "About Us",
      link: "/about-us",
    }
  ]
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/categories/get-all`);
    const data = await res.json();
    if (data.result && data.result.toLocaleLowerCase() === 'success') {
      const collections = data.body.categories;

      const collectionLinks = {
        title: "Collections",
        subLinks: collections.map((collection: { name: string, image: string }) => ({
          title: collection.name,
          link: `/collections/${collection.name.toLowerCase()}`
        }))
      }

      collectionLinks.subLinks.push({
        title: 'Shop All',
        link: '/collections/all'
      })
      // keep the collections tab on the top
      navbarLinks.unshift(collectionLinks);
    }
    return navbarLinks;
  } catch (error) {
    return [];
  }
}

export async function getProducts(pageNo: number, pageSize: number, category: string, isLandingPageProduct: boolean): Promise<{ products: Item[], metalPrices: MetalPrices | undefined }> {
  try {
    let url = "";
    if (category.toLowerCase() === 'all') {
      category = '';
    }
    if (isLandingPageProduct) {
      url = `${process.env.API_URL}/products?page=${pageNo}&pageSize=${pageSize}&category=${category}&isLandingPageProduct=${isLandingPageProduct}`;
    } else {
      url = `${process.env.API_URL}/products?page=${pageNo}&pageSize=${pageSize}&category=${category}`
    }
    // Add dynamic parameters to avoid caching
    url += `&t=${Date.now()}`;
    const res = await fetch(url);
    const data = await res.json();
    if (data.result && data.result.toLocaleLowerCase() === 'success') {
      return { products: data.body.products, metalPrices: data.body.prices };
    } else {
      console.log(data);
      return { products: [], metalPrices: undefined };
    }
  } catch (error) {
    console.log(error);
    return { products: [], metalPrices: undefined };
  }
}

export async function getCategories(): Promise<{ name: string, image: string }[]> {
  try {
    const res = await fetch(`${process.env.API_URL}/categories/get-all`);
    const data = await res.json();
    if (data.result && data.result.toLocaleLowerCase() === 'success') {
      return data.body.categories;
    } else {
      console.log(data);
      return [];
    }
  } catch (error) {
    console.log(error);
    return [];
  }
}

