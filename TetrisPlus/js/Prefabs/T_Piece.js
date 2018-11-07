var Phaser = Phaser || {};
var tetrisPlus = tetrisPlus || {};

tetrisPlus.T_Piece = function(game, x, y)
{
    Phaser.Sprite.call(this,game,x,y,'T');
    this.anchor.setTo(.5);
};

tetrisPlus.T_Piece.prototype = Object.create(Phaser.Sprite.prototype);
tetrisPlus.T_Piece.prototype.constructor = tetrisPlus.T_Piece;
