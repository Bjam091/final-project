import DayListItem from "components/DayListItem";
import React from "react";
import classnames from "classnames";
import "components/RecentlyPlayedListItem.scss";
import "components/RecentlyPlayedList.scss";
import RecentlyPlayedListItem from "components/RecentlyPlayedListItem";
import PropTypes from 'prop-types';
 
RecentlyPlayedList.propTypes = {
  value: PropTypes.number,
  onChange: PropTypes.func.isRequired
};

export default function RecentlyPlayedList(props) {
 
  const tracks = props.tracks.map(track => {
    return (
      <RecentlyPlayedListItem
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
    <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewer</h4>
      <ul className="interviewers__list">
       {interviewers}
      </ul>
    </section>

  );
}
