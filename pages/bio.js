import React from 'react';
import Layout from "../components/layout";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import Typography from "@mui/material/Typography";

export default function Bio({allPostsData, otherData}) {
    return (
        <Layout home>
            <Box sx={{m: 3}} style={{marginTop: "45px"}}>
                <Grid container spacing={2}>
                    <Grid item xs={1}>
                    </Grid>
                    <Grid item xs={10}>
                        <Typography variant="h6" sx={{flexGrow: 1, textAlign: "center"}}>
                            Bio
                        </Typography>
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
                            priority
                        />
                    </Grid>
                    <Grid item xs={1}>
                    </Grid>
                    <Grid item xs={1}>
                    </Grid>
                    <Grid item xs={10}>
                        <p>Rob Magee is a Colorado based song writer, producer and performer. All of the material on
                            this site was engineered, written, performed and produced by Rob and can be heard by
                            visiting the music page.
                        </p>
                    </Grid>
                    <Grid item xs={1}>
                    </Grid>
                </Grid>
            </Box>
        </Layout>
    )
}


