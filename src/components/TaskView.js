{Object.keys(props.task.subtasks).map((subtask) => (
    <div style={{ color: "cornsilk", fontWeight: "bolder" }}>
      <Checkbox
        checked={props.task.subtasks[subtask]}
        onChange={(value, checked) => {
          console.log(value, checked);
          var task_copy = {};
          var subtasks_copy = {};
          Object.assign(task_copy, props.task); // actual values are immutable
          Object.assign(subtasks_copy, task_copy.subtasks); // actual values are immutable
          //console.log(task_copy.subtasks, Object.isFrozen(temp2))
          subtasks_copy[subtask] = checked;
          task_copy.subtasks = subtasks_copy;
          dispatch(props.edit(task_copy));
        }}
      >
        {" "}
        {subtask}
      </Checkbox>
    </div>
  ))}