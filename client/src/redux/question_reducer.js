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
            let { question, answers } = action.payload
            return {
                ...state,
                queue: question,
                answers
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
        resetAllAction: () => {
            return {
                queue: [],
                answers: [],
                trace: 0
            }
        }
    }
})
export default questionReducer.reducer
export const { startExamAction, moveNextAction, movePreviousAction, resetAllAction } = questionReducer.actions