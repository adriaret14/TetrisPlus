var Phaser = Phaser || {};
var tetrisPlus = tetrisPlus || {};

tetrisPlus.R_Single = function(game, x1, y1, startj, starti, GridTetris)
{
    //Phaser.Sprite.call(this,game,x1,y1,'T');
    //Phaser.Sprite.call(this,game,x2,y2,'T');
    Phaser.Sprite.call(this,game,x1,y1,'R');
    this.scale.setTo(2);
    this.x1=x1;
    this.y1=y1;
    this.starti=starti;
    this.startj=startj;
    this.anchor.setTo(0.625, 0.5);
    this.cantMoveDown=false;
    this.cantMoveLeft=false;
    this.cantMoveRight=false;
    this.cantRotate=false;
    this.GridTetris=GridTetris;
    this.contDer;
    this.contIzq;
    this.contDown=0;
    
   //FISICAS
    this.game.physics.arcade.enable(this);
    this.body.collideWorldBounds = true;
    this.body.immovable = true;

    
};
tetrisPlus.R_Single.prototype = Object.create(Phaser.Sprite.prototype);
tetrisPlus.R_Single.prototype.constructor = tetrisPlus.R_Single;
tetrisPlus.R_Single.prototype.moveSingle=function(distance)
{
    this.y+=distance;
}