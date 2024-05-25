import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState = { user: "" };

const HomeSlice = createSlice({
  name: "Home",
  initialState,
  reducers: {
    USER_LOGGED_IN(state, action: PayloadAction<any>) {
      if (action.payload.user) {
        let { user } = action.payload;
        return { ...state, user: user };
      }
      return state;
    },
    USER_LOGGED_OUT(state) {
      return { ...state, user: "" };
    },
  },
});

const { actions, reducer } = HomeSlice;
export const { USER_LOGGED_IN, USER_LOGGED_OUT } = actions;
export default reducer;
