import styled from "@emotion/styled";

export const StyledSelectModelButtonsContainer = styled.div`
  grid-row: 5/6;
  grid-column: 1/2;
  display: flex;
  z-index: 5;

  div {
    flex: 1;
    display: grid;
    grid-template-rows: 1fr repeat(8, 0.125fr);
  }

  div:nth-of-type(-n + 4)::before {
    content: "";
    border-right: solid #ffffff30 0.005rem;
    height: 100%;
    grid-row: 3/9;
    grid-column: 1/1;
    margin: 0;
    padding: 0;
    margin-right: -0.05em;
  }

  button {
    min-height: 40px;
    height: 100%;
    border: solid 0.05em transparent;
    color: #ffffff60;
    cursor: pointer;
    background: linear-gradient(
      106.64deg,
      rgba(255, 255, 255, 0.07) 0%,
      rgba(255, 250, 250, 0.07) 203.52%
    );
    font-size: clamp(1.1rem, 1.2vw, 1.7em);
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    grid-row: 2/10;
    grid-column: 1/2;
    align-self: end;
    letter-spacing: 0.2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;x
  }

  button:hover {
    animation-name: hoverbtn;
    animation-duration: 0.4s;
    animation-fill-mode: forwards;
    animation-timing-function: cubic-bezier(0.09, 0.65, 0.6, 0.95);
    @keyframes hoverbtn {
      100% {
        height: 130%;
        color: white;
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
        background-clip: border-box;
        box-sizing: border-box;
        background: linear-gradient(
          107.95deg,
          rgba(255, 255, 255, 0.07) 0%,
          rgba(255, 250, 250, 0) 83.15%
        );
        box-shadow: -15px -12px 19px 11px rgba(0, 0, 0, 0.31);
      }
    }
  }

  .selected {
    height: 130%;
    color: white;
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
    background-clip: border-box;
    box-sizing: border-box;
    background: linear-gradient(
      107.95deg,
      rgba(255, 255, 255, 0.07) 0%,
      rgba(255, 250, 250, 0) 83.15%
    );
    box-shadow: -15px -12px 19px 11px rgba(0, 0, 0, 0.31);
  }
`;
