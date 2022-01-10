import React from 'react';
import {Box, Container} from "@mui/material";
import Typography from "@mui/material/Typography";

export const EventsSection = () => {
    return (
        <Box id={'events'} sx={{
            background: "#fff",
            py: '6rem',
            // pt: '10rem',
        }}>
            <Container maxWidth={'xl'}>
                {/*     TEAM HEADING   */}
                <Typography sx={{
                    textAlign: 'center',
                    color: '#181616',
                }} variant={'h2'}>
                    Events
                </Typography>

                <Typography sx={{
                    textAlign: 'center',
                    mt: {
                        xs: '2rem',
                        lg: "3rem",
                        xl: "4rem",
                    },
                }} variant={'body2'}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt condimentum dolor,
                    quis sagittis enim facilisis a. Vivamus sed congue justo. Ut dignissim gravida augue, at tristique
                    nisl varius sed. Curabitur vulputate, ipsum ac pulvinar semper, lacus leo euismod orci, non placerat
                    risus purus non sem. Nulla non quam sit amet augue pharetra malesuada. Aenean a sodales ante.
                    Vivamus congue ligula magna, nec scelerisque ipsum condimentum eu. Maecenas aliquam aliquet urna nec
                    fermentum. Nam sit amet mattis metus, vel pellentesque lectus. Nulla elit quam, dictum at dictum eu,
                    elementum vitae eros. In volutpat sagittis semper. Praesent et augue accumsan, auctor libero at,
                    molestie mi. Cras feugiat dictum fringilla.
                </Typography>

            </Container>
        </Box>
    );
};

