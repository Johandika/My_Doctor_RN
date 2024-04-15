import {configureStore} from '@reduxjs/toolkit';
import loadingReducer from '../slices/loadingSlice';

const store = configureStore({
  reducer: {
    loading: loadingReducer,
    // Tambahkan reducer lain di sini
  },
});

export default store;
