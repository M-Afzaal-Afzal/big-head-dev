import React from 'react';
import {Box, Container, Stack} from "@mui/material";
import Typography from "@mui/material/Typography";
import {FaDiscord,FaInstagram,FaTwitter,FaTiktok} from "react-icons/fa";

export const Footer = () => {
    return (
        <Box sx={{
            background: (theme) => theme.palette.secondary.main,
            py: '3rem',
        }}>
            <Container maxWidth={'xxl'}>
                <Box sx={{
                    display: "grid",
                    gridTemplateColumns: {
                        xs: "auto",
                        lg: "auto auto",
                    },
                    gridGap: "1rem",
                    alignItems: 'center',
                    justifyContent: {
                        xs: "center",
                        lg: "space-between",
                    },
                }}>
                    <Typography sx={{
                        color: "#fff",
                        overflowWrap: 'break-word',
                    }} variant={'body1'}>
                        COPYRIGHT @ 2022 BIG HEAD GOLF CLUB.ALL RIGHTS RESERVED
                    </Typography>
                    <Stack sx={{
                        justifyContent: 'center',
                    }} direction={'row'} spacing={3}>
                        <FaInstagram size={25} color={'#fff'}/>
                        <FaTwitter size={25} color={'#fff'}/>
                        <FaDiscord size={25} color={'#fff'}/>
                        <FaTiktok size={25} color={'#fff'}/>
                    </Stack>
                </Box>
            </Container>
        </Box>
    );
};

