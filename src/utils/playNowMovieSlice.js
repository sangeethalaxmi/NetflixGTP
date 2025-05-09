import { createSlice } from "@reduxjs/toolkit";

const playNowMovieSlice = createSlice({
  name: "movies",
  initialState: {
    playNowMovie: null,
    trailerVideo: null,
  },
  reducers: {
    addPlayNowMovie: (state, action) => {
      state.playNowMovie = action.payload;
      //console.log(action.payload);
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
    addPopularMovie: (state, action) => {
      state.popularMovies = action.payload;
    },
    addTopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload;
    },
    addUpcomingMovies: (state, action) => {
      state.upcomingMovies = action.payload;
    },
  },
});

export const {
  addPlayNowMovie,
  addTrailerVideo,
  addPopularMovie,
  addTopRatedMovies,
  addUpcomingMovies,
} = playNowMovieSlice.actions;
export default playNowMovieSlice.reducer;
