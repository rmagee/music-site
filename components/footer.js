import React from 'react'
import BottomNavigation from '@mui/material/BottomNavigation'
import Paper from '@mui/material/Paper'
import styles from "./footer.module.css"

function Footer(props) {
    return (
        <Paper className={styles.footer} elevation={3}>
            <BottomNavigation><div>Site design, photography and music &copy;2006-2022 rob magee, all rights reserved.</div></BottomNavigation>
        </Paper>
    );
}

export default Footer;