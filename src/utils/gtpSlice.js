import { createSlice } from "@reduxjs/toolkit";

const gtpSlice = createSlice({
  name: "gtp",
  initialState: {
    showGtpSearchBox: false,
    gtpMovies: null,
  },
  reducers: {
    setShowGtpSearchBox: (state) => {
      state.showGtpSearchBox = !state.showGtpSearchBox;
    },
    addGTPSearchMovies: (state, action) => {
      state.gtpMovies = action.payload;
    },
  },
});

export const { setShowGtpSearchBox, addGTPSearchMovies } = gtpSlice.actions;
export default gtpSlice.reducer;
