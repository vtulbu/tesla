import styled from "@emotion/styled";

export const StyledSpecificationsInfo = styled.div`
  padding: 2vh 0vw;
  grid-row: 4/5;
  grid-column: 1/2;
  align-self: start;
  border: solid 0.05em transparent;
  border-image: linear-gradient(
      140deg,
      #ffffff90,
      #ffffff40,
      #ffffff10,
      transparent
    )
    1;
  background-origin: border-box;
  background-clip: content-box, border-box;
  box-sizing: content-box;
  display: flex;
  justify-content: space-around;
  width: 80%;
  box-shadow: 0px 4px 43px 0px #00000040;
  background: linear-gradient(
    107.95deg,
    rgba(255, 255, 255, 0.07) 0%,
    rgba(255, 250, 250, 0) 83.15%
  );

  h4 {
    font-family: Montserrat;
    font-size: clamp(1rem, 2vw, 1.4rem);
    font-style: normal;
    font-weight: 600;
    letter-spacing: 0.09em;
    line-height: 135%;
    margin: 0;
  }

  p {
    font-family: Montserrat;
    font-size: clamp(0.7rem, 0.7vw, 0.9rem);
    font-style: normal;
    font-weight: 600;
    letter-spacing: 0.09em;
    color: #32e3ff;
    line-height: 135%;
  }

  .speedInfo {
    display: flex;
    flex-direction: column;
  }

  .time {
    display: grid;
    grid-template-columns: 40px 40px;
    column-gap: 1vw;
    justify-items: center;
  }

  .infoCont {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
