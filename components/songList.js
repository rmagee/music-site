import React, {useEffect, useState} from 'react'
import Song from "./song"
import CircularProgress from "@material-ui/core/CircularProgress"
import Stack from "@mui/material/Stack"
import Backdrop from "@material-ui/core/Backdrop"
import Toast from "./toast"

function SongList(props) {
    const [songList, setSongList] = useState()
    const [loaded, setLoaded] = useState(false)
    const [error, setError] = useState(false)
    const songs = []

    useEffect(()=>{
        try {
            props.songs.map((song, index) => {
                songs.push(<Song key={index} {...song} onClick={props.handleSongClicked}/>)
            })
        } catch (err) {
            setError(true)
            console.error(err)
        }
        setSongList(songs)
        console.log(songs)
        setLoaded(true)
    },[])

    return (
        loaded ?
            <div style={{marginTop: "10px"}}>{songList}</div>
             :
            (error ?
                    <Toast open="true" message="There was an error retrieving the song list." severity="info"/> :
                    <div>
                        <Backdrop
                            style={{zIndex: 0, color: "fff"}}
                            open={!loaded}
                        >
                            <Stack spacing={6} direction="column" sx={{alignContent: "center", alignItems: "center"}}>
                                <CircularProgress id="spinner" color="inherit"/>
                                <h3>Wait for it...</h3>
                            </Stack>
                        </Backdrop>
                    </div>
            )
    )
}

export default SongList