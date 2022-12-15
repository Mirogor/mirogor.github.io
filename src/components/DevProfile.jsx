
import { Avatar, Box, Button, Typography } from "@mui/material"
import GitHubIcon from '@mui/icons-material/GitHub';
export default function DevProfile({ name, ghlink, avatar = "/" }) {
    return (
        <Box sx={{ my: 2, width: "80%", height: "120px", display: "flex", flexDirection: "row" }}>
            <Avatar sx={{ width: 72, height: 72, mt: 1 }} alt={name} src={avatar} />
            <Box sx={{ mx: 3 }}>
                <Typography variant="h5" component="p" >{name}</Typography>
                <Button sx={{ mt: 2 }} href={ghlink} variant="contained">
                    <GitHubIcon />
                    <Typography sx={{ ml: 2 }}>GitHub</Typography>
                </Button>
            </Box>
        </Box>);
}