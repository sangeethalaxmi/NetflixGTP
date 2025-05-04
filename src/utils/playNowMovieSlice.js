import { createSlice } from "@reduxjs/toolkit";

const playNowMovieSlice = createSlice({
  name: "movies",
  initialState: {
    playNowMovie: null,
    trailerVideo: null,
  },
  reducers: {
    addPlayNowMovie: (state, action) => {
      console.log(state.playNowMovie);
      state.playNowMovie = action.payload;
      //console.log(action.payload);
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
  },
});

export const { addPlayNowMovie, addTrailerVideo } = playNowMovieSlice.actions;
export default playNowMovieSlice.reducer;
