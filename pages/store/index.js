import { cardReducer } from "./slices/cardSlice";
import { configureStore } from "@reduxjs/toolkit";

const store =configureStore({
    reducer:{
        cards:cardReducer
    }
})

export {store}