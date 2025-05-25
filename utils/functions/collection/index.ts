'use server'


export async function getNavbarOptions() {
  const navbarLinks: { title: string; link?: string; subLinks?: { title: string; link: string }[] }[] = [
    {
      title: "Brand Journey",
      link: "/brand-journey",
    }
  ]
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/categories/get-all`);
    const data = await res.json();
    if (data.result && data.result.toLocaleLowerCase() === 'success') {
      const collections = data.body;
      const collectionLinks = {
        title: "Collections",
        subLinks: collections.map((collection: any) => ({
          title: collection,
          link: `/collections/${collection.toLowerCase()}`
        }))
      }
      // keep the collections tab on the top
      navbarLinks.unshift(collectionLinks);
    }
    return navbarLinks;
  } catch (error) {
    return [];
  }
}

export async function getProducts(pageNo: number, pageSize: number, category: string, isLandingPageProduct: boolean): Promise<Item[]> {
  try {
    const res = await fetch(`${process.env.API_URL}/products?pageNo=${pageNo}&pageSize=${pageSize}&category=${category}`);
    const data = await res.json();
    if (data.result && data.result.toLocaleLowerCase() === 'success') {
      return data.body.products;
    } else {
      console.log(data);
      return [];
    }
  } catch (error) {
    console.log(error);
    return [];
  }
}


