import { useFrame } from "@react-three/fiber";
import { useContext, useEffect, useRef } from "react";
import {
  InteractableType,
  QuestContext,
} from "../../../gl/logistics/quest/QuestProviderGL/QuestProviderGL";
import { InputContext } from "../../services/input/InputProvider";

export const useInteractive = (type: InteractableType, id?: string) => {
  const ctx = useContext(QuestContext);
  const { interact } = useContext(InputContext).inputs;
  const canInteract = useRef(false);
  const isInteracting = useRef(false);

  const onEnterInteract = (e: any) => {
    canInteract.current = true;
  };

  const onLeaveInteract = (e: any) => {
    canInteract.current = false;
  };

  useEffect(() => {
    if (!id) return;
    ctx.addInteractive(id, type);
  }, [id]);

  useFrame(() => {
    if (!canInteract.current || !id) return;

    if (interact && !isInteracting.current) {
      ctx.onInteract(id, () => {
        isInteracting.current = false;
        console.log("I have closed the chest");
      });

      isInteracting.current = true;
    }
  });

  return {
    onEnterInteract,
    onLeaveInteract,
  };
};
