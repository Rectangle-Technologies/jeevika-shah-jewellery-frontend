export const jewelleryItems: Item[] = [
    {
        id: '1',
        name: 'Emerald Scattered Gems Bracelet',
        price: 100,
        quantity: 1,
        image_url: '/assets/landing-page/jewellery-1.jpg',
    },
    {
        id: '2',
        name: 'Emerald Scattered Gems Bracelet 2',
        price: 200,
        quantity: 1,
        image_url: '/assets/landing-page/jewellery-1.jpg',
    },
    {
        id: '3',
        name: 'Jewellery 3',
        price: 300,
        quantity: 1,
        image_url: '/assets/landing-page/jewellery-1.jpg',
    },
    {
        id: '4',
        name: 'Jewellery 4',
        price: 400,
        quantity: 1,
        image_url: '/assets/landing-page/jewellery-1.jpg',
    },
    {
        id: '5',
        name: 'Jewellery 5',
        price: 500,
        quantity: 1,
        image_url: '/assets/landing-page/jewellery-1.jpg',
    },
    {
        id: '6',
        name: 'Jewellery 6',
        price: 600,
        quantity: 1,
        image_url: '/assets/landing-page/jewellery-1.jpg',
    },
    {
        id: '7',
        name: 'Jewellery 7',
        price: 700,
        quantity: 1,
        image_url: '/assets/landing-page/jewellery-1.jpg',
    }
]


export const jewelleryCategories: { title: string, image_url: string }[] = [
    { title: 'Bracelet', image_url: '/assets/landing-page/bracelet.webp' },
    { title: 'Necklace', image_url: '/assets/landing-page/necklace.webp' },
    { title: 'Earrings', image_url: '/assets/landing-page/earrings.webp' },
    { title: 'Rings', image_url: '/assets/landing-page/rings.webp' },
];


export const navbarLinks = [
    {
        title: "Collections", link: "/collections", subLinks: [
            { title: "Bracelet", link: "/collections/bracelet" },
            { title: "Necklace", link: "/collections/necklace" },
            { title: "Earrings", link: "/collections/earrings" },
            { title: "Rings", link: "/collections/rings" },
            { title: "Shop All", link: "/collections" },
        ]
    },
    { title: "About Us", link: "/about-us" },
]

