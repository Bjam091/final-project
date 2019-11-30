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

import { Section, Paragraph, Button, ButtonStyles, RecentPlaylistStyle, Container, PlaylistItem, Map, Text, Gridwrap, Nav, Panel, Footer, Header, Heading, Logo } from './components/style.js';


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
  { id: 1, artist: "Enya", title: "Orinoco Flow", albumcover: "https://torontoist.com/wp-content/uploads/2011/01/20101119RCH05-100x100.jpg" },
  { id: 2, artist: "Moby", title: "Porcelain", albumcover: "https://torontoist.com/wp-content/uploads/2011/01/20101119RCH05-100x100.jpg" },
  { id: 3, artist: "Led Zeppelin", title: "Stairway to Heaven", albumcover: "https://torontoist.com/wp-content/uploads/2011/01/20101119RCH05-100x100.jpg" },
  { id: 4, artist: "Ludovico Einaudi", title: "Divenire", albumcover: "https://torontoist.com/wp-content/uploads/2011/01/20101119RCH05-100x100.jpg" },
  { id: 5, artist: "Crosby Stills & Nash", title: "Cathedral", albumcover: "https://torontoist.com/wp-content/uploads/2011/01/20101119RCH05-100x100.jpg" }
];

const map = "https://bikehub.ca/sites/default/files/arbutus-greenway-route.png" // Placeholder for map div
const album = "https://live.staticflickr.com/4120/4924317182_2fb90fa7ff_m.jpg" // placeholder for album grid - 200x200px
const album2 = "https://farm5.static.flickr.com/4095/4924317280_0f57c62030_b.jpg" //placeholder 2 - 200x200px

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      message: "Songs go here!",
      tracks: [ ]
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
      <body> 
      

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
  
  

</Gridwrap>
<Container splash>
<Logo>ListenIn</Logo>
  <Heading> See what people around you are listening to. </Heading>
</Container>

        {/* <Map>
        <img src={map}></img></Map> 
     
       */}


          <Container playlist>
            <h1 align="center">My Pocket</h1>
           
              {tracks.map(({ id, title, artist, albumcover }) => (
                <PlaylistItem key={id}>
                  <div> <img src={albumcover} width="100px" height="100px"></img> </div>
                  <div> 
                    <div>
                    {artist} - {title}
                    </div>
                    <div>Album Name</div>

                      </div>
                  <div>   <button><img src="https://www.kcrw.com/events/left-right-center-live-2018-archived/img/listen-on-spotify-white.png" width="200px"></img></button></div>
               

                </PlaylistItem>
              ))}
          
          </Container>
          );
      

        );
      }

      </main>
      </body>
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
