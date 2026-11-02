import { createSlice } from "@reduxjs/toolkit";

// Load cart from LocalStorage
const loadCart = () => {

  try {

    const savedCart = localStorage.getItem("cart");

    return savedCart ? JSON.parse(savedCart) : [];

  } catch (error) {

    console.error("Error loading cart:", error);

    return [];

  }

};

// Initial State
const initialState = {
  items: loadCart()
};

const cartSlice = createSlice({

  name: "cart",

  initialState,

  reducers: {

    // Add product or increase quantity
    addToCart: (state, action) => {

      const product = action.payload;

      const existingItem = state.items.find(
        (item) => item.id === product.id
      );

      if (existingItem) {

        existingItem.quantity += 1;

      } else {

        state.items.push({
          ...product,
          quantity: 1
        });

      }

    },

    // Remove product completely
    removeFromCart: (state, action) => {

      state.items = state.items.filter(
        (item) => item.id !== action.payload
      );

    },

    // Increase quantity
    increaseQuantity: (state, action) => {

      const item = state.items.find(
        (item) => item.id === action.payload
      );

      if (item) {
        item.quantity += 1;
      }

    },

    // Decrease quantity
    decreaseQuantity: (state, action) => {

      const item = state.items.find(
        (item) => item.id === action.payload
      );

      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }

    },

    // Clear entire cart
    clearCart: (state) => {

      state.items = [];

    }

  }

});

export const {
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart
} = cartSlice.actions;

export default cartSlice.reducer;