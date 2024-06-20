import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  drawerArr: [],
};

const DrawerSlice = createSlice({
  name: "drawer",
  initialState,
  reducers: {
    openCart: (state) => {
      state.isOpen = !state.isOpen;
    },
    addCard: (state, action) => {
      if (state.drawerArr.some((item) => item.id === action.payload.id)) {
        state.drawerArr.find(
          (item) => item.id === action.payload.id
        ).count += 1;
      } else {
        state.drawerArr = [...state.drawerArr, { ...action.payload, count: 1 }];
      }

      //   console.log(state.drawerArr);
    },
    removeCard: (state, action) => {
      state.drawerArr = state.drawerArr.filter(
        (item) => item.id !== action.payload
      );
    },
    increaseCount: (state, action) => {
      let item = state.drawerArr.find((item) => item.id === action.payload);
      item.count += 1;
    },
    decreaseCount: (state, action) => {
      let item = state.drawerArr.find((item) => item.id === action.payload);
      if (item.count < 2) {
        state.drawerArr = state.drawerArr.filter(
          (item) => item.id !== action.payload
        );
      }
      item.count -= 1;
    },
  },
});
export const { openCart, addCard, removeCard, increaseCount, decreaseCount } =
  DrawerSlice.actions;
export default DrawerSlice.reducer;
