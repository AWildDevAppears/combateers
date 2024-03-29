import { useCallback, useEffect, useRef, useState } from "react";

export interface IInputs {
  forward: boolean;
  backward: boolean;
  left: boolean;
  right: boolean;
  interact: boolean;
  negative: boolean;
  developer: false;
}

export const InputMap = {
  w: "forward",
  s: "backward",
  a: "left",
  d: "right",
  e: "interact",
  escape: "negative",
  l: "developer",

  // XINPUT
  XINPUT_UP: "forward",
  XINPUT_DOWN: "backward",
  XINPUT_LEFT: "left",
  XINPUT_RIGHT: "right",

  // CONTROLLER AXES
  CONTROLLER_L_LEFT: "left",
  CONTROLLER_L_RIGHT: "right",
  CONTROLLER_L_UP: "forward",
  CONTROLLER_L_DOWN: "backward",
};

const XINPUT = "xinput";
const INPUT_XINPUT = [
  "XINPUT_A",
  "XINPUT_B",
  "XINPUT_X",
  "XINPUT_Y",

  "XINPUT_LB",
  "XINPUT_RB",
  "XINPUT_LT",
  "XINPUT_RT",

  "XINPUT_SELECT",
  "XINPUT_START",

  "XINPUT_L3",
  "XINPUT_R3",

  "XINPUT_UP",
  "XINPUT_DOWN",
  "XINPUT_LEFT",
  "XINPUT_RIGHT",
];

const INPUT_AXES = [
  "CONTROLLER_LY",
  "CONTROLLER_LX",
  "CONTROLLER_RX",
  "CONTROLLER_RY",
];

type eventFunc = (evt: KeyboardEvent) => void;

interface IInputEventState {
  downEvents: { [key: string]: eventFunc };
  upEvents: { [key: string]: eventFunc };
}

const state: IInputEventState = {
  downEvents: {},
  upEvents: {},
};

// DEFUNCT
export const useInput = () => {
  const [inputs, setInputs] = useState<IInputs>({
    forward: false,
    backward: false,
    left: false,
    right: false,
    interact: false,
    negative: false,
    developer: false,
  });

  // const gamepad = useRef<Gamepad>();

  // const updateStatus = useCallback(() => {
  //   gamepad.current?.buttons.forEach((button, idx) => {
  //     if (gamepad.current?.id === XINPUT) {
  //       const buttonName = INPUT_XINPUT[idx];

  //       if (!Reflect.has(InputMap, buttonName)) {
  //         return;
  //       }

  //       const inputField: RegisteredInputs = InputMap[
  //         buttonName as ValidInputXINPUT
  //       ] as RegisteredInputs;

  //       if (inputs.current[inputField] === button.pressed) return;

  //       inputs.current = {
  //         ...inputs.current,
  //         [inputField]: button.pressed,
  //       };
  //     }
  //   });

  // TODO: Fix this.
  // GAMEPAD CONTROLLER AXES
  // gamepad.current?.axes.forEach((axis, idx) => {
  //   // Get axis direction.
  //   const activeAxis = INPUT_AXES[idx];

  //   // Ig nore right stick
  //   if (idx !== 1 && idx !== 0) return;
  //   if (axis < CONTROLLER_DEAD_ZONE && axis > -CONTROLLER_DEAD_ZONE) return;

  //   const newInputs = {
  //     ...inputs.current,
  //   };

  //   if (idx === 1) {
  //     const axisActive =
  //       axis > CONTROLLER_DEAD_ZONE || axis < CONTROLLER_DEAD_ZONE;
  //     newInputs[axis < 0 ? "forward" : "backward"] = axisActive;
  //   }

  //   if (idx === 0) {
  //     const axisActive =
  //       axis > CONTROLLER_DEAD_ZONE || axis < CONTROLLER_DEAD_ZONE;
  //     newInputs[axis < 0 ? "left" : "right"] = axisActive;
  //   }

  //   let hasChanged = false;
  //   for (let key in newInputs) {
  //     hasChanged =
  //       inputs.current[key as RegisteredInputs] !==
  //       newInputs[key as RegisteredInputs];

  //     if (hasChanged) continue;
  //   }

  //   if (!hasChanged) return;
  //   inputs.current = {
  //     ...newInputs,
  //   };
  // });

  // requestAnimationFrame(updateStatus);
  // }, []);

  // useEffect(() => {
  // window.addEventListener("keydown", keyDownListener);
  // window.addEventListener("keyup", keyUpListener);

  // GAMEPAD
  // const gamePadConnectListener = (evt: GamepadEvent) => {
  //   gamepad.current = evt.gamepad;

  //   requestAnimationFrame(updateStatus);
  // };
  // window.addEventListener("gamepadconnected", gamePadConnectListener);

  // const gamePadDisconnectListener = (evt: GamepadEvent) => {
  //   if (!gamepad.current) return;

  //   if (gamepad.current?.index === evt.gamepad.index) {
  //     gamepad.current = undefined;
  //   }
  // };
  // window.addEventListener("gamepaddisconnected", gamePadDisconnectListener);

  // return () => {
  // TODO: Ensure there is only ever one keypress event listener.
  // window.removeEventListener("gamepadconnected", gamePadConnectListener);
  // window.removeEventListener(
  //   "gamepaddisconnected",
  //   gamePadDisconnectListener
  // );
  //   };
  // }, []);

  return inputs;
};
