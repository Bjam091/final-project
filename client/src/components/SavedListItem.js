import React from "react";
import styled, { css } from 'styled-components';
// import "components/TrackListItem.scss";
// import "components/TrackList.scss";

export default function SavedListItem(props) {

  const songprops = "Saved List Item: Artist - Title"

  // const itemClass = classNames({
  //   "saved__item": true,
  //   "saved__item--selected": props.selected
  // })
  return (
    
  <li>
      {songprops}

    </li>

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
