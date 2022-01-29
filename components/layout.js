import Head from 'next/head'
import styles from './layout.module.css'
import Link from 'next/link'
import {createTheme, ThemeProvider} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Navigation from "./navigation";
import {consoleArt} from "../lib/utils";
const name = 'Rob Magee'
export const siteTitle = 'Rob Magee'

const themeOptions = {
    palette: {
        type: 'light',
        primary: {
            main: '#889db8',
            contrastText: 'rgba(243,238,238,0.87)',
        },
        secondary: {
            main: '#608c8c',
        },
        background: {
            default: '#a3b9d0',
            paper: '#889db8',
        },
        text: {
            primary: '#ffffff',
            secondary: '#ffffff',
            hint: 'rgba(253,253,253,0.38)',
            disabled: '#757575',
        },
        error: {
            main: '#f4fb6e',
        },
        typography: {
            fontFamily: ['Oswald',
                '-apple-system',
                'BlinkMacSystemFont',
                '"Segoe UI"',
                '"Helvetica Neue"',
                'Arial',
                'sans-serif',
                '"Apple Color Emoji"',
                '"Segoe UI Emoji"',
                '"Segoe UI Symbol"',],
        },
    },
};

const theme = createTheme(themeOptions)

export default function Layout({children, home}) {
    return (
        <div>
            <Head>
                <title>Rob Magee</title>
                consoleArt();
                <link rel="icon" href="http://www.robmagee.com/favicon.ico"/>
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/icon?family=Material+Icons"
                />
                <meta
                    name="description"
                    content="Rob Magee Music and Production"
                />
                <meta name="viewport" content="initial-scale=1, width=device-width"/>
                <meta name="og:title" content={siteTitle}/>
                <meta name="twitter:card" content="summary_large_image"/>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
                <link href="https://fonts.googleapis.com/css2?family=Shalimar&display=swap" rel="stylesheet"/>
            </Head>
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                <Navigation/>
            <main>{children}</main>
            </ThemeProvider>
        </div>
    )
}