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
// import Button from "./components/Button";

import { Body, Section, Paragraph, Button, ButtonStyles, RecentPlaylistStyle, PlaylistContainer, PlaylistItem, Map } from './components/style.js';

// import { getAppointmentsForDay } from "./helpers/selectors";


// const Button = styled.button`${ButtonStyles};`;

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
import { connect } from 'react-redux'


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
        <div className="App">
          <h1>{this.state.message}</h1>
          <button onClick={this.fetchData} >
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


export default connect(state => state)(App);
