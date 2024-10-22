import React from "react";
import {useState} from "react";
import {Box, Button, Modal, Stack, Typography, TextField} from "@mui/material";
import ListContainer from "./ListContainer";
import AddIcon from "@mui/icons-material/Add";
import "./styles.css";


const BoardContent = () => {

    const [open,setOpen ] = useState(false);
    const [taskTitle, setTaskTitle] = useState("Title");
    const [taskDescription, setTaskDescription] = useState("Description");

    const openModal = () => { setOpen(true); };
    const closeModal = () => { setOpen(false); };

    const handelModalSubmit = () => {
        console.log("New task title: ", taskTitle);
        console.log("New task description: ", taskDescription)
        closeModal()
    }

  const listHeadings = ["To Do", "In Progress", "QA", "Done"];
  return (
    <>
      <Stack direction={"row"} width={"75vw"} gap={2} min-height={"100vh"}>
        {listHeadings.map((header, index) => {
          return <ListContainer header={header} key={index} />;
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
