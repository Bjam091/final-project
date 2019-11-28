
import React from "react";
import classnames from "classnames";
import TrackListItem from "./TrackListItem";
import PropTypes from 'prop-types';
 
// TrackList.propTypes = {
//   value: PropTypes.number,
//   onChange: PropTypes.func.isRequired
// };

export default function TrackList(props) {
  
  const tracklist = "TrackList: Playing Near You"

  // const tracks = props.tracks.map(track => {
  //   return (
  //     <TrackListItem
  //       key={track.id}
  //       id={track.id}
  //       name={track.title}
  //       album={track.album}
  //       selected={track.id === props.track}
  //       playTrack={props.playTrack}
  //     />

  //   );
  // })

  return (
    <ul>{tracklist}</ul>
    // <section className="tracks">
    //   {/* <h4 className="tracks__header text--light">TrackList: Playing Near You</h4>
    //   <ul className="tracks__list"> */}
    //    {tracks}
    //   </ul>
    // </section>

  );
}
