import { useEffect, useState } from "react";
import { Euler, Mesh } from "three";

export const useMouse = () => {
  const [rotation, setRotation] = useState(new Euler());

  useEffect(() => {
    const _rotation = new Euler(0, 0, 0, "XYZ");
    const pointerSpeed = 0.6;
    const sensitivity = 0.002;

    window.addEventListener("mousemove", (event: MouseEvent) => {
      const movementX = event.movementX || 0;
      const movementY = event.movementY || 0;

      // TODO: This only rotates 90deg left and 90 deg right. We want full rotation.
      _rotation.y -= movementX * sensitivity * pointerSpeed;
      _rotation.x -= movementY * sensitivity * pointerSpeed;

      setRotation(_rotation);
    });
  }, []);

  return rotation;
};
