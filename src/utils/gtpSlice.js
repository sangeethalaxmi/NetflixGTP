import { createSlice } from "@reduxjs/toolkit";

const gtpSlice = createSlice({
  name: "gtp",
  initialState: {
    showGtpSearchBox: false,
  },
  reducers: {
    setShowGtpSearchBox: (state) => {
      state.showGtpSearchBox = !state.showGtpSearchBox;
    },
  },
});

export const { setShowGtpSearchBox } = gtpSlice.actions;
export default gtpSlice.reducer;
