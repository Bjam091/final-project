import "./DayListItem.scss";
import React from "react";
import classnames from "classnames";

export default function DayListItem(props) {
  const dayClass = classnames({
    "day-list__item": true,
    "day-list__item--selected": props.selected,
    "day-list__item--full": props.spots === 0
  })

  function formatSpots(props) {
    let spotsText = "";
    if (props === 0) {
      spotsText = `no spots remaining`;
    } else if (props === 1) {
      spotsText = "1 spot remaining";
    } else {
      spotsText = `${props} spots remaining`;
    }
    return spotsText;
  }

  return (
    <li className={dayClass} onClick={() => props.setDay(props.name)}>
      <h2 className="text--regular">{props.name}</h2>
      <h3 className="text--light">{formatSpots(props.spots)}</h3>
    </li>
  );
};