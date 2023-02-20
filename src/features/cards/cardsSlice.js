import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Slice definition
export const cardsSlice = createSlice({
  name: 'cards',
  initialState: {
    cards: {},
  },
  reducers: {
    addCard: (state, action) => { // format: { id: '123', front: 'front of card', back: 'back of card'}
      const { id } = action.payload;
      state.cards[id] = action.payload
    },
  }
}
);

// Selectors
export const selectCards = (state) => state.cards.cards;

// Exports
export const { addCard } = cardsSlice.actions;
export default cardsSlice.reducer;
