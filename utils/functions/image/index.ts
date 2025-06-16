export const imgSrcModifier = (text: string) => {
    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
        const txt = document.createElement("textarea");
        txt.innerHTML = text;
        return txt.value;
    }
    return text;
};
