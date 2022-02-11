import * as React from 'react'
import {styled} from '@mui/material/styles'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import Layout from '../components/layout'
import styles from './code.module.css'
import Stack from "@mui/material/Stack";
import Link from '@mui/material/Link';
import Image from "next/image";

const Item = styled(Paper)(({theme}) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function Code() {
    return (
        <Layout home>
            <Box sx={{m: 3}} style={{marginTop: "45px"}}>
                <p>This site was developed in JavaScript utilizing the technologies below, can be easily customized and styled
                    and has been <Link color="inherit" href="github.com">made available for free here</Link>.</p>
                <Box sx={{flexGrow: 1}}>
                    <Grid container spacing={{xs: 2, md: 3}} columns={{xs: 4, sm: 4, md: 4}}>
                        <Grid item xs={2} sm={2} md={1} key="next">
                            <Stack direction="column">
                                <Item className={styles.gridItem}>
                                    <Image
                                        alt="next.js"
                                        layout='responsive'
                                        src="/images/next-js.svg"
                                        width={200}
                                        height={200}
                                        priority
                                    />
                                    <Link color="inherit" href="https://nextjs.org/">Next.js</Link>
                                </Item>
                            </Stack>
                        </Grid>
                        <Grid item xs={2} sm={2} md={1} key="MUI">
                            <Stack direction="column">
                                <Item className={styles.gridItem}>
                                    <Image
                                        alt="Material UI"
                                        layout='responsive'
                                        src="/images/mui.png"
                                        width={200}
                                        height={200}
                                        priority
                                    />
                                    <Link color="inherit" href="https://mui.com/">MUI</Link>
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
                                        alt="React JS"
                                        priority
                                    />
                                    <Link color="inherit" href="https://reactjs.org/">React</Link>
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
                                        alt="Node.js"
                                    />
                                    <Link color="inherit" href="https://nodejs.org/">Node.js</Link>
                                </Item>
                            </Stack>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Layout>
    )
}
