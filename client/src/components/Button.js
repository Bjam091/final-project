import React from "react";
import classnames from "classnames";
// import "components/Button.scss";
import styled, { css } from 'styled-components';



export default function Button(props) {
  const Button = styled.button`
  background: black;
  color: white;
  border-radius: 7px;
  padding: 20px;
  margin: 10px;
  font-size: 16px;
  :disabled {
    opacity: 0.4;
  }
  :hover {
    box-shadow: 0 0 10px yellow;
  }
  ${props => props.primary && css`
    background: green;
    color: white;
    border: green;
  `}
`;
 
   return (
     <button
       className={buttonClass}
       onClick={props.onClick}
       disabled={props.disabled}
     >
       {props.children}
     </button>
   );
 }