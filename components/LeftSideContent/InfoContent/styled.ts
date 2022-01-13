import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const StyledInfoContent = styled(motion.div)`
  grid-row: 2/3;
  grid-column: 1/2;
  width: 80%;

  .model {
    font-size: clamp(2rem, 2.5vw, 3rem);
    text-transform: uppercase;
    font-family: Montserrat;
    font-weight: 900;
    letter-spacing: 0.3rem;
    text-shadow: 0px 4px 37px #ffffff50;
  }

  .description {
    font-size: clamp(1rem, 1.1vw, 1.5rem);
    font-weight: 300;
    letter-spacing: 0.2vw;
  }
`;
