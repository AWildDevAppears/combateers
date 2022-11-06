import { useCallback, useEffect, useRef, useState } from "react";
import { InputMap } from "../../../hooks/useInput";
import { IInputs, RegisteredInputs } from "../InputProvider";

type ValidInputKB = "w" | "a" | "s" | "d" | "e" | "esc";

export const useKeyboard = () => {
  const [inputs, setInputs] = useState<IInputs>({
    forward: 0,
    backward: 0,
    left: 0,
    right: 0,
    interact: 0,
    negative: 0,
    developer: 0,
  });

  const keyDownListener = useCallback((evt: KeyboardEvent) => {
    const key: string = evt.key.toLowerCase();

    if (!Reflect.has(InputMap, key)) {
      return;
    }

    const inputField = InputMap[key as ValidInputKB] as RegisteredInputs;

    setInputs((state) => ({
      ...state,
      [inputField]: 1,
    }));
  }, []);

  const keyUpListener = useCallback((evt: KeyboardEvent) => {
    const key: string = evt.key.toLowerCase();

    if (!Reflect.has(InputMap, key)) {
      return;
    }

    const inputField = InputMap[key as ValidInputKB] as RegisteredInputs;

    setInputs((state) => ({
      ...state,
      [inputField]: 0,
    }));
  }, []);

  useEffect(() => {
    window.addEventListener("keydown", keyDownListener);
    window.addEventListener("keyup", keyUpListener);
    return () => {
      window.removeEventListener("keydown", keyDownListener);
      window.removeEventListener("keyup", keyUpListener);
    };
  }, []);

  return inputs;
};
