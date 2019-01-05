var Phaser = Phaser || {};
var tetrisPlus = tetrisPlus || {};

tetrisPlus.VFXBloque = function(game, x1, y1, GridTetris)
{
    //Phaser.Sprite.call(this,game,x1,y1,'T');
    //Phaser.Sprite.call(this,game,x2,y2,'T');
    Phaser.Sprite.call(this,game,x1,y1,'bloque');
    this.scale.setTo(2);
    this.x1=x1;
    this.y1=y1;
    this.anchor.setTo(.46);
    
    //GRID TETRIS
    this.GridTetris=GridTetris;
    
    //FLAG DE CONTROL
    this.flag = false;  
    this.animations.add('VFXBloque', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
};
tetrisPlus.VFXBloque.prototype = Object.create(Phaser.Sprite.prototype);
tetrisPlus.VFXBloque.prototype.constructor = tetrisPlus.VFXBloque;
tetrisPlus.VFXBloque.prototype.update = function()    
{
    //EN CUANTO FINALICE DESTRUIMOS
    //this.animations.play('VFXBloque', 10, false);
};
tetrisPlus.VFXBloque.prototype.animationBloque = function()
{
    this.animations.play('VFXBloque', 50, false);
}