import React from 'react';
import ListItem from "@material-ui/core/ListItem";

function Song(props) {
    return (
        <ListItem>{props.title}</ListItem>
    );
}

export default Song;