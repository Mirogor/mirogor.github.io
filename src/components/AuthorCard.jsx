import React from "react";
import { Paper, Typography, Container, } from "@mui/material";
export default function AuthorCard({ name, description }) {
    return (
        <Paper elevation={2} sx={{ minHeight: "125px", width: "100%", mx: "auto", my: 5 }}  >
            <Container  >
                <Typography variant="h5" component="h2">
                    {name}
                </Typography>
                <Typography variant="body1" component="h2">
                    {description}
                </Typography>
            </Container>
        </Paper >
    );
}
