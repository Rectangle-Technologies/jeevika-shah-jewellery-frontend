
interface Item {
    _id: string,
    name: string,
    description: string,
    category: string,
    images: string[],
    sizes: {
        displayName: string,
        weightOfMetal: number,
        _id?: string
    }[],
    karatOfGold: number,
    weightOfGold: number,
    costOfNaturalDiamond: number,
    costOfLabDiamond: number,
    costOfLabour: number,
    miscellaneousCost: number,
    isCentralisedDiamond: boolean,
    isNaturalDiamond: boolean,
    isLabDiamond: boolean,
    isActive: boolean,
    isLandingPageProduct: boolean,
    calculatedPrice?: number
    isDeleted: boolean,
    isChatWithUs: boolean,
    skuId: string
}

interface IndividualCartItem {
    productId: string;
    quantity: number;
    size: string;
    diamondType: string;
    karatOfGold: number;
    item: Item
}

interface Address {
    line1: string;
    line2?: string;
    city: string;
    state: string;
    country: string;
    zip: string;
}

interface CartProduct {
    productId: string; // assuming _id from MongoDB, so it's a string
    quantity: number;
    size: string;
    diamondType: string;
    karatOfGold: string;
}

interface Cart {
    products: CartProduct[];
}

interface ReceiverDetails {
    address: Address;
    name: string;
    phone: string;
}

interface OrderProduct {
    receiverDetails: ReceiverDetails;
    customOrderDetails: {
        isCustomOrder: boolean;
    };
    _id: string;
    userId: {
        _id: string;
        name: string;
    };
    products: Array<{
        productId: {
            _id: string;
            name: string;
            images: string[];
        };
        quantity: number;
        price: number;
        size: string;
        diamondType: string;
        karatOfGold: number;
        _id: string;
    }>;
    totalAmount: number;
    status: string;
    paymentStatus: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
    razorpayPaymentId?: string; // Optional, as not all objects have this
}

interface User {
    name: string; // Combine firstName + lastName in frontend before sending
    email: string;
    phone?: string;
    address?: Address;
    dob?: string; // or Date if you're parsing to Date object
    cart?: Cart;
}


