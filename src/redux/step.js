import { createSlice } from '@reduxjs/toolkit'

export const stepSlice = createSlice({
  name: 'step',
  initialState: {
    value: 0,
  },
  reducers: {
    nextStep: (state) => {
      state.value = state.value += 1;
    },
    prevStep: (state) => {
      state.value = state.value > 0 ? state.value -= 1 : state.value;
    },
  },
})

// Action creators are generated for each case reducer function
export const { nextStep,prevStep } = stepSlice.actions

export default stepSlice.reducer