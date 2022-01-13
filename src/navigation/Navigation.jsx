import * as React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import KeySkills from "../features/KeySkills";

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `tab-${index}`,
        'aria-controls': `tabpanel-${index}`,
    };
}

export default function Navigation() {
    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box >
            <AppBar position="static">
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="secondary"
                    textColor="inherit"
                    variant="fullWidth"
                    aria-label="navigation tabs"
                >
                    <Tab label="About Me" {...a11yProps(0)} />
                    <Tab label="Key Skills" {...a11yProps(1)} />
                    <Tab label="Item Two" {...a11yProps(2)} />
                    <Tab label="Item Three" {...a11yProps(3)} />
                </Tabs>
            </AppBar>

                <TabPanel value={value} index={0} >
                    Meep
                </TabPanel>
            <TabPanel value={value} index={1} >
                    <KeySkills/>
                </TabPanel>
                <TabPanel value={value} index={2} >
                    Item Two
                </TabPanel>
                <TabPanel value={value} index={3}>
                    Item Three
                </TabPanel>
        </Box>
    );
}
