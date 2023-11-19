import { UseMutationResult, useMutation } from "@tanstack/react-query";
import { RegisterAgentData, RegisterAgentResponse } from "../components/types";
import useUserStore from "../components/store/useUserStore";
import { AxiosError } from "axios";
import apiClient from "../components/service/api-client";

interface ErrorResponse {
  error?: string;
  msg?: string;
  message?: string;
  errors?: { msg: string }[]; 
  }

const useRegisterAgent = (): UseMutationResult<RegisterAgentResponse, AxiosError<ErrorResponse>, RegisterAgentData> => {
    const setAgent = useUserStore((state) => state.setAgent);
    const setError = useUserStore((state) => state.setError);
    return useMutation<RegisterAgentResponse, AxiosError<ErrorResponse>, RegisterAgentData>(
        (userData: RegisterAgentData) => {
          return apiClient.post<RegisterAgentResponse>('/agent', userData)
            .then(response => response.data);
          },
          {
            onMutate: (userData) => {
              return userData;
            },
            onSuccess: (response, context) => {
              setAgent(context, response.agentId);
              console.log('Registration successful:', response);
            },
          onError: (error: AxiosError<ErrorResponse>) => {
            let errorMessage: string = error.message;
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
            console.error('Agent registration failed:', errorMessage);
              },
        }
      );
    };

export default useRegisterAgent