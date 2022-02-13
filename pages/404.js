import React from 'react'
import Layout from "../components/layout"
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import Image from "next/image"


export default function page404() {
    return (
        <Layout home>
            <Box sx={{m: 3}} style={{marginTop: "45px"}}>
                <Grid container spacing={2}>
                    <Grid item xs={1}>
                    </Grid>
                    <Grid item xs={10}>
                        <h3  style={{flexGrow: "1", textAlign: "center"}}>
                            404 Page Not Found<br/>
                            And you still haven&apos;t found what you&apos;re looking for...
                        </h3>
                    </Grid>
                    <Grid item xs={1}>
                    </Grid>
                    <Grid item xs={1}>
                    </Grid>
                    <Grid item xs={10}>
                        <Image
                            layout='responsive'
                            src="/images/404.jpeg"
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
