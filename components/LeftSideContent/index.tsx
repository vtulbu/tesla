import { StyledLeftSideContent } from "./styled";
import { InfoContent } from "./InfoContent";
import { SpecificationsInfo } from "./SpecificationsInfo";
import { SelectModelButtonsContainer } from "./SelectModelButtonsContainer";
import { OrderInfoButtons } from "./Order&InfoButtons";
import { Icosahedron } from "../SvgComponents";
import { FormOrder } from "./FormOrder";
import { useState } from "react";

export const LeftSideContent = ({
  model,
  modelData,
  description,
  specifications,
  setModel,
  selectedModel,
}: any) => {
  const [currentStat, setOrderForm] = useState(false);
  return currentStat === true ? (
    <StyledLeftSideContent>
      <FormOrder model={model} />
      <SelectModelButtonsContainer
        modelData={modelData}
        setModel={setModel}
        setOrderForm={setOrderForm}
      />
    </StyledLeftSideContent>
  ) : (
    <StyledLeftSideContent>
      <Icosahedron />
      <InfoContent
        model={model}
        description={description}
        selectedModel={selectedModel}
      ></InfoContent>
      <SpecificationsInfo specifications={specifications}></SpecificationsInfo>
      <OrderInfoButtons setOrderForm={setOrderForm}></OrderInfoButtons>
      <SelectModelButtonsContainer
        modelData={modelData}
        setModel={setModel}
        setOrderForm={setOrderForm}
      />
    </StyledLeftSideContent>
  );
};
