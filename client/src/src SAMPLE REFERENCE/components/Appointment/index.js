import "./styles.scss";
import PropTypes from 'prop-types';
import React, { useState } from "react";
import Header from "components/Appointment/Header";
import Empty from "components/Appointment/Empty";
import Status from "components/Appointment/Status";
import Show from "components/Appointment/Show";
import useVisualMode from "hooks/useVisualMode";
import Form from "components/Appointment/Form";
import Confirm from "components/Appointment/Confirm";
import Error from "components/Appointment/Error";
import { getInterview } from "helpers/selectors";
// import { cancelInterview, bookInterview } from "Application";

const EMPTY = "EMPTY";
const SHOW = "SHOW";
const CREATE = "CREATE";
const SAVING = "SAVING";
const DELETING = "DELETING";
const CONFIRM = "CONFIRM";
const EDIT = "EDIT";
const ERROR_SAVE = "ERROR_SAVE";
const ERROR_DELETE = "ERROR_DELETE";

export default function Appointment(props) {


  const initialMode = props.interview ? SHOW : EMPTY;
  const { mode, transition, back } = useVisualMode(initialMode)



  function save(name, interviewer) {
    const interview = {
      student: name,
      interviewer
    };
    transition(SAVING);


    props
      .bookInterview(props.id, interview)
      .then(() => {
        transition(SHOW)})
      .catch(error => transition(ERROR_SAVE, true));
  }

  function destroy(event) {
    transition(DELETING, true);
    props
      .cancelInterview(props.id)
      .then(() => transition(EMPTY))
      .catch(error => transition(ERROR_DELETE, true));
  }


  return (
    <article className="appointment">
      <Header
        time={props.time} />

      {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}

      {mode === SHOW && (
        <Show
          student={props.interview.student}
          interviewer={props.interview.interviewer}
          onEdit={() => transition(EDIT)}
          onDelete={() => transition(CONFIRM)}
          onSave={() => transition(SAVING)}
        />
      )}

      {mode === CREATE && (
        <Form
          interviewers={props.interviewers}
          onCancel={back}
          onSave={save} />
      )}


      {mode === SAVING && (
        <Status message='Saving...' />
      )}

      {mode === DELETING && (
        <Status message='Deleting...' />
      )}

      {mode === CONFIRM && (

        <Confirm onCancel={() => transition(SHOW)}
          onConfirm={destroy} />
      )}

      {mode === EDIT && (

        <Form
          interviewers={props.interviewers}
          onCancel={back}
          onSave={save} />

      )}

      {mode === ERROR_SAVE && (
        <Error message='Could not save this appointment.' />
      )}

      {mode === ERROR_DELETE && (
        <Error message='Could not delete this appointment.' />
      )}
    </article>
  )

}