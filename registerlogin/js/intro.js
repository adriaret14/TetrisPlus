var Phaser = Phaser || {};
var tetrisPlus = tetrisPlus || {};

tetrisPlus.intro = {
    
    init:function(){
        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVertically = true;
    },
    
    preload:function(){
        this.game.load.image('bgIntro', 'assets/img/LastIntro.png');
    },
    
    create:function(){
        this.bg1 = this.game.add.tileSprite(0 , 0 , 1024, 800, 'bgIntro');
        
        this.spaceKey = tetrisPlus.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        this.cursores=tetrisPlus.game.input.keyboard.createCursorKeys();
    },
    
    update:function(){
        if(this.spaceKey.isDown)
        {
            this.game.state.add('main',tetrisPlus.menuState);
            this.game.state.start('main');    
        }
    }
};
