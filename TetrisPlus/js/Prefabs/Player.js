var Phaser = Phaser || {};
var tetrisPlus = tetrisPlus || {};

tetrisPlus.Player = function(game, x, y, PlayerAnimSubida)
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
    
    //ANIMACIONES SEGUN EL CASO
    this.ColAnimationRight = false;
    this.ColAnimationLeft = false;
    
    //FLAG ANIMACIONS DE CHOQUE
    this.flagAnimationCollide = false;
};
tetrisPlus.Player.prototype = Object.create(Phaser.Sprite.prototype);
tetrisPlus.Player.prototype.constructor = tetrisPlus.Player;

//UPDATE FUNCTION
tetrisPlus.Player.prototype.update = function(){    
    //MOVIMIENTO (FRAMES REDUCIDOS)
    this.positionX = this.x - this.game.world.centerX;         
        
    
    if((this.ColAnimationLeft == false) && (this.ColAnimationRight == false))
    {
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
                //ANIMATION LEFT
                this.ColAnimationLeft = true;
                this.ColAnimationRight = false;
                this.flagAnimationCollide = false;
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
                this.flagAnimationCollide = false;
            }
        }
    }
        
        
    //ANIMACIONES DE COLISION SEGUN EL CASO
    if(this.ColAnimationRight == true)
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
                this.ColAnimationRight = false;
                this.ColAnimationLeft = false;
            }
        }
    }
    else if(this.ColAnimationLeft == true)
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
                this.ColAnimationRight = false;
                this.ColAnimationLeft = false;
            }
        }    
    }
};

//Collide horizontal
tetrisPlus.Player.prototype.CollideHorizontal=function()
{
    //CHOQUE HORIZONTAL
    if(this.flagAnimationCollide == false)
    {
         if(this.ColRight==true)
        {
            this.ColAnimationRight = false;
            this.ColAnimationLeft = true;
            this.flagAnimationCollide = true;
        }
    
        if (this.ColLeft==true)
        {
            this.ColAnimationRight = true;
            this.ColAnimationLeft = false;
            this.flagAnimationCollide = true;
        }
    }  
},
tetrisPlus.Player.prototype.UpPiece=function()
{
    this.y = this.y - 1;
},
tetrisPlus.Player.prototype.Die=function()
{
    //Hacer Animacion
    this.destroy();
}
