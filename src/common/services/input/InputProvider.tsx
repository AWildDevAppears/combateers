import React, {
  FunctionComponent,
  ReactNode,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { useKeyboard } from "./hooks/useKeyboard";

export interface IInputs {
  forward: number;
  backward: number;
  left: number;
  right: number;
  interact: number;
  negative: number;
  developer: number;
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
  const [value, setValue] = useState({
    inputs: defaultInputs,
  });

  const keyboardInputs = useKeyboard();

  useEffect(() => {
    setValue((state) => ({
      ...state,
      inputs: keyboardInputs,
    }));
  }, [keyboardInputs]);

  return (
    <InputContext.Provider value={value}>{children}</InputContext.Provider>
  );
};
