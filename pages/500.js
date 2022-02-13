import React from 'react'
import Layout from "../components/layout"
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import Image from "next/image"


export default function page500(props) {
    return (
        <Layout home>
            <Box sx={{m: 3}} style={{marginTop: "45px"}}>
                <Grid container spacing={2}>
                    <Grid item xs={1}>
                    </Grid>
                    <Grid item xs={10}>
                        <h3  style={{flexGrow: "1", textAlign: "center"}}>
                            500 Internal Server Error<br/>
                            Program alarm, it&apos;s a 1202.
                        </h3>
                    </Grid>
                    <Grid item xs={1}>
                    </Grid>
                    <Grid item xs={1}>
                    </Grid>
                    <Grid item xs={10}>
                        <Image
                            layout='responsive'
                            src="/images/500.jpeg"
                            alt="Bio Pic"
                            height="90"
                            width="150"
                            priority
                        />
                    </Grid>
                    <Grid item xs={1}>
                    </Grid>
                </Grid>
            </Box>
        </Layout>
    )
}
