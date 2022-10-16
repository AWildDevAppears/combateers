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

/**
 * xxx
 * xxx
 * xxx
 *
 * |xx
 * |xx
 * |xx
 *
 * |--
 * |xx
 * |xx
 *
 * --|
 * xx|
 * xx|
 *
 * |-|
 * |*|
 * |*|
 *
 *
 */

export const Tiles: { [key: string]: ITile } = {};
