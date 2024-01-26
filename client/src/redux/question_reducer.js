import { createSlice } from "@reduxjs/toolkit"
export const questionReducer = createSlice({
    name: "questions",
    initialState: {
        queue: [],
        answers: [],
        trace: 0
    },
    reducers: {
        startExamAction: (state, action) => {
            return {
                ...state,
                queue: action.payload,
            }
        },
        moveNextAction: (state, action) => {
            return {
                ...state,
                trace: state.trace + 1
            }
        },
        movePreviousAction: (state, action) => {
            return {
                ...state,
                trace: state.trace - 1
            }
        },
    }
})
export default questionReducer.reducer
export const { startExamAction, moveNextAction, movePreviousAction } = questionReducer.actions