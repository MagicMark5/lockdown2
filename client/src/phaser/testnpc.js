import { Math, Physics, Time, Scene, GameObjects, Tile } from "phaser";

const UP = 0
const DOWN = 1
const LEFT = 2
const RIGHT = 3

const randomDirection = (exclude = this.private_direction) => {
  let newDirection = Math.Between(0,3)
  while (newDirection === exclude)
  {
    newDirection = Math.Between(0,3)
  }
  return newDirection
}


export default class testnpc extends Physics.Arcade.Sprite
{
  private_direction = DOWN
  private_moveEvent = Time.TimerEvent
  
  constructor(scene = Scene, x = number, y = number, textureKey = string, frame = string || number)
  {
    super(scene, x, y, textureKey, frame)

    scene.physics.world.on(Physics.Arcade.Events.TILE_COLLIDE, this.private_handleTileCollision, this, this.player)

    this.private_moveEvent = scene.time.addEvent({
      delay: 2000,
      callback: () => {
        
      },
      loop: true
    })
    
  }
  private_handleTileCollision(go = GameObjects.GameObject, tile = Tile, player = this.player) {
    if (go !== this || this.player) {
      return
    }


    this.private_direction = randomDirection(this.private_direction)

  }

  preUpdate(t = number, dt = number)
  {
    super.preUpdate(t,dt)
    
    const speed = 50

    switch (this.private_direction) {
      case UP:
        this.setVelocity(0, -speed) && this.anims.play("back1", this) 
        break

      case DOWN:
        this.setVelocity(0, speed) && this.anims.play("walk1", this)
        break

      case LEFT:
        this.setVelocity(-speed, 0) && this.anims.play("left1", this)
        break

      case RIGHT:
        this.setVelocity(speed, 0) && this.anims.play("right1", this)
        break
    }
  }


}