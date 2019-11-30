import React from "react";
import classNames from "classnames";
// import "components/TrackListItem.scss";
// import "components/TrackList.scss";
import Slider from "react-slick";
import './TrackListItem.css';

const Slide = function (props) {
  const track = {
    "id": 1,
    "spotify_uuid": "2h53xiohLZK75SfUWhThIi",
    "title": "Get Outta My Way",
    "artist": "Kylie Minogue",
    "album_art_url": "https://i.scdn.co/image/6ad809017e90c37097f9f5546d5c3ea728c0ce58",
    "preview_url": "https://p.scdn.co/mp3-preview/e48862a376428d3fe9f4653eb897ef75ec549a47?cid=cba28597a1b94d0283a4a1aa74bdd15f",
    "spotify_url": "https://open.spotify.com/track/2h53xiohLZK75SfUWhThIi",
    "created_at": "2019-11-29T10:22:38.736Z",
    "updated_at": "2019-11-29T10:22:38.736Z"
  }

  const previewURL = `https://open.spotify.com/embed/track/${track.spotify_uuid}`

  return (
    <div class='trackitem'>
      <div class='flex'>
        <iframe class='current-track-image' src={previewURL} width="80" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
        <div class='track-text'>
          <div>{track.title}</div>
          <div>{track.artist}</div>
          <div class='liked-track'>heart # users like this</div>
        </div>
      </div>
      <hr></hr>
      <div class='track-buttons'>
        <button class='user-preview'><img src="https://i.ibb.co/CJStwTB/signal.png"/>Brandonjamiller</button>
        <a href={track.spotify_url}> <img class="spotify-badge" src="https://taylorbennett.co/wp-content/uploads/2018/02/spotify-badge-button.png" /></a>
      </div>
    </div>
  )
}
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
      <Slide></Slide>
      <Slide></Slide>
      <Slide></Slide>
      <Slide></Slide>
      <Slide></Slide>
      <Slide></Slide>
      <Slide></Slide>
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