import { createSlice } from "@reduxjs/toolkit";
import reducers from "../../assets/js/reducer";
import initialState from "../../assets/js/initialStateMaker";

const monthlySlice = createSlice({
  name: "monthly",
  initialState: initialState("monthly"),
  reducers: reducers,
});

const { addTask, deleteTask, editTask,setTasks } = monthlySlice.actions;
export const actions = {
  set: setTasks,
  add: addTask,
  edit: editTask,
  delete: deleteTask,
}
export default monthlySlice.reducer;