var Phaser = Phaser || {};
var tetrisPlus = tetrisPlus || {};

tetrisPlus.Player = function(game, x, y)
{
    //NOMBRE DEL PREFAB
    Phaser.Sprite.call(this, game, x, y, 'Player');
    
    //VARIABLES
    this.x=x;
    this.y=y;
    this.anchor.setTo(.5);
    this.scale.setTo(2);
    
    //ANIMATIONS (MOVEMENT)        
    this.animations.add('walkingLeft', [5, 6, 7], 10, true);
    this.animations.add('walkingRight', [10, 11, 12], 10, true);
    this.animations.add('falling', [15, 16, 17], 10, true);
    this.animations.add('collisionLeft', [8, 9], 10, true);
    this.animations.add('collisionRight', [13, 14], 10, true);
    
    //ANIMATION(FALL)
    this.animations.add('fallLeft', [15], true);
    this.animations.add('collisionfallLeft', [16, 17], true);
    this.animations.add('fallRight', [20], true);
    this.animations.add('collisionfallRight', [21, 22], true);
    
        
    //PRINCIPIO DE MOVIMIENTO
    this.ColRight = true;
    this.ColLeft = false;
        
    //LIMITES PANTALLA
    this.LimitLeft = (-81 + 16);
    this.LimitRight = (79 - 16);     
        
    //GOLPE EN LA PARED
    this.CountCollLeft = 0;
    this.CountCollRight = 0;
    
    //GOLPE CON EL SUELo
    this.CountCollFallLeft = 0;
    this.CountCollFallRight = 0;
    
    //FISICAS
    this.game.physics.arcade.enable(this);
    this.body.collideWorldBounds = true;
    this.body.gravity.y = 100;
    this.body.setSize(16, 16);
    
    //ANIMACIONES SEGUN EL CASO
    this.ColAnimationRight = false;
    this.ColAnimationLeft = false;
    
    //MOVIMIENTO ACTIVADO
    this.DontMove = false;
    
    //FADE
    this.alpha = 1;
};
tetrisPlus.Player.prototype = Object.create(Phaser.Sprite.prototype);
tetrisPlus.Player.prototype.constructor = tetrisPlus.Player;

//UPDATE FUNCTION
tetrisPlus.Player.prototype.update = function(){    
    //MOVIMIENTO (FRAMES REDUCIDOS)
    this.positionX = this.x - this.game.world.centerX;         
    
    //MOVIMIENTO
    if(!this.DontMove)
    {
        if(this.ColRight == true )
        {
            if(this.positionX != this.LimitLeft)        
            {
                this.animations.play('walkingLeft', 5, true);
                this.x = this.x - 0.5;
            }
            else
            {   
                //ANIMATION LEFT
                this.ColAnimationLeft = true;
                this.ColAnimationRight = false;
                
                this.ColLeft = true;
                this.ColRight = false;
            }
        }

        //COLLISION DERECHA
        if(this.ColLeft == true)
        {
            if(this.positionX != this.LimitRight)        
            {
                this.animations.play('walkingRight', 5, true);
                this.x = this.x + 0.5;
            }
            else
            {
                //ANIMATION RIGHT
                this.ColAnimationRight = true;
                this.ColAnimationLeft = false;
                
                this.ColLeft = false;
                this.ColRight = true;
            }
        } 
    }
    else
    {
        //IZQUIERDA
        if(this.ColRight == true)
        {
            this.animations.play('fallLeft', 5, true);
            this.collisionFallLeft = true;
        }
        
        if(this.ColLeft == true)
        {
            this.animations.play('fallRight', 5, true);
            this.collisionFallRight = true;
        }
    }
};
tetrisPlus.Player.prototype.Die=function()
{
    //Hacer Animacion
    this.destroy();
}
