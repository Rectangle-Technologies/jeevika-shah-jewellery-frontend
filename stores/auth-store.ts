// stores/auth-store.ts
import { create } from "zustand";

interface AuthState {
    token: string | null;
    isAuthenticated: boolean;
    login: (token: string) => void;
    logout: () => void;
    restore: () => void;
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
    restore: () => {
        const storedToken = localStorage.getItem("at");
        set({ token: storedToken, isAuthenticated: !!storedToken });
    },
}));
