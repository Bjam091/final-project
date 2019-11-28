import React, { useState } from "react";
import InterviewerList from "components/InterviewerList";


export default function Edit(props) {

  return (
    <Form 
        name={props.name}
        interviewers={props.interviewers}
        id={props.interviewer.id}
        onSave={action("onSave")}
        onCancel={action("onCancel")}
      />
  );
};