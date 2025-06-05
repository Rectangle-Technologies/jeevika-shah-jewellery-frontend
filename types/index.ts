
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

interface IndividualCartItem {
    productId: string;
    quantity: number;
    size: string;
    diamondType: string;
    item: Item
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
    diamondType?: string;
}

interface Cart {
    products: CartProduct[];
}

interface OrderProduct {
    receiverDetails: {
        address: {
            line1: string;
            city: string;
            state: string;
            country: string;
            zip: string;
        };
        name: string;
        phone: string;
    };
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
        };
        quantity: number;
        price: number;
        size: string;
        diamondType: string;
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


