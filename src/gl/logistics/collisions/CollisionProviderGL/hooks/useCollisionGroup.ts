import { MutableRefObject, useContext, useEffect, useRef } from "react";
import { CollisionContext } from "../CollisionProviderGL";

export const useCollisionGroup = (
  collisionGroup: string,
  mesh: MutableRefObject<THREE.Mesh | null>
) => {
  const ctx = useContext(CollisionContext);
  useEffect(() => {
    if (!mesh.current) return;
    ctx.addToGroup(collisionGroup, mesh.current);
  }, [mesh.current]);
};
