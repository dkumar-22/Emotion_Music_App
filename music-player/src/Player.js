import React, { useState } from "react";
import "./Player.css";
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import { Grid, Slider } from "@material-ui/core";
import VolumeUpIcon from "@material-ui/icons/VolumeUp";
import MoodIcon from "@material-ui/icons/Mood";
import VolumeOffIcon from "@material-ui/icons/VolumeOff";
import VolumeMuteIcon from "@material-ui/icons/VolumeMute";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";

function Player() {
  const [hover, setHover] = useState(true);
  const [clicked, setClicked] = useState(false);
  const [value, setValue] = React.useState(30);
  const [value2, setValue2] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function HandleClick() {
    if (clicked === false) {
      setClicked(true);
      value === 0 ? setValue2(100) : setValue2(value);
      setValue(0);
    }
    if (clicked === true) {
      setClicked(false);
      setValue(value2);
    }
  }

  function SetIcon() {
    if (value >= 60)
      return (
        <VolumeUpIcon
          className="hovericon"
          onMouseEnter={() => setHover(false)}
          onMouseLeave={() => setHover(true)}
        />
      );
    else if (value < 60 && value >= 30)
      return (
        <VolumeDownIcon
          className="hovericon"
          onMouseEnter={() => setHover(false)}
          onMouseLeave={() => setHover(true)}
        />
      );
    else if (value < 30 && value > 0)
      return (
        <VolumeMuteIcon
          className="hovericon"
          onMouseEnter={() => setHover(false)}
          onMouseLeave={() => setHover(true)}
        />
      );
    else
      return (
        <VolumeOffIcon
          className="hovericon"
          onMouseEnter={() => setHover(false)}
          onMouseLeave={() => setHover(true)}
        />
      );
  }
  return (
    <div className="player">
      <div className="footer-left">
        <img
          className="song-cover"
          src="https://upload.wikimedia.org/wikipedia/en/c/cd/Taylor_Swift_-_Lover.png"
          alt="Taylor Swift"
        />
        <p className="song-name">Lover</p>
        <p className="artist-name">Taylor Swift</p>
      </div>
      <div className="footer-center">
        <SkipPreviousIcon className="hovericon ico" />
        <PlayCircleFilledIcon
          fontSize="large"
          className="hovericon play"
        />
        <SkipNextIcon className="hovericon ico" />
      </div>
      <div className="footer-right">
        <Grid container spacing={2}>
          <Grid item>
            <MoodIcon className="hovericon ico" fontSize="small" />
          </Grid>
          <Grid item onClick={HandleClick}>
            <SetIcon />
          </Grid>
          <Grid item xs>
            <div
              className="change-volume"
              onMouseEnter={() => setHover(false)}
              onMouseLeave={() => setHover(true)}
            >
              {hover ? (
                <hr className="rule" />
              ) : (
                <Slider
                  className="slider"
                  defaultValue={20}
                  value={value}
                  onChange={handleChange}
                  aria-labelledby="continuous-slider"
                  style={{ color: "#FF5A81" }}
                />
              )}
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Player;
