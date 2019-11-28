

function getAppointmentsForDay(state, day) {
  const appointments = [];
  const filteredDays = state.days.find(dayCheck => dayCheck.name === day)
  if (!filteredDays) return appointments;
  for (let id of filteredDays.appointments) {
    appointments.push(state.appointments[id])
  }
  return appointments;
}

function getInterviewersForDay(state, dayName) { 
  const day = state.days.find(day => day.name === dayName);
  if (!day) return [];
  return day.interviewers.map(id => state.interviewers[id]);
}


function getInterview(state, interview) {
  if (!interview) {
    return null;
  } else {
    const student = interview.student;
    if (typeof(interview.interviewer) === "number") {
      const interviewer = state.interviewers[interview.interviewer];

      return { student, interviewer };
    } else {
      return { ...interview}
    }
  }
}



function getAllInterviewers(state){
  return Object.values(state.interviewers);
}


export { getAppointmentsForDay, getInterviewersForDay, getInterview, getAllInterviewers};
