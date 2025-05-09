import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import playNowMovieReducer from "../utils/playNowMovieSlice";
import gtpReducer from "./gtpSlice";
import configReducer from "./configSlice";
const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: playNowMovieReducer,
    gtp: gtpReducer,
    config: configReducer,
  },
});
export default appStore;
