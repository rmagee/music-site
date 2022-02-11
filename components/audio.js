import React, {useEffect, useState} from 'react'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import PauseIcon from '@mui/icons-material/Pause'
import Button from "@mui/material/Button"
import styles from './audio.module.css'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Slider from '@mui/material/Slider'
import VolumeDown from '@mui/icons-material/VolumeDown'
import VolumeUp from '@mui/icons-material/VolumeUp'
import {formatSecondsAsTime} from '../lib/utils'

function Audio(props) {
    const [playing, togglePlaying] = useState(false)
    const [paused, setPaused] = useState(false)
    const [volume, setVolume] = useState(.5)
    const [audio, setAudio] = useState()
    const [displayTime, setDisplayTime] = useState('00:00')
    const [currentTime, setCurrentTime] = useState(0)
    const [maxTime, setMaxTime] = useState(0)
    const [mobile, setMobile] = useState(false)

    const handleVolumeChange = (event, newVolume) => {
        console.log('volume changed to ' + newVolume)
        setVolume(newVolume)
        audio.volume = newVolume
    }

    const handleSeek = (event, newValue) => {
        setCurrentTime(newValue)
        audio.currentTime = newValue
    }

    const handleLoadedMetadata = () => {
        setMaxTime(audio.duration)
    }

    const handleTimeUpdate = () => {
        setDisplayTime(formatSecondsAsTime(audio.currentTime))
        setCurrentTime(audio.currentTime)
    }

    useEffect(() => {
        //grab the audio from the DOM
        const audio = document.getElementById('audioPlayer')
        setAudio(audio)
        audio.volume = volume
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            setMobile(true);
            console.log('Mobile device detected...')
        }
    }, [volume])

    const playAudio = (song) => {
        /**
         * Restarts if paused, starts new url if the source is supplied.
         * @type {HTMLElement}
         */
        if (!paused) {
            audio.src = song
        }
        audio.play()
        togglePlaying(true)
        setPaused(false)
    }

    useEffect(() => {
        if (props.url !== null && audio !== undefined) {
            playAudio(props.url)
        }
    }, [props.url, props.title])

    const pauseAudio = () => {
        /**
         * Stops without rewinding.
         * @type {HTMLElement}
         */
        audio.pause()
        setPaused(true)
        togglePlaying(false)
    }

    const stopAudio = () => {
        /**
         * Stops and rewinds.
         * @type {HTMLElement}
         */
        togglePlaying(false)
        audio.currentTime = 0
        setPaused(false)
    }

    const getVolumeControl = () => {
        return !mobile ?
            <>
                <VolumeDown/>
                <Slider
                    aria-label="Volume"
                    defaultValue={.5}
                    value={volume}
                    step={.1}
                    valueLabelDisplay="auto"
                    valueLabelFormat={volume => <div>{volume * 10}</div>}
                    onChange={handleVolumeChange}
                    min={0}
                    max={1}
                    sx={{maxWidth: "100px"}}
                />
                <VolumeUp/></> : null
    }

    let button
    if (playing) {
        button = <Button onClick={() => pauseAudio()}><PauseIcon className={styles.controlButton}/></Button>
    } else {
        button = <Button disabled={(!paused && !playing)}
                         onClick={() => playAudio(props.url)}>
            <PlayArrowIcon className={(!paused) ? styles.disabledButton : styles.controlButton }/>
        </Button>
    }

    return (
        <Box sx={{width: "100%", alignItems: "center", alignContent: "center", margin: "0, auto"}}>
            <audio id="audioPlayer" src={props.url} onTimeUpdate={handleTimeUpdate} onEnded={stopAudio}
                   onLoadedMetadata={handleLoadedMetadata}/>
            <Stack spacing={2} direction="row" sx={{mb: 1,  paddingRight: "21px"}} alignItems="center">
                {button}
                <Slider
                    aria-label="Position"
                    defaultValue={0}
                    step={.1}
                    value={currentTime}
                    onChange={handleSeek}
                    min={0}
                    max={maxTime}
                />
                <div className={styles.time}>{displayTime}</div>
                {getVolumeControl()}
            </Stack>
            <Stack spacing={2} direction="row" sx={{mb: 1}} alignItems="center" justifyContent="center">

            </Stack>
            <Stack spacing={2} direction="row" sx={{mb: 1}} alignItems="center" justifyContent="center">
                {playing || paused ? <div><b>NOW PLAYING:</b>&nbsp;<i>{props.title}</i></div> :
                    <div>CLICK ON A SONG BELOW TO PLAY</div>}
            </Stack>
        </Box>
    )
}

export default Audio