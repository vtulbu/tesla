import styled from "@emotion/styled";

export const StyledNavBar = styled.div`
  justify-self: end;
  align-self: center;
  font-family: Roboto;
  font-size: clamp(1rem, 1.1vw, 1.3rem);
  font-style: normal;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: 0.085em;
  text-align: left;
  background: transparent;
  text-shadow: 0px 1.6057859659194946px 31px 0px #ffffffa8;
  grid-column: 14/20;
  grid-row: 1/2;
  display: flex;

  a {
    text-decoration: none;
    margin: 0 0.3vw;
    color: #ffffff99;
    cursor: pointer;
  }

  a:visited {
    color: #ffffff99;
  }

  a:hover {
    color: #ffffff;
  }

  .linkHover {
    box-sizing: border-box;
    position: relative;
    padding: 0.9vh 0.7vw;
    &::before,
    &::after {
      content: "";
      box-sizing: border-box;
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      transform-origin: center;
    }

    &::before {
      border-top: 0.05em solid #ffffff60;
      border-bottom: 0.05em solid #ffffff60;
      transform: scale3d(0, 1, 1);
    }

    &::after {
      border-left: 0.05em solid #ffffff60;
      border-right: 0.05em solid #ffffff60;
      transform: scale3d(1, 0, 1);
    }

    &:hover::before,
    &:hover::after {
      transform: scale3d(1, 1, 1);
      transition: transform 300ms;

      background: linear-gradient(
        107.95deg,
        rgba(255, 255, 255, 0.03) 0%,
        rgba(255, 250, 250, 0) 83.15%
      );
    }
  }
`;
