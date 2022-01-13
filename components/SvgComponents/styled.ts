import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const StyledLogo = styled.div`
  fill: white;
  width: clamp(10rem, 15vw, 18rem);
  margin: 2vh 0em 0em 4vw;
  position: absolute;
  z-index: 10;
`;

export const StyledRightArrow = styled.div`
  fill: inherit;
  width: clamp(1rem, 2vw, 1.8rem);
  margin: 0;
  display: flex;
  margin-right: clamp(0.5rem, 2vw, 1.5rem);
`;

export const StyledSpeedometer = styled.div`
  fill: white;
  width: clamp(1rem, 5vw, 1.8rem);
`;

export const StyledRectangle = styled(motion.div)`
  grid-row: 4/9;
  grid-column: 12/21;
  width: 28vw;
  height: 100%;
  justify-self: end;
`;

export const StyledLight = styled(motion.div)`
  grid-row: 1/9;
  grid-column: 6/21;
  height: 50%;
  width: 45vw;
`;

export const StyledIcosahedron = styled.div`
  height: 6vh;
  width: 5vw;
  margin-left: 8vw;
  grid-row: 1/2;
  grid-column: 1/2;
  justify-self: center;
  align-self: end;
  display: flex;

  > svg {
    height: 100%;
    width: 100%;
  }
`;
