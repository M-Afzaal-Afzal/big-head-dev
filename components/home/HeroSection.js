import React from 'react';
import {Box, Container, Stack} from "@mui/material";
import Typography from "@mui/material/Typography";
import {Carousel} from "../common/Carousel";
import {Header} from "../layout/Header";
import Image from 'next/image';
import {OutlinedButton} from "../common/OutlinedButton";


export const HeroSection = () => {
    return (
        <Box sx={{
            position: "relative",
            overflow: 'hidden',
        }}>
            {/* HEADER COMPONENT */}
            <Header/>
            <Box sx={{
                py: '4rem',
                pt: "8rem",
            }}>

                {/* HEADING*/}
                <Box sx={{
                    textAlign: "center",
                    pt: '3rem',
                }}>
                    <Typography color={'primary'} variant={'h1'}>
                        Big Head
                    </Typography>
                    <Typography color={'primary'} variant={'h2'}>
                        Golf Club
                    </Typography>
                </Box>

                {/* SUBHEADING */}
                <Container sx={{
                    mt: "3rem",
                }} maxWidth={'lg'}>
                    <Typography sx={{
                        textAlign: 'center',
                    }} variant={'body1'}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt condimentum dolor,
                        quis
                        sagittis enim facilisis a.
                    </Typography>
                    {/*    Right Links*/}
                    <Box sx={{
                        mt: "2rem",
                        justifyContent: 'center',
                        display: 'grid',
                        gridTemplateColumns: {
                          xs: 'auto',
                          md: 'auto auto',
                        },
                        alignItems: 'center',
                        flexWrap: 'wrap',
                    }} direction={'row'}>
                        <OutlinedButton sx={{
                            mr: {
                                xs: '0',
                                md: "2rem",
                            },
                        }}>
                            Mint now
                        </OutlinedButton>
                        <OutlinedButton sx={{
                            mt: {
                                xs: '1rem',
                                md: '0',
                            }
                        }}>
                            Buy on Open Sea
                        </OutlinedButton>
                    </Box>
                </Container>

                {/*    CAROUSEL    */}
                <Carousel/>

                {/*    Screen Elements    */}

                {/*    Right Circle      */}
                <Box sx={{
                    background: 'rgba(36, 104, 51, 0.65)',
                    borderRadius: '50%',
                    position: 'absolute',
                    width: '600px',
                    height: '600px',
                    top: '-228px',
                    right: '-50px',
                    zIndex: -2,
                    display: {
                        xs: 'none',
                        xxl: "block",
                    }
                }}>
                    <Box sx={{
                        position: 'absolute',
                        bottom: "30px",
                        left: '50%',
                        transform: 'translateX(-50%)',
                    }}>
                        <Image
                            width={138}
                            height={138}
                            src={'/golf-ball.svg'}
                            layout={'intrinsic'}
                        />
                    </Box>
                </Box>

                {/* 2ND BALL ELEMENT  */}

                <Box sx={{
                    position: 'absolute',
                    bottom: "55%",
                    left: '15%',
                    transform: 'translateX(-50%)',
                    display: {
                        xs: 'none',
                        xxl: "block",
                    }
                }}>
                    <Image
                        width={138}
                        height={138}
                        src={'/golf-ball.svg'}
                        layout={'intrinsic'}
                    />
                </Box>

            </Box>
        </Box>
    );
};

