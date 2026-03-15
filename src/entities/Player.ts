import Phaser from "phaser";

import { PLAYER_SPEED } from "../lib/constants";

type MovementKeys = {
  up: Phaser.Input.Keyboard.Key;
  down: Phaser.Input.Keyboard.Key;
  left: Phaser.Input.Keyboard.Key;
  right: Phaser.Input.Keyboard.Key;
};

export class Player extends Phaser.Physics.Arcade.Sprite {
  private readonly movementKeys: MovementKeys;

  constructor(
    scene: Phaser.Scene,
    x: number,
    y: number,
    texture: string,
    frame?: string | number,
  ) {
    super(scene, x, y, texture, frame);

    scene.add.existing(this);
    scene.physics.add.existing(this);

    this.setCollideWorldBounds(true);

    this.movementKeys = scene.input.keyboard!.addKeys({
      up: Phaser.Input.Keyboard.KeyCodes.W,
      down: Phaser.Input.Keyboard.KeyCodes.S,
      left: Phaser.Input.Keyboard.KeyCodes.A,
      right: Phaser.Input.Keyboard.KeyCodes.D,
    }) as MovementKeys;
  }

  update(cursors: Phaser.Types.Input.Keyboard.CursorKeys): void {
    let velocityX = 0;
    let velocityY = 0;

    const up = cursors.up.isDown || this.movementKeys.up.isDown;
    const down = cursors.down.isDown || this.movementKeys.down.isDown;
    const left = cursors.left.isDown || this.movementKeys.left.isDown;
    const right = cursors.right.isDown || this.movementKeys.right.isDown;

    if (left) velocityX = -1;
    else if (right) velocityX = 1;

    if (up) velocityY = -1;
    else if (down) velocityY = 1;

    const velocity = new Phaser.Math.Vector2(velocityX, velocityY)
      .normalize()
      .scale(PLAYER_SPEED);
    this.setVelocity(velocity.x, velocity.y);
  }
}
