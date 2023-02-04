const initialState = (name) => {
  return {
    name: name,
    tasks: [
      {
        name: "Sample Task",
        desc: "Sample Description",
        progress: 1 / 2,
        tags: ["basic"],
        subtasks: { "Sample Subtask 1": true, "Sample Subtask 2": false },
        color: "green",
        id: 108,
      },
    ],
    selectedTag: null,
    time: 0,
    upload: false,
  };
};

export default initialState;
