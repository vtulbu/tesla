import { StyledRightSideContent } from "./styled";
import { NavBar } from "./NavBar";
import { Rectangle, Light } from "../SvgComponents";
import { CarImg, CarImgShadow } from "./ImgComponent/index";

export const RightSideContent = ({ image, selectedModel, shadowProp }: any) => {
  return (
    <StyledRightSideContent>
      <Light selectedModel={selectedModel} />
      <NavBar />
      <Rectangle selectedModel={selectedModel} />
      <CarImg image={image} selectedModel={selectedModel} />
      <CarImgShadow
        image={image}
        selectedModel={selectedModel}
        shadowProp={shadowProp}
      />
    </StyledRightSideContent>
  );
};
