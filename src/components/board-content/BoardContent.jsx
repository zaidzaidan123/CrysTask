import { Stack } from "@mui/material";
import React from "react";

const BoardContent = () => {
  return (
    <Stack direction={"row"}>
      <Stack sx={{backgroundColor:"#f1f2f4"}} width={"500px"} height={"400px"}></Stack>
      <Stack></Stack>
      <Stack></Stack>
      <Stack></Stack>
    </Stack>
  );
};

export default BoardContent;
