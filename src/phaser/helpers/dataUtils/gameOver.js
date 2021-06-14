export default function gameOver(player, thisScene) {
  //thisScene.game.sound.stopAll();

  // Reset sample locations in all scenes
  
  // Change this to player game data for highscores!
  // For now we are resetting the data for replays
  const data = {
    comingFrom: "GameOver",  
    health: player.gameData.health,
    inventory: player.gameData.inventory,
    sampleLocations: {
      "Dungeon": null,
      "Town": null,
      "Forest": null
    },
    kills: player.gameData.kills
  };

  // cut to GameOver Scene here instead of startMenu?
  thisScene.scene.start("GameOver", data); 
  thisScene.scene.stop(thisScene);
  thisScene.scene.stop("GameUI");
  thisScene.scene.stop("Timer");
}