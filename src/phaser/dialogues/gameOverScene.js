import sceneEvents from "../utils/SceneEvents";

/* ------------------------------------ GameOver Scene  ------------------------ */

// takes you to GameScore Scene after hitting SPACEBAR

export default class GameOver extends Phaser.Scene {
  constructor() {
    super("GameOver");
  }

    create(data) {
    
    // camera transition effect
    this.cameras.main.fadeIn(5000);

    // Render bloody "GAME OVER" image
    this.add.image(this.game.renderer.width /2, this.game.renderer.height * 0.30, "game_over").setDepth(1)

    this.add.image(0,0, "title_bg").setOrigin(0).setDepth(0)

    // Render "Press SPACEBAR to continue..."
    this.add.image(this.game.renderer.width /2, this.game.renderer.height / 1.5 + 100, "spacebar").setDepth(1)

    // one-time Listener for SPACEBAR 
    this.input.keyboard.once('keyup-SPACE', function () {   
      // Transition to GameScore 
      this.scene.start('GameScore', data);
    }, this);

  
  }
};


