import React from 'react';
import {Box, Container} from "@mui/material";
import Typography from "@mui/material/Typography";
import Image from 'next/image';

export const AboutSection = () => {
    return (
        <Box id={'about'} sx={{
            background: theme => theme.palette.secondary.main,
            py: '6rem',
        }}>

            {/*     ABOUT CONTAINER    */}
            <Container maxWidth={'xxl'}>
                {/*     ABOUT HEADING   */}
                <Typography sx={{
                    textAlign: 'center',
                    color: '#fff',
                }} variant={'h2'}>
                    About
                </Typography>

                {/*     ABOUT GRID      */}
                <Box sx={{
                    display: 'grid',
                    gridTemplateColumns: {
                        xs: '1fr',
                        xl: '1fr 1fr',
                    },
                    placeItems: 'center',
                    gridGap: "6rem",
                    py: '4rem',
                }}>
                    {/*     FIRST IMAGE     */}
                    <Box sx={{
                        order: {
                            xs: '0',
                            xl: '0',
                        }
                    }}>
                        <Image src={'/slider/1.png'} width={350} height={350} layout={'intrinsic'}/>
                    </Box>

                    {/*     FIRST TEXT      */}
                    <Box sx={{
                        order: {
                            xs: '1',
                            xl: '0',
                        }
                    }}>
                        <Typography sx={{
                            color: "#fff",
                        }} variant={'body2'}>
                        Big Head Golf Club is an NFT project consisting of 500 unique characters from in real world golf
                        brand (Golf Made Me Do It
                        - hyperlink). Each high-quality artwork is unique, with its own luxury characteristic. Owning a
                        Big Head gives you access to an exclusive club of holders with added value that grows over time,
                        with full transparency on the Ethereum blockchain.
                    </Typography>
                    </Box>

                    {/*     SECOND TEXT     */}
                    <Box sx={{
                        order: {
                            xs: '3',
                            xl: '0',
                        }
                    }}>
                        <Typography sx={{
                            color: "#fff",
                        }} variant={'body2'}>
                            Big Head Golf Club is an NFT project consisting of 500 unique characters from in real world golf
                            brand (Golf Made Me Do It
                            - hyperlink). Each high-quality artwork is unique, with its own luxury characteristic. Owning a
                            Big Head gives you access to an exclusive club of holders with added value that grows over time,
                            with full transparency on the Ethereum blockchain.
                        </Typography>
                    </Box>

                    {/*     SECOND IMAGE      */}
                    <Box sx={{
                        order: {
                            xs: '2',
                            xl: '0',
                        }
                    }}>
                        <Image src={'/slider/1.png'} width={350} height={350} layout={'intrinsic'}/>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

