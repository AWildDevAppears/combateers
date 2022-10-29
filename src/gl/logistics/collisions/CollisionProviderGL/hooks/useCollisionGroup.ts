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

    // Once the object is gone, stop checking collisions for it.
    return () => {
      if (!mesh.current) return;

      ctx.removeFromGroup(collisionGroup, mesh.current);
    };
  }, [mesh.current]);
};
