
import React, { useReducer, useEffect } from "react";
import axios from "axios";
import "components/Application.scss";
import "components/TrackList";
import "components/TrackListItem";
import "components/SavedListItem";
import "components/SavedListItem.scss";
import "components/RecentlyPlayedListItem";
import "components/RecentlyPlayedListItem.scss";
import Appointment from "components/Appointment";
import { getCurrentTrack } from "helpers/selectors";
import { getRecentlyPlayed } from "helpers/selectors";
import transition from "hooks/useVisualMode";



const SET_DAY = "SET_DAY";
const SET_APPLICATION_DATA = "SET_APPLICATION_DATA";
const SET_INTERVIEW = "SET_INTERVIEW";
const INCREMENT_SPOTS = "INCREMENT_SPOTS";
const DECREMENT_SPOTS = "DECREMENT_SPOTS";

function reducer(state, action) {
  switch (action.type) {
    case SET_DAY:
      return {
        ...state,
        day: action.day
      }
    case SET_APPLICATION_DATA:
      return {
        ...state,
        days: action.days,
        appointments: action.appointments,
        interviewers: action.interviewers
      }

    case SET_INTERVIEW: {
      let appointments = state.appointments;
      const appointment = {
        id: action.id,
        interview: action.interview ? action.interview : null
      }
      appointments[action.id] = appointment;
      return {
        ...state,
        appointments: appointments
      }
    }

    case DECREMENT_SPOTS: {
      let days = state.days.map((day) => {
        if (day.name === action.payload.day) {
          return {
            ...day,
            spots: day.spots - 1
          }
        }
        return day;
      })
      return { ...state, days }
    }


    case INCREMENT_SPOTS: {


      let days = state.days.map((day) => {
        if (day.name === action.payload.day) {
          return {
            ...day,
            spots: day.spots + 1
          }
        }
        return day;
      })
      return { ...state, days }
    }

    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
  }

}


export default function useApplicationData() {

  const [state, dispatch] = useReducer(reducer, {
    day: "Monday",
    days: [],
    appointments: [],
    interviewers: []
  });

  useEffect(() => {
    Promise.all([
      Promise.resolve(axios.get(`http://localhost:8001/api/days`)),
      Promise.resolve(axios.get(`http://localhost:8001/api/appointments`)),
      Promise.resolve(axios.get(`http://localhost:8001/api/interviewers`)),
    ]).then((all) => {
      dispatch({ type: SET_APPLICATION_DATA, days: all[0].data, appointments: all[1].data, interviewers: all[2].data });
    });
  }, [])

  const setDay = day => dispatch({ type: SET_DAY, day });



  // Books an interview: 

  function bookInterview(id, interview) {
    return axios.put(`http://localhost:8001/api/appointments/${id}`, { interview })
      .then(() => {
        dispatch({ type: SET_INTERVIEW, id, interview });
        dispatch({ type: DECREMENT_SPOTS, payload: { day: state.day } })
      })
  }


// Cancels an interview:

  function cancelInterview(id, interview) {


    dispatch({ type: SET_INTERVIEW, id });

    return axios.delete(`http://localhost:8001/api/appointments/${id}`, { interview })
      .then(() => {
        dispatch({ type: SET_INTERVIEW, id });
        dispatch({ type: INCREMENT_SPOTS, payload: { day: state.day } })
      })

  }

  return {
    state,
    setDay,
    bookInterview,
    cancelInterview
  }
}
