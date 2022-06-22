import { configureStore } from "@reduxjs/toolkit";

import PostReducer from "./features/postSlice"
export default configureStore({
    reducer:{
        app:PostReducer,
    }
});