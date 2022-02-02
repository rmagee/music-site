import Layout from '../components/layout'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import {useTheme} from "@material-ui/core/styles";
import Audio from "../components/audio";
import styles from "./music.module.css";
import SongList from '../components/songList';

export default function Music({allPostsData, otherData}) {
    const theme = useTheme();
    return (
        <Layout music>
            <Box sx={{m: 3}} style={{marginTop: "45px"}}>
                <Grid container direction="row">
                    <Grid item xs={1}>
                    </Grid>
                    <Grid item xs={10} className={styles.musicImage}>
                        <SongList/>
                    </Grid>
                    <Grid item xs={1}>
                    </Grid>
                    <Grid item xs={1}>
                    </Grid>
                    <Grid item xs={10}>
                        <Audio/>
                    </Grid>
                    <Grid item xs={1}>

                    </Grid>
                </Grid>
            </Box>
        </Layout>
    )
}
