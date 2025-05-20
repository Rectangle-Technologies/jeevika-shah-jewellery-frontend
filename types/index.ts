
interface Item{
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

interface User{
    firstName: string,
    lastName: string,
    email: string,
}

