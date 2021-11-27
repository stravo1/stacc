import { configureStore } from "@reduxjs/toolkit";

import dailyReducer from "./slices/dailySlice";
import weeklyReducer from "./slices/weeklySlice";
import monthlyReducer from "./slices/monthlySlice";
import generalReducer from "./slices/generalSlice";

export default configureStore({
    reducer: {
        general: generalReducer,
        daily: dailyReducer,
        weekly: weeklyReducer,
        monthly: monthlyReducer,
    }
})