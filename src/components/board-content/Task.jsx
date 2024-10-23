import {Button, Card} from "@mui/material";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import React from "react";


const Task = ({title, description, onClick}) => {
    return (
        <Button sx={{ padding: 0, textAlign: "left" }} onClick={onClick}>
            <Card sx={{ width: "100%" }}>
                <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                        {title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: "text.secondary" }}>
                        {description}
                    </Typography>
                </CardContent>
            </Card>
        </Button>
    );
};

export default Task;