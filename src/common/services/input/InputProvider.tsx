import React, {
  FunctionComponent,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { Euler, Mesh } from "three";
import { useKeyboard } from "./hooks/useKeyboard";
import { useMouse } from "./hooks/useMouse";

export interface IInputs {
  forward: number;
  backward: number;
  left: number;
  right: number;
  interact: number;
  negative: number;
  developer: number;

  // Character rotation
  rotation: Euler;
}

export type RegisteredInputs =
  | "forward"
  | "backward"
  | "left"
  | "right"
  | "interact"
  | "negative";

interface IInputContext {
  inputs: IInputs;
  currentMesh?: Mesh;
}

const defaultInputs: IInputs = {
  // Movement
  forward: 0,
  backward: 0,
  left: 0,
  right: 0,

  // Interaction
  interact: 0,
  negative: 0,
  developer: 0,

  // Rotation
  rotation: new Euler(),
};

export const InputContext = React.createContext<IInputContext>({
  inputs: defaultInputs,
});

interface IInputProviderProps {
  children: ReactNode;
}

export const InputProvider: FunctionComponent<IInputProviderProps> = ({
  children,
}) => {
  const attachToMesh = useCallback((currentMesh: Mesh) => {
    setValue((val) => ({
      ...val,
      currentMesh,
    }));
  }, []);

  const [value, setValue] = useState<IInputContext>({
    inputs: defaultInputs,
  });

  const keyboardInputs = useKeyboard();
  const mouseLocation = useMouse();

  useEffect(() => {
    setValue((state) => ({
      ...state,
      inputs: {
        ...keyboardInputs,
        rotation: mouseLocation,
      },
    }));
  }, [keyboardInputs, mouseLocation]);

  return (
    <InputContext.Provider value={value}>{children}</InputContext.Provider>
  );
};
