var Phaser = Phaser || {};
var tetrisPlus = tetrisPlus || {};

//Button variables
var buttonPlay;
var buttonPlayPuzzle;
var buttonPlayClassic;
var buttonExit;

//Background
var background;


tetrisPlus.menuState = {
    
    init:function(){
        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVertically = true;
    },
    
    preload:function(){
        this.game.load.image('backgroundMenu', 'assets/img/backgroundMm.png');   
        this.game.load.spritesheet('buttonClassicImg','assets/img/buttonClassic.png',300,200);
        this.game.load.spritesheet('buttonPuzzleImg','assets/img/PuzzleMode.png',300,200);
    },
    
    create:function(){   
        this.background = this.game.add.image(0,0,'backgroundMenu');        
        buttonPlayClassic = this.game.add.button(this.game.world.centerX - 350, 575, 'buttonClassicImg', this.openClassicMode, 0, 2, 1, 0);
        buttonPlayPuzzle= this.game.add.button(this.game.world.centerX +50, 575, 'buttonPuzzleImg', this.openPuzzleMode, 0, 1, 0, 1);
    },
    
    update:function(){
        
    },
    openClassicMode:function()
    {
        this.game.state.add('main', tetrisPlus.gameState);
        this.game.state.start('main');
    },
    openPuzzleMode:function()
    {
        this.game.state.add('main',tetrisPlus.gameState);
        this.game.state.start('main');
        //console.log("yoooo");
    },
};


 


