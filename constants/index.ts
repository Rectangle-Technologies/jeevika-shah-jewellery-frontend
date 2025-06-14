export const jewelleryItems: Item[] = [
    {
        _id: "1",
        name: "Elegant Gold Ring",
        description: "A beautifully crafted 22K gold ring with a central diamond.",
        category: "Rings",
        images: [
            "/assets/landing-page/jewellery-1-primary.webp",
            "/assets/landing-page/jewellery-1.jpg"
        ],
        sizes: [
            { displayName: "Small", weightOfMetal: 3.5 },
            { displayName: "Medium", weightOfMetal: 4.0 }
        ],
        karatOfGold: 22,
        weightOfGold: 4.0,
        karatOfDiamond: 18,
        costOfDiamond: 15000,
        costOfLabour: 3000,
        miscellaneousCost: 1000,
        isCentralisedDiamond: false,
        isNaturalDiamond: true,
        isLabDiamond: false,
        isActive: true
    },
    {
        _id: "2",
        name: "Modern Diamond Pendant",
        description: "Stylish pendant with lab-grown diamonds set in 18K gold.",
        category: "Necklaces",
        images: [
            "/assets/landing-page/jewellery-1-primary.webp",
            "/assets/landing-page/jewellery-1.jpg"
        ],
        sizes: [
            { displayName: "Standard", weightOfMetal: 2.2 }
        ],
        karatOfGold: 18,
        weightOfGold: 2.2,
        karatOfDiamond: 14,
        costOfDiamond: 8000,
        costOfLabour: 2500,
        miscellaneousCost: 500,
        isCentralisedDiamond: true,
        isNaturalDiamond: false,
        isLabDiamond: true,
        isActive: true
    },
    {
        _id: "3",
        name: "Classic Gold Bangle",
        description: "Traditional gold bangle, perfect for weddings and festivals.",
        category: "Bangles",
        images: [
            "/assets/landing-page/jewellery-1-primary.webp",
            "/assets/landing-page/jewellery-1.jpg"
        ],
        sizes: [
            { displayName: "Small", weightOfMetal: 12.5 },
            { displayName: "Large", weightOfMetal: 15.0 }
        ],
        karatOfGold: 22,
        weightOfGold: 13.0,
        karatOfDiamond: 0,
        costOfDiamond: 0,
        costOfLabour: 3500,
        miscellaneousCost: 750,
        isCentralisedDiamond: false,
        isNaturalDiamond: true,
        isLabDiamond: false,
        isActive: true
    },
    {
        _id: "4",
        name: "Diamond Stud Earrings",
        description: "Elegant earrings with natural diamonds and 14K gold.",
        category: "Earrings",
        images: [
            "/assets/landing-page/jewellery-1-primary.webp",
            "/assets/landing-page/jewellery-1.jpg"
        ],
        sizes: [
            { displayName: "Standard", weightOfMetal: 1.8 }
        ],
        karatOfGold: 14,
        weightOfGold: 1.8,
        karatOfDiamond: 18,
        costOfDiamond: 12000,
        costOfLabour: 2200,
        miscellaneousCost: 400,
        isCentralisedDiamond: false,
        isNaturalDiamond: true,
        isLabDiamond: false,
        isActive: true
    },
    {
        _id: "5",
        name: "Contemporary Bracelet",
        description: "Modern design bracelet with a blend of gold and lab diamonds.",
        category: "Bracelets",
        images: [
            "/assets/landing-page/jewellery-1-primary.webp",
            "/assets/landing-page/jewellery-1.jpg"
        ],
        sizes: [
            { displayName: "Adjustable", weightOfMetal: 6.0 }
        ],
        karatOfGold: 18,
        weightOfGold: 6.0,
        karatOfDiamond: 16,
        costOfDiamond: 9000,
        costOfLabour: 2800,
        miscellaneousCost: 600,
        isCentralisedDiamond: true,
        isNaturalDiamond: false,
        isLabDiamond: true,
        isActive: true
    },
    {
        _id: "6",
        name: "Vintage Gold Necklace",
        description: "Heavily embellished vintage style necklace in 22K gold.",
        category: "Necklaces",
        images: [
            "/assets/landing-page/jewellery-1-primary.webp",
            "/assets/landing-page/jewellery-1.jpg"
        ],
        sizes: [
            { displayName: "Long", weightOfMetal: 25.0 }
        ],
        karatOfGold: 22,
        weightOfGold: 25.0,
        karatOfDiamond: 0,
        costOfDiamond: 0,
        costOfLabour: 5000,
        miscellaneousCost: 1000,
        isCentralisedDiamond: true,
        isNaturalDiamond: false,
        isLabDiamond: false,
        isActive: true
    }
];


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
        title: "Buy Back Policy",
        link: "/policies/buy-back-policy",
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
