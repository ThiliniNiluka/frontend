import axios, { AxiosError } from "axios";

export const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL,
    timeout: 10000,
    headers: {
        'Content-Type' : 'application/json',
    },
    withCredentials: true,
});

interface ErrorResponse{
    error: string;
}

export const handleAxiosError = (error: unknown): string => {
    if(axios.isAxiosError(error)) {
        const axiosError = error as AxiosError<ErrorResponse>;
        if(axiosError.response) {
            if(axiosError.response.data){
                return axiosError.response.data.error || 'An unknown error occurred'; 
            }else {
                return axiosError.message;
            }
        }else if(axiosError.message){
            return axiosError.message;
        }
    }
    return 'An unknown error occurred';
}