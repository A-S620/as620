import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import {Bubble, BubbleChart, BubbleSeries, ChartTooltip} from 'reaviz';
import KeySkillsData from "../data/KeySkillsData.js";

export default function KeySkills() {
    // @ts-ignore
    const languages = KeySkillsData['Languages'].map(lang => {
        return {key: lang, data: 1}
    });
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Paper>
                    <BubbleChart
                        series={<BubbleSeries bubble={<Bubble tooltip={<ChartTooltip disabled={true}/>}/>}/>}
                        height={300}
                        width={300}
                        data={languages}
                    />
                </Paper>

            </Grid>
        </Box>
    );
}