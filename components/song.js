import React from 'react'
import styles from "./song.module.css"
import Link from "next"

function Song(props) {
    return (
        <div className={styles.song}><a
            className={styles.songLink}
            href={props.url}
            onClick={(event) => {props.onClick(event, props.title, props.url)}}>{props.title}</a></div>
    );
}

export default Song