import React from 'react';
import {Box, Button} from "@mui/material";

export const OutlinedButton = ({children,sx,...props}) => {
    return (
        <Button color={'secondary'} variant={'outlined'} sx={{
            fontFamily: "Montserrat",
            fontSize: '13px',
            fontWeight: 600,
            py: '8px',
            px: '2rem',
            ...sx,
        }}>
            {children}
        </Button>
    );
};
