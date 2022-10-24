import React, { FunctionComponent } from "react";

interface IIdlePlayerGLProps {}

// Stand in for player.
export const IdlePlayerGL: FunctionComponent<IIdlePlayerGLProps> = ({}) => {
  const handleIdle = () => {};

  return (
    <mesh scale={1}>
      <boxGeometry args={[1, 1.8, 1]} />
    </mesh>
  );
};
