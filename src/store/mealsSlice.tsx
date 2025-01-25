
import { createSlice } from "@reduxjs/toolkit";
import meals from "./meals";

interface Meal {
    name: string,
    price: number,
    selected: boolean
}

interface MealState {
    meals: Meal[];
    noOfPeople: number;
}

const initialState: MealState = {
    meals: meals,
    noOfPeople: 30
}

const mealsSlice = createSlice({
    name: "meals",
    initialState,

    reducers: {
        setPeople : (state, action) => {
            const val = action.payload;
            if (val >= 0 && val <= 50)
                state.noOfPeople = action.payload;
        },

        toggle : (state, action) => {
            const index = state.meals.findIndex(meal => meal.name == action.payload);
            if (index !== -1) {
                state.meals[index].selected = !state.meals[index].selected;
            }
        }
    }

});

export const { setPeople, toggle } = mealsSlice.actions;
export default mealsSlice.reducer;