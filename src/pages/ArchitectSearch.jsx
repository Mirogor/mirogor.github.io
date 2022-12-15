import React, { useEffect } from "react";
import AuthorCard from "../components/AuthorCard";
import ResponsiveAppBar from "../components/AppBar";
import { Typography, Box, TextField, Fade } from "@mui/material";
import i18n from "../i18n";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function ArchitectSearch() {
    const { t } = useTranslation();
    const mock = t("architects", { returnObjects: true });
    const architect = t("architectSearch", { returnObjects: true })
    const [load, setLoad] = React.useState(true);
    const [architects, setArchitects] = React.useState(mock);
    useEffect(() => {
        setLoad(false);
        setArchitects(mock);
        setTimeout(() => setLoad(true), 150)
    }, [architect.famousArchitects])
    const handleInput = ({ target }) => {
        setLoad(false);
        setArchitects(mock.filter((arch) => arch.name.toLowerCase().includes(target.value.toLowerCase())))
        setTimeout(() => setLoad(true), 150);
    }
    return (<React.Fragment>
        <Box sx={{ maxWidth: "lg", mx: "auto", py: 10, width: "95%" }}>
            <Box sx={{ display: "flex", flexDirection: { md: "row", xs: "column" }, mt: 5 }}>
                <Typography variant='h4' component="h1">{architect.famousArchitects}</Typography>
                <TextField onChange={handleInput} sx={{ flexGrow: 1, ml: { md: 5, xs: 0 }, mt: { md: 0, xs: 3 } }} id="outlined-basic" label="Поиск" variant="outlined" />
            </Box>
            <Fade in={load}>
                <Box>
                    {architects.map((arch, i) => <Link style={{ textDecoration: 'none' }} to={`/archive/${i}`} key={i} ><AuthorCard name={arch.name} description={arch.summary} /></Link>)}
                </Box>
            </Fade>
        </Box >
    </React.Fragment >);
}

export default ArchitectSearch;