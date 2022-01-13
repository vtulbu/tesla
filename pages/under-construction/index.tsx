import type { NextPage } from "next";
import Link from "next/link";
import Typical from "react-typical";
import { StyledBackground } from "../../components/Background/styled";
import { Card } from "../../components/Card";
import * as S from "./styled";

const underConstructionPage: NextPage = () => {
  let construction = "construction";

  return (
    <StyledBackground>
      <Card>
        <S.UnderConstructionBox>
          <Typical
            steps={["U", 0, "Under construction.", 3500]}
            loop={Infinity}
            wrapper="p"
          />
        </S.UnderConstructionBox>
        <S.LinkBack>
          <Link href="/">BACK HOME</Link>
        </S.LinkBack>
      </Card>
    </StyledBackground>
  );
};

export default underConstructionPage;
