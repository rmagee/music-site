import React from 'react'
import Layout from "../components/layout"
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import Image from "next/image"
import Typography from "@mui/material/Typography"
import fs from 'fs'
import path from 'path'

export async function getStaticProps() {
    const songsFilePath = path.join(process.cwd(), '/data/bio.txt')
    const data = fs.readFileSync(songsFilePath, 'utf8')
    return {
        props: {
            bio: data,
        }, // will be passed to the page component as props
    }
}


export default function Bio(props) {
    return (
        <Layout home>
            <Box sx={{m: 3}} style={{marginTop: "45px"}}>
                <Grid container spacing={2}>
                    <Grid item xs={1}>
                    </Grid>
                    <Grid item xs={10}>
                        <h3  style={{flexGrow: "1", textAlign: "center"}}>
                            BIO
                        </h3>
                    </Grid>
                    <Grid item xs={1}>
                    </Grid>
                    <Grid item xs={1}>
                    </Grid>
                    <Grid item xs={10}>
                        <Image
                            layout='responsive'
                            src="/images/bio.jpg"
                            width={200}
                            height={200}
                            alt="Bio Pic"
                            priority
                        />
                    </Grid>
                    <Grid item xs={1}>
                    </Grid>
                    <Grid item xs={1}>
                    </Grid>
                    <Grid item xs={10}>
                        <p>
                            {props.bio}
                        </p>
                    </Grid>
                    <Grid item xs={1}>
                    </Grid>
                </Grid>
            </Box>
        </Layout>
    )
}


