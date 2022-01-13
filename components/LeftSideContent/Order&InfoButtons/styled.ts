import styled from "@emotion/styled";

export const StyledOrderInfoButtons = styled.div`
  z-index: 5;
  grid-row: 3/4;
  grid-column: 1/2;
  display: grid;
  grid-template-columns: 0.5fr 1fr;
  grid-template-rows: repeat(4, 0.25fr) 1fr;
  a {
    text-decoration: none;
    color: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  a:visited {
    color: inherit;
  }
`;

export const StyledOrderButton = styled.button`
  border-style: none;
  background-color: #24e2ff;
  height: clamp(2.5rem, 5vh, 3rem);
  width: clamp(2rem, 12vw, 8rem);
  cursor: pointer;
  font-size: clamp(0.9rem, 1vw, 1rem);
  font-weight: 700;
  letter-spacing: 0.05rem;
  font-family: Montserrat;
  margin-right: 3vw;
  padding: 0vw 1vw 0vw 0.6vw;
  clip-path: polygon(0 0, 100% 0, 100% 65%, 85% 100%, 0 100%);
  text-transform: uppercase;
  grid-row: 2/4;
  display: flex;
  justify-content: center;
  align-items: center;
  a {
    padding: 10px 0vw;
  }

  :hover {
    animation-name: hoverOrderBtn;
    animation-duration: 0.4s;
    animation-fill-mode: forwards;

    @keyframes hoverOrderBtn {
      100% {
        background-color: #76ffff;
      }
    }
  }
`;

export const StyledMoreInfoButton = styled.button`
  fill: white;
  border-style: none;
  background-color: transparent;
  color: white;
  font-family: Montserrat;
  justify-self: start;
  display: flex;
  align-items: center;
  grid-row: 2/4;
  cursor: pointer;
  font-size: clamp(1rem, 1.1vw, 1.1rem);
  height: clamp(2.5rem, 5vh, 3rem);

  a {
    padding: 10px 0vw;
    background-image: linear-gradient(90deg, #ffffff00, white, #ffffff00);
    background-size: 0% 0.1em;
    background-position-y: 100%;
    background-position-x: 50%;
    background-repeat: no-repeat;
    transition: background-size 0.2s ease-in-out;
  }

  a:hover {
    background-size: 100% 0.1em;
    color: #ccc;
    fill: #ccc;
  }
`;
