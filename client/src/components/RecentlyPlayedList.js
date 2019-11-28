
import React from "react";
import classnames from "classnames";
// import "components/RecentlyPlayedListItem.scss";
// import "components/RecentlyPlayedList.scss";
import RecentlyPlayedListItem from "./RecentlyPlayedListItem";
// import PropTypes from 'prop-types';
import styled from 'styled-components';
// RecentlyPlayedList.propTypes = {
//   value: PropTypes.number,
//   onChange: PropTypes.func.isRequired
// };





const tracksArray = [
  { id: 1, artist: "Enya", title: "Orinoco Flow", albumcover: "https://i.imgur.com/LpaY82x.png" },
  { id: 2, artist: "Moby", title: "Porcelain", albumcover: "https://i.imgur.com/Nmx0Qxo.png" },
  { id: 3, artist: "Led Zeppelin", title: "Stairway to Heaven", albumcover: "https://i.imgur.com/T2WwVfS.png" },
  { id: 4, artist: "Ludovico Einaudi", title: "Divenire", albumcover: "https://i.imgur.com/FK8V841.jpg" },
  { id: 5, artist: "Crosby Stills & Nash", title: "Cathedral", albumcover: "https://i.imgur.com/twYrpay.jpg" }
];

export default function RecentlyPlayedList(props) {
  // return (
    // <div>RecentlyPlayedList - Recently played songs go here!</div>
  // )

  const tracks = tracksArray;
  
  // .map(track => {
  //   return (
  //     <RecentlyPlayedList
  //       key={track.id}
  //       id={track.id}
  //       name={track.title}
  //       album={track.album}
  //       // selected={track.id === props.track}
  //       // playTrack={props.playTrack}
  //     />

    // );
  // })

  return (
    <section className="tracks">
     <div>RecentlyPlayedList - Recently played songs go here!</div>
      {/* <ul>
       {tracksArray[1]}
      </ul> */}
    </section>

  );
}
