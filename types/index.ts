
interface Item {
    _id: string,
    name: string,
    description: string,
    category: string,
    images: string[],
    sizes: {
        displayName: string,
        weightOfMetal: number
    }[],
    karatOfGold: number,
    weightOfGold: number,
    karatOfDiamond: number,
    costOfDiamond: number,
    costOfLabour: number,
    miscellaneousCost: number,
    isCentralisedDiamond: boolean,
    isNaturalDiamond: boolean,
    isLabDiamond: boolean,
    isActive: boolean
}

interface Address {
    line1: string;
    line2: string;
    city: string;
    state: string;
    country: string;
    zip: string;
}

interface CartProduct {
    productId: string; // assuming _id from MongoDB, so it's a string
    quantity: number;
    size: string;
}

interface Cart {
    products: CartProduct[];
}

interface User {
    name: string; // Combine firstName + lastName in frontend before sending
    email: string;
    phone?: string;
    address?: Address;
    dob?: string; // or Date if you're parsing to Date object
    cart?: Cart;
}


