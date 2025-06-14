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

export async function getProducts(pageNo: number, pageSize: number, category: string, isLandingPageProduct: boolean): Promise<Item[]> {
  try {
    let url = "";
    if (category.toLowerCase() === 'all') {
      category = '';
    }
    if (isLandingPageProduct) {
      url = `${process.env.API_URL}/products?pageNo=${pageNo}&pageSize=${pageSize}&category=${category}&isLandingPageProduct=${isLandingPageProduct}`;
    } else {
      url = `${process.env.API_URL}/products?pageNo=${pageNo}&pageSize=${pageSize}&category=${category}`
    }
    const res = await fetch(url);
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

