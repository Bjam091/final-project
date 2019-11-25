import React, { useState } from "react";
import Button from "components/Button";


export default function LoginForm(props) {

  const [username, setUsername] = useState(props.username || "");
  const [password, setPassword] = useState(props.password || null);
  const [error, setError] = useState("");

  // const reset = () => {
  //   setName("")
  //   setInterviewer(null)
  // }

  const cancel = () => {
    reset()
    props.onCancel()
  }

  function validate() {
    if (name === "") {
      setError("Username cannot be blank");
      return;
    }
    if (password === "") {
      setError("Password cannot be blank");
      return;
    }

    props.onLogin(username, password);
  }


  return (

    <main className="appointment__card appointment__card--create">
      <section className="appointment__card-left">
        <form autoComplete="off" onSubmit={event => event.preventDefault()}>
          <input
            className="login-input text--semi-bold"
            name="name"
            type="text"
            placeholder="Username"
            value={props.name}
            onChange={(event) =>
              setName(event.target.value)}
            data-testid="username-input"
          />
        </form>
        <section className="appointment__validation">{error}</section>
        {/* <InterviewerList
          interviewers={props.interviewers}
          interviewer={interviewer}
          setInterviewer={setInterviewer}
        /> */}
      </section>
      <section className="appointment__card-right">
        <section className="appointment__actions">
          <Button danger onClick={cancel}>Cancel</Button>
          <Button confirm onClick={() => props.onSave(username, password)}>Save</Button>
        </section>
      </section>
    </main>
  );
};
