import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance, handleAxiosError } from "../../../services/axios";

export interface Inventory {
    id?: number;
    name?: string;
    categories?: number;
    totalProducts?: number;
    revenue?: string;
    topSelling?: number
    topSellingCost?: string;
    lowStock?: number;
    notInStock?: number;
    price?: string;
    image?: string;
    buyingPrice?: string;
    quantity?: string;
    thresholdValue?: string;
    availability?: string;
}

export interface inventoryState {
    inventory: Inventory | null;
    loading: boolean;
    message: string | null;
    error: boolean;
    success: boolean;
    inventoryData: any;
}

const inventorySlice = createSlice({
    name: 'inventory',
    initialState,
    reducers: {
      updateInventoryUI(state, action) {
        state.message = action.payload as string;
      },
      resetInventory: (state) => {
        state.loading = false;
        state.success = false;
        state.error = false;
        state.message = '';
      },
    },
    extraReducers(builder) {
      builder
        //   Create a inventory
        .addCase(createInventory.pending, (state) => {
          state.loading = true;
        })
        .addCase(createInventory.fulfilled, (state, action) => {
          state.loading = false;
          state.success = true;
          state.message = action.payload.message;
          state.inventory = action.payload.inventory;
        //   toast.success(state.message);
          console.log(action.payload);
          console.log(action.payload.inventory);
        })
        .addCase(createInventory.rejected, (state, action) => {
          state.loading = false;
          state.error = true;
          state.message = action.payload as string;
        //   toast.error(state.message);
          console.log(action.payload);
        })
        // Get All inventory data
        .addCase(getAllInventory.pending, (state) => {
            state.loading = true;
        })
        .addCase(getAllInventory.fulfilled, (state, action) => {
            state.loading = false;
            state.success = true;
            state.message = action.payload.message;
            state.inventory = action.payload.inventory;
            console.log(action.payload);
            console.log(action.payload.inventory);
        })
    },
  });
  
  export const createInventory = createAsyncThunk(
    '/inventory/create',
    async (inventoryData: object, thunkAPI) => {
      try {
        console.log('Sending data:', inventoryData);
  
        const response = await axiosInstance.post<inventoryState>(
          '/inventory/create',
          inventoryData,
          {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          }
        );
        console.log('Response:', response.data);
        return response.data;
      } catch (error) {
        const errorMessage = handleAxiosError(error);
        return thunkAPI.rejectWithValue(errorMessage);
      }
    }
  );
  
  export const { updateInventoryUI, resetInventory } =
    inventorySlice.actions;
  
export default inventorySlice.reducer;