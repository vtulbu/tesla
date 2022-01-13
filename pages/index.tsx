import type { NextPage } from "next";
import { StyledBackground } from "../components/Background/styled";
import { Card } from "../components/Card/index";
import { LeftSideContent } from "../components/LeftSideContent";
import { RightSideContent } from "../components/RightSideContent";
import { useState } from "react";
import ModelData from "../public/ModelData.json";

const Home: NextPage = () => {
  const [switcher, setModel] = useState(ModelData["CyberTruck"]);

  return (
    <StyledBackground>
      <Card>
        <LeftSideContent
          model={switcher.model}
          description={switcher.description}
          specifications={switcher.specifications}
          modelData={ModelData}
          setModel={setModel}
          selectedModel={switcher}
        />
        <RightSideContent
          image={switcher.img.source}
          selectedModel={switcher}
          shadowProp={switcher.img.shadowProp}
        />
      </Card>
    </StyledBackground>
  );
};

export default Home;
