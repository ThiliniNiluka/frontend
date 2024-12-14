import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { axiosInstance, handleAxiosError } from '../../../services/axios';
import { LoginCredentials, RegisterCredentials } from '../interfaces/authinterface';

export interface authState {
    user: object | null;
    loading: boolean;
    message: string | null;
    error: boolean;
    success: boolean;
    valid: boolean;
}

const initialState: authState = {
    user: null,
    loading: false,
    message: null,
    error: false,
    success: false,
    valid: false
}

export const login = createAsyncThunk(
    `auth/login`,
    async(credentials: LoginCredentials, { rejectWithValue }) => {
        try{
            const response = await axiosInstance.post<authState>(`api/login`, credentials);

            console.log('response', response);
            console.log('response data' , response.data);
            return response.data;
        } catch(error) {
            const errorMessage = handleAxiosError(error);
            return rejectWithValue(errorMessage);
        }
    }
);

export const register = createAsyncThunk(
    `auth/register`,
    async(userData: RegisterCredentials, {rejectWithValue}) => {
        try{
            const response = await axiosInstance.post<authState>(`api/register`, userData);
            return response.data;
        }catch(error){
            const errorMessage = handleAxiosError(error);
            return rejectWithValue(errorMessage);
        }
    }
);

export const logout = createAsyncThunk(
    `/logout`,
    async(_, thunkAPI) => {
    try{
        await axiosInstance.post(`api/logout`);
    }catch(error){
        const errorMessage = handleAxiosError(error);
        return thunkAPI.rejectWithValue(errorMessage);
    }
    }
);

export const checkToken = createAsyncThunk(`auth/checkToken`, async () => {
    try{
        const response = await axiosInstance.post<authState>(`api/validate-token`);
        return response.data;
    }catch(error){
throw new Error('Token Invalid or Expired');
    }
});

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        clearError: (state) => {
            state.error = false;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(login.pending, (state) => {
                state.loading = true;
            })
            .addCase(login.fulfilled, (state, action) => {
                state.loading = false;
                state.error = false;
                state.success = true;

                const {message, user} = action.payload;
                state.message = message;
                state.user = user;

                console.log(action.payload);
                console.log(state.user);
            })
            .addCase(login.rejected, (state, action) => {
                state.loading = false;
                state.error = true;
                state.message = action.payload as string;
                // toast.error(state.message);
              })
            .addCase(register.pending, (state) => {
                state.loading = true;
            })
            .addCase(register.fulfilled, (state, action) => {
                state.loading = false;
                state.error = false;
                state.success = true;

                const {message, user} = action.payload;
                state.message = message;
                state.user = user;

                console.log(action.payload);
                console.log(state.user);
            })
            .addCase(register.rejected, (state, action) => {
                state.loading = false;
                state.error = true;
                state.message = action.payload as string;
            })
            .addCase(logout.fulfilled, (state) => {
                state.user = null;
                state.message = null;
                state.success = false;
            })
            .addCase(checkToken.pending, (state) => {
                state.loading = true;
            })
            .addCase(checkToken.fulfilled, (state, action) => {
                state.loading = false;
                if(action.payload.valid) {
                    state.user = action.payload.user;
                    state.message = action.payload.message;
                    state.success = true;
                }else {
                    state.user = null;
                    state.message = action.payload.message;
                    state.error = true;
                }
            })
            .addCase(checkToken.rejected, (state, action) => {
                state.loading = false;
                state.error = true;
                state.message = action.payload as string;
            })
    },

})

export const {clearError} = authSlice.actions;
export default authSlice.reducer;