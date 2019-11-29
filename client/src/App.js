import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import './components/splash.css';
import styled from 'styled-components';
import RecentlyPlayedList from "./components/RecentlyPlayedList";
import RecentlyPlayedListItem from "./components/RecentlyPlayedListItem";
import SavedList from "./components/SavedList";
import SavedListItem from "./components/SavedListItem";
import TrackList from "./components/TrackList";
import TrackListItem from "./components/TrackListItem";
// import Button from "./components/Button";

import { Body, Section, Paragraph, Button, ButtonStyles, RecentPlaylistStyle, PlaylistContainer, PlaylistItem, Map, Text } from './components/style.js';


const List = styled.ul`
  list-style: none;
  padding: 0px 20px;
  background-color: #fff;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-top: 3px solid blue;
  box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.16);
`;

const tracks = [
  { id: 1, artist: "Enya", title: "Orinoco Flow", albumcover: "https://i.imgur.com/LpaY82x.png" },
  { id: 2, artist: "Moby", title: "Porcelain", albumcover: "https://i.imgur.com/Nmx0Qxo.png" },
  { id: 3, artist: "Led Zeppelin", title: "Stairway to Heaven", albumcover: "https://i.imgur.com/T2WwVfS.png" },
  { id: 4, artist: "Ludovico Einaudi", title: "Divenire", albumcover: "https://i.imgur.com/FK8V841.jpg" },
  { id: 5, artist: "Crosby Stills & Nash", title: "Cathedral", albumcover: "https://i.imgur.com/twYrpay.jpg" }
];

const map = "https://bikehub.ca/sites/default/files/arbutus-greenway-route.png"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      message: "Songs go here!",
      tracks: [
        { id: 1, artist: "Enya", title: "Orinoco Flow", albumcover: "https://i.imgur.com/LpaY82x.png" },
        { id: 2, artist: "Moby", title: "Porcelain", albumcover: "https://i.imgur.com/Nmx0Qxo.png" },
        { id: 3, artist: "Led Zeppelin", title: "Stairway to Heaven", albumcover: "https://i.imgur.com/T2WwVfS.png" },
        { id: 4, artist: "Ludovico Einaudi", title: "Divenire", albumcover: "https://i.imgur.com/FK8V841.jpg" },
        { id: 5, artist: "Crosby Stills & Nash", title: "Cathedral", albumcover: "https://i.imgur.com/twYrpay.jpg" }
      ]
    }
  }

  fetchData = () => {
    axios.get('/api/data') // You can simply make your requests to "/api/whatever you want"
      .then((response) => {
        // handle success
        console.log(response.data) // The entire response from the Rails API

        console.log(response.data.message) // Just the message
        this.setState({
          message: response.data.message
        });
      })
  }

  render() {
    return (

      <main className="layout">


        <Map>
        <img src={map}></img></Map> 
     
      


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
          );
      

        );
      }

      </main>
    );
  }
}



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
  );

 
  return (
    <main className="layout">
      <section className="sidebar">
        <img
          className="sidebar--centered"
          src="images/logo.png"
          alt="Interview Scheduler"
        />
        <hr className="sidebar__separator sidebar--centered" />
        <nav className="sidebar__menu">
          <DayList days={state.days} day={state.day} setDay={setDay} />
        </nav>
        <img
          className="sidebar__lhl sidebar--centered"
          src="images/lhl.png"
          alt="Lighthouse Labs"
        />
      </section>
      <section className="schedule">
        <section className="schedule">
          {appointments} 
          <Appointment key="last" time="5pm" />
        </section>
      </section>
    </main>
  );
}

*/



export default App;
