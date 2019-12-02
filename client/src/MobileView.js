import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import styled from 'styled-components';
import RecentlyPlayedList from "./components/RecentlyPlayedList";
import RecentlyPlayedListItem from "./components/RecentlyPlayedListItem";
import SavedList from "./components/SavedList";
import SavedListItem from "./components/SavedListItem";
import TrackList from "./components/TrackList";
import TrackListItem from "./components/TrackListItem";
import { connect } from 'react-redux'
import { Body, Section, Paragraph, Button, ButtonStyles, RecentPlaylistStyle, PlaylistContainer, PlaylistItem, Map, Text, Gridwrap, Nav, Panel, Footer } from './components/style.js';
import LightMap from './components/Map/LightMap'


const MobileView = function (props) {

  return (
    <section className='container'>
      <LightMap className='map'></LightMap>
      <TrackListItem className='current-song'></TrackListItem>
      <div id='broadcast-dot'>
        <img className='green-dot' src='https://i.ibb.co/ZT4PDZJ/glow-button-on.png' />
        <div className='broadcasting'>Broadcasting Now</div>
      </div>
    </section>

  )
}

export default connect(state => state)(MobileView);