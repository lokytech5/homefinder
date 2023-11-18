import { create } from "zustand";


interface User {
    _id?: string;
    username: string;
    email: string;
    userType: "User" | "Agent";
    phone?: string;
    agencyName?: string;
    address?: string;
    age?: number;
}

interface UserState {
    user: User | null;
    isPhoneVerified: boolean;
    isEmailVerified: boolean;
    isAuthenticated: boolean;
    error: string | null;
    setUser: (user: User) => void;
    setIsPhoneVerified: (isPhoneVerified: boolean) => void;
    setIsEmailVerified: (isEmailVerified: boolean) => void;
    setError: (error: string) => void;
    logout: () => void;
}

const useUserStore = create<UserState>((set) => ({
    user: null,
    isPhoneVerified: false,
    isEmailVerified: false,
    isAuthenticated: false,
    error: null,
    setUser: (user) => set((state) => ({
        user,
        isAuthenticated: !!user,
        isPhoneVerified: state.isPhoneVerified,
        isEmailVerified: state.isEmailVerified,
        error: state.error
    })),
    setIsPhoneVerified: (isPhoneVerified) => set({ isPhoneVerified }),
    setIsEmailVerified: (isEmailVerified) => set({ isEmailVerified }),
    setError: (error) => set({ error }),
    logout: () => set({ user: null, isAuthenticated: false, isPhoneVerified: false, isEmailVerified: false, error: null}),
}))

export default useUserStore;