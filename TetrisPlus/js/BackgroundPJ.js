var Phaser = Phaser || {};
var tetrisPlus = tetrisPlus || {};

tetrisPlus.BackgroundPJ = {
    preload:function(){    
        //FONDO DE PANTALLA
        this.game.load.image('bg1', 'assets/img/Fondo1.png');
        
        //PERSONAJE
        this.load.spritesheet('Playeranimations1', 'assets/img/SpriteSheetPersonaje.png', 16, 16);
        
    },
    create:function(){
        //FONDO
        this.bg1 = this.game.add.tileSprite(this.game.world.centerX,this.game.world.centerY,119,272,'bg1');
        
        //TRANSFORMACIONES
        this.bg1.anchor.setTo(.5);
        this.bg1.scale.setTo(2);
        
        //PERSONAJE
        this.Playeranimations1 = this.game.add.sprite(this.game.world.centerX,this.game.world.centerY,'Playeranimations1');
        
        this.Playeranimations1.animations.add('walkingLeft', [5, 6, 7], 10, true);
        this.Playeranimations1.animations.add('walkingRight', [10, 11, 12], 10, true);
        this.Playeranimations1.animations.add('falling', [15, 16, 17], 10, true);
        this.Playeranimations1.animations.add('collisionLeft', [8, 9], 10, true);
        this.Playeranimations1.animations.add('collisionRight', [12, 13], 10, true);
        
        
        //TRANSFORMACIONES
        this.Playeranimations1.anchor.setTo(.5);
        this.Playeranimations1.scale.setTo(2);
        
        //GET CURSORS KEYBOARD
        this.cursors = this.game.input.keyboard.createCursorKeys();
        
        

    },
    
    update:function(){
        
        //MOVIMIENTO (FRAMES REDUCIDOS)
        if(this.cursors.left.isDown)
        {
            //COLLISION
            /*if()
            {*/
                this.Playeranimations1.animations.play('walkingLeft', 5, true);
                this.Playeranimations1.position.x--;
                //console.log(this.Playeranimations1.position.x--);
            /*}*/

        }
        else if(this.cursors.right.isDown)
        {
            /*()
            {*/
                this.Playeranimations1.animations.play('walkingRight', 5, true);
                this.Playeranimations1.position.x++;
            /*}*/
        }
        
        
        
        }
};
    