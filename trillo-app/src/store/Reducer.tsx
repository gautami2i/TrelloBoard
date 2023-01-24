import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const data = {
  available: [],
  assigned: [],
  completed: [],
};
const data1 = JSON.parse(localStorage.getItem("tasks")!);
if (data1 === null) {
  localStorage.setItem("tasks", JSON.stringify(data));
}

export const counterSlice = createSlice({
  name: "task",
  initialState: {
    value: data1,
  },
  reducers: {
    updateTask: (state, action: PayloadAction<string>) => {
      console.log("action-----", action.payload);

      state.value = action.payload;
    },

    addTask: (state, action: PayloadAction<string>) => {
      console.log("action++++++++++++++++++++++++++", action.payload);
      state.value.available.push(action.payload);
      localStorage.setItem("tasks", JSON.stringify(state.value));
    },
  },
});

// Action creators are generated for each case reducer function
export const { addTask } = counterSlice.actions;
export const { updateTask } = counterSlice.actions;
export default counterSlice.reducer;
