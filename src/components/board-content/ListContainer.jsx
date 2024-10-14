import React from "react";
import { Stack,Button,Card } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import "./styles.css";

const ListContainer = ({ header }) => {
  return (
    <>
      <Stack className="list-container" gap={2}>
        <h4>{header}</h4>
        <Stack gap={2}>
          <Button sx={{ padding: 0, textAlign: "left" }}>
            <Card sx={{ width: "100%" }}>
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  Title
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  Description
                </Typography>
              </CardContent>
            </Card>
          </Button>
        </Stack>
      </Stack>
    </>
  );
};

export default ListContainer;
