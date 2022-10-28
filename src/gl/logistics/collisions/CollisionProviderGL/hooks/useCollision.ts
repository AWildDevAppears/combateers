import { useFrame } from "@react-three/fiber";
import { useContext } from "react";
import { Raycaster, Vector3 } from "three";
import { CollisionContext } from "../CollisionProviderGL";

export interface ICollisionMap {
  collU: boolean;
  collD: boolean;
  collR: boolean;
  collL: boolean;
}

export const useCollision = (
  collisionGroup: string,
  mesh?: THREE.Mesh,
  onCollide?: (collisions: ICollisionMap) => void
) => {
  const ctx = useContext(CollisionContext);
  useFrame(() => {
    if (!mesh) return;
    const origin = mesh.position.clone();
    const pos = mesh.geometry.attributes.position;
    const vector = new Vector3();

    const len = pos.count;
    for (let i = 0; i < len; i++) {
      vector.fromBufferAttribute(pos, i);
      var localVertex = vector.clone();
      var globalVertex = localVertex.applyMatrix4(mesh.matrix);
      var directionVector = globalVertex.sub(mesh.position);
      var raycast = new Raycaster(origin, directionVector.clone().normalize());
      let collisions = raycast.intersectObjects(
        Object.values(ctx.collisionGroups[collisionGroup])
      );
      if (
        collisions.length > 0 &&
        collisions[0].distance < directionVector.length()
      ) {
        // TODO: Handle all collisions
        onCollide &&
          onCollide({
            collU: collisions[0].point.z >= 2,
            collD: collisions[0].point.z < 0,
            collR: collisions[0].point.x < 0,
            collL: collisions[0].point.x >= 2,
          });
        break;
      }
    }
  });
};
