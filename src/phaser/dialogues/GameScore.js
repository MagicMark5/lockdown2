import sceneEvents from '../utils/SceneEvents';


/* ------------------------------------ GameScore Scene  ------------------------ */
// Shows the player their game session score & game statistics 
// Gives option for user to register to save their score into db (if not logged in)
// or Score is automatically saved to db (if logged in)
// After score is saved in either case Navigation: 
// --> Show highscores (React component side panel)
// --> Play Again
// --> Start Menu (for options)
const debug = false;

const highScores = `\n
\n
USERNAME    SAMPLES     KILLS     SCORE 
Mario       36          12        12000 
Luigi       24          10        10000 \n
You did it! Humanity is saved!`

const textStyle = {
  fontSize: 32,
  lineSpacing: 0,
  fontFamily: "VT323",
  color: "WHITE",
};
 
export default class GameScore extends Phaser.Scene {
  constructor() {
    super("GameScore");
  }
    preload() {
      this.load.script('webfont', 'https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js');
    }

    create(data) {
    
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

        add.text(32, 32, highScores, textStyle).setAlpha(0.25).setVisible(debug);

        const text = add.text(32, 32, highScores, textStyle);

        const {
          lineHeight,
          lineSpacing,
          lineWidths
        } = Phaser.GameObjects.GetTextSize(
          text,
          text.getTextMetrics(),
          highScores.split("\n")
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


