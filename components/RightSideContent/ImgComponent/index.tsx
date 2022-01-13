import { StyledBoxImage, StyledShadowImage } from "./styled";
import { AnimatePresence } from "framer-motion";
import Image from "next/image";

export const CarImg = ({ image, selectedModel }: any) => {
  return (
    <AnimatePresence exitBeforeEnter>
      <StyledBoxImage
        key={selectedModel ? selectedModel.model : "empty"}
        initial="imageInitial"
        animate="imageAnimate"
        exit="imageExit"
        variants={{
          imageInitial: {
            scale: 0,
            x: -500,
            opacity: 0,
          },
          imageAnimate: {
            scale: 1,
            x: 0,
            opacity: 1,
            transition: {
              type: "circIn",
              duration: 1.2,
            },
          },
          imageExit: {
            scale: 0,
            x: 250,
            opacity: 0,
            transition: {
              type: "circOut",
              duration: 0.8,
            },
          },
        }}
      >
        {selectedModel ? (
          <Image
            alt=""
            src={image}
            layout="fill"
            objectFit="contain"
            loading="eager"
            priority={true}
          />
        ) : (
          ""
        )}
      </StyledBoxImage>
    </AnimatePresence>
  );
};

export const CarImgShadow = ({ image, selectedModel, shadowProp }: any) => {
  return (
    <AnimatePresence exitBeforeEnter>
      <StyledShadowImage
        props={shadowProp}
        key={selectedModel ? selectedModel.model : "empty"}
        initial="imageInitial"
        animate="imageAnimate"
        exit="imageExit"
        variants={{
          imageInitial: {
            scale: 0,
            x: -500,
            opacity: 0,
          },
          imageAnimate: {
            scale: 1,
            x: 0,
            y: -20,
            opacity: 1,
            transition: {
              type: "circIn",
              duration: 1.2,
            },
          },
          imageExit: {
            scale: 0,
            x: 150,
            opacity: 0,
            transition: {
              type: "circOut",
              duration: 0.8,
            },
          },
        }}
      >
        <Image
          alt=""
          src={image}
          layout="fill"
          objectFit="contain"
          loading="eager"
          priority={true}
        />
      </StyledShadowImage>
    </AnimatePresence>
  );
};
