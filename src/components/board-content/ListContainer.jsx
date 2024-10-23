import React from "react";
import { Stack,Button,Card } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import "./styles.css";
import Task from "./Task";

const ListContainer = ({ header,tasks, moveTask, fromColumn }) => {
  return (
    <>
      <Stack className="list-container" gap={2}>
        <h4>{header}</h4>
        <Stack gap={2}>
          {tasks ?  tasks.map((task, index) => (
            <Task key={index} title={task.title} description={task.description} onClick={()=> {
                const confirm = window.confirm(`please confirm moving "${task.title}"`)
                if(confirm) {
                    if (fromColumn === "To Do") moveTask(task, "To Do", "In Progress")
                    if (fromColumn === "In Progress") moveTask(task, "In Progress", "QA")
                    if (fromColumn === "QA") moveTask(task, "QA", "Done")
                    if (fromColumn === "Done") window.alert("This task is done, finish more tasks!")
                }
            }
            }  />
          )) : console.log("emptylist")}
        </Stack>
      </Stack>
    </>
  );
};

export default ListContainer;
