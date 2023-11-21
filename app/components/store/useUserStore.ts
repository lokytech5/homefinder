import { create } from "zustand";
import { LoginUserResponse, RegisterAgentData, RegisterUserData } from "../types";

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
    setUserFromLogin: (userData: Omit<LoginUserResponse, 'token'>) => void;
    setAgentFromLogin: (userData: Omit<LoginUserResponse, 'token'>) => void;
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

     // New methods for login
     setUserFromLogin: (userData: Omit<LoginUserResponse, 'token'>) => {
        const user: User = {
            _id: userData._id,
            username: userData.username,
            email: userData.email,
            userType: userData.userType,
            // Other fields are not available in login response
        };
        set({ 
            user, 
            isAuthenticated: true,
            // other properties as needed
        });
    },
    setAgentFromLogin: (userData: Omit<LoginUserResponse, 'token'>) => {
        const user: User = {
            _id: userData._id,
            username: userData.username,
            email: userData.email,
            userType: userData.userType,
            // Other fields are not available in login response
        };
        set({ 
            user,
            isAuthenticated: true,
            // other properties as needed
        });
    },
    setIsPhoneVerified: (isPhoneVerified) => set({ isPhoneVerified }),
    setIsEmailVerified: (isEmailVerified) => set({ isEmailVerified }),
    setError: (error) => set({ error }),
    logout: () => set({ user: null, isAuthenticated: false, isPhoneVerified: false, isEmailVerified: false, error: null}),
}))

export default useUserStore;