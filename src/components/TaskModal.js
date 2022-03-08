import React from "react";
import { Modal, Button, Checkbox, Placeholder } from "rsuite";
import { useDispatch } from "react-redux";

function TaskModal(props) {
  const { Paragraph } = Placeholder; 
  const handleClose = () => props.close();
  
  var dispatch = useDispatch();
  return (
    <>
      <Modal
        dialogClassName={props.task.color + "Modal"}
        full
        open={props.open}
        onClose={handleClose}
      >
        <Modal.Body style={{ color: "#3c3c3c" }}>
          <div className="modalDesc">
            <h5> Description: </h5>
            <div className={props.task.desc ? "content customScroll" : "noContent customScroll"}>
              {props.task.desc ? props.task.desc : <><br />Nothing here!<Paragraph color="red" a rows={3} active /></> }
              
            </div>
          </div>
          <div className="modalSubtasks">
            <h5> Subtasks: </h5>
            <div className={Object.keys(props.task.subtasks).length ? "content customScroll" : "noContent customScroll"}>
              {Object.keys(props.task.subtasks).length ? "" : <><br />Nothing here! <Paragraph color="red" a rows={3} active /></>}
              {Object.keys(props.task.subtasks).map((subtask) => (
                <div style={{ color: "#3c3c3c", fontWeight: "bolder" }}>
                  <Checkbox
                    checked={props.task.subtasks[subtask]}
                    onChange={(value, checked) => {
                      //console.log(value, checked);

                      /* Calculate progress of the task */ 
                      var task_copy = {};
                      var subtasks_copy = {};
                      Object.assign(task_copy, props.task); // actual values are immutable
                      Object.assign(subtasks_copy, task_copy.subtasks); // actual values are immutable
                      //console.log(task_copy.subtasks)
                      subtasks_copy[subtask] = checked;
                      task_copy.subtasks = subtasks_copy;
                      //console.log(task_copy.subtasks)
                      var done = 0;
                      Object.keys(task_copy.subtasks).map((subtask) =>
                        task_copy.subtasks[subtask] == true ? (done += 1) : ""
                      );
                      var prog =
                        done /
                        (Object.keys(task_copy.subtasks).length
                          ? Object.keys(task_copy.subtasks).length
                          : 1);
                      if (prog == 1 && props.task.progress != 1) {
                        var x = window.confirm(
                          "Hey, you have completed all subtasks. Marks this task as complete?"
                        );
                        task_copy["progress"] = 0.99;

                        if (x) {
                          task_copy["progress"] = 1;
                          handleClose();
                        }
                        setTimeout(() => dispatch(props.edit(task_copy)), 500);
                      } else if (prog != 1 && props.task.progress == 1) {
                        var x = window.confirm(
                          "Unchecking this subtask will make the task incomplete. Are you sure?"
                        );
                        task_copy["progress"] = 1;

                        if (x) {
                          task_copy["progress"] = prog;
                          handleClose();
                          setTimeout(
                            () => dispatch(props.edit(task_copy)),
                            500
                          );
                        }
                      } else {
                        task_copy["progress"] = prog;
                        dispatch(props.edit(task_copy));
                      }
                    }}
                  >
                    {" "}
                    {subtask}
                  </Checkbox>
                </div>
              ))}
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose} appearance="primary">
            Ok
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default TaskModal;
