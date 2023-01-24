import {configureStore} from "@reduxjs/toolkit";
import Reducer from "./Reducer";

const store = configureStore({
    reducer:{
        task:Reducer
    }
});
export default store;