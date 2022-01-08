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
            primary: '#073b4c',
            secondary: '#118ab2'
        },
        primary: {
            main: '#06d6a0',
        },
        secondary: {
            main: '#ef476f',
            contrastText: '#ffd166',
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
