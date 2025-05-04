import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import playNowMovieReducer from "../utils/playNowMovieSlice";
const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: playNowMovieReducer,
  },
});
export default appStore;
