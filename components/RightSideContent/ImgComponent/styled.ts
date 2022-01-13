import styled from "@emotion/styled";
import { motion } from "framer-motion";

type ShadowProps = {
  props: any;
};

export const StyledBoxImage = styled(motion.div)`
  width: clamp(32rem, 41vw, 62rem);
  height: 100%;
  position: relative;
  grid-row: 7/11;
  grid-column: 7/21;
  justify-self: end;
  align-self: start;
`;

export const StyledShadowImage = styled(motion.div)<ShadowProps>`
  width: clamp(21rem, 33vw, 41rem);
  grid-row: 11/13;
  grid-column: 7/18;
  height: 100%;
  position: relative;

  > span > img {
    transform: rotateX(${(property) => property.props.x})
      rotateZ(${(property) => property.props.z});
    filter: blur(${(property) => property.props.blur})
      brightness(${(property) => property.props.brightness})
      opacity(${(property) => property.props.opacity});
    padding: 0.5vw !important;
  }
`;
