import { createSlice } from "@reduxjs/toolkit";

export const topicsSlice = createSlice({
  name: 'topics',
  initialState: {
    topics: {},
  },
  reducers: {
    addTopic: (state, action) => { // format: {id: '123456', name: 'name of topic', icon: 'icon url'}
      const newTopic = action.payload;
      state.topics[action.payload.id] = {
        id: newTopic.id,
        name: newTopic.name,
        icon: newTopic.icon,
        quizIds: []
      }
    }
  }
}
);

export const selectTopics = (state) => state.topics;
export const { addTopic } = topicsSlice.actions;
export default topicsSlice.reducer;
