import {
  StyledOrderInfoButtons,
  StyledOrderButton,
  StyledMoreInfoButton,
} from "./styled";

import { RightArrow } from "../../SvgComponents";

export const OrderInfoButtons = ({ setOrderForm }: any) => {
  const orderClick = () => {
    setOrderForm((current: boolean) => (current = true));
  };

  return (
    <StyledOrderInfoButtons>
      <StyledOrderButton onClick={orderClick}>Order now</StyledOrderButton>
      <StyledMoreInfoButton>
        <a href="#">
          <RightArrow />
          More Information
        </a>
      </StyledMoreInfoButton>
    </StyledOrderInfoButtons>
  );
};
