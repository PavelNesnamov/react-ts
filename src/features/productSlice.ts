import { createSlice } from '@reduxjs/toolkit';
import type { IProductState } from './types';
import { loadProducts } from './productAction';

const initialState: IProductState = {
  products: [],
  isLoading: false,
  error: "",
};

export const productSlice = createSlice({
  // уникальное имя slice
  name: 'productSlice',
  // передаем начальное состояние
  initialState,
  // описание сихронных actions
  reducers: {},
  // описание ассинхронных action
  extraReducers: (builder) => {
    builder
    // ожидание данных
      .addCase(loadProducts.pending, (state) => {
        state.isLoading = true;
      })
      // получение данных
      .addCase(loadProducts.fulfilled, (state, action) => {
        state.isLoading = false
        state.products = action.payload;
      })
      // данные не получены
      .addCase(loadProducts.rejected, (state, action) => {
        state.isLoading = false
        state.products = []
        state.error = action.payload as string
      })
  },
});

export default productSlice;
// export const { } = productSlice.actions