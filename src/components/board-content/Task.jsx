import {Button, Card, Stack} from "@mui/material";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import {TrendingFlat} from "@mui/icons-material";
import "./styles.css";

const Task = ({title, description, onClick}) => {
    return (

        <Card sx={{ width: "100%" }}>
            <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                    {title}
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    {description}
                </Typography>
            </CardContent>
            <Button className="move-ahead-button"  onClick={onClick}>
                <Stack direction={"row"} alignItems={"center"}>
                    <Typography>Move Ahead</Typography>
                    <TrendingFlat fontSize="small" />
                </Stack>
            </Button>
        </Card>

    );
};

export default Task;