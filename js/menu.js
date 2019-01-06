var Phaser = Phaser || {};
var tetrisPlus = tetrisPlus || {};

//Button variables
var buttonPlay;
var buttonPlayPuzzle;
var buttonPlayClassic;
var buttonExit;

//Background
var background;

//Sound
var bgSound;


tetrisPlus.menuState = {
    
    init:function(){
        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVertically = true;
    },
    
    preload:function(){
        this.game.load.image('backgroundMenu', 'assets/img/backgroundMmNN.png');   
        this.game.load.spritesheet('buttonClassicImg','assets/img/ClassicModeButtonN.png',300,257);
        this.game.load.spritesheet('buttonPuzzleImg','assets/img/PuzzleModeN.png',300,257);
        
        //SOUNDS
        this.game.load.audio('menuMusic', 'assets/sounds/Menu3.mp3')
    },
    
    create:function(){   
        this.background = this.game.add.image(0,0,'backgroundMenu');        
        buttonPlayClassic = this.game.add.button(this.game.world.centerX - 350, 435, 'buttonClassicImg', this.openClassicMode, 0, 1, 0, 1);
        buttonPlayPuzzle= this.game.add.button(this.game.world.centerX +100, 435, 'buttonPuzzleImg', this.openPuzzleMode, 0, 1, 0, 1);
        buttonPlayClassic.scale.setTo(0.75);
        buttonPlayPuzzle.scale.setTo(0.75);
        bgSound=this.game.add.audio('menuMusic');
        bgSound.loopFull(0.6);
    },
    
    update:function(){
        
    },
    openClassicMode:function()
    {
        bgSound.stop();
        this.game.state.add('main', tetrisPlus.gameStateClassic);
        this.game.state.start('main');
    },
    openPuzzleMode:function()
    {
        bgSound.stop();
        this.game.state.add('main',tetrisPlus.gameState);
        this.game.state.start('main');
        //console.log("yoooo");
    },
};


 


