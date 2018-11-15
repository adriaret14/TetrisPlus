var Phaser = Phaser || {};
var tetrisPlus = tetrisPlus || {};

tetrisPlus.T_Piece = function(game, x1, y1)
{
    //Phaser.Sprite.call(this,game,x1,y1,'T');
    //Phaser.Sprite.call(this,game,x2,y2,'T');
    Phaser.Sprite.call(this,game,x1,y1,'T_Complete');
    this.scale.setTo(2);
    //this.anchor.setTo(0.5, 0.25);
    
    this.x1=x1;
    this.y1=y1;
    //this.anchor.setTo(.5);
    
    //this.cursors = this.gameState.game.input.keyboard.createCursorKeys();
    
};
tetrisPlus.T_Piece.prototype = Object.create(Phaser.Sprite.prototype);
tetrisPlus.T_Piece.prototype.constructor = tetrisPlus.T_Piece;
tetrisPlus.T_Piece.prototype.move=function(direction, distance)
{
     /*if (this.cursors.right.isDown)
         {
             console.log("HOLA");
         }*/
    //console.log("HOLA");
    if(direction==1)
        {
           this.x-=distance; 
        }
    else if(direction==2)
        {
            this.x+=distance;
        }
    else if(direction==3)
        {
            this.y+=distance;
        }
};
tetrisPlus.T_Piece.prototype.drop=function()
{
    //console.log("HOLA");

};
tetrisPlus.T_Piece.prototype.update=function()
{
    //console.log("HOLA");
    

};


