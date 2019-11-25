import React from "react";
import classnames from "classnames";

export default function LocationMap(props) {
 const location = props.coordinates;

 // I am definitely sure this isn't done correctly. Need to get the map working and find how/where to pass in those coordinates for an accurate location. Hopefully it won't take much more than this, but probably needs a mentor's help. 

  return (
<div id ="map">{location}</div>
  );
};
