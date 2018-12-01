var Phaser = Phaser || {};
var tetrisPlus = tetrisPlus || {};

//Button variables
var buttonPlay;
var buttonPlayPuzzle1;
var buttonPlayPuzzle2;
var buttonPlayPuzzle3;
var buttonPlayClassic;
var buttonExit;

//Background
var background;


tetrisPlus.menuState = {
    
    init:function(){
         this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    },
    
    preload:function(){
        this.game.load.image('backgroundMenu', 'assets/img/backgroundMm.png');   
        this.game.load.image('buttonClassicImg','assets/img/buttonClassic.png',200,180);
    },
    
    create:function(){   
        this.background = this.game.add.image(0,0,'backgroundMenu');        
        buttonPlayClassic = this.game.add.button(0, 0, 'buttonClassicImg', actionOnClick, 0, 2, 1, 0);
    },
    
    update:function(){
        
    },
    actionOnClick:function()
    {
    
    },
};


 


