import Layout, {siteTitle} from '../components/layout'
import Head from 'next/head'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Audio from "../components/audio"
import styles from "./music.module.css"
import SongList from '../components/songList'
import React, {useState} from "react"
import fs from 'fs'
import path from 'path'
import Typography from "@mui/material/Typography";

export async function getStaticProps() {
    const songsFilePath = path.join(process.cwd(), '/data/songs.json')
    const data = fs.readFileSync(songsFilePath, 'utf8')
    const songs = JSON.parse(data)

    return {
        props: {
            songs,
        }, // will be passed to the page component as props
    }
}

export default function Music(props) {
    const [currentSong, setCurrentSong] = useState(null)

    const handleSongClicked = (event, title, url) => {
        event.preventDefault()
        console.log(title + ' was clicked.')
        setCurrentSong({url: url, title: title})
    }

    return (
        <Layout music>
            <Head>
                <title>{siteTitle}: Music</title>
            </Head>
            <Box sx={{m: 3}} style={{marginTop: "45px"}}>
                <Grid container direction="row">
                    <Grid item xs={1}>
                    </Grid>
                    <Grid item xs={15}>
                        <h3  style={{flexGrow: "1", textAlign: "center"}}>
                            MUSIC
                        </h3>
                    </Grid>
                    <Grid item xs={1}>
                    </Grid>
                    <Grid item xs={1}>
                    </Grid>
                    <Grid item xs={15}>
                        <Audio {...currentSong}/>
                    </Grid>
                    <Grid item xs={1}>
                    </Grid>
                    <Grid item xs={1}>
                    </Grid>
                    <Grid item xs={15} className={styles.musicImage}>
                        <SongList {...props} handleSongClicked={handleSongClicked}/>
                    </Grid>
                    <Grid item xs={1}>
                    </Grid>
                </Grid>
            </Box>
        </Layout>
    )
}
