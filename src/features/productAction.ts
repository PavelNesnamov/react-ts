import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// сщздание фсштхронного action
export const loadProducts = createAsyncThunk(
    // уникальное имя action
  'products/loadProducts',
  // действие, которое произволит action
  async (_, thunkAPI) => {
    // пробуем получить данные
    try {
      const response = await axios.get('https://fakestoreapi.com/products');
      return response.data;
    //   обрабатываем ошибку, есди не вышло
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
