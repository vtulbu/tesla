import styled from "@emotion/styled";

export const StyledRightSideContent = styled.div`
  box-sizing: border-box;
  grid-column: 4/9;
  grid-row: 1/3;
  display: grid;
  grid-template-rows: 8% repeat(10, 0.1fr) 0.25fr;
  grid-template-columns: repeat(20, 5%);
  margin-right: -3px;
  z-index: 2;
`;
