import DayListItem from "components/DayListItem";
import React from "react";
import classnames from "classnames";
import "components/InterviewerListItem.scss";
import "components/InterviewerList.scss";
import InterviewerListItem from "components/InterviewerListItem";
import Appointment from "components/Appointment";
import PropTypes from 'prop-types';
 
InterviewerList.propTypes = {
  value: PropTypes.number,
  onChange: PropTypes.func.isRequired
};

export default function InterviewerList(props) {
 
  const interviewers = props.interviewers.map(interviewer => {
    return (
      <InterviewerListItem
        key={interviewer.id}
        id={interviewer.id}
        name={interviewer.name}
        avatar={interviewer.avatar}
        selected={interviewer.id === props.interviewer}
        setInterviewer={props.setInterviewer}
      />

    );
  })

  return (
    <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewer</h4>
      <ul className="interviewers__list">
       {interviewers}
      </ul>
    </section>

  );
}
