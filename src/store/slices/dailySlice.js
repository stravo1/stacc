import { createSlice } from "@reduxjs/toolkit";
import reducers from "../../assets/js/reducerMaker";
import initialState from "../../assets/js/initialStateMaker";

const dailySlice = createSlice({
  name: "daily",
  initialState: initialState("daily"),
  reducers: reducers,
});

const { addTask, deleteTask, editTask, setTasks, updateTime, selectTag } = dailySlice.actions;
export const actions = {
  set: setTasks,
  add: addTask,
  edit: editTask,
  delete: deleteTask,
  updateTime: updateTime,
  selectTag: selectTag,
}
export default dailySlice.reducer;