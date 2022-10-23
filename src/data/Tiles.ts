import { FunctionComponent, ReactNode } from "react";

// TODO: consider lazy loading these.
import { DoorTile10GL } from "../gl/entities/actors/tiles/doors/DoorTile10GL";
import { DoorTile11GL } from "../gl/entities/actors/tiles/doors/DoorTile11GL";
import { DoorTile12GL } from "../gl/entities/actors/tiles/doors/DoorTile12GL";
import { DoorTile13GL } from "../gl/entities/actors/tiles/doors/DoorTile13GL";
import { DoorTile14GL } from "../gl/entities/actors/tiles/doors/DoorTile14GL";
import { DoorTile15GL } from "../gl/entities/actors/tiles/doors/DoorTile15GL";
import { DoorTile16GL } from "../gl/entities/actors/tiles/doors/DoorTile16GL";
import { DoorTile1GL } from "../gl/entities/actors/tiles/doors/DoorTile1GL";
import { DoorTile2GL } from "../gl/entities/actors/tiles/doors/DoorTile2GL";
import { DoorTile3GL } from "../gl/entities/actors/tiles/doors/DoorTile3GL";
import { DoorTile4GL } from "../gl/entities/actors/tiles/doors/DoorTile4GL";
import { DoorTile5GL } from "../gl/entities/actors/tiles/doors/DoorTile5GL";
import { DoorTile6GL } from "../gl/entities/actors/tiles/doors/DoorTile6GL";
import { DoorTile7GL } from "../gl/entities/actors/tiles/doors/DoorTile7GL";
import { DoorTile8GL } from "../gl/entities/actors/tiles/doors/DoorTile8GL";
import { DoorTile9GL } from "../gl/entities/actors/tiles/doors/DoorTile9GL";
import { FloorTileGL } from "../gl/entities/actors/tiles/FloorTileGL";
import { WallTile1GL } from "../gl/entities/actors/tiles/walls/WallTile1GL";
import { WallTile2GL } from "../gl/entities/actors/tiles/walls/WallTile2GL";
import { WallTile3GL } from "../gl/entities/actors/tiles/walls/WallTile3GL";
import { WallTile4GL } from "../gl/entities/actors/tiles/walls/WallTile4GL";

export interface ITileProps {
  position: [number, number, number];
  rotateY: number;
  children?: ReactNode;
}

interface IPosition {
  [key: string]: number;
}

export const RotationPositions: IPosition = {
  P1: 0,
  P2: Math.PI / 2,
  P3: Math.PI,
  P4: Math.PI + Math.PI / 2,
};

interface ITileComponent extends FunctionComponent<ITileProps> {}

export const Tiles: { [key: string]: ITileComponent } = {
  // Floor
  F1: FloorTileGL,

  // Walls
  W1: WallTile1GL,
  W2: WallTile2GL,
  W3: WallTile3GL,
  W4: WallTile4GL,

  // Doors
  D1: DoorTile1GL,
  D2: DoorTile2GL,
  D3: DoorTile3GL,
  D4: DoorTile4GL,
  D5: DoorTile5GL,
  D6: DoorTile6GL,
  D7: DoorTile7GL,
  D8: DoorTile8GL,
  D9: DoorTile9GL,
  D10: DoorTile10GL,
  D11: DoorTile11GL,
  D12: DoorTile12GL,
  D13: DoorTile13GL,
  D14: DoorTile14GL,
  D15: DoorTile15GL,
  D16: DoorTile16GL,
};
