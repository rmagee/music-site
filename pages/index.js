import Head from 'next/head'
import Layout, {siteTitle} from '../components/layout'
import Paper from "@mui/material/Paper";
import {styled} from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function Home({allPostsData, otherData}) {
    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <Box sx={{ m: 3 }} style={{marginTop: "45px"}}>
                <Grid container spacing={2}>
                    <Grid item xs={1}>
                        <Item sx={{bgcolor:'#fff'}}>xs=4</Item>
                    </Grid>
                    <Grid item xs={10}>
                        <Item><p className="font-display">Farting is fun</p>What font is this?  I have no idea.</Item>
                    </Grid>
                    <Grid item xs={1}>
                        <Item>xs=8</Item>
                    </Grid>
                </Grid>
            </Box>
        </Layout>
    )
}

