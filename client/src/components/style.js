import styled, { css } from 'styled-components';

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  background: darkgrey;
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
color: #330000;
width: 50vw;
height: 70vh;
margin: auto;
border-radius: 15px;
border: 2px solid lavender;
padding: 40px;
`

export const Text = styled.div`
  font-family: Calibri;
  font-size: 16;
  color: grey;
`;

export const PlaylistContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: smoke;
  color: #3C3658;
  border: 2px solid lavender;
  width: 50vw;
  border-radius: 15px;
  margin: auto;
  margin-top: 15px;
  padding: 40px;

  @media (max-width: 700px) {
    background: darksmoke;
    width: 95vw;
  }
 
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
  justify-content: space-between;
  background: none;
  color: #3C3658;
  font-size: 16pt;
  width: 40vw;
  border-radius: 10px;
  margin: auto;
  margin-top: 15px;
  padding: 30px;
  border: 2px solid lavender;

  @media (max-width: 700px) {
    background: palevioletred;
    width: 90%;
  }
 
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
   props.spotify &&
   css`
     background: charcoal;
     color: seagreen;
     font-size: 16pt;
     width: 220px;
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

//NAV

export const Nav = styled.nav`
width: 100vw;
position: fixed;
height: 80px;
font-size: 20pt;
background: lightgrey;
color: purple;
margin: auto;
justify-content: center;
`

// GRID DISPLAY

export const Gridwrap = styled.div`
max-width: 60vw;
display: grid;
margin: auto;
margin-top: 100px;
grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
grid-auto-rows: minmax(200px, auto);
`
export const Panel = styled.div`

margin-left: 20px;
margin-right: 20px;
margin-top: 20px;
margin-bottom: 20px;
border: 2px solid white;
flex: 1 1 250px;
`

// FOOTER

export const Footer = styled.footer`
margin-left: 5px;
margin-right: 5px;
flex: 0 1 100%;
grid-column: 1 / -1;`