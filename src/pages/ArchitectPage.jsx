import React from "react";
import ResponsiveAppBar from "../components/AppBar";
import { Box, Typography, useTheme, Container } from "@mui/material"
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import CircleIcon from '@mui/icons-material/Circle';
import YoutubeEmbed from "../components/VideoEmbed";
import Carousel from "../components/Carousel";
import { useTranslation } from "react-i18next";

export default function ArchitectPage({ index = 0 }) {
    const theme = useTheme();
    const { t } = useTranslation();
    const page = t("architectPage", { returnObjects: true })
    const architect = t("architects", { returnObjects: true })[index];
    return (
        <React.Fragment>
            <Box sx={{ bgcolor: theme.palette.secondary.main, minHeight: "500px" }}>
                <Box sx={{
                    maxWidth: "lg", mx: "auto", display: "flex", flexDirection: {
                        md: "row",
                        xs: "column"
                    }
                }}>
                    <Box sx={{ minWidth: { md: 1 / 4, xs: "90%" }, mx: { md: 2, xs: "auto" }, pt: 12, maxWidth: 1 / 2 }}>
                        <img width="90%" src={architect.avatar} />

                    </Box>
                    <Box sx={{ my: 5, ml: 2 }}>
                        <Typography mt={5} variant='h4' component="h1">{architect.name}</Typography>
                        <Typography mt={2} variant='h5' component="p">{architect.date}</Typography>
                        <Typography mt={5} variant='h6' component="p">{architect.description}</Typography>
                    </Box>
                </Box>
            </Box>
            <Box sx={{ minHeight: "500px" }}>
                <Box sx={{ maxWidth: "lg", mx: "auto", }}>

                    <VerticalTimeline background lineColor={theme.palette.secondary.main}>
                        {architect.biography.map((step, i) => <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            key={i}
                            contentStyle={{ background: theme.palette.primary.light, color: '#fff' }}
                            contentArrowStyle={{ borderRight: `7px solid  ${theme.palette.primary.light}` }}
                            iconStyle={{ background: theme.palette.primary.light, color: theme.palette.secondary.main }}

                            icon={<CircleIcon />}
                        >
                            <Typography variant='h6' component="p">
                                {step}
                            </Typography>
                        </VerticalTimelineElement>)}

                    </VerticalTimeline>

                </Box>
                <Box sx={{ bgcolor: theme.palette.secondary.main, minHeight: "500px" }}>
                    <Box sx={{
                        maxWidth: "lg", mx: "auto", display: "flex", flexDirection: {
                            md: "row",
                            xs: "column"
                        }
                    }}>
                        <Box sx={{ mx: { md: 2, xs: "auto" }, my: 5, maxWidth: { md: "40%", xs: "90%" } }}>
                            <Typography mb={2} variant='h4' component="h3" >{page.galery}</Typography>
                            <Carousel images={architect.galery} />
                        </Box>
                        <Box sx={{ mx: "auto", my: 5, width: { md: 1 / 2, xs: "90%" }, maxWidth: "600px" }}>
                            <Typography mb={2} variant='h4' component="h3" >{page.placeOfPerformance}</Typography>
                            <Box
                                component="iframe"
                                sx={{ mx: "auto", minHeight: "350px", width: "100%", }}
                                loading="lazy"
                                allowFullScreen
                                refererpolicy="no-referrer-when-downgrade"
                                src={architect.map}>
                            </Box>
                        </Box>
                    </Box>

                </Box>
                <Box sx={{ mx: "auto", my: 5, width: { md: 2 / 3, xs: "90%" }, maxWidth: "600px" }}>
                    <Typography mb={2} variant='h4' component="h3" >{page.video}</Typography>
                    <YoutubeEmbed embedId={architect.video} />
                </Box>

            </Box>
        </React.Fragment >);
}