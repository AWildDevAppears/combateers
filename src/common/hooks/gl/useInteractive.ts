import { useFrame } from "@react-three/fiber";
import { useContext, useRef } from "react";
import { QuestContext } from "../../../gl/logistics/quest/QuestProviderGL/QuestProviderGL";
import { InputContext } from "../../services/input/InputProvider";

export const useInteractive = (id?: string) => {
  const ctx = useContext(QuestContext);
  const { interact } = useContext(InputContext).inputs;
  const canInteract = useRef(false);
  const isInteracting = useRef(false);

  const onEnterInteract = (e: any) => {
    console.log("Enter");
    canInteract.current = true;
  };

  const onLeaveInteract = (e: any) => {
    console.log("Exit");
    canInteract.current = false;
  };

  useFrame(() => {
    if (!canInteract.current || !id) return;

    if (interact && !isInteracting.current) {
      ctx.onInteract(id);
      isInteracting.current = true;
      console.log("I have opened the chest");
      ctx.onInteractFinished(id, () => {
        isInteracting.current = false;
        console.log("I have closed the chest");
      });
    }
  });

  return {
    onEnterInteract,
    onLeaveInteract,
  };
};
