import Link from "next/link";
import { StyledCard } from "./styled";
import { StyledContentBox } from "./styled";
import { Logo } from "../SvgComponents";

export const Card = ({ children }: any) => {
  return (
    <StyledCard>
      <Logo />
      <StyledContentBox>{children}</StyledContentBox>
    </StyledCard>
  );
};
