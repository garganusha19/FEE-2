import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "./cartSlice";

export const store = configureStore({

  reducer: {

    cart: cartReducer

  }

});

// Save Redux cart state to LocalStorage
store.subscribe(() => {

  const cart = store.getState().cart.items;

  try {

    localStorage.setItem(
      "cart",
      JSON.stringify(cart)
    );

  } catch (error) {

    console.error("Error saving cart:", error);

  }

});