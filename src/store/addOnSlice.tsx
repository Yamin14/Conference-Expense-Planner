
import { createSlice } from "@reduxjs/toolkit";
import addOns from "./addOns";

interface AddOn {
    name: string,
    img: string,
    price: number,
    quantity: number
}

interface AddOnState {
    addOns: AddOn[];
}

const initialState: AddOnState = {
    addOns: addOns
}

const addOnSlice = createSlice({
    name: "addOns",
    initialState,

    reducers: {
        incremenet : (state, action) => {
            const index = state.addOns.findIndex(addOn => addOn.name == action.payload);
            if (index !== -1)
                state.addOns[index].quantity++;
        },

        decremenet : (state, action) => {
            const index = state.addOns.findIndex(addOn => addOn.name == action.payload);
            if (index !== -1 && state.addOns[index].quantity >0)
                state.addOns[index].quantity--;
        },
    }

});

export const { incremenet, decremenet } = addOnSlice.actions;
export default addOnSlice.reducer;