import React from "react";
import classNames from "classnames";
// import "components/TrackListItem.scss";
// import "components/TrackList.scss";

export default function TrackListItem(props) {
  
  const track = "TrackListItem: Artist - Title"

  // const itemClass = classNames({
  //   "tracklist__item": true,
  //   "tracklist__item--selected": props.selected
  // })
  return (
    <li>{track}</li>

    // <li className={itemClass} onClick={(event) => { props.setTrack(props.id); }}>
    //   <img
    //     className="tracks__item-image"
    //     src={props.album_img}
    //     alt={props.track_title}
    //   />
    //   {props.selected && props.title}
    // </li>
  );
};
