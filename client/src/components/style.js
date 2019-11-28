import styled, { css } from 'styled-components';

export const Section = styled.main`
  display: flex;
  flex-direction: column;
  background: #fff;
  border: 2px solid black;
`;

export const Paragraph = styled.p`
  font-size: 14px;
  line-height: 18px;
  color: #4a4a4a;
  margin-bottom: 20px;
`;

export const Map = styled.div`
display: flex;
flex-direction: column;
colour: steelblue;
width: 100vw;
height: 80vh;
margin: auto;
border: 2px solid black;
`


export const PlaylistContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: #fff;
  color: seagreen;
  border: 2px solid black;
  width: 50%;
  border-radius: 15px;
  margin: auto;
  margin-top: 15px;
  padding: 40px;
 
  ${props =>
    props.recent &&
    css`
      background: white;
      color: black;
    `
   };
   ${props =>
     props.saved &&
     css`
       background: darkgrey;
       color: green;
     `
    };
    ${props =>
      props.nearby &&
      css`
        background: palegreen;
        color: darkgreen;
      `
     };
`

export const PlaylistItem = styled.li`
  display: flex;
  flex-direction: row;
  background: black;
  color: seagreen;
  width: 40vw;
  border-radius: 10px;
  margin: auto;
  margin-top: 15px;
  padding: 10px;
  border: 2px solid black;
 
  ${props =>
    props.recent &&
    css`
      background: white;
      color: black;
    `
   };
   ${props =>
     props.saved &&
     css`
       background: #990000;
       color: white;
     `
    };
    ${props =>
      props.nearby &&
      css`
        background: palegreen;
        color: darkgreen;
      `
     };
`



// BUTTONS


export const ButtonStyles = css`
  display: inline-block;
  border-radius 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  background: transparent;
  color: white;
  border: 2px solid white;
 `
 
 export const Button = styled.button`
 width: 250px;
 background: transparent;
 border-radius: 3px;
 border: 2px solid;
 color: palevioletred;
 margin: 0 1em;
 padding: 0.25em 1em;

 ${props =>
   props.primary &&
   css`
     background: palevioletred;
     color: white;
   `
  };
  ${props =>
    props.home &&
    css`
      background: green;
      color: white;
      border: 2px solid teal;
    `
   };
`

