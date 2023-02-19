import { createSlice } from "@reduxjs/toolkit";

// Slice definition
export const topicsSlice = createSlice({
  name: 'topics',
  initialState: {
    topics: {},
  },
  reducers: {
    addTopic: (state, action) => { // format: {id: '123456', name: 'name of topic', icon: 'icon url'}
      const { id, name, icon } = action.payload;
      state.topics[action.payload.id] = {
        id: id,
        name: name,
        icon: icon,
        quizIds: []
      }
    },
    addQuizToTopic: (state, action) => { // format {quizId: '123', topicId: '456'}
      const { quizId, topicId } = action.payload;
      state.topics[topicId].quizIds.push(quizId);
    }
  }
});


// Selectors
export const selectTopics = (state) => state.topics.topics;

// Exports
export const { addTopic, addQuizToTopic } = topicsSlice.actions;
export default topicsSlice.reducer;
