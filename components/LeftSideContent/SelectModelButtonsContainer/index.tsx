import { StyledSelectModelButtonsContainer } from "./styled";

export const SelectModelButtonsContainer = ({
  modelData,
  setModel,
  setOrderForm,
}: any) => {
  const switchModel = (event: any) => {
    const currentElement = document.getElementById(event.target.id);
    const previousElement = document.getElementsByClassName("selected");

    if (previousElement[0] === undefined) {
      currentElement?.classList.add("selected");
    } else if (previousElement[0].classList.contains("selected")) {
      previousElement[0].classList.remove("selected");
      currentElement?.classList.add("selected");
    } else {
      currentElement?.classList.add("selected");
    }

    setModel(
      (currentModel: any) => (currentModel = modelData[event.target.id])
    );
    setOrderForm((current: boolean) => (current = false));
  };

  return (
    <StyledSelectModelButtonsContainer>
      {Object.keys(modelData).map((e, i) => (
        <div key={i}>
          <button id={Object.keys(modelData)[i]} onClick={switchModel}>
            {modelData[e].model}
          </button>
        </div>
      ))}
    </StyledSelectModelButtonsContainer>
  );
};
