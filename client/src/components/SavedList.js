import styled, { css } from 'styled-components';
import React from "react";
import SavedListItem from "./SavedListItem";
import PropTypes from 'prop-types';
import { Body, Section, Paragraph, Button, ButtonStyles, RecentPlaylistStyle, Container, PlaylistItem, Map, Text, Gridwrap, Nav, Panel, Footer } from './style.js';



SavedList.propTypes = {
  value: PropTypes.number,
  onChange: PropTypes.func.isRequired
};



export default function SavedList(props) {
 
  const tracks = "SAVED TRACK: Artist - Title"

  // const tracks = props.tracks.map(track => {
  //   return (
  //     <SavedListItem
  //       key={track.id}
  //       id={track.id}
  //       title={track.title}
  //       album={track.album}
  //       selected={track.id === props.track}
  //       playTrack={props.playTrack}
  //     />

  //   );
  // })

  return (
    <Container saved>
      <h4>My Pocket - Saved Tracks Go Here!</h4>
      <ul className="pocket__list">
       {tracks}
      </ul>
    </Container>

  );
}
