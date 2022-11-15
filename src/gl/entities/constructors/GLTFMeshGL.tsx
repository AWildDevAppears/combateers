import { useGLTF } from "@react-three/drei";
import React, { ReactNode, useMemo } from "react";
import { Group, Mesh } from "three";

interface IGLTFMeshGLProps {
  meshName: string;
  children?: ReactNode;
}

export const GLTFMeshGL = React.forwardRef<Group, IGLTFMeshGLProps>(
  ({ meshName, children }, mesh) => {
    const { nodes, materials } = useGLTF(`/meshes/${meshName}.glb`);
    const currentNodes = useMemo(() => Object.values(nodes), [nodes]);

    return (
      <group ref={mesh} position={[0, 0, 0]}>
        {currentNodes &&
          currentNodes.map((node, idx) => (
            <mesh key={idx} scale={1} geometry={(node as Mesh).geometry} />
          ))}
        {children}
      </group>
    );
  }
);
