import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./searchSlice";
import invoiceReducer from "./invoiceSlice";

const store = configureStore({
    reducer: {
        search: searchReducer,
        invoice: invoiceReducer,
    }
})

export default store