import React from 'react';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import {Box} from "@mui/material";

export const TextLink = ({children,to,sx,...props}) => {
    return (
        <Box
            sx={{
            fontSize: '14px',
            fontFamily: "Montserrat",
            fontWeight: 600,
            color: '#585151',
            cursor: "pointer",
            ...sx,
        }}
            activeClass={'active'}
             as={Link}
             smooth
             spy={true}
             to={to}
             {...props}
        >
            {children}
        </Box>
    );
};
