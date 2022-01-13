import { StyledInfoContent } from "./styled";
import { AnimatePresence } from "framer-motion";

export const InfoContent = ({ model, description, selectedModel }: any) => {
  return (
    <AnimatePresence exitBeforeEnter>
      <StyledInfoContent
        key={selectedModel ? selectedModel.model : "empty"}
        initial="imageInitial"
        animate="imageAnimate"
        exit="imageExit"
        variants={{
          imageInitial: {
            opacity: 0,
          },
          imageAnimate: {
            opacity: 1,
            transition: {
              type: "circIn",
              duration: 1.2,
            },
          },
          imageExit: {
            opacity: 0,
            transition: {
              type: "circOut",
              duration: 0.8,
            },
          },
        }}
      >
        {selectedModel ? (
          <>
            <h1 className="model">{model}</h1>
            <p className="description">{description}</p>
          </>
        ) : (
          ""
        )}
      </StyledInfoContent>
    </AnimatePresence>
  );
};
