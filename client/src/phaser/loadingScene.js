/* ------------------------------------ Loading Screen Scene  ------------------------ */
import { Scene } from "phaser";
// images
import title_bg from "./../assets/menu-images/title_bg.jpeg";
import game_over from "./../assets/menu-images/gameover.png";
import try_again from "./../assets/menu-images/tryagain.png";
import yes from "./../assets/menu-images/yes.png";
import no from "./../assets/menu-images/no.png";
import skull from "./../assets/menu-images/skull.png";
import options_button from "./../assets/menu-images/menuoptions.png";
import play_button from "./../assets/menu-images/menuplay.png";
import logo from "./../assets/menu-images/menuname.png";
import player from "./../assets/characters/players/player.png";
import act_1 from "./../assets/menu-images/act1.png";
import complete from "./../assets/menu-images/complete.png";
import spacebar from "./../assets/menu-images/spacebar.png";
import forestportal from "./../assets/menu-images/forestportal.png";

// sounds
// import darkshadow from "./../assets/sounds/darkshadows.mp3";
// import blood from "./../assets/sounds/bloodshed.mp3";


export default class loadingScene extends Scene {
    constructor() {
        super("loadingScene");
    }

    preload()
    {
        //Loading the Assets for the GameOver
        this.load.image("title_bg", title_bg);

        this.load.image("game_over", game_over);

        this.load.image("try_again", try_again);

        this.load.image("yes", yes);

        this.load.image("no", no);  

        this.load.image("skull", skull);

        //Fake Loading Screen assets
            for (let i = 0; i < 100; i++) {
        this.load.image('Zombie'+ ' ' + i, skull);
        }

        //Loading the assets for the Main Menu
        this.load.image("title_bg", title_bg);

        this.load.image("options_button", options_button);

        this.load.image("play_button", play_button);

        this.load.image("logo", logo);

        this.load.spritesheet("player", player, {
            frameHeight: 32,
            frameWidth: 32
        });

        // this.load.audio("darkshadow", darkshadow)

        // this.load.audio("blood", blood)

        //Loading assets for the winning scene
        this.load.image("act_1", act_1);

        this.load.image("complete", complete);

        this.load.image("spacebar", spacebar);

        //load asset for forest portal
        this.load.image("forestportal", forestportal)

        let progressBar = this.add.graphics();
        let progressBox = this.add.graphics();
        progressBox.fillStyle(0x222222, 0.8);
        progressBox.fillRect(240, 270, 320, 50);

        let width = this.cameras.main.width;
        let height = this.cameras.main.height;
        let loadingText = this.make.text({
            x: width / 2,
            y: height / 2 - 50,
            text: 'Loading...',
            style: {
                font: '24px monospace',
                fill: '#ffffff'
            }
        });
        loadingText.setOrigin(0.5, 0.5);

        let percentText = this.make.text({
            x: width / 2,
            y: height / 2 - 5,
            text: '0%',
            style: {
                font: '20px monospace',
                fill: '#ffffff'
            }
        });
        percentText.setOrigin(0.5, 0.5);

        let assetText = this.make.text({
            x: width / 2,
            y: height / 2 + 50,
            text: '',
            style: {
                font: '22px monospace',
                fill: '#ffffff'
            }
        });
        assetText.setOrigin(0.5, 0.5);

        this.load.on('progress', function (value) {
            progressBar.clear();
            progressBar.fillStyle(0xff0000, 1);
            progressBar.fillRect(250, 280, 300 * value, 30);     	
            percentText.setText(parseInt(value * 100) + '%');
        });
                    
        this.load.on('fileprogress', function (file) {
            assetText.setText('Loading asset: ' + file.key);
        });
        
        this.load.on('complete', function () {
            progressBar.destroy();
            progressBox.destroy();
            loadingText.destroy();
            percentText.destroy();
            assetText.destroy();
        });
    }

    create() {
        this.scene.start('startMenu')
    }
    
};