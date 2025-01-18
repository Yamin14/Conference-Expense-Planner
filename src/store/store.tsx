
import { configureStore } from "@reduxjs/toolkit";
import roomsReducer from './roomSlice'
import addOnsReducer from './addOnSlice'
import mealsReducer from './mealsSlice'

const store = configureStore({
    reducer: {
        rooms: roomsReducer,
        addOns: addOnsReducer,
        meals: mealsReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;