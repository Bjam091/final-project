import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import MarkerClusterGroup from 'react-leaflet-markercluster'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import { addLocationWatcher } from './helperJulia'

export default function Mapper(props) {
  // Mapbox base map URL
  const accessToken = 'pk.eyJ1IjoianVsaWFqNjIxIiwiYSI6ImNrM2VxdnlmbzAxM2MzaHBhOXQ2Z2RibTAifQ.dVzPBLFX3oJ1-DHsz4dCOA'
  const tileUrl = `https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?style={style}&access_token={accessToken}`
  const attribution = 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>'
  // Map settings
  const maxZoom = 19
  const style = 'mapbox://styles/juliaj621/ck3eu8hj10b8h1cpdte6laqul'
  // removes the default marker icon
  delete L.Icon.Default.prototype._getIconUrl;
  // attaches and styles a new marker icon
  L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
  });

  const customIcon = new L.Icon({
    iconUrl: require('./assets/marker.png'),
    iconSize: [15, 25]
  })

  const [zoom, setZoom] = useState(12)
  const [mapCenter, setMapCentre] = useState([49.2812, -123.1149])
  const [location, setLocation] = useState([49.2812, -123.1249])

  // setLocation(addLocationWatcher())
  function processNewPosition(pos) {
    if (pos && pos.coords) {
      setLocation([pos.coords.latitude, pos.coords.longitude]);
    } else {
      console.log("wtf is wrong with the position?", pos);
    }
  }

  // create map
  const mapRef = useRef(null);
  useEffect(() => {
    mapRef.current = L.map("map", {
      // id: "mapid",
      center: mapCenter,
      zoom: zoom,
      maxZoom: maxZoom,
      layers: [
        L.tileLayer(tileUrl, {
          style: 'mapbox://styles/juliaj621/ck3eu8hj10b8h1cpdte6laqul',
          attribution: attribution,
          accessToken: accessToken,
          id: 'mapbox.dark'
        })
      ]
    });

  }, []);

  // add marker
  const markerRef = useRef(null);
  useEffect(() => { addLocationWatcher(processNewPosition) }, []);
  useEffect(
    () => {
      if (markerRef.current) {
        markerRef.current.setLatLng(location);
        console.log("markerRef.current is happening again", location);
      } else {
        markerRef.current = L.marker(location, { icon: customIcon }).addTo(mapRef.current);
        console.log("first time markerRef.current", location);
      }
    },
    [location]
  );

  return <div className='mapid' id="map">

  </div>

};