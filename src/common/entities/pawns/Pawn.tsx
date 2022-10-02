import React, { FunctionComponent, useRef } from "react";

interface IPawnProps {}

export const Pawn: FunctionComponent<IPawnProps> = () => {
  const mesh = useRef(null);
  return (
    <mesh ref={mesh} scale={1}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={"hotpink"} />
    </mesh>
  );
};
