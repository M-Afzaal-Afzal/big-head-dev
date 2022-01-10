import React from 'react';
import {Box, Container} from "@mui/material";
import Typography from "@mui/material/Typography";
import {Faqs} from "./Faqs";

export const FaqSection = () => {
    return (
        <Box id={'faq'} sx={{
            background: theme => theme.palette.secondary.main,
            py: '6rem',
        }}>
            <Container maxWidth={'xxl'}>
                {/*     ROADMAP HEADING   */}

                    <Typography sx={{
                        textAlign: 'center',
                        color: '#fff',
                    }} variant={'h2'}>
                        Frequently  Asked  Questions
                    </Typography>

                <Box sx={{
                    mt: {
                        xs: "2rem",
                        md: "3rem",
                        xl: "4rem",
                    }
                }}>
                    <Faqs/>
                </Box>

            </Container>
        </Box>
    );
};

