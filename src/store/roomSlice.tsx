import { createSlice } from "@reduxjs/toolkit";
import rooms from "./rooms";

interface Room {
    name: string,
    img: string,
    capacity: number,
    price: number,
    quantity: number
}

interface RoomState {
    rooms: Room[];
}

const initialState: RoomState = {
    rooms: rooms
}

const roomSlice = createSlice({
    name: "rooms",
    initialState,

    reducers: {
        incremenet : (state, action) => {
            const index = state.rooms.findIndex(room => room.name == action.payload);
            if (index !== -1)
                state.rooms[index].quantity++;
        },

        decremenet : (state, action) => {
            const index = state.rooms.findIndex(room => room.name == action.payload);
            if (index !== -1 && state.rooms[index].quantity >0)
                state.rooms[index].quantity--;
        },
    }

});

export const { incremenet, decremenet } = roomSlice.actions;
export default roomSlice.reducer;