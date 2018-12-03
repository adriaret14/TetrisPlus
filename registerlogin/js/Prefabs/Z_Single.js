var Phaser = Phaser || {};
var tetrisPlus = tetrisPlus || {};

tetrisPlus.Z_Single = function(game, x1, y1, startj, starti, GridTetris)
{
    //Phaser.Sprite.call(this,game,x1,y1,'T');
    //Phaser.Sprite.call(this,game,x2,y2,'T');
    Phaser.Sprite.call(this,game,x1,y1,'Z');
    this.scale.setTo(2);
    this.x1=x1;
    this.y1=y1;
    this.starti=starti;
    this.startj=startj;
    this.anchor.setTo(0.625, 0.5);
    this.GridTetris=GridTetris;
    this.PieceType='Z';
    
   //FISICAS
    this.game.physics.arcade.enable(this);
    this.body.collideWorldBounds = true;
    this.body.immovable = true;

    
};
tetrisPlus.Z_Single.prototype = Object.create(Phaser.Sprite.prototype);
tetrisPlus.Z_Single.prototype.constructor = tetrisPlus.Z_Single;
tetrisPlus.Z_Single.prototype.moveSingle=function(distance)
{
    this.y+=distance;
}