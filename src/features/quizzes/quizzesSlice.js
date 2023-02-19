import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { addQuizToTopic } from "../topics/topicsSlice";

// Slice definition
export const quizzesSlice = createSlice({
  name: 'quizzes',
  initialState: {
    quizzes: {},
  },
  reducers: {
    addQuiz: (state, action) => { // format: { id: '123', name: 'quiz name', topicId: '456', cardIds: ['1', '2', '3', ...]}
      const { id } = action.payload;
      state.quizzes[id] = action.payload
    },
  }
}
);

export const newQuizForTopic = (quiz) => {
  const { topicId, id } = quiz;
  return (dispatch) => {
    dispatch(quizzesSlice.actions.addQuiz(quiz));
    dispatch(addQuizToTopic({ quizId: id, topicId: topicId }));
  };
};

// Selectors
export const selectQuizzes = (state) => state.quizzes.quizzes;

// Exports
export const { addQuiz } = quizzesSlice.actions;
export default quizzesSlice.reducer;
