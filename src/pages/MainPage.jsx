import ImgList from "../components/ImgList"
import ArchitectCard from '../components/ArchitectCard';
import { Box, } from '@mui/system';
import { Typography, } from '@mui/material';
import React, { useCallback } from 'react';
import { useTheme } from '@mui/material';
import DevProfile from '../components/DevProfile';
import ResponsiveAppBar from '../components/AppBar';
import { useTranslation } from "react-i18next";

const itemData = [
    {
        img: "/main/1.webp",
        title: 'Building_1',
        rows: 2,
        cols: 2,
    },
    {
        img: "/main/2.webp",
        title: 'Building_2',
        cols: 2,
    },
    {
        img: "/main/3.webp",
        title: 'Building_3',
        cols: 2,
    },
];
export default function MainPage() {
    const { t, i18n } = useTranslation();
    const index = React.useMemo(() => Math.round(Math.random() * t("architects.length", { returnObjects: true }) - 1), []);
    const devs = t("devs", { returnObjects: true });
    const main = t("mainPage", { returnObjects: true })
    const architectOfDay = t(`architects`, { returnObjects: true })[index];
    const theme = useTheme();
    return (
        <React.Fragment>
            <Box sx={{ bgcolor: theme.palette.secondary.main, minHeight: "500px" }}>
                <Box sx={{
                    maxWidth: "lg", mx: "auto", display: "flex", flexDirection: {
                        md: "row",
                        xs: "column"
                    }
                }}>
                    <Box sx={{ mx: "auto", pt: 10, maxWidth: { md: 1 / 2, xs: "90%" } }}>
                        <Typography mt={5} variant='h4' component="h1">{main.title}</Typography>
                        <Typography mt={5} variant='h5' component="p">{main.archDescription}</Typography>
                    </Box>
                    <Box sx={{ mt: 10, maxWidth: { md: "100%", xs: "90%" }, mx: "auto" }}>
                        <ImgList itemData={itemData} />
                    </Box>
                </Box>
            </Box>
            <Box sx={{ minHeight: "500px" }}>
                <Box sx={{ maxWidth: "lg", mx: "auto", display: "flex", flexDirection: { md: "row", xs: "column-reverse" } }}>
                    <Box sx={{ mx: 2, mt: 5, minWidth: 1 / 2 }}>
                        <Typography mt={5} variant='h4' component="h1">{main.developers}</Typography>
                        <Box sx={{ mt: 5, ml: 4 }}>
                            {devs.map((dev) => <DevProfile key={dev.name} name={dev.name} ghlink={dev.ghlink} avatar={dev.picture} />)}
                        </Box>
                    </Box>
                    <Box sx={{ mx: 2, mt: 5, maxWidth: { md: 1 / 2, xs: "90%" } }}>
                        <Typography my={5} variant='h4' component="h1">{main.mainArch}</Typography>
                        <ArchitectCard l={`/archive/${index}`} architect={architectOfDay} />
                    </Box>
                </Box>
            </Box>
        </React.Fragment>
    );
}
