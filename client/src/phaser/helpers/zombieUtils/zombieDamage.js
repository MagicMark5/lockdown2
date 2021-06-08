import { Events } from "phaser";
const sceneEvents = new Events.EventEmitter();

export default function zombieDamage(zombie, shot, scene, player, bossRoom) {
  if (zombie.zombieData.health === 0) {
    zombie.setVisible(false);
    zombie.body.enable = false; 
    // Increment kill count and emit event
    player.gameData.kills += 1;
    sceneEvents.emit('zombie-killed', player.gameData.kills);
    // Keep track of kills in bossRoom for conditional chest render
    if (bossRoom) {
      const { key, scene, map, tileset, player } = bossRoom;
      killZombie(zombie, scene, map, tileset, player, key);
    }
  } else {
    zombie.tint = Math.random() * 0xffffff;
    zombie.zombieData.health -= 1;
    const directionX = zombie.x - shot.x;
    const directionY = zombie.y - shot.y;
    const direction = new Phaser.Math.Vector2(directionX, directionY).normalize().scale(200);
    zombie.bounceBack(direction);
  }
};

const killZombie = (zombie, scene, map, tileset, player, key) => {
  // Remove zombie from scene zombies array
  const zombieIndex = scene.zombies.indexOf(zombie); 
  scene.zombies.splice(zombieIndex, 1); 

  if (key === "FinalBoss") {
    if (scene.zombies.length === 0) {
      console.log("YOU WIN!");
      renderChest(scene, map, tileset, player);
    }
  }
};

const renderChest = (scene, map, tileset, player) => {
  const chest = map.createLayer("Chest", tileset, 0, 0);
  chest.setCollisionBetween(0, 500);
  scene.physics.add.collider(chest, player, (player, tile) => { 
    getAntidote(scene);
  });
}

const getAntidote = (scene) => {
  console.log("YOU GOT THE ANTIDOTE");
  // Transition to Game Over "You Won" Scene
  scene.scene.start("Winning");
  scene.scene.stop("FinalBoss");
};