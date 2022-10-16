interface ITile {
  name: string;
}

/**
 * Tile format:
 *
 * XX:Y
 *
 * XX Tile ID
 * Y : rotation
 *
 * TODO: support objects and enemies on tile.
 */

export const Tiles: { [key: string]: ITile } = {};
