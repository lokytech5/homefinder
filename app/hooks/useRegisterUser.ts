import { UseMutationResult, useMutation } from "@tanstack/react-query";
import { RegisterUserData, RegisterUserResponse } from "../components/types";
import { AxiosError } from "axios";
import useUserStore from "../components/store/useUserStore";
import apiClient from "../components/service/api-client";


interface ErrorResponse {
    error?: string;
    msg?: string;
    message?: string;
    errors?: { msg: string }[]; 
  }

const useRegisterUser = (): UseMutationResult<RegisterUserResponse, AxiosError<ErrorResponse>, RegisterUserData> => {
    const setUser = useUserStore((state) => state.setUser);
    const setError = useUserStore((state) => state.setError);

    return useMutation<RegisterUserResponse, AxiosError<ErrorResponse>, RegisterUserData, RegisterUserData>(
      (userData: RegisterUserData) => {
        return apiClient.post<RegisterUserResponse>('/user', userData)
          .then(response => response.data);
      },
      {
        onMutate: (userData) => {
          // Return userData as context for use in onSuccess
          return userData;
        },
        onSuccess: (data, context) => {
          // Use context here which is the userData
          setUser(context, data._id);
          console.log('Registration successful:', data);
        },
        onError: (error: AxiosError<ErrorResponse>, context) => {
            let errorMessage: string = error.message; // Default message
            if (error.response && error.response.data) {
                if (error.response.data.error) {
                    errorMessage = error.response.data.error;
                } else if (error.response.data.msg) {
                    errorMessage = error.response.data.msg;
                } else if (error.response.data.message) {
                    errorMessage = error.response.data.message;
                } else if (error.response.data.errors) {
                    errorMessage = error.response.data.errors.map(e => e.msg).join(', ');
                }
            }
            setError(errorMessage);
            console.error('Registration failed:', errorMessage);
        },
      }
    );
};
export default useRegisterUser