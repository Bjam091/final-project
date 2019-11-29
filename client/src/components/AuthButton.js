import React from "react";
import classnames from "classnames";
// import "components/Button.scss";
import styled, { css } from 'styled-components';
import { connect } from 'react-redux'
import "../components/Button.css";

const AuthButton =  function (props) {
 
   return (
     <button
       onClick={function () { location.href = "https://listen-in.herokuapp.com/authorize" }}
     >
     </button>
   );
 }

 export default connect(state => state)(AuthButton);
