import React, { useState } from "react";
import InterviewerList from "components/InterviewerList";


export default function Create(props) {

  return (
    <section
    interviewers={props.interviewers}
    onSave={action("onSave")}
    onCancel={action("onCancel")}
  />
  );
};