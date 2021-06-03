export default function preloadAssets (scene) {

  //font loader
  scene.load.script('webfont', 'https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js');

  // Town preload
  scene.load.image('tiles', 'src/assets/tilesets/town32-extruded.png');
  scene.load.image('obj-tiles', "src/assets/tilesets/dungeon-objects.png");
  scene.load.tilemapTiledJSON('map', 'src/assets/maps/overworldv4.json');
  scene.load.spritesheet('player', 'src/assets/characters/players/player.png', { frameWidth: 32, frameHeight: 32 });
  scene.load.atlas('boy1', "src/assets/characters/players/testnpc.png", "src/assets/characters/players/testnpc.json")
  
  // image for shots
  scene.load.image('shot', 'src/assets/weapons/smBlueBlast.png');

  // zombie spritesheet(s)
  scene.load.spritesheet('zombie7', "src/assets/characters/enemies/zombie7.png", { frameWidth: 32, frameHeight: 32 });
  scene.load.spritesheet('zombie', "src/assets/characters/enemies/zombie1.png", { frameWidth: 32, frameHeight: 32 });
  scene.load.spritesheet('zombieKing', 'src/assets/characters/enemies/zombie2.png', { frameWidth: 32, frameHeight: 32 });
  scene.load.spritesheet('zombieGhost', "src/assets/characters/enemies/zombieGhost.png", { frameWidth: 32, frameHeight: 32 });

  //image for hearts
  scene.load.image('empty-heart', "src/assets/symbols-and-items/ui_heart_empty32.png");
  scene.load.image('full-heart', "src/assets/symbols-and-items/ui_heart_full32.png");
  scene.load.image('half-heart', "src/assets/symbols-and-items/ui_heart_half.png");
  //image for samples
  scene.load.image('samples', "src/assets/symbols-and-items/sample2.png");

  // Forest preload
  scene.load.image('forest', 'src/assets/tilesets/forest-tileset-extruded.png');
  scene.load.image('graveyard', 'src/assets/tilesets/graveyard-tileset-extruded.png');
  scene.load.tilemapTiledJSON('forestMap', 'src/assets/maps/finalForest.json');

  // Dungeon preload
  scene.load.image('dungeonTiles', "src/assets/tilesets/dungeon-tileset-extruded.png");
  scene.load.image('samples', "src/assets/symbols-and-items/sample2.png");
  scene.load.tilemapTiledJSON('dungMap', "src/assets/maps/dungeonMap.json");

  //final boss preload
  scene.load.image('chest', 'src/assets/symbols-and-items/chest.png');
  scene.load.tilemapTiledJSON('finalBoss', 'src/assets/maps/finalBoss.json');

};