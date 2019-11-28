import DayListItem from "components/DayListItem";
import React from "react";
import classnames from "classnames";

export default function DayList(props) {
 const listOfDays = props.days.map((day) => 

  <li> <DayListItem
  key={day.id}
  id={day.id} 
  name={day.name}
  spots={day.spots}
  selected={day.name === props.day}
  setDay={props.setDay}/> </li>
 );

  return (
<ul>{listOfDays}</ul>
  );
};
