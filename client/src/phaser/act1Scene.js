import sceneEvents from './SceneEvents';
import { Scene } from "phaser";
/* ------------------------------------ GameOver Scene  ------------------------ */
 
export default class Act1 extends Scene {
  constructor() {
    super("Act1");
  }

    create(data) {
    
    // camera transition effect
    this.cameras.main.fadeIn(5000);

    this.add.image(this.game.renderer.width /2, this.game.renderer.height * 0.40, "act_1").setDepth(1)

    this.add.image(0,0, "title_bg").setOrigin(0).setDepth(0)

    this.add.image(this.game.renderer.width /2, this.game.renderer.height / 1.75, "complete").setDepth(1)

    this.add.image(this.game.renderer.width /2, this.game.renderer.height / 1.5 + 100, "spacebar").setDepth(1)

    this.input.keyboard.once('keyup-SPACE', function () {    
          sceneEvents.emit('reset-score');  
          this.scene.start('startMenu', data);
      }, this);
  
  }
};


