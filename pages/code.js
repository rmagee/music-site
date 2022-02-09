import * as React from 'react'
import {styled} from '@mui/material/styles'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import Layout from '../components/layout'
import styles from './code.module.css'
import Stack from "@mui/material/Stack";
import Image from "next/image";

const Item = styled(Paper)(({theme}) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function Home({allPostsData, otherData}) {
    return (
        <Layout home>
            <Box sx={{m: 3}} style={{marginTop: "45px"}}>
                <Box sx={{flexGrow: 1}}>
                    <Grid container spacing={{xs: 2, md: 3}} columns={{xs: 4, sm: 4, md: 4}}>
                        <Grid item xs={2} sm={2} md={1} key="next">
                            <Stack direction="column">
                                <Item className={styles.gridItem}>
                                    <Image
                                        layout='responsive'
                                        src="/images/next-js.svg"
                                        width={200}
                                        height={200}
                                        priority
                                    />
                                    <p>
                                        <a href="https://nextjs.org/">Next.js</a>
                                    </p>
                                </Item>
                            </Stack>
                        </Grid>
                        <Grid item xs={2} sm={2} md={1} key="MUI">
                            <Stack direction="column">
                                <Item className={styles.gridItem}>
                                    <Image
                                        layout='responsive'
                                        src="/images/mui.png"
                                        width={200}
                                        height={200}
                                        priority
                                    />
                                    <p>
                                        MaterialUI
                                    </p>
                                </Item>
                            </Stack>
                        </Grid>
                        <Grid item xs={2} sm={2} md={1} key="react">
                            <Stack direction="column">
                                <Item className={styles.gridItem}>
                                    <Image
                                        layout='responsive'
                                        src="/images/react.png"
                                        width={200}
                                        height={200}
                                        priority
                                    />
                                    <p>
                                        React
                                    </p>
                                </Item>
                            </Stack>
                        </Grid>
                        <Grid item xs={2} sm={2} md={1} key="node">
                            <Stack direction="column">
                                <Item className={styles.gridItem}>
                                    <Image
                                        layout='responsive'
                                        src="/images/node.svg"
                                        width={200}
                                        height={200}
                                        priority
                                    />
                                    <p>
                                        <a href="https://nodejs.org/">Node.js</a>
                                    </p>
                                </Item>
                            </Stack>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Layout>
    )
}
