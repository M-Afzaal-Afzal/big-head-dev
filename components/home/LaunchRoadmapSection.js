import React from 'react';
import {Box, Typography} from "@mui/material";
import ElipseHeading from "../common/ElipseHeading";
import Image from 'next/image'

export const LaunchRoadmapSection = () => {
    return (
        <Box sx={{
            background: theme => theme.palette.secondary.main,
            py: '6rem',
            pt: '10rem',
        }}>
            <ElipseHeading>
                Launch Road Map
            </ElipseHeading>

            <Box sx={{
                pt: '12rem',
                display: 'grid',
                gridTemplateColumns: {
                    xs: '1fr',
                    xl: '1fr 1fr',
                },
                placeItems: 'center',
            }}>

                {/*   Content box  */}
                <Box>
                    <Typography variant={'body1'} sx={{
                        p: {
                            xs: '1rem',
                            md: "2rem",
                            lg: "4rem",
                        },
                        color: '#fff',
                        textAlign: 'center',
                        maxHeight: '436px',
                        mx: 'auto',
                        border: ' 2px solid #FBFAF5',
                        borderRadius: '14px',
                    }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt condimentum dolor,
                        quis sagittis enim facilisis a.
                    </Typography>

                    <Typography sx={{
                        fontSize: "24px",
                        textAlign: 'center',
                        fontWeight: "bold",
                        color: "#fff",
                        py: "2rem",
                        pb: {
                            xs: '2rem',
                            md:'4rem',
                            xl: '6rem',
                        },
                        textShadow: '0px 0px 40px rgba(34, 215, 73, 0.36)',
                        maxWidth: '18rem',
                        lineHeight: '33.82px',
                        mx: "auto",
                        textAnchor: 'center',
                    }} variant={'body1'}>
                        Marketing & Launch
                    </Typography>
                </Box>

                {/*   Square Box Right  */}
                <Box sx={{
                    position: 'relative',
                    gridTemplateColumns: "1fr 1fr",
                    mt: '-140.24px',
                    display: {
                        xs: 'none',
                        xl: 'grid',
                    }
                }}
                >

                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        '& img': {
                            background: "#fff",
                        }
                    }}>
                        <Image src={'/home/horizontalLine.svg'} height={2} width={351}/>
                    </Box>

                    <Box sx={{
                        display: 'flex',
                        position: 'relative',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        marginLeft: '-2rem',
                    }}>
                        <Image width={70} height={70} src={'/home/square.svg'}/>
                        <Box sx={{
                            position:'absolute',
                            top: '50%',
                            left: 0,
                            marginLeft: '2.2rem',
                            '& img': {
                                background: '#fff',
                            }
                        }}>
                        <Image width={2} height={252} src={'/home/verticalLine.svg'}/>
                        </Box>
                    </Box>
                </Box>

                {/*   Square Box Left  */}
                <Box sx={{
                    position: 'relative',
                    display: {
                        xs: 'none',
                        xl: 'grid',
                    },
                    gridTemplateColumns: "1fr 1fr",
                    mt: '-140.24px',
                }}
                >
                    <Box sx={{
                        display: 'flex',
                        position: 'relative',
                        justifyContent: 'flex-end',
                        alignItems: 'center',
                    }}>
                        <Box sx={{
                            marginRight: '-2.2rem',
                        }}>
                        <Image width={70} height={70} src={'/home/square.svg'}/>
                        </Box>
                        <Box sx={{
                            position:'absolute',
                            top: '50%',
                            right: 0,
                            // marginLeft: '2.2rem',
                            '& img': {
                                background: '#fff',
                            }
                        }}>
                            <Image width={2} height={245} src={'/home/verticalLine.svg'}/>
                        </Box>
                    </Box>

                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        '& img': {
                            background: "#fff",
                        }
                    }}>
                        <Image src={'/home/horizontalLine.svg'} height={2} width={351}/>
                    </Box>
                </Box>

                <Box>
                    <Typography variant={'body1'} sx={{
                        p: {
                            xs: '1rem',
                            md: "2rem",
                            lg: "4rem",
                        },
                        color: '#fff',
                        textAlign: 'center',
                        maxHeight: '436px',
                        mx: 'auto',
                        border: ' 2px solid #FBFAF5',
                        borderRadius: '14px',
                    }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt condimentum dolor,
                        quis sagittis enim facilisis a.
                    </Typography>

                    <Typography sx={{
                        fontSize: "24px",
                        textAlign: 'center',
                        fontWeight: "bold",
                        color: "#fff",
                        py: "2rem",
                        pb: {
                            xs: '2rem',
                            md:'4rem',
                            xl: '6rem',
                        },
                        textShadow: '0px 0px 40px rgba(34, 215, 73, 0.36)',
                        // border: '1px solid #22D749',
                    }} variant={'body1'}>
                        Event Access
                    </Typography>
                </Box>

                {/*   Content box  */}
                <Box>
                    <Typography variant={'body1'} sx={{
                        p: {
                            xs: '1rem',
                            md: "2rem",
                            lg: "4rem",
                        },
                        color: '#fff',
                        textAlign: 'center',
                        maxHeight: '436px',
                        mx: 'auto',
                        border: ' 2px solid #FBFAF5',
                        borderRadius: '14px',
                    }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt condimentum dolor,
                        quis sagittis enim facilisis a.
                    </Typography>

                    <Typography sx={{
                        fontSize: "24px",
                        textAlign: 'center',
                        fontWeight: "bold",
                        color: "#fff",
                        py: "2rem",
                        pb: {
                            xs: '2rem',
                            md:'4rem',
                            xl: '6rem',
                        },
                        textShadow: '0px 0px 40px rgba(34, 215, 73, 0.36)',
                        maxWidth: '18rem',
                        lineHeight: '33.82px',
                        mx: "auto",
                        textAnchor: 'center',
                    }} variant={'body1'}>
                        Webstore & Exclusive Drops
                    </Typography>
                </Box>

                {/*   Square Box Right  */}
                <Box sx={{
                    position: 'relative',
                    display: {
                        xs: 'none',
                        xl: 'grid',
                    },
                    gridTemplateColumns: "1fr 1fr",
                    mt: '-140.24px',
                }}
                >

                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        '& img': {
                            background: "#fff",
                        }
                    }}>
                        <Image src={'/home/horizontalLine.svg'} height={2} width={351}/>
                    </Box>

                    <Box sx={{
                        display: 'flex',
                        position: 'relative',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        marginLeft: '-2rem',
                    }}>
                        <Image width={70} height={70} src={'/home/square.svg'}/>
                        <Box sx={{
                            position:'absolute',
                            top: '50%',
                            left: 0,
                            marginLeft: '2.2rem',
                            '& img': {
                                background: '#fff',
                            }
                        }}>
                            <Image width={2} height={270} src={'/home/verticalLine.svg'}/>
                        </Box>
                    </Box>
                </Box>

                {/*   BOX ONLY FOR LAYOUT  */}
                <Box/>

                {/*   Content box  */}
                <Box>
                    <Typography variant={'body1'} sx={{
                        p: {
                            xs: '1rem',
                            md: "2rem",
                            lg: "4rem",
                        },
                        color: '#fff',
                        textAlign: 'center',
                        maxHeight: '436px',
                        mx: 'auto',
                        border: ' 2px solid #FBFAF5',
                        borderRadius: '14px',
                    }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt condimentum dolor,
                        quis sagittis enim facilisis a.
                    </Typography>

                    <Typography sx={{
                        fontSize: "24px",
                        textAlign: 'center',
                        fontWeight: "bold",
                        color: "#fff",
                        py: "2rem",
                        pb: {
                            xs: '2rem',
                            md:'4rem',
                            xl: '6rem',
                        },
                        textShadow: '0px 0px 40px rgba(34, 215, 73, 0.36)',
                        maxWidth: '18rem',
                        lineHeight: '33.82px',
                        mx: "auto",
                        textAnchor: 'center',
                        // border: '1px solid #22D749',
                    }} variant={'body1'}>
                        Year End Race Winner Announcement
                    </Typography>
                </Box>

            </Box>

        </Box>
    );
};

