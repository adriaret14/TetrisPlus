var Phaser = Phaser || {};
var tetrisPlus = tetrisPlus || {};

tetrisPlus.T_Piece = function(game, x, y)
{
    Phaser.Sprite.call(this,game,x,y,'T');
    
    this.x=x;
    this.y=y;
    //this.anchor.setTo(.5);
    this.scale.setTo(2);
};
tetrisPlus.T_Piece.prototype = Object.create(Phaser.Sprite.prototype);
tetrisPlus.T_Piece.prototype.constructor = tetrisPlus.T_Piece;
tetrisPlus.T_Piece.prototype.move=function(direction, distance)
{
    //console.log("HOLA");
    if(direction==1)
        {
           this.x-=distance; 
        }
    else if(direction==2)
        {
            this.x+=distance;
        }
};

