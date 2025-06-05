'use client';
export function encodeMsg(msg: string) {
    return typeof window !== "undefined"
        ? window.btoa(unescape(encodeURIComponent(msg)))
        : "";
}

export function decodeMsg(encoded: string) {
    return typeof window !== "undefined"
        ? decodeURIComponent(escape(window.atob(encoded)))
        : "";
}
