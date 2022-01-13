import styled from "@emotion/styled";

export const StyledLeftSideContent = styled.div`
  grid-column: 1/6;
  z-index: 1;
  grid-row: 1/3;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 0.6fr 1fr repeat(2, 0.8fr) 0.6fr;
  padding: 0 0 0 6vw;
  border-radius: 3em 0em 0em 3em;
  border-right: solid #ffffff40 0.15em;
  background: #fffafa18;
  z-index: 4;
  backdrop-filter: blur(10px);
`;
