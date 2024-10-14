import React from "react";
import { Button, Stack, Typography } from "@mui/material";
import ListContainer from "./ListContainer";
import AddIcon from "@mui/icons-material/Add";
import "./styles.css";

const BoardContent = () => {
  const listHeadings = ["To Do", "In Progress", "QA", "Done"];
  return (
    <>
      <Stack direction={"row"} width={"75vw"} gap={2} min-height={"100vh"}>
        {listHeadings.map((header, index) => {
          return <ListContainer header={header} key={index} />;
        })}
      </Stack>
      <Button variant="contained" className="create-task-button">
        <Stack direction={"row"} alignItems={"center"}>
          <Typography>Create Task</Typography>
          <AddIcon fontSize="small" />
        </Stack>
      </Button>
    </>
  );
};

export default BoardContent;
