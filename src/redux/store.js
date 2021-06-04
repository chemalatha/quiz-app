import { configureStore } from '@reduxjs/toolkit'
import stepReducer from './step';
import resultsReducer from './results';

export default configureStore({
    reducer: {
      results: resultsReducer,
      step: stepReducer,
    },
  })