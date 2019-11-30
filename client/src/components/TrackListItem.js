import React from "react";
import classNames from "classnames";
// import "components/TrackListItem.scss";
// import "components/TrackList.scss";
import Slider from "react-slick";
import './TrackListItem.css';


const tracks = [
  {
    "id": 1,
    "spotify_uuid": null,
    "spotify_username": "brandonjamiller",
    "latitude": "49.275268",
    "longitude": "-123.142809",
    "track_id": 5,
    "created_at": "2019-11-29T09:24:59.196Z",
    "updated_at": "2019-11-30T02:48:48.950Z",
    "access_token": "BQCxfpdhJVFUDapYWZfoYkb0c7H1JEViInco1xB2Iv_V8S-EikoUYPWeG8OpAxq9JCM2SMFkRNoL3LZNI-vtVa1hV7BKDfOW-ZF2Rmrci61aZXHR95BiCWz80f0e0GPmNWcqWK_CNGI759XFIpicNO_WMZgHw2mp",
    "refresh_token": "AQDMPWRs7fNWJlcWUirMKWI0szBhJmiKC8Hn8LAJxBCocsLd2EV47w0CVxb2pYZL5cCVZiAUJhpx8fnufXaGaTz2DRwVRDWaGgtPkketN0WanBk0QSaWpqVsydguxtsT_Kw",
    "last_login": "2019-11-30T02:00:04.045Z",
    "distance": 0.0467987463447769,
    "bearing": "25.413532277312",
    "track": {
      "id": 5,
      "spotify_uuid": "4w3tQBXhn5345eUXDGBWZG",
      "title": "9 to 5",
      "artist": "Dolly Parton",
      "album_art_url": "https://i.scdn.co/image/ab67616d0000b273060ccf36ab5b0e0a739799ec",
      "preview_url": "https://p.scdn.co/mp3-preview/a3c584358e68ee984ac4b1f31d4a832fb46aeeb9?cid=cba28597a1b94d0283a4a1aa74bdd15f",
      "spotify_url": "https://open.spotify.com/track/4w3tQBXhn5345eUXDGBWZG",
      "created_at": "2019-11-30T02:48:48.943Z",
      "updated_at": "2019-11-30T02:48:48.943Z"
    }
  },
  {
    "id": 3,
    "spotify_uuid": null,
    "spotify_username": "Julia",
    "latitude": "49.274596",
    "longitude": "-123.141972",
    "track_id": 6,
    "created_at": "2019-11-29T18:47:31.514Z",
    "updated_at": "2019-11-30T02:49:54.178Z",
    "access_token": "BQAHfBRXBrK-H4fVMeRwDFQI3X2vXY8Y9J2e_RVZsc8fDeE50Od-f9KdQjn3_7jz1UWGIYF0_D9m_JnZSa-1mKchRbMFPOxLNrJa-hpHpS08MU-fa9lZVhpjWOSNFW-ByB3WkCfLuo2nqaZqiKA-bN94_Kxh2FjUforSnpSPgRxkTA",
    "refresh_token": "AQB2efG_ao49T2kuOL7eHG5llrR0etEPAUAIZLJvmIOzYda-fLvKuecFGYLl13agP59lLxNrRFLlXwpNKogfvgmFM1nEZiFXs2Sb28QILXhdqVd9Oey0X0BuCYpGNR8Zn-0",
    "last_login": null,
    "distance": 0.0803947456740346,
    "bearing": "104.716124935378",
    "track": {
      "id": 6,
      "spotify_uuid": "7Hy7Fgp3es9APBsQIzEF3V",
      "title": "Vacation",
      "artist": "Still Woozy",
      "album_art_url": "https://i.scdn.co/image/32d540432ef86e2edf3e0ec64cab796d583a4e33",
      "preview_url": "https://p.scdn.co/mp3-preview/f11df4f94a558e6f11294c4765278a53ab6bca04?cid=cba28597a1b94d0283a4a1aa74bdd15f",
      "spotify_url": "https://open.spotify.com/track/7Hy7Fgp3es9APBsQIzEF3V",
      "created_at": "2019-11-30T02:49:54.171Z",
      "updated_at": "2019-11-30T02:49:54.171Z"
    }
  },
  {
    "id": 4,
    "spotify_uuid": null,
    "spotify_username": "jonrgirard",
    "latitude": "49.276472",
    "longitude": "-123.143517",
    "track_id": 3,
    "created_at": "2019-11-29T19:11:58.679Z",
    "updated_at": "2019-11-30T02:47:44.739Z",
    "access_token": "BQBOyA06kMPpZeWEJfkyDIyl11fOhoq-aIPYkspAMFl0Acjye3z97HJ19CR64f1gKrUapC6s3kls8_LM_Y_aPwVGFC5ZXBHvUuTgPI-RkZv21cXl_ia_W5rWfL6fQNkbjIRauP33vflYrVw0raGrTXiBqQ",
    "refresh_token": "AQBM20Eo-Eb5wKPerbOZe_eWB_9V2-grHxgbauC88QfZAN3ts4jzIwV2v146vrw-x-bEzRj80wYthLhk4U2E_qz1WLjlt6apFr70WBaonSJcUj_tAn4A-omyZP-lF_x4yec",
    "last_login": "2019-11-30T02:06:40.304Z",
    "distance": 0.182475182804576,
    "bearing": "342.155708395799",
    "track": {
      "id": 3,
      "spotify_uuid": "6cnInziw6k7edyox0qGrX4",
      "title": "21",
      "artist": "Little Destroyer",
      "album_art_url": "https://i.scdn.co/image/ab67616d0000b27311c8617aa607d9a4aed79d3c",
      "preview_url": "https://p.scdn.co/mp3-preview/6ec8774129956988158a803c06c4c682a7df06d9?cid=cba28597a1b94d0283a4a1aa74bdd15f",
      "spotify_url": "https://open.spotify.com/track/6cnInziw6k7edyox0qGrX4",
      "created_at": "2019-11-29T20:08:50.236Z",
      "updated_at": "2019-11-29T20:08:50.236Z"
    }
  },
  {
    "id": 5,
    "spotify_uuid": null,
    "spotify_username": "Anne",
    "latitude": "49.277648",
    "longitude": "-123.142884",
    "track_id": 7,
    "created_at": "2019-11-30T02:44:50.310Z",
    "updated_at": "2019-11-30T02:50:10.205Z",
    "access_token": "BQAxlSZILBD_fWILRtj9wxuzB6XDrnOM3cPp5iCE-h6ODf0jFiIQ45uYeeerCEFBtPlwvwGKOl9PWcLCSpDDtIafN9qxKbHKwheSlkskFEar2bgXiO7-fF00M-qOn5dlfFO8RVslyFoFeZ04m0BX9z8Omyr20Wntnd3jABLRHCVhiw",
    "refresh_token": "AQAHQRa4giz0Io_NNcAlqa28uEIu9L4HHv-OKZBg1ItHCch479XVoCVgCca5CFQw_fQLM-4b8AMcZin8ZhpBfdI_BJInUpVkzDM6nvZxAJAiGWZtuEBa63eE7jJDxflbC_A",
    "last_login": null,
    "distance": 0.30945872598326,
    "bearing": "2.387657317909",
    "track": {
      "id": 7,
      "spotify_uuid": "3Bj2mrlp3tALHO5U3mK8zM",
      "title": "Blade Runner 2049",
      "artist": "Synthwave Goose",
      "album_art_url": "https://i.scdn.co/image/ab67616d0000b27326178e6191e79aa19a1795bb",
      "preview_url": "https://p.scdn.co/mp3-preview/78765f08e1a368c0eb585f9907f69c4dbb9eef0d?cid=cba28597a1b94d0283a4a1aa74bdd15f",
      "spotify_url": "https://open.spotify.com/track/3Bj2mrlp3tALHO5U3mK8zM",
      "created_at": "2019-11-30T02:50:10.200Z",
      "updated_at": "2019-11-30T02:50:10.200Z"
    }
  }
]

const getAllNearby = tracks.map((track) =>
  <div class='trackitem'>
    <div class='flex'>
      <iframe class='current-track-image' src={`https://open.spotify.com/embed/track/${track.track.spotify_uuid}`} width="80" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
      <div class='track-text'>
        <div>{track.track.title}</div>
        <div>{track.track.artist}</div>
        <div class='liked-track'>heart # users like this</div>
      </div>
    </div>
    <hr></hr>
    <div class='track-buttons'>
      <button class='user-preview'><img src="https://i.ibb.co/CJStwTB/signal.png" />{track.spotify_username}</button>
      <a href={track.track.spotify_url}> <img class="spotify-badge" src="https://taylorbennett.co/wp-content/uploads/2018/02/spotify-badge-button.png" /></a>
    </div>
  </div>
)

// const previewURL = `https://open.spotify.com/embed/track/${track.track.spotify_uuid}`


export default function TrackListItem(props) {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 10000,
    swipeToSlide: true,
    centerMode: true,
  };

  return (
    <Slider {...settings}>
      <div>
        {getAllNearby}
      </div>
    </Slider>
  );
};

// <li className={itemClass} onClick={(event) => { props.setTrack(props.id); }}>
//   <img
//     className="tracks__item-image"
//     src={props.album_img}
//     alt={props.track_title}
//   />
//   {props.selected && props.title}
// </li>