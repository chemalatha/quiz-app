import { createSlice } from '@reduxjs/toolkit'

export const resultsSlice = createSlice({
  name: 'results',
  initialState: {
    value: [],
  },
  reducers: {
    addQuestion: (state, action) => {
        state.value = [...state.value,action.payload]
      },
  },
})

// Action creators are generated for each case reducer function
export const { addQuestion } = resultsSlice.actions

export default resultsSlice.reducer