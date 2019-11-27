import React, { Component } from 'react';
import axios from 'axios';
// import './App.css';
// import ProfileCard from "./components/ProfileCard";
import RecentlyPlayedList from "./components/RecentlyPlayedList";
// import RecentlyPlayedListItem from "./components/RecentlyPlayedListItem";
// import SavedList from "./components/SavedList";
// import SavedListItem from "./components/SavedListItem";
// import TrackList from "./components/TrackList";
// import TrackListItem from "./components/TrackListItem";
import Button from "./components/Button";

// import { getAppointmentsForDay } from "./helpers/selectors";

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
      <div className="App">
        <h1>{ this.state.message }</h1>
        <button onClick={this.fetchData} >
          Fetch Data
        </button>        
      </div>
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
            {/* <RecentlyPlayedList tracks={this.state.tracks} /> */}
          </nav>
      
        </section>
        <section className="schedule">
          <section className="schedule">
            {this.state.tracks} <h2>Hello!</h2>
            <RecentlyPlayedList />
          </section>
        </section>
      </main>
    );



  }
}

export default App;
