import { createSlice } from "@reduxjs/toolkit";
import reducers from "../../assets/js/reducerMaker";
import initialState from "../../assets/js/initialStateMaker";

const monthlySlice = createSlice({
  name: "monthly",
  initialState: initialState("monthly"),
  reducers: reducers,
});

const { addTask, deleteTask, editTask, setTasks, updateTime, selectTag, setUpload } = monthlySlice.actions;
export const actions = {
  set: setTasks,
  add: addTask,
  edit: editTask,
  delete: deleteTask,
  updateTime: updateTime,
  selectTag: selectTag,
  setUpload: setUpload,
};
export default monthlySlice.reducer;
