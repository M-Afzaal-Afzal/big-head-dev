import React from 'react';
import {Box} from "@mui/material";
import Typography from "@mui/material/Typography";

const ElipseHeading = ({children,subHeading}) => {
    return (
        <Box position={'relative'}>
            <Typography sx={{
                textAlign: 'center',
                color: '#fff',
                fontSize: {
                    xs: "40px",
                    md: "50px",
                    lg: "60px",
                },
            }} variant={'h2'}>
                {children}
            </Typography>

            {
                subHeading && (
                    <Typography sx={{
                        textAlign: 'center',
                        color: '#fff',
                        fontSize: "21px",
                        position: 'absolute',
                        left: '50%',
                        transform: 'translate(-50%,-50%)',
                        bottom: '-3rem',
                        // mt: '1rem',
                    }} variant={'h2'}>
                        {subHeading}
                    </Typography>
                )
            }


            <Box sx={{
                width: {
                    xs: "350px",
                    md: '450px',
                    lg: "550px",
                    xl: "700px"
                },
                height: '190px',
                borderRadius: '50%',
                boxShadow:' 0px 0px 127px 0px #22D749E8',
                filter: 'drop-shadow(0px 0px 127px rgba(34, 215, 73, 0.91))',
                border: '3px solid #fff',
                background: 'transparent',
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%,-50%)',
            }}/>
        </Box>
    );
};

export default ElipseHeading;
