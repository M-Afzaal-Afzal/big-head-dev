import React from 'react';
import {Box, Container} from "@mui/material";
import Typography from "@mui/material/Typography";
import {FaDiscord,FaShare} from 'react-icons/fa';

export const DiscordBanner = () => {
    return (
        <Box sx={{
            background: '#246833',
        }}>
            <Container maxWidth={'xxl'}>
                <Box sx={{
                    p: {
                        xs: '1rem',
                        md:"2rem",
                        xl: '4rem',
                    },
                    display: "grid",
                    gridGap: '3rem',
                    gridTemplateColumns: {
                        xs: "1fr",
                        xl:'1fr 1fr 1fr'
                    },
                    placeItems: 'center',
                }}>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: "center",
                    }}>
                        <Typography sx={{
                            fontSize: '60px',
                            textAlign:"center",
                            color: "#fff",
                        }} variant={'h1'}>
                            JOIN  THE  COMMUNITY
                        </Typography>
                        <Typography sx={{
                            fontSize: '55px',
                            textAlign:"center",
                            color: "#fff",
                        }} variant={'h1'}>
                            DISCORD NOW
                        </Typography>
                    </Box>

                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: "center",
                    }}>
                        <FaShare color={"#fff"} size={150}/>
                    </Box>

                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: "center",
                    }}>
                        <FaDiscord color={'#fff'} size={190}/>
                    </Box>

                </Box>
            </Container>
        </Box>
    );
};

