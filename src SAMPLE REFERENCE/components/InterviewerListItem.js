
import React from "react";
import classNames from "classnames";
import "components/InterviewerListItem.scss";
import "components/InterviewerList.scss";

export default function InterviewerListItem(props) {

  const itemClass = classNames({
    "interviewers__item": true,
    "interviewers__item--selected": props.selected
  })
  return (

    <li className={itemClass} onClick={(event) => { props.setInterviewer(props.id); }}>
      <img
        className="interviewers__item-image"
        src={props.avatar}
        alt={props.name}
      />
      {props.selected && props.name}
    </li>
  );
};
