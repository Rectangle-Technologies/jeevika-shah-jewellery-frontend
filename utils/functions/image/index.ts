export const imgSrcModifier = (text: string) => {
    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
        const txt = document.createElement("textarea");
        txt.innerHTML = text;
        return txt.value;
    }
    return text;
};


export function computeDiamondType(type: string) {
    if (type.toLowerCase() === 'natural') {
        return true;
    } else if (type.toLowerCase() === 'centralised') {
        return false;
    } else if (type.toLowerCase() === 'lab-grown') {
        return false;
    } else {
        return false;
    }
}
