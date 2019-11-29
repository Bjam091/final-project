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

import { Body, Section, Paragraph, Button, ButtonStyles, RecentPlaylistStyle, PlaylistContainer, PlaylistItem, Map } from './components/style.js';

import { connect } from 'react-redux'


const App = function (props) {

  const fetchData = () => {
    axios.get('/api/data') // You can simply make your requests to "/api/whatever you want"
      .then((response) => {
        // handle success
        console.log(response.data) // The entire response from the Rails API

        console.log(response.data.message) // Just the message
        props.dispatch({
          type: 'UPDATE_MESSAGE',
          message: response.data.message
        });
      })
  }

  return (

    <main className="layout">
      <div className="App">
        <h1>{props.message}</h1>
        <button onClick={fetchData} >
          Fetch Data
        </button>
      </div>

      <section className="sidebar">

        <hr className="sidebar__separator sidebar--centered" />
        <nav className="sidebar__menu">
          <PlaylistContainer recent> <RecentlyPlayedList />
            <RecentlyPlayedListItem />
          </PlaylistContainer>
        </nav>


      </section>

      {/* <section><Map /><img src="https://rumsey3.s3.amazonaws.com/images/arctic.jpg" /> </section> */}


      <section>
        <PlaylistContainer nearby>
          <TrackList />
          <TrackListItem />
        </PlaylistContainer>
      </section>

      <section className="schedule">
        {/* {this.state.tracks} */}
        <PlaylistContainer saved>
          <PlaylistItem saved> Saved Item - Song 1 </PlaylistItem>
          <PlaylistItem saved> Saved Item - Song 2 </PlaylistItem>
          <PlaylistItem saved> Saved Item - Song 3 </PlaylistItem>
        </PlaylistContainer>

        <PlaylistContainer recent >
          <PlaylistItem recent> Recent List - Song 1 </PlaylistItem>
          <PlaylistItem recent> Recent List - Song 2 </PlaylistItem>
          <PlaylistItem recent> Recent List - Song 3 </PlaylistItem>

        </PlaylistContainer>
      </section>


      <div>
        <PlaylistContainer>
          <Button>I am a Button</Button>
          <Button primary>I am a Primary Button</Button>
          <Button home>Take me home!</Button>
        </PlaylistContainer>
      </div>
      );
    }
      </main>
  );
}

export default connect(state => state)(App);
