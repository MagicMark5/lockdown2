import sceneEvents from '../utils/SceneEvents';
import calculateScore from '../helpers/dataUtils/calculateScore';


/* ------------------------------------ GameScore Scene  ------------------------ */
// Shows the player their game session score & game statistics 
// Gives option for user to register to save their score into db (if not logged in)
// or Score is automatically saved to db (if logged in)
// After score is saved in either case Navigation: 
// --> Show playerScore (React component side panel)
// --> Play Again
// --> Start Menu (for options)
 
export default class GameScore extends Phaser.Scene {
  constructor() {
    super("GameScore");
  }
    preload() {
      this.load.script('webfont', 'https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js');
    }

    create(data) {

    const debug = false;

    const {
      health, // health remaining /500
      samples, // total samples collected
      kills, // total zombie kills
      antidote, // whether or not antidote was obtained
      score // final calculated score 
    } = calculateScore(data); 

    // playerScore template string columns are separated by tabs
    const playerScore = `\n
    HEALTH:   ${health}/500
    SAMPLES:  ${samples}/36
    KILLS:    ${kills}
    ANTIDOTE: ${antidote ? `+10000` : `None`}
    SCORE:    ${score}\n
    `
    
    const textStyle = {
      fontSize: 32,
      lineSpacing: 0,
      fontFamily: "VT323",
      color: "WHITE",
    };
    
    // camera transition effect
    this.cameras.main.fadeIn(3000);
    // Set title image in background
    this.add.image(0,0, "title_bg").setOrigin(0).setDepth(0)

    //load fonts
    let add = this.add;

    WebFont.load({
      google: {
          families: [ 'VT323' ]
      },
      active: () => {

        add.text(32, 32, playerScore, textStyle).setAlpha(0.25).setVisible(debug);

        const text = add.text(32, 32, playerScore, textStyle);

        const {
          lineHeight,
          lineSpacing,
          lineWidths
        } = Phaser.GameObjects.GetTextSize(
          text,
          text.getTextMetrics(),
          playerScore.split("\n")
        );

        const totalLineHeight = lineHeight + lineSpacing;
        
        this.add // render text in a grid position
            .grid(
            text.x,
            text.y,
            text.width,
            text.height,
            lineHeight,
            totalLineHeight,
            0,
            0,
            0x00ffff,
            0.2
          )
          .setOrigin(0, 0)
          .setVisible(debug)
      } // end active
    }); // end WebFont.load


    // Plan: Give options to login/register/save highscore or play again without saving, with yes/no buttons
    this.add.image(this.game.renderer.width /2, this.game.renderer.height / 1.75, "try_again").setDepth(1)

    let yesButton = this.add.image(this.game.renderer.width /2, this.game.renderer.height / 1.5 + 30, "yes").setDepth(1)

    let noButton = this.add.image(this.game.renderer.width /2, this.game.renderer.height / 1.5 + 100, "no").setDepth(1)
    
    let hoverSprite2 = this.add.image(100,100, "skull")
    hoverSprite2.setScale(1)
    hoverSprite2.setVisible(false)

    //start music again
    // this.game.sound.stopAll();
    // this.sound.play("darkshadow", {
    //   loop: true
    // })

    // Reset local gameData
    const resetData = {
      comingFrom: "Intro",  
      health: 500,
      kills: 0,
      inventory: [],
      sampleLocations: {
        "Dungeon": null,
        "Town": null,
        "Forest": null
      }
    };

    // takes you to the startMenu scene again, with resetData (with either yes or no)

    yesButton.setInteractive();
    yesButton.on("pointerover", () => {
      hoverSprite2.setVisible(true)
      hoverSprite2.x = yesButton.x - yesButton.width * 1.5;
      hoverSprite2.y = yesButton.y;
    })
    yesButton.on("pointerout", () => {
      hoverSprite2.setVisible(false)
    })
    yesButton.on("pointerup", () => {
      sceneEvents.emit("player-death", data);
      // Reset GameStats component 
      sceneEvents.emit('reset-score'); 
      //this.sound.play("blood")
      this.scene.start("startMenu", resetData);
    })

    noButton.setInteractive();
    noButton.on("pointerover", () => {
      hoverSprite2.setVisible(true)
      hoverSprite2.x = noButton.x - noButton.width * 2.1;
      hoverSprite2.y = noButton.y;
    })
    
    noButton.on("pointerout", () => {
      hoverSprite2.setVisible(false)
    })
    
    noButton.on("pointerup", () => {
      sceneEvents.emit("player-death", data);
      // Reset GameStats component 
      sceneEvents.emit('reset-score');  
      // Return to startMenu with gameData reset
      this.scene.start("startMenu", resetData)
    })


    
  
  }
}


