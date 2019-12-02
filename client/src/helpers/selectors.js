// // import { AsyncStorage } from 'react-native';
import axios from 'axios';
// import api from 'src/utils/Api';
// import { handleListEmail } from '../../actions/Share/List';


function getCurrentTrack(state, track) {
  if (!track) {
    return null;
  } else {
    const artist = track.artist;
    return { track, artist };
  }
}

function getRecentlyPlayed(user) {
  let tracks = [];

  return tracks;
}

const LIKE = "LIKE";
const UNLIKE = "UNLIKE";
const SET_LOADING = "SET_LOADING";



/* 
GET request to:
listen-in.herokuapp.com/tracks/liked_count/[trackid]

-Liking:
 
onclick(heart icon):
POST request to /tracks/liked_count/[trackid]
then a GET request to get the new liked_count 


-Unliking: 
onclick:
POST request to /tracks/unlike/[trackid]
then a GET request to get liked_count



-Display the tracks that are in My Pocket 

*/

//get request to listen-in.herokuapp.com/tracks/liked_count/[trackid]

// function unlike(id) {

//   return axios.post(`/tracks/unlike/${id}`)
//     .then(() => {
//       dispatch({ type: UNLIKE, id });
//       dispatch({ type: DECREMENT_LIKES, payload: { likes: state.likes } })
//     })

// }



export const likeTrack = (auth, id) => {

    const jwt_access_token = auth.data.jwt_access_token;
    const uid = auth.data.current_user.uid;
  
    axios.post(`/tracks/liked_count/${id}`, {headers: {'Content-Type': 'application/json', 'Authorization': "Bearer " + jwt_access_token}});

  }

// dispatch is undefined, so can't do it in this file apparently. Ask Julia...

  // export const likeTrack = (auth, id) => {
  //   return async (dispatch) => {
  //     const jwt_access_token = auth.data.jwt_access_token;
  //     const uid = auth.data.current_user.uid;
  //     dispatch({ type: SET_LOADING, payload: true });
  
  //     try {
  //       const response = await axios.post(`/tracks/liked_count/${id}`, {headers: {'Content-Type': 'application/json', 'Authorization': "Bearer " + jwt_access_token}});
  //       const list = response.data.map((entry) => entry.entry_uuid);
  //       dispatch({ type: SET_LOADING, payload: false });
  //       dispatch({ type: LIKE, payload: list });
  //     } catch (e) {
  //       console.log('error liking this track', e);
  //     }
  //   }
  // }
  

// export const getLikes = (auth, id) => {
//   return async (dispatch) => {
//     const jwt_access_token = auth.data.jwt_access_token;
//     const uid = auth.data.current_user.uid;
//     dispatch({ type: SET_LOADING, payload: true });

//     try {
//       const response = await axios.get(`/tracks/liked_count/${id}`, {headers: {'Content-Type': 'application/json', 'Authorization': "Bearer " + jwt_access_token}});
//       const list = response.data.map((entry) => entry.entry_uuid);
//       dispatch({ type: SET_LOADING, payload: false });
//       dispatch({ type: UPDATE_SHARED_LIST, payload: list });
//     } catch (e) {
//       console.log('error getting likes for this track', e);
//     }
//   }
// }


// QUESTIONS

/*
auth stuff: where does it fit in? specifically: Rails will talk to Spotify, save the access token in the DB. Will it give anything to the front end that logs it in? 

need front-end code that displays a page; need to figure out what the result will be to call likeTrack
- need information from getLikes - 

fake return fron getLikes?

- I need to be able to run the app to test anything, otherwise flying blind
- where is their front-end UI? 

- what is the process for creating tracks (in the database)?
- ("liking" assumes that the track already exists...)
*/
