import * as React from 'react';
// import Container from '@mui/material/Container';
// import Typography from '@mui/material/Typography';
// import Box from '@mui/material/Box';
// import ProTip from '../src/ProTip';
// import Link from '../src/Link';
// import Copyright from '../src/Copyright';
import {
    HeroSection,
    AboutSection,
    RoadmapSection,
    DiscordBanner,
    EventsSection,
    FaqSection,
    TeamSection
} from '../components/home/index';

export default function Index() {
    return (
        <>
            <HeroSection/>
            <AboutSection/>
            <RoadmapSection/>
            <TeamSection/>
            <DiscordBanner/>
            <EventsSection/>
            <FaqSection/>
        </>
    );
}
