var reducers = {
  setTasks(state, actions) {
    state.tasks = actions.payload.tasks;
    state.time = actions.payload.time;
  },
  addTask(state, action) {
    //console.log(109)
    state.tasks.unshift(action.payload);
    state.time = new Date().getTime();
  },
  deleteTask(state, action) {
    console.log(108, action.payload);
    //var temp = state;
    state.tasks.splice(action.payload, 1);
    state.time = new Date().getTime();
  },
  editTask(state, action) {
    state.tasks.map((task) => {
      if (task.id == action.payload.id) {
        if (action.payload["progress"] === "calculate") { //bodge1
          //bodge1
          var done = 0;
          Object.keys(action.payload.subtasks).map((subtask) =>
            action.payload.subtasks[subtask] === 1 ? (done += 1) : ""
          );
          action.payload["progress"] =
            done /
            (Object.keys(action.payload.subtasks).length
              ? Object.keys(action.payload.subtasks).length
              : 1);
        }
        //console.log(done/Object.keys(action.payload.subtasks).length)
        state.tasks[state.tasks.indexOf(task)] = action.payload;
      }
    });
    state.time = new Date().getTime();
  },
  updateTime(state){
    console.log("time refeshed")
    state.time = new Date().getTime();
  },
  selectTag(state, action){
    state.selectedTag = action.payload;
  }
};

export default reducers;
