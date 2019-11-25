import DayListItem from "components/DayListItem";
import React from "react";
import classnames from "classnames";
import "components/InterviewerListItem.scss";
import "components/InterviewerList.scss";
import InterviewerListItem from "components/InterviewerListItem";
import Appointment from "components/Appointment";
import PropTypes from 'prop-types';
 
TrackList.propTypes = {
  value: PropTypes.number,
  onChange: PropTypes.func.isRequired
};

export default function TrackList(props) {
 
  const tracks = props.tracks.map(track => {
    return (
      <TrackListItem
        key={track.id}
        id={track.id}
        name={track.title}
        album={track.album}
        selected={track.id === props.track}
        playTrack={props.playTrack}
      />

    );
  })

  return (
    <section className="tracks">
      <h4 className="tracks__header text--light">Playing Near You</h4>
      <ul className="tracks__list">
       {tracks}
      </ul>
    </section>

  );
}
