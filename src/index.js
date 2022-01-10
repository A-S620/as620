import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {createTheme, ThemeProvider} from "@mui/material";
import App from "./app/App";

const theme = createTheme({
    spacing: 8,
    typography: {
        fontSize: 12,
    },
    palette: {
        text: {
            primary: '#393d3f',
            secondary: '#6883ba'
        },
        primary: {
            main: '#dfaeb4',
        },
        secondary: {
            main: '#FCFC62',
            contrastText: '#D90368',
        },
        contrastThreshold: 3,
        tonalOffset: 0.2,

    },
});
ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <App/>
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
