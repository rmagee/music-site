import Head from 'next/head'
import {createTheme, ThemeProvider} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Navigation from "./navigation";
import Footer from "./footer";
import {theme as options} from "../lib/theme";

export const siteTitle = 'Rob Magee'

const theme = createTheme(options)

export default function Layout({children}) {
    return (
        <div>
            <Head>
                <title>{siteTitle}</title>
                <link rel="icon" href="/favicon.ico"/>
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/icon?family=Material+Icons"
                />
                <meta
                    name="description"
                    content="Rob Magee"
                />
                <meta name="viewport" content="initial-scale=1, width=device-width"/>
                <meta name="og:title" content={siteTitle}/>
                <meta name="twitter:card" content="summary_large_image"/>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
                <link
                    href="https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&display=swap"
                    rel="stylesheet"/>
            </Head>
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                <Navigation/>
                <main>{children}</main>
                <Footer/>
            </ThemeProvider>
        </div>
    )
}