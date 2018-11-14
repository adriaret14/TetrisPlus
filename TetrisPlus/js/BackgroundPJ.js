var Phaser = Phaser || {};
var tetrisPlus = tetrisPlus || {};

//POSICIONES DEL JUGADOR
var positionX;

//CAMBIO DE DIRECCIÓN
var ColRight, ColLeft;
var LimitLeft, LimitRight;
var CountCollLeft, CountCollRight;

tetrisPlus.BackgroundPJ = {
    
    //NEW FUNCTIONS
    changeCollisionLeft:function(){   
        this.ColLeft = true;
        this.ColRight = false;
        console.log("VAMOOOOS");
    },
        
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
        
        //PERSONAJE (WALKING, FALLING AND COLLISIONS WITH WALLS)
        this.Playeranimations1 = this.game.add.sprite(this.game.world.centerX,this.game.world.centerY,'Playeranimations1');
        
        this.Playeranimations1.animations.add('walkingLeft', [5, 6, 7], 10, true);
        this.Playeranimations1.animations.add('walkingRight', [10, 11, 12], 10, true);
        this.Playeranimations1.animations.add('falling', [15, 16, 17], 10, true);
        this.AnimCollisionLeft = this.Playeranimations1.animations.add('collisionLeft', [8, 9], 10, true);
        this.AnimCollisionRight = this.Playeranimations1.animations.add('collisionRight', [13, 14], 10, true);
        
        //TRANSFORMACIONES
        this.Playeranimations1.anchor.setTo(.5);
        this.Playeranimations1.scale.setTo(2);
        
        //PRINCIPIO DE MOVIMIENTO
        this.ColRight = true;
        this.ColLeft = false;
        
        //LIMITES PANTALLA
        this.LimitLeft = (-80 + 16);
        this.LimitRight = (80 - 16);     
        
        //GOLPE EN LA PARED
        this.CountCollLeft = 0;
        this.CountCollRight = 0;
    },
    

    update:function(){
        
        //MOVIMIENTO (FRAMES REDUCIDOS)
        this.positionX = this.Playeranimations1.position.x - this.game.world.centerX;         
        
        //COLLISION IZQUIERDA
        if(this.ColRight == true )
        {
           if(this.positionX != this.LimitLeft)        
            {
                this.Playeranimations1.animations.play('walkingLeft', 5, true);
                this.Playeranimations1.position.x = this.Playeranimations1.position.x - 0.5;
            }
            else
            {
                this.Playeranimations1.animations.play('collisionLeft', 5, true);
                if(this.Playeranimations1.animations.currentAnim.frame == 9)
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
                this.Playeranimations1.animations.play('walkingRight', 5, true);
                this.Playeranimations1.position.x = this.Playeranimations1.position.x + 0.5;
            }
            else
            {
                this.Playeranimations1.animations.play('collisionRight', 5, true);
                if(this.Playeranimations1.animations.currentAnim.frame == 14)
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
    }
    
};
    