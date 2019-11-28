import React from "react";
import classNames from "classnames";
// import "components/TrackListItem.scss";
// import "components/TrackList.scss";

export default function RecentlyPlayedListItem(props) {

  const recentSongs = "RecentlyPlayedListItem (Artist - Recent Song)"

  // const itemClass = classNames({
  //   "recent__item": true,
  //   "recent__item--selected": props.selected
  // })
  return (
    <li> {recentSongs} </li>

    // <li className={itemClass} onClick={(event) => { props.setTrack(props.id); }}>
    //   <img
    //     className="tracks__item-image"
    //     src={props.album_img}
    //     alt={props.track_title}
    //   />
    //   {props.selected && props.name}
    // </li>
  );
};
