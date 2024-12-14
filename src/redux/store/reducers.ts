import { combineReducers } from 'redux';
import authSlice from '../features/auth/authSlice';
import inventorySlice from '../features/inventory/inventorySlice';

const rootReducer = combineReducers({
    auth: authSlice,
    inventory: inventorySlice,
})

export default rootReducer;