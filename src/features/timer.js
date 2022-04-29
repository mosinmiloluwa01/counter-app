import { createSlice } from "@reduxjs/toolkit";

export const timerSlice = createSlice({
  name: "timer",
  initialState: { value: 0 },
  reducers: {
    updateTimer: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { updateTimer } = timerSlice.actions;
export default timerSlice.reducer;
