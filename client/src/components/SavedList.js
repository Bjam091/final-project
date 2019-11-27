
import React from "react";
import classnames from "classnames";
import SavedListItem from "./SavedListItem";
import PropTypes from 'prop-types';
 
SavedList.propTypes = {
  value: PropTypes.number,
  onChange: PropTypes.func.isRequired
};

export default function SavedList(props) {
 
  const tracks = props.tracks.map(track => {
    return (
      <SavedListItem
        key={track.id}
        id={track.id}
        title={track.title}
        album={track.album}
        selected={track.id === props.track}
        playTrack={props.playTrack}
      />

    );
  })

  return (
    <section className="pocket">
      <h4 className="pocket__header text--light">My Pocket</h4>
      <ul className="pocket__list">
       {tracks}
      </ul>
    </section>

  );
}
