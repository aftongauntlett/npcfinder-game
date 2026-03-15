import Phaser from "phaser";

import { WorldScene } from "./scenes/WorldScene";
import { WORLD_PIXEL_HEIGHT, WORLD_PIXEL_WIDTH } from "./lib/constants";

const gameConfig: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  parent: "app",
  width: WORLD_PIXEL_WIDTH,
  height: WORLD_PIXEL_HEIGHT,
  backgroundColor: "#8fc28a",
  pixelArt: true,
  physics: {
    default: "arcade",
    arcade: {
      debug: false,
    },
  },
  scene: [WorldScene],
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
};

new Phaser.Game(gameConfig);
