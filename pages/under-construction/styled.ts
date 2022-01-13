import styled from "@emotion/styled";

export const UnderConstructionBox = styled.div`
  grid-column: 2/8;
  font-size: 6vw;
  width: 10%;
  box-sizing: border-box;
  margin-top: 15vh;
`;

export const LinkBack = styled.div`
  grid-column: 8/9;
  font-size: 1.1vw;
  margin: 2.5vh 0 0 2.5vw;

  a {
    text-decoration: none;
  }

  a:visited {
    text-decoration: none;
    color: inherit;
  }
`;

export const BoldText = styled.span`
  &:after {
    content: "bold";
    font-weight: 600;
    font-style: italic;
  }
`;
