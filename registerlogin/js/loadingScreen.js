var Phaser = Phaser || {};
var tetrisPlus = tetrisPlus || {};

var nextLevel;
var Score;
var ModoPuzzle;
var ModoClassic;

tetrisPlus.loadingScreen = {
    
    init:function(){
        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVertically = true;
    },
    
    preload:function(){
        this.game.load.image('bgLoadingScreen', 'assets/img/LoadingScreen.png');
    },
    
    create:function(){
        //this.stage.backgroundColor="000000";
        this.bg1 = this.game.add.tileSprite(0 ,0, 1057, 636,'bgLoadingScreen');
        
        //COUNTER NEXT LEVEL
        this.counterNextLevel = 0;
        ModoPuzzle = 2;
        ModoClassic = 1;
    },
    
    update:function(){
        
        this.counterNextLevel++;
        
        if(this.counterNextLevel >= 50 )
        {
           switch(nextLevel)
            {
            case 1:
                this.game.state.add('main',tetrisPlus.gameState1);
                this.game.state.start('main', Score);
                break;
            case 2:
                this.game.state.add('main',tetrisPlus.gameState2);
                this.game.state.start('main', Score);
                break;
            case 3:
                this.game.state.add('main',tetrisPlus.gameState3);
                this.game.state.start('main', Score);
                break;
            case 4:
                this.game.state.add('main',tetrisPlus.gameState4);
                this.game.state.start('main', Score);
                break;
            case 5:
                this.sendDataToPHP();
                break;
            case 6:
                this.sendDataToPHPClassic();
                break;
            }
        }
    },
    sendDataToPHP:function()
    {
        window.location.href = "ranking.php?score=" + Score + "&modo=" + ModoPuzzle; 
    },
    sendDataToPHPClassic:function()
    {
        window.location.href = "rankingclassic.php?score=" + Score + "&modo=" + ModoClassic; 
    }
};
