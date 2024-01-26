import { createSlice } from "@reduxjs/toolkit"
export const resultReducer = createSlice({
    name: "result",
    initialState: {
        userId: null,
        result: []
    },
    reducers: {
        setUserId: (state, action) => {
            state.userId = action.payload;
        }
    }
})
export default resultReducer.reducer
export const { setUserId } = resultReducer.actions