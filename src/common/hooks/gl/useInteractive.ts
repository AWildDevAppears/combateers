import { useRef } from "react";
import { Mesh } from "three";
import { GROUP_LAYERS } from "../../../gl/logistics/collisions/CollisionProviderGL/CollisionProviderGL";
import { useCollision } from "../../../gl/logistics/collisions/CollisionProviderGL/hooks/useCollision";
import { useInput } from "../useInput";

export const useInteractive = (mesh: Mesh, onInteract: () => void) => {
  const { interact } = useInput();

  useCollision(
    GROUP_LAYERS.PLAYER,
    () => {
      if (interact) {
        onInteract();
      }
    },
    mesh
  );
};
