import React from 'react';
import {LaunchRoadmapSection} from "./LaunchRoadmapSection";
import {DevelopmentRoadmapSection} from "./DevelopmentRoadmapSection";
import {Box, Container} from "@mui/material";
import Typography from "@mui/material/Typography";

export const RoadmapSection = () => {
    return (
        <Box id={'roadmap'} sx={{
            background: theme => theme.palette.secondary.main,
            pb: '6rem',
        }}>
            <Container maxWidth={'xxl'}>
                {/*     ROADMAP HEADING   */}
                <Box>
                    <Typography sx={{
                        textAlign: 'center',
                        color: '#fff',
                    }} variant={'h2'}>
                        Road Map
                    </Typography>
                </Box>
                <LaunchRoadmapSection/>
                <DevelopmentRoadmapSection/>
            </Container>
        </Box>
    );
};

