import { CentralPricing } from 'js-product-pricing-calculator';


export const jewelleryCategories: { title: string, image: string }[] = [
    { title: 'Bracelet', image: '/assets/landing-page/bracelet.jpeg' },
    { title: 'Necklace', image: '/assets/landing-page/necklace.jpeg' },
    { title: 'Earrings', image: '/assets/landing-page/earrings.webp' },
    { title: 'Rings', image: '/assets/landing-page/rings.jpeg' },
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
    { title: "Brand Journey", link: "/brand-journey" },
]

export const footerOptions: { title: string; link: string }[] = [
    {
        title: "Brand Journey",
        link: "/brand-journey",
    },
    {
        title: "Exchange & Refund Policy",
        link: "/policies/exchange-and-refund-policy",
    },
    {
        title: "Privacy Policy",
        link: "/policies/privacy-policy",
    },
    {
        title: "Terms & Conditions",
        link: "/policies/terms-and-conditions",
    },
    {
        title: "Shipping Policy",
        link: "/policies/shipping-policy",
    },
    {
        title: "Gold Hallmark",
        link: "/policies/gold-hallmark",
    }
];

export const sortingCriteria = [
    { label: 'Alphabetically, A-Z', value: 'a-z' },
    { label: 'Alphabetically, Z-A', value: 'z-a' },
    { label: 'Price, Low to High', value: 'low-to-high' },
    { label: 'Price, High to Low', value: 'high-to-low' },
    { label: 'Date, New to Old', value: 'new-to-old' },
    { label: 'Date, Old to New', value: 'old-to-new' },
]

export const centralPricing: CentralPricing = {
    goldPricePerGram: 6000,
    naturalDiamondPricePerCarat: 50000,
    labDiamondPricePerCarat: 20000
};
