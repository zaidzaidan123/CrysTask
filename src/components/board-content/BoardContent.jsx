import React from "react";
import {useState} from "react";
import {Box, Button, Modal, Stack, Typography, TextField} from "@mui/material";
import ListContainer from "./ListContainer";
import AddIcon from "@mui/icons-material/Add";
import "./styles.css";


const BoardContent = () => {

    const [open,setOpen ] = useState(false);
    const [taskTitle, setTaskTitle] = useState("");
    const [taskDescription, setTaskDescription] = useState("");

    const [tasksArr,setTasksArr] = useState([]);

    const openModal = () => { setOpen(true); };
    const closeModal = () => { setOpen(false); };

    const handelModalSubmit = () => {

        console.log("New task title: ", taskTitle);
        console.log("New task description: ", taskDescription)

        if(taskTitle !== "") {
            const newTask = {
                id:Date.now(),
                title: taskTitle,
                description: taskDescription,
                status:"To Do",
            }
            setTasksArr((arr) => [...arr, newTask])

            //reseting props!!
            setTaskTitle("")
            setTaskDescription("")
        }
        else
        {
            window.alert("Set title to the task!")
        }


        closeModal()
    }

    const moveTask = (taskId, currentStatus) => {
        const statuses = ["To Do", "In Progress", "QA", "Done"];
        const currentIndex = statuses.indexOf(currentStatus);

        if (currentIndex < statuses.length - 1) {
            const nextStatus = statuses[currentIndex + 1];

            setTasksArr((prevTasks) => {
                const updatedTasks = prevTasks.map((task) =>
                    task.id === taskId ? { ...task, status: nextStatus } : task
                );

                console.log("Updated Tasks Array:", updatedTasks);
                return updatedTasks;
            });
        } else {
            console.log("Task is already at the final status:", currentStatus);
        }
    };



    const columns = ["To Do", "In Progress","QA","Done"];


    return (
        <>
            <Stack sx={{marginLeft: 2}} direction={"row"} width={"75vw"} gap={2} min-height={"100vh"}>

                {columns.map((col, index) => {
                    return <ListContainer header={col} key={index}
                                          tasks={tasksArr.filter((task)=>task.status===col)}
                                          moveTask={moveTask}
                                            fromColumn={col}/>;
                })}
            </Stack>
            <Button variant="contained" className="create-task-button" onClick={openModal}>
                <Stack direction={"row"} alignItems={"center"}>
                    <Typography>Create Task</Typography>
                    <AddIcon fontSize="small" />
                </Stack>
            </Button>


            <Modal
                open={open}
                onClose={closeModal}
                aria-labelledby="create-task-modal"
                aria-describedby="modal-for-creating-new-task"
            >
                <Box sx={modalStyle}>
                    <Typography id="create-task-modal" variant="h6" component="h2">
                        Create a New Task
                    </Typography>
                    <TextField
                        fullWidth
                        label="Title"
                        value={taskTitle}
                        onChange={(e) => setTaskTitle(e.target.value)}
                        sx={{ marginBottom: 2, marginTop: 2 }}
                    />
                    <TextField
                        fullWidth
                        label="Description"
                        value={taskDescription}
                        onChange={(e) => setTaskDescription(e.target.value)}
                        sx={{ marginBottom: 2 }}
                        multiline
                        rows={4}
                    />
                    <Button variant="contained" onClick={handelModalSubmit}>
                        Create Task
                    </Button>
                </Box>
            </Modal>
        </>
    );
};

const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    borderRadius: '8px',
};



export default BoardContent;