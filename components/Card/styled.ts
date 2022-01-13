import styled from "@emotion/styled";

export const StyledCard = styled.div`
  height: clamp(44rem, 85vh, 100rem);
  width: 90vw;
  min-width: 63rem;
  color: white;
  border-radius: 3em;
  border: double 0.15em transparent;
  background-image: linear-gradient(black, black),
    radial-gradient(circle at top left, #eaeaea, #25e1ff);
  background-origin: border-box;
  background-clip: content-box, border-box;
  box-sizing: content-box;
  z-index: 0;
`;

export const StyledContentBox = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: 1fr;
  height: inherit;
  z-index: 1;
`;
