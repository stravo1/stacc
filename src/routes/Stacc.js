import React, { useEffect, useState } from "react";
import {
  Drawer,
  Button,
  Input,
  Form,
  TagPicker,
  TagInput,
  ButtonToolbar,
  SelectPicker,
  Row,
  Col,
  Nav,
} from "rsuite";
import { useSelector, useDispatch } from "react-redux";
import { tags, color } from "../assets/js/lists";
import {
  changeStaccLoaded,
  changeStaccSyncStat,
  setSyncing,
} from "../store/slices/generalSlice";
import kitty from "../assets/svg/kitty.svg";
import initialState from "../assets/js/initialStateMaker";
import { titleMap } from "../assets/js/lists";
import { getFileContent, uploadFiles } from "../assets/js/requestHandler";
import ListMember from "../components/ListMember";
import { RiAddBoxFill } from "react-icons/ri";

function Stacc(props) {
  const dispatch = useDispatch();

  /* component states */
  const [open, setOpen] = useState(false);
  const [action, setAction] = useState("");
  const [active, setActive] = useState("ongoing");
  const [isUploading, setIsUploading] = useState(false);

  /* form values */
  const [f_name, setName] = useState("");
  const [f_tags, setTags] = useState(["basic", "personal"]);
  const [f_subtasks, setSubtasks] = useState({});
  const [f_desc, setDescription] = useState("");
  const [f_color, setColor] = useState(color[0].value);
  const [id, setId] = useState(0);
  const [f_tags_list, setTagsList] = useState(tags);

  /* state values */
  var tasks = useSelector((state) =>
    state[props.title].tasks.filter((task) =>
      state[props.title].selectedTag == null
        ? true
        : task.tags.includes(state[props.title].selectedTag)
    )
  ); // tag select
  var ongoing = tasks.filter((task) => task.progress != 1);
  var checked = tasks.filter((task) => task.progress == 1);
  var selectedTag = useSelector((state) => state[props.title].selectedTag);
  var time = useSelector((state) => state[props.title].time);
  var stacc_loaded = useSelector(
    (state) => state["general"].stacc[props.title]
  );
  var stacc_synced = useSelector((state) => state["general"].sync[props.title]);
  var accessToken = useSelector((state) => state["general"].accessToken);
  var fileId = useSelector((state) => state["general"].id[props.title]);
  var signedIn = useSelector((state) => state["general"].signedIn);
  var upload = useSelector((state) => state[props.title].upload);

  /* custom tags list initial array */
  var customList = [];

  /* cloud and localstorage sync */
  useEffect(async () => {
    if (!stacc_loaded) {
      // checks whether this task list was accessed before or is being opened for the first time after app launch
      if (!localStorage.getItem(props.title)) {
        // if 'cache' not found then initiates cache
        /*
        console.log("set localstorage for ", props.title, ":", {
          tasks: initialState(props.title).tasks,
          time: 0,
        });
        */
        localStorage.setItem(
          props.title,
          JSON.stringify({ tasks: initialState(props.title).tasks, time: 0 })
        );
      } else {
        // else restore from 'cache'
        dispatch(props.actions.delete(0));
        dispatch(
          props.actions.set(JSON.parse(localStorage.getItem(props.title)))
        );
      }
      dispatch(changeStaccLoaded({ list: props.title, value: 1 }));
    } else {
      // this body is executed each time the page re-renders (after being stacc_loaded) => updates 'cache' at each render
      localStorage.setItem(
        props.title,
        JSON.stringify({ tasks: tasks, time: time })
      );
      /* auto sync */
      if (signedIn && stacc_loaded && fileId != 0 && upload && !isUploading) {
        dispatch(props.actions.setUpload(false));
        handleSync();
      }
    }
    //equivalent to componentDidMount
    // checks for a lot of initializations: if signedIn, if the required task's fileId is present and whether it has already been synced/updated with the 'cloud', if satisfied then it checks the cloud for updates
    if (signedIn && stacc_loaded && !stacc_synced && fileId != 0) {
      dispatch(changeStaccSyncStat({ list: props.title, value: 1 })); // set the sync status for this list of tasks as done
      //console.log("Only once: " + props.title);
      var resp = await getFileContent(accessToken, fileId);
      //console.log(resp);
      var c_time = JSON.parse(resp).time;
      //console.log(c_time, time, c_time > time);
      if (c_time > time) {
        // checks which one of the lists are more up-to-date
        var x = window.confirm(
          "There are newer " +
            props.title +
            " tasks available, replace current ones?"
        );
        if (x) {
          dispatch(props.actions.set(JSON.parse(resp)));
          localStorage.setItem(props.title, resp);
        } else {
          handleSync();
        }
      } else {
        // uploads the current list if user chooses to not apply the updated tasks => update the cloud instead of updating local
        console.log("uploading current");
        handleSync();
      }
      checkAutoTrash(time); // performs autotrash
    }
  });

  function checkAutoTrash(time) {
    var bool = false;
    var text = "";
    switch (props.title) {
      case "daily":
        bool =
          new Date(time).getDate() - new Date().getDate() != 0 &&
          localStorage.getItem("autoTrash") == "true";
        text = "day";
        break;
      case "weekly":
        /*
        bool =
          new Date().getDay() == 0 && // first day of week
          new Date(new Date(time).toString().split(" ").slice(0, 4).join(" ")).getTime() - new Date(new Date().toString().split(" ").slice(0, 4).join(" ")).getTime()!=0 && // not the same day
          localStorage.getItem("autoTrash") == "true";
        */
        bool =
          new Date().getDay() == 0 &&
          new Date(
            new Date(time).toString().split(" ").slice(0, 4).join(" ")
          ).getTime() -
            new Date(
              new Date().toString().split(" ").slice(0, 4).join(" ")
            ).getTime() !=
            0 &&
          localStorage.getItem("autoTrash") == "true";
        text = "week";
        break;
      case "monthly":
        bool =
          new Date().getDate() == 0 &&
          new Date(
            new Date(time).toString().split(" ").slice(0, 4).join(" ")
          ).getTime() -
            new Date(
              new Date().toString().split(" ").slice(0, 4).join(" ")
            ).getTime() !=
            0 &&
          localStorage.getItem("autoTrash") == "true";
        text = "month";
        break;
    }
    if (bool) {
      var x = window.confirm(
        "These tasks are one " + text + " old. Trash 'em?"
      );
      if (x) {
        dispatch(props.actions.set({ tasks: [], time: new Date().getTime() }));
        localStorage.setItem(props.title, {
          tasks: [],
          time: new Date().getTime(),
        });
        handleSync();
      } else {
        dispatch(props.actions.updateTime());
        localStorage.setItem(
          props.title,
          JSON.stringify({ tasks: tasks, time: time })
        );
      }
    } else console.log("no autotrash");
  }

  /* functions */
  function handleDelete(task) {
    var index = tasks.indexOf(task);
    var x = window.confirm("Delete this task?");
    if (!x) {
      return;
    }
    dispatch(props.actions.delete(index));
    //localStorage.setItem(props.title, JSON.stringify(tasks));
  }

  function handleAdd() {
    if (f_name == "") {
      alert("Please enter Task Name");
      return;
    }
    dispatch(
      props.actions.add({
        name: f_name,
        desc: f_desc,
        subtasks: f_subtasks,
        tags: f_tags,
        color: f_color,
        id: new Date().getTime(),
        progress: 0,
      })
    );
    setOpen(false);
    //localStorage.setItem(props.title, JSON.stringify(tasks));
  }

  function handleEdit() {
    if (f_name == "") {
      alert("Please enter Task Name");
      return;
    }
    var progress = 0;
    //bodge1
    var done = 0;
    Object.keys(f_subtasks).map((subtask) =>
      f_subtasks[subtask] === true ? (done += 1) : ""
    );

    progress =
      done /
      (Object.keys(f_subtasks).length ? Object.keys(f_subtasks).length : 1);

    dispatch(
      props.actions.edit({
        name: f_name,
        desc: f_desc,
        subtasks: f_subtasks,
        tags: f_tags,
        color: f_color,
        id: id,
        progress: progress,
      })
    );
    //localStorage.setItem(props.title, JSON.stringify(tasks));
    setOpen(false);
  }

  async function handleSync() {
    setIsUploading(true);
    dispatch(setSyncing(true));
    var res = await uploadFiles(
      accessToken,
      props.title,
      localStorage.getItem(props.title),
      fileId
    );
    console.log(res);
    dispatch(setSyncing(false));
    setIsUploading(false);
  }

  function handleOpen(task = null) {
    console.log(task);
    var bool = task != null;
    setAction(bool ? "Edit" : "Add");
    setName(bool ? task.name : "");
    setCustomTagList(bool ? task.tags : null); // handles custom tag entries for displaying in the form
    setTags(bool ? task.tags : ["basic", "personal"]);
    setSubtasks(bool ? task.subtasks : {});
    setDescription(bool ? task.desc : "");
    setColor(bool ? task.color : color[0].value);
    console.log(f_color);
    setId(bool ? task.id : 0);
    setOpen(true);
  }
  function handleTagSelect(tag) {
    if (selectedTag == tag) {
      dispatch(props.actions.selectTag(null));
    } else {
      dispatch(props.actions.selectTag(tag));
    }
    console.log(selectedTag);
  }
  function setCustomTagList(tagList) {
    // handles the custom tags set by user by including a {label, value} pair in the tags list for rendering during editing a task
    if (tagList == null) {
      // "Add task" case
      setTagsList(tags); // Produces default list, i.e., base tags list
    } else {
      // "Edit task" case
      var defaults = ["basic", "important", "urgent", "works", "personal"];
      var temp = tags.slice(); //copy by value
      tagList.forEach((tag) => {
        // Produces a list with custom tags' {label, value} pairs added to the base tagsl list.
        if (!defaults.includes(tag)) {
          temp.push({ label: tag, value: tag });
        }
      });
      setTagsList(temp);
    }
  }

  return (
    <div style={{ height: "100vh" }}>
      <div
        className="staccHeader"
        style={{
          background: "rgba(14, 18, 25)",
          position: "sticky",
          top: "4rem",
          zIndex: "995",
          paddingBottom: "0.75rem",
        }}
      >
        <span style={{ marginLeft: "1.5rem", fontSize: "larger" }}>
          welcome back!
        </span>
        <h3 style={{ marginLeft: "1.5rem" }}>{titleMap[props.title]} tasks:</h3>
        <br />
        <div style={{ padding: "0 0.5rem" }}>
          <Row style={{ width: "95vw" }}>
            <Col xs={24} sm={12} md={8} lg={8}>
              <Nav
                justified
                activeKey={active}
                onSelect={(eventkey) => {
                  setActive(eventkey);
                  setOpen(false);
                }}
                style={{ margn: "0.5rem" }}
                className="staccTabs"
              >
                <Nav.Item eventKey="ongoing">
                  <span>ongoing</span>
                </Nav.Item>
                <Nav.Item eventKey="completed">
                  <span className="staccTabs">completed</span>
                </Nav.Item>
              </Nav>
            </Col>
          </Row>
        </div>
      </div>
      <br />
      <Row style={{ margin: "1rem" }}>
        {(active == "completed" && !checked.length) ||
        (active != "completed" && !ongoing.length) ? (
          <div
            style={{ width: "90vw", display: "flex", justifyContent: "center" }}
          >
            <img style={{ height: "35vh" }} src={kitty} alt="No tasks!" />{" "}
          </div>
        ) : (
          ""
        )}
        {ongoing.map((post) => (
          <div
            style={
              active == "ongoing" ? { display: "unset" } : { display: "none" }
            }
          >
            <ListMember
              task={post}
              selectedTag={selectedTag}
              handleDelete={(task) => handleDelete(task)}
              handleOpen={(task) => handleOpen(task)}
              handleTagSelect={(tag) => handleTagSelect(tag)}
              edit={(payload) => props.actions.edit(payload)}
            />
          </div>
        ))}
        {checked.map((post) => (
          <div
            style={
              active != "ongoing" ? { display: "unset" } : { display: "none" }
            }
          >
            <ListMember
              task={post}
              selectedTag={selectedTag}
              handleDelete={(task) => handleDelete(task)}
              handleOpen={(task) => handleOpen(task)}
              handleTagSelect={(tag) => handleTagSelect(tag)}
              edit={(payload) => props.actions.edit(payload)}
            />
          </div>
        ))}
      </Row>

      <br />

      <Drawer
        // form drawer for adding/editing tasks
        size="lg"
        placement={"bottom"}
        open={open}
        onClose={() => setOpen(false)}
      >
        <Drawer.Header>
          <Drawer.Title>
            {action} Task @{" "}
            {props.title[0].toUpperCase() + props.title.slice(1)}
          </Drawer.Title>
          <Drawer.Actions>
            <SelectPicker
              placement="leftStart"
              data={color}
              defaultValue={f_color}
              style={{ width: "6rem" }}
              searchable={false}
              placeholder="Color"
              renderMenuItem={(label, item) => {
                return <div style={{ color: item.hex }}>{label}</div>;
              }}
              renderValue={(value, item) => {
                return <div style={{ color: item.hex }}>{item.label}</div>;
              }}
              onChange={(value, event) => {
                if (value == null) value = "green";
                setColor(value);
              }}
            />
          </Drawer.Actions>
        </Drawer.Header>
        <Drawer.Body>
          <Form>
            <Form.Group controlId="name">
              <Form.ControlLabel>Task Name</Form.ControlLabel>
              <Input
                value={f_name}
                onChange={(value, event) => setName(value)}
              ></Input>
              <Form.HelpText>Task name is required</Form.HelpText>
            </Form.Group>

            <Form.Group controlId="tags">
              <Form.ControlLabel>Tags</Form.ControlLabel>
              <TagPicker
                creatable
                data={f_tags_list}
                defaultValue={f_tags}
                style={{ width: 300 }}
                menuStyle={{ width: 250 }}
                //groupBy="categories"
                placeholder="Add tags"
                onChange={(value, event) => {
                  if (value == null) value = [];
                  setTags(value);
                }}
                trigger="Comma"
              />
            </Form.Group>

            <Form.Group controlId="desc">
              <Form.ControlLabel>Desciption</Form.ControlLabel>
              <Input
                as="textarea"
                rows={3}
                placeholder="Textarea"
                value={f_desc}
                onChange={(value, event) => {
                  setDescription(value);
                }}
              />
            </Form.Group>
            <Form.Group controlId="subtasks">
              <Form.ControlLabel>Subtasks</Form.ControlLabel>
              <div>
                <TagInput
                  trigger={["Enter", "Comma"]}
                  value={Object.keys(f_subtasks)}
                  style={{ width: 300 }}
                  placeholder="Add subtasks"
                  /*
                onCreate={(value, item) => {
                  //console.log(value, item);
                }}
                */
                  onChange={(value, event) => {
                    var temp_obj = {};
                    Object.assign(temp_obj, f_subtasks);
                    var temp_arr = Object.keys(f_subtasks);
                    temp_arr.map((subtask) => {
                      if (!value.includes(subtask)) {
                        delete temp_obj[subtask];
                      }
                    }); //deletes the subtasks from the actual list if removed while editing
                    temp_arr = Object.keys(temp_obj);
                    value.map((subtask) => {
                      if (!temp_arr.includes(subtask)) {
                        temp_obj[subtask] = 0;
                      }
                    }); // adds new subtasks to the actual list if added while adding/editing tasks.
                    setSubtasks(temp_obj);
                  }}
                />
              </div>
              <Form.HelpText>Press enter to separate subtasks</Form.HelpText>
            </Form.Group>
            <Form.Group>
              <ButtonToolbar>
                <Button
                  appearance="primary"
                  onClick={() => (action == "Add" ? handleAdd() : handleEdit())}
                >
                  Save
                </Button>
                <Button appearance="default" onClick={() => setOpen(false)}>
                  Cancel
                </Button>
              </ButtonToolbar>
            </Form.Group>
          </Form>
        </Drawer.Body>
      </Drawer>
      <div className="footerAdd">
        <Button
          onClick={() => handleOpen()}
          style={{ justifyContent: "center", background: "whitesmoke" }}
        >
          <div
            style={{
              fontWeight: "600",
              fontSize: "larger",
              padding: "0 0.25rem",
              color: "#3c3c3c",
            }}
          >
            {" "}
            <RiAddBoxFill
              fontSize="1rem"
              style={{
                position: "absolute",
                left: "0.25rem",
                margin: "3px 0.75rem",
              }}
            />
            <span style={{ paddingLeft: "1.25rem" }}> Add Task </span>{" "}
          </div>
        </Button>
      </div>
    </div>
  );
}

export default Stacc;
