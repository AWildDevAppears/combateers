import React, {
  createContext,
  FunctionComponent,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";
import { useInput } from "../../hooks/useInput";

import style from "./DeveloperOverlay.module.css";

interface IDeveloperOverlayProps {
  children?: ReactNode;
}

export const DeveloperMode = createContext({
  isDeveloperMode: false,
});

export const DeveloperOverlay: FunctionComponent<IDeveloperOverlayProps> = ({
  children,
}) => {
  const [isDeveloperMode, setDeveloperMode] = useState(true);
  const isToggling = useRef(false);

  const { developer } = useInput();

  useEffect(() => {
    if (!developer && !isToggling.current) return;

    if (developer && !isToggling.current) {
      setDeveloperMode((mode) => !mode);
      isToggling.current = true;
      return;
    }
    if (isToggling) {
      isToggling.current = false;
    }
  }, [developer]);
  return (
    <>
      <div className={style.base}>
        {isDeveloperMode && <h1>I am the developer mode</h1>}
      </div>
      <DeveloperMode.Provider
        value={{
          isDeveloperMode,
        }}
      >
        {children}
      </DeveloperMode.Provider>
    </>
  );
};
