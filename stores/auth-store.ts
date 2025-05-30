// stores/auth-store.ts
import { verifyToken } from "@/utils/functions/user";
import { create } from "zustand";

interface AuthState {
    token: string | null;
    isAuthenticated: boolean;
    login: (token: string) => void;
    logout: () => void;
    restore: () => Promise<void>;
}

export const useAuthStore = create<AuthState>((set) => ({
    token: null,
    isAuthenticated: false,
    login: (token: string) => {
        localStorage.setItem("at", token);
        set({ token, isAuthenticated: true });
    },
    logout: () => {
        localStorage.removeItem("at");
        set({ token: null, isAuthenticated: false });
    },
    restore: async () => {
        const storedToken = localStorage.getItem("at");
        const isTokenValid = storedToken ? await verifyToken(storedToken) : false;
        if (isTokenValid) {
            set({ token: storedToken, isAuthenticated: true });
        } else {
            set({ token: null, isAuthenticated: false });
        }
    },
}));
