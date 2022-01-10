import React, {useState} from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export const Faqs = () => {

    const [expanded, setExpanded] = useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <div>
            {
                faqs.map(({id,question,ans}) => (
                    <Accordion key={id} sx={{
                        my: '1rem',
                        borderRadius: "18px !important",
                    }} expanded={expanded === id} onChange={handleChange(id)}
                    >
                        <AccordionSummary
                            sx={{
                                py: "1rem",
                                px: {
                                    xs: "1rem",
                                    md: "1.3rem",
                                    lg: "1.5rem",
                                }
                            }}
                            expandIcon={<ExpandMoreIcon color={'secondary'} />}
                            aria-controls="panel1bh-content"
                            id="panel1bh-header"
                        >
                            <Typography sx={{ fontSize: '20px', fontFamily: 'Montserrat',fontWeight: "bold",color: "#181616" }}>
                                {question}
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails sx={{
                            pb: "1rem",
                            px: {
                                xs: "1rem",
                                md: "1.3rem",
                                lg: "1.5rem",
                            }
                        }}>
                            <Typography color={'secondary'}>
                                {ans}
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                ))
            }
        </div>
    );
};

const faqs = [
    {
        id: 1,
        question: " What is a NFT?",
        ans: ` Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                        amet egestas eros, vitae egestas augue. Duis vel est augue.`,
    },{
        id: 2,
        question: "What is Metamask?",
        ans: ` Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                        amet egestas eros, vitae egestas augue. Duis vel est augue.`,
    },{
        id: 3,
        question: "Will there be a whitelisted presale?",
        ans: ` Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                        amet egestas eros, vitae egestas augue. Duis vel est augue.`,
    },{
        id: 4,
        question: "How To mint my NFT?",
        ans: ` Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                        amet egestas eros, vitae egestas augue. Duis vel est augue.`,
    },{
        id: 5,
        question: "Where does my NFT go after I purchase it?",
        ans: ` Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                        amet egestas eros, vitae egestas augue. Duis vel est augue.`,
    },{
        id: 6,
        question: "Since I purchased a Big Head NFT, Do I own the rights to the design?",
        ans: ` Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                        amet egestas eros, vitae egestas augue. Duis vel est augue.`,
    },{
        id: 7,
        question: "What blockchain will you be using?",
        ans: ` Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                        amet egestas eros, vitae egestas augue. Duis vel est augue.`,
    },
]