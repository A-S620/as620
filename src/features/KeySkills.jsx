import * as React from 'react';
import {Box, Paper, Grid} from '@mui/material';
import {Bubble, BubbleChart, BubbleSeries, ChartTooltip} from 'reaviz';
import KeySkillsData from "../data/KeySkillsData.js";
import SkillSelect from "./SkillSelect";
import {createStyles, makeStyles} from "@mui/styles";

const useStyles = makeStyles((theme) =>
    createStyles({
        root: {
            flexGrow: 1,
            margin: theme.spacing(),
        },
    })
);
export default function KeySkills() {
    const [skill, setSkill] = React.useState('Languages');
    const languages = KeySkillsData[skill].map(lang => {
        return {key: lang, data: 1}
    });
    const classes = useStyles();


    return (
        <Box className={classes.root} >
            <Grid container>
                    <Grid item>
                        <SkillSelect onSkillSelect={setSkill}/>
                    </Grid>

                    <Grid item>
                        <BubbleChart
                            series={<BubbleSeries bubble={<Bubble tooltip={<ChartTooltip disabled={true}/>}/>}/>}
                            height={600}
                            width={600}
                            data={languages}
                        />
                    </Grid>


            </Grid>
        </Box>
    );
}