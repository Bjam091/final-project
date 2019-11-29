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


const List = styled.ul`
  list-style: none;
  padding: 0px 20px;
  background-color: #fff;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-top: 3px solid blue;
  box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.16);
`;


// const Main = () => (
//   <Section>
//     <Paragraph>
//       Look at my buttons, they are amazing buttons !
//     </Paragraph>
//     <Button type="primary">
//       A Primary Button
//     </Button>
//     <Button type="secondary">
//       And I am a secondary
//     </Button>
//   </Section>
// );

const tracks = [
  { id: 1, artist: "Enya", title: "Orinoco Flow", albumcover: "https://i.imgur.com/LpaY82x.png" },
  { id: 2, artist: "Moby", title: "Porcelain", albumcover: "https://i.imgur.com/Nmx0Qxo.png" },
  { id: 3, artist: "Led Zeppelin", title: "Stairway to Heaven", albumcover: "https://i.imgur.com/T2WwVfS.png" },
  { id: 4, artist: "Ludovico Einaudi", title: "Divenire", albumcover: "https://i.imgur.com/FK8V841.jpg" },
  { id: 5, artist: "Crosby Stills & Nash", title: "Cathedral", albumcover: "https://i.imgur.com/twYrpay.jpg" }
];

const map = "https://bikehub.ca/sites/default/files/arbutus-greenway-route.png" // Placeholder for map div
const album = "https://live.staticflickr.com/4120/4924317182_2fb90fa7ff_m.jpg" // placeholder for album grid - 200x200px
const album2 = "https://farm5.static.flickr.com/4095/4924317280_0f57c62030_b.jpg" //placeholder 2 - 200x200px

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
    <React.Fragment>
      <body>
        <Nav> Listen In </Nav>
        <main>
          <Gridwrap>
            <Panel><img src={album}></img>  </Panel>
            <Panel><img src={album}></img>  </Panel>
            <Panel><img src={album}></img>  </Panel>
            <Panel><img src={album}></img>  </Panel>
            <Panel><img src={album}></img>  </Panel>
            <Panel><img src={album}></img>  </Panel>
            <Panel><img src={album}></img>  </Panel>
            <Panel><img src={album}></img>  </Panel>
            <Footer><Button home>Take me home!</Button></Footer>
          </Gridwrap>
          {/* <Map>
        <img src={map}></img></Map> 
     
       */}
          <PlaylistContainer>
            <h1 align="center">Playing Near You</h1>
            {tracks.map(({ id, title, artist, albumcover }) => (
              <PlaylistItem key={id}>
                <img src={albumcover}></img>
                {artist} - {title}
                <Button spotify>Listen on Spotify!</Button>
              </PlaylistItem>
            ))}
          </PlaylistContainer>
        </main >
      </body >
    </React.Fragment>
  )
};

export default connect(state => state)(App);


/* REFERENCE CODE FROM SCHEDULER - Application.js

export default function Application(props) {
  const {
    state,
    setDay,
    bookInterview,
    cancelInterview
  } = useApplicationData();

  const interviewers = getInterviewersForDay(state, state.day);

  const appointments = getAppointmentsForDay(state, state.day).map(
    appointment => {
      return (
        <Appointment
          key={appointment.id}
          {...appointment}
          time={appointment.time}
          interview={getInterview(state, appointment.interview)}
          interviewers={interviewers}
          bookInterview={bookInterview}
          cancelInterview={cancelInterview}
        />
      );
    }
      </main>
  );
}*/

