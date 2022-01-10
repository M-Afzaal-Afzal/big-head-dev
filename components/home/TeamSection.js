import React from 'react';
import {Box, Container} from "@mui/material";
import Typography from "@mui/material/Typography";
import Image from 'next/image';

export const TeamSection = () => {
    return (
        <Box id={'team'} sx={{
            background: '#fff',
            py: '6rem',
            // pt: '10rem',
        }}>

            <Container maxWidth={'xxl'}>
                {/*     TEAM HEADING   */}
                <Typography sx={{
                    textAlign: 'center',
                    color: '#181616',
                }} variant={'h2'}>
                    Team
                </Typography>

                <Box sx={{
                    display: "flex",
                    mt: {
                        xs: "2rem",
                        md: "3rem",
                        lg: '4rem',
                        xl: '5rem',
                    },
                    justifyContent: {
                        xs: "center",
                        xl: "space-between",
                    },
                    alignItems: 'center',
                    flexFlow: {
                        xs: "column wrap",
                        xl: "row wrap",
                    },
                }}>

                    {/* FIRST TEAM MEMBER */}
                    <Box
                        sx={{
                            maxWidth: '407px',
                            // width: "407px",
                            margin: '1rem',
                        }}
                    >
                        {/* Team image one*/}
                        <Box sx={{
                            '& img': {
                                borderRadius: '17px 17px 0px 0px',
                            }
                        }}>
                            <Image src={'/home/team/1.png'} width={407} height={407}/>
                        </Box>

                        {/* TEAM MEMBER NAME */}
                        <Typography variant={'body2'} sx={{
                            background: '#246833',
                            mt: "1rem",
                            py: "1rem",
                            px: "2rem",
                            borderRadius: '0 0 20px 20px',
                            fontSize: '26px',
                            fontWeight: "bold",
                            lineHeight: "31.69px",
                            color: "#fff",
                            textAlign: "center",
                        }}>
                            Golf Made Me Do It
                        </Typography>

                        <Typography sx={{
                            color: "#246833",
                            mt: '1.5rem',
                            textAlign: "center",
                            fontSize: "25px",
                        }} variant={'body1'}>
                            Founder
                        </Typography>

                    </Box>

                    {/* SECOND TEAM MEMBER */}
                    <Box
                        sx={{
                            maxWidth: '407px',
                            // width: "407px",
                            margin: '1rem',
                        }}
                    >
                        {/* Team image one*/}
                        <Box sx={{
                            '& img': {
                                borderRadius: '17px 17px 0px 0px',
                            }
                        }}>
                            <Image src={'/home/team/1.png'} width={407} height={407}/>
                        </Box>

                        {/* TEAM MEMBER NAME */}
                        <Typography variant={'body2'} sx={{
                            background: '#246833',
                            mt: "1rem",
                            py: "1rem",
                            px: "2rem",
                            borderRadius: '0 0 20px 20px',
                            fontSize: '26px',
                            fontWeight: "bold",
                            lineHeight: "31.69px",
                            color: "#fff",
                            textAlign: "center",
                        }}>
                            Coach
                        </Typography>

                        <Typography sx={{
                            color: "#246833",
                            mt: '1.5rem',
                            textAlign: "center",
                            fontSize: "25px",
                        }} variant={'body1'}>
                            Advisor
                        </Typography>

                    </Box>

                </Box>

            </Container>

        </Box>
    );
};

