var Phaser = Phaser || {};
var tetrisPlus = tetrisPlus || {};

tetrisPlus.L_Single = function(game, x1, y1, startj, starti, GridTetris)
{
    //Phaser.Sprite.call(this,game,x1,y1,'T');
    //Phaser.Sprite.call(this,game,x2,y2,'T');
    Phaser.Sprite.call(this,game,x1,y1,'L');
    this.scale.setTo(2);
    this.x1=x1;
    this.y1=y1;
    this.starti=starti;
    this.startj=startj;
    this.anchor.setTo(0.625, 0.5);
    this.GridTetris=GridTetris;
    this.PieceType='L';
    
   //FISICAS
    this.game.physics.arcade.enable(this);
    this.body.collideWorldBounds = true;
    this.body.immovable = true;

    
};
tetrisPlus.L_Single.prototype = Object.create(Phaser.Sprite.prototype);
tetrisPlus.L_Single.prototype.constructor = tetrisPlus.L_Single;
tetrisPlus.L_Single.prototype.moveSingle=function(distance)
{
    this.y+=distance;
}