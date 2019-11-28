import React from "react";
import classnames from "classnames";


export default function Button(props) {
   const buttonClass = classnames("button", {
     "button--confirm": props.confirm,
     "button--danger": props.danger
   });

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