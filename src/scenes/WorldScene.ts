import Phaser from "phaser";

import { Player } from "../entities/Player";
import { ASSET_PATHS } from "../lib/assetPaths";
import {
  PLAYER_FRAME_HEIGHT,
  PLAYER_FRAME_WIDTH,
  TILE_SIZE,
  WORLD_HEIGHT_TILES,
  WORLD_PIXEL_HEIGHT,
  WORLD_PIXEL_WIDTH,
  WORLD_WIDTH_TILES,
} from "../lib/constants";

const SCENE_KEY = "WorldScene";

export class WorldScene extends Phaser.Scene {
  static readonly KEY = SCENE_KEY;

  private player!: Player;
  private cursors!: Phaser.Types.Input.Keyboard.CursorKeys;

  constructor() {
    super(SCENE_KEY);
  }

  preload(): void {
    this.load.image("tile-land", ASSET_PATHS.tiles.land);
    this.load.image("tile-water", ASSET_PATHS.tiles.water);
    this.load.image("object-tree", ASSET_PATHS.objects.tree);
    this.load.spritesheet(
      "player-pack",
      ASSET_PATHS.packs.modernCharacterIdle,
      {
        frameWidth: PLAYER_FRAME_WIDTH,
        frameHeight: PLAYER_FRAME_HEIGHT,
      },
    );
  }

  create(): void {
    this.physics.world.setBounds(0, 0, WORLD_PIXEL_WIDTH, WORLD_PIXEL_HEIGHT);
    this.cameras.main.setBounds(0, 0, WORLD_PIXEL_WIDTH, WORLD_PIXEL_HEIGHT);
    this.cameras.main.setBackgroundColor("#8fc28a");

    const waterColliders = this.physics.add.staticGroup();
    const treeColliders = this.physics.add.staticGroup();

    this.renderGroundAndWater(waterColliders);
    this.renderTrees(treeColliders);

    this.player = new Player(
      this,
      TILE_SIZE * 6,
      TILE_SIZE * 6,
      "player-pack",
      0,
    );
    this.player.setSize(18, 16).setOffset(7, 16);

    this.physics.add.collider(this.player, waterColliders);
    this.physics.add.collider(this.player, treeColliders);

    this.cameras.main.startFollow(this.player, true, 0.1, 0.1);
    this.cameras.main.setZoom(1.8);

    this.cursors = this.input.keyboard!.createCursorKeys();
  }

  update(): void {
    this.player.update(this.cursors);
  }

  private renderGroundAndWater(
    waterColliders: Phaser.Physics.Arcade.StaticGroup,
  ): void {
    for (let y = 0; y < WORLD_HEIGHT_TILES; y += 1) {
      for (let x = 0; x < WORLD_WIDTH_TILES; x += 1) {
        const tileCenterX = x * TILE_SIZE + TILE_SIZE / 2;
        const tileCenterY = y * TILE_SIZE + TILE_SIZE / 2;
        const isWaterTile = this.isWaterTile(x, y);

        this.add
          .image(
            tileCenterX,
            tileCenterY,
            isWaterTile ? "tile-water" : "tile-land",
          )
          .setDisplaySize(TILE_SIZE, TILE_SIZE);

        if (isWaterTile) {
          const blocker = waterColliders.create(
            tileCenterX,
            tileCenterY,
            "tile-water",
          );
          blocker.setVisible(false);
          blocker.setSize(TILE_SIZE, TILE_SIZE);
          blocker.refreshBody();
        }
      }
    }
  }

  private renderTrees(treeColliders: Phaser.Physics.Arcade.StaticGroup): void {
    const treeCoordinates: Array<[number, number]> = [
      [8, 8],
      [9, 8],
      [10, 8],
      [21, 14],
      [22, 14],
      [23, 14],
      [28, 9],
      [30, 10],
      [13, 16],
      [14, 17],
    ];

    treeCoordinates.forEach(([tileX, tileY]) => {
      const worldX = tileX * TILE_SIZE + TILE_SIZE / 2;
      const worldY = tileY * TILE_SIZE + TILE_SIZE / 2;

      this.add
        .image(worldX, worldY - 8, "object-tree")
        .setDepth(2)
        .setScale(0.5);
      const treeBody = treeColliders.create(worldX, worldY + 6, "object-tree");

      treeBody.setVisible(false);
      treeBody.setSize(20, 14);
      treeBody.refreshBody();
    });
  }

  private isWaterTile(x: number, y: number): boolean {
    const border =
      x === 0 ||
      y === 0 ||
      x === WORLD_WIDTH_TILES - 1 ||
      y === WORLD_HEIGHT_TILES - 1;

    const pondA = x >= 4 && x <= 10 && y >= 12 && y <= 16;
    const pondB = x >= 24 && x <= 31 && y >= 4 && y <= 8;

    return border || pondA || pondB;
  }
}
