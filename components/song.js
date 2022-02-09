import React from 'react'
import styles from "./song.module.css"

function Song(props) {
    return (
        <div className={styles.song}><a
            href="#"
            className={styles.songLink}
            onClick={(event) => {
                props.onClick(event, props.title, props.url)
            }}>
            {props.title}</a>
        </div>
    );
}

export default Song