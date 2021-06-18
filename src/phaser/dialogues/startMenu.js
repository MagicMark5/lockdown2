import sceneEvents from "../utils/SceneEvents";

/* ------------------------------------ Start Menu Scene  ------------------------ */

 
export default class startMenu extends Phaser.Scene {
  constructor() {
    super("startMenu");
  }

    create(data) {
      // set avatar texture key to male as default if not defined
      let avatarTexture = data.avatar || "player-m"; 

      this.cameras.main.fadeIn(5000);

      this.add.image(this.game.renderer.width /2, this.game.renderer.height * 0.20, "logo").setDepth(1)

      this.add.image(0,0, "title_bg").setOrigin(0).setDepth(0)

      let playButton = this.add.image(this.game.renderer.width /2, this.game.renderer.height / 1.5, "play_button").setDepth(1)

      let optionButton = this.add.image(this.game.renderer.width /2, this.game.renderer.height / 1.5 + 100, "options_button").setDepth(1)

      let hoverSprite = this.add.sprite(100,100, avatarTexture)
      hoverSprite.setScale(2)
      hoverSprite.setVisible(false)

      this.anims.create({
        key: "walk-player-m",
        frameRate: 4,
        repeat: -1,
        frames: this.anims.generateFrameNumbers("player-m", {
          frames: [0,1,2]
        }), 
        yoyo: true
      })

      this.anims.create({
        key: "walk-player-f",
        frameRate: 4,
        repeat: -1,
        frames: this.anims.generateFrameNumbers("player-f", {
          frames: [0,1,2]
        }), 
        yoyo: true
      })

      // keeps sound playing even if not in the browser
      //this.sound.pauseOnBlur = false

      //plays the sound
      this.game.sound.stopAll();
      this.sound.play("darkshadow", {
        loop: true
      })

      // Play Button configuration
      playButton.setInteractive();

      playButton.on("pointerover", () => {
        hoverSprite.setVisible(true)
        hoverSprite.play(`walk-${avatarTexture}`)
        hoverSprite.x = playButton.x - playButton.width / 1.5;
        hoverSprite.y = playButton.y;
      })
      playButton.on("pointerout", () => {
        hoverSprite.setVisible(false)
      })

      playButton.on("pointerup", () => {
        this.sound.play("blood")
        data.avatar = avatarTexture; // assign selected avatar
        this.scene.start("Intro", data);
        sceneEvents.emit('reset-score', data);
      })

      //Options Button configuration
      optionButton.setInteractive();

      optionButton.on("pointerover", () => {
        hoverSprite.setVisible(true)
        hoverSprite.play(`walk-${avatarTexture}`)
        hoverSprite.x = optionButton.x - optionButton.width / 1.5;
        hoverSprite.y = optionButton.y;
      })
      optionButton.on("pointerout", () => {
        hoverSprite.setVisible(false)
      })

      optionButton.on("pointerup", () => {
        // opens Options react component
        this.game.sound.mute = !this.game.sound.mute; 
        // give option to change player avatar texture key
        avatarTexture = "player-f";
      })
    }
};

