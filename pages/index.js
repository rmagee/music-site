import Layout from '../components/layout'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Image from "next/image"
import * as React from "react";

export default function Home() {
    return (
        <Layout home>
            <Box sx={{m: 3}} style={{marginTop: "45px"}}>
                <Grid container spacing={2}>
                    <Grid item xs={1}>
                    </Grid>
                    <Grid item xs={10}>
                            <Image
                                layout='responsive'
                                src="/images/home.jpg"
                                width={200}
                                height={200}
                                priority
                                alt="Ad Astra Image"
                            />
                    </Grid>
                    <Grid item xs={1}>
                    </Grid>
                </Grid>
            </Box>
        </Layout>
    )
}

