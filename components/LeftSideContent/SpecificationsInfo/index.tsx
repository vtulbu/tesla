import { StyledSpecificationsInfo } from "./styled";
import { Speedometer } from "../../SvgComponents";
import { animate } from "framer-motion";
import { useEffect, useRef } from "react";

export const SpecificationsInfo = ({ specifications }: any) => {
  function Counter({ from, to, float }: any) {
    const nodeRef = useRef();

    useEffect(() => {
      const node = nodeRef.current;

      const controls = animate(from, to, {
        duration: 2,
        type: "tween",
        onUpdate(value) {
          node.textContent = value.toFixed(float);
        },
      });

      return () => controls.stop();
    }, [from, to, float]);

    return <h4 ref={nodeRef} />;
  }

  return (
    <StyledSpecificationsInfo>
      <div className="speedInfo infoCont">
        <div className="time">
          <Speedometer />
          <Counter from={0} to={specifications.acceleration} float={1} />
        </div>
        <p>0-60 mph*</p>
      </div>
      <div className="infoCont">
        <h4>{specifications.distance}</h4>
        <p>Range (EPA est.)</p>
      </div>
      <div className="infoCont">
        {specifications.typeOfEngine ? (
          <>
            <h4>{specifications.typeOfEngine}</h4>
            <p>Dual Motor</p>
          </>
        ) : (
          <>
            <h4>{specifications.peakPower}</h4>
            <p>Peak Power</p>
          </>
        )}
      </div>
    </StyledSpecificationsInfo>
  );
};
