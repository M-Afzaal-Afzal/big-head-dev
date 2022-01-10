import React from 'react';
import {Box, Container, IconButton, Stack} from "@mui/material";
import Image from 'next/image';
import {TextLink} from "../common/TextLink";
import {OutlinedButton} from "../common/OutlinedButton";
import DehazeIcon from '@mui/icons-material/Dehaze';

export const Header = () => {
    return (
        <Box sx={{
            position: 'fixed',
            width: '100%',
            background: 'rgba(255,255,255,0.7)',
            backdropFilter: 'blur(10px)',
            top: 0,
            zIndex: 999,
            overflow: 'hidden',
        }}>
            <Container maxWidth={'xxl'}>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    py: '1.5rem',
                }}>
                    {/* Left Logo*/}
                    <Box>
                        <Image width={46} height={46} src={'/logo.svg'} layout={'intrinsic'} />
                    </Box>

                    {/*    Center Links*/}
                    <Stack sx={{
                        display: {
                            xs: 'none',
                            xl: "block",
                        }
                    }} direction={'row'} spacing={5}>
                        <TextLink to={'about'}>
                            About
                        </TextLink>
                        <TextLink to={'roadmap'}>
                            Roadmap
                        </TextLink>
                        <TextLink to={'team'}>
                            Team
                        </TextLink>
                        <TextLink to={'events'}>
                            Events
                        </TextLink>
                        <TextLink to={'faq'}>
                            FAQ
                        </TextLink>
                    </Stack>

                    {/*    For Mobile Navigation    */}
                    <IconButton aria-label="navbar" component="span" variant={'outlined'} sx={{
                        display: {
                            xs: 'block',
                            xl: "none",
                        }
                    }}>
                        <DehazeIcon/>
                    </IconButton>

                    {/*    Right Links*/}
                    <Stack spacing={5} direction={'row'}>
                        <OutlinedButton>
                            Connect Wallet
                        </OutlinedButton>
                    </Stack>
                </Box>
            </Container>
        </Box>
    );
};

