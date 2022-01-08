import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import KeySkillsData from "../data/KeySkillsData";

export default function SkillSelect(props) {
    const [skill, setSkill] = React.useState('Languages');

    const handleChange = (event) => {
        setSkill(event.target.value);
        props.onSkillSelect(event.target.value);
    };

    return (
        <Box sx={{minWidth: 120}}>
            <FormControl fullWidth>
                <InputLabel id="skill-select-label">Skill</InputLabel>
                <Select
                    labelId="skill-label"
                    id="skill-select"
                    value={skill}
                    label="Skill"
                    onChange={handleChange}
                > {
                    Object.keys(KeySkillsData).map(skill => {
                        return <MenuItem value={skill}>{skill}</MenuItem>
                    })
                }


                </Select>
            </FormControl>
        </Box>
    );
}