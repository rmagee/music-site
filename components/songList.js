import React, {useEffect, useState} from 'react';
import Song from "./song";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/List";
const axios = require('axios').default

function SongList(props) {
    const PARSE_URL = process.env.NEXT_PUBLIC_PARSE_URL
    const APP_ID = process.env.NEXT_PUBLIC_APP_ID
    const [songList, setSongList] = useState([{title: 'test'}])

    const updateResults = (results) => {
        const songs = []
        results.map((song, index)=>{
            songs.push(<Song key={index} title={song.title}/>)
        })
        setSongList(songs)
        console.log(songs)
    }

    useEffect(() => {
        axios.get(
            `${PARSE_URL}parse/classes/song`,
            {
                headers: {'X-Parse-Application-Id': APP_ID}
            }).then((response) => {
            let results = response.data.results
            console.log(results)
            updateResults(results);
        })
    }, [])

    return (
        <List>
            {songList}
        </List>
    )
}

export default SongList;