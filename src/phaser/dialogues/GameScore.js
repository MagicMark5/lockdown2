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

    const {samples, kills, score} = calculateScore(data); 

    // playerScore template string columns are separated by tabs
    const playerScore = `\n
    SAMPLES:  ${samples}/36
    KILLS:    ${kills}
    SCORE:    ${score}\n
    Log in or register for free to save your score!`
    
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
        
        this.add
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

      }
    });

    this.add.image(this.game.renderer.width /2, this.game.renderer.height / 1.5 + 100, "spacebar").setDepth(1)

    this.input.keyboard.once('keyup-SPACE', function () {    
          sceneEvents.emit('reset-score');  
          this.scene.start('startMenu', data);
      }, this);
  
  }
}


