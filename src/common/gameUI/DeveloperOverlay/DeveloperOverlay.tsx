import React, { FunctionComponent, useEffect, useRef, useState } from "react";
import { useInput } from "../../hooks/useInput";

import style from "./DeveloperOverlay.module.css";

interface IDeveloperOverlayProps {}

export const DeveloperOverlay: FunctionComponent<
  IDeveloperOverlayProps
> = () => {
  const [isDeveloperMode, setDeveloperMode] = useState(false);
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
    <div className={style.base}>
      {isDeveloperMode && <h1>I am the developer mode</h1>}
    </div>
  );
};
