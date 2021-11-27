import { createSlice } from "@reduxjs/toolkit";
import reducers from "../../assets/js/reducer";
import initialState from "../../assets/js/initialStateMaker";

const dailySlice = createSlice({
  name: "daily",
  initialState: initialState("daily"),
  reducers: reducers,
});

const { addTask, deleteTask, editTask, setTasks } = dailySlice.actions;
export const actions = {
  set: setTasks,
  add: addTask,
  edit: editTask,
  delete: deleteTask,
}
export default dailySlice.reducer;