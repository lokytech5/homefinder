import { create } from "zustand";
import { RegisterAgentData, RegisterAgentResponse, RegisterUserData } from "../types";

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
    setUser: (userData: RegisterUserData, userId: string) => void;
    setAgent: (userData: RegisterAgentData, agentId: string) => void;
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
    
    setUser:(userData: RegisterUserData, userId: string) => {
        const user: User = {
            _id: userId,
            username: userData.username,
            email: userData.email,
            userType: "User",
            // Set other user-specific fields or defaults
        };
        set({ 
            user, 
            isAuthenticated: true, // Assuming user is authenticated after registration
            isPhoneVerified: false, // Set based on your app's logic
            isEmailVerified: false, // Set based on your app's logic
            error: null 
        });
    },

    setAgent :  (agentData: RegisterAgentData, agentId: string)=> {
        const user: User = {
            _id: agentId,
            username: agentData.username,
            email: agentData.email,
            userType: "Agent",
            phone: agentData.phone,
            agencyName: agentData.agencyName,
            address: agentData.address,
            age: agentData.age
        };
        set({ 
            user, 
            isAuthenticated: true,
            isPhoneVerified: false, 
            isEmailVerified: false, 
            error: null 
        });
    },
    setIsPhoneVerified: (isPhoneVerified) => set({ isPhoneVerified }),
    setIsEmailVerified: (isEmailVerified) => set({ isEmailVerified }),
    setError: (error) => set({ error }),
    logout: () => set({ user: null, isAuthenticated: false, isPhoneVerified: false, isEmailVerified: false, error: null}),
}))

export default useUserStore;