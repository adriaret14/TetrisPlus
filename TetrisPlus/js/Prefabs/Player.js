var Phaser = Phaser || {};
var tetrisPlus = tetrisPlus || {};

tetrisPlus.Player = function(game, x, y)
{
    //NOMBRE DEL PREFAB
    Phaser.Sprite.call(this,game,x,y,'Player');
    
    //VARIABLES
    this.x=x;
    this.y=y;
    this.anchor.setTo(.5);
    this.scale.setTo(2);
    
    //ANIMATIONS        
    this.animations.add('walkingLeft', [5, 6, 7], 10, true);
    this.animations.add('walkingRight', [10, 11, 12], 10, true);
    this.animations.add('falling', [15, 16, 17], 10, true);
    this.animations.add('collisionLeft', [8, 9], 10, true);
    this.animations.add('collisionRight', [13, 14], 10, true);
    
    //PRINCIPIO DE MOVIMIENTO
    this.ColRight = true;
    this.ColLeft = false;
        
    //LIMITES PANTALLA
    this.LimitLeft = (-80 + 16);
    this.LimitRight = (80 - 16);     
        
    //GOLPE EN LA PARED
    this.CountCollLeft = 0;
    this.CountCollRight = 0;
    
    //FISICAS
    this.game.physics.arcade.enable(this);
    this.body.collideWorldBounds = true;
    this.body.immovable = true;
    
};
tetrisPlus.Player.prototype = Object.create(Phaser.Sprite.prototype);
tetrisPlus.Player.prototype.constructor = tetrisPlus.Player;

//UPDATE FUNCTION
tetrisPlus.Player.prototype.update = function(){    
    //MOVIMIENTO (FRAMES REDUCIDOS)
    this.positionX = this.x - this.game.world.centerX;         
        
    //COLLISION IZQUIERDA
    if(this.ColRight == true )
    {
        if(this.positionX != this.LimitLeft)        
        {
            this.animations.play('walkingLeft', 5, true);
            this.x = this.x - 0.5;
        }
        else
        {
            this.animations.play('collisionLeft', 5, true);
            if(this.animations.currentAnim.frame == 9)
            {
                this.CountCollLeft++;
                if(this.CountCollLeft == 12)
                {
                    this.ColLeft = true;
                    this.ColRight = false;
                    this.CountCollLeft = 0;
                }
            }
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
            this.animations.play('collisionRight', 5, true);
            if(this.animations.currentAnim.frame == 14)
            {
                this.CountCollRight++;
                if(this.CountCollRight == 12)
                {
                    this.ColRight = true;
                    this.ColLeft = false;
                    this.CountCollRight = 0;
                }
            }
        }
    }
};

//Collide horizontal
tetrisPlus.Player.prototype.CollideHorizontal=function()
{
    if(this.ColRight==true)
    {
        this.ColRight=false;
        this.ColLeft=true;
    }
    else if (this.ColLeft==true)
    {
        this.ColLeft=false;
        this.ColRight=true;            
    }
}