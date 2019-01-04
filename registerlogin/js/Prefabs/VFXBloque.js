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
    this.anchor.setTo(.5);
    
    //GRID TETRIS
    this.GridTetris=GridTetris;
    
    //FLAG DE CONTROL
    this.flag = false;  
    this.animations.add('VFXBloque', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 10, true);
};
tetrisPlus.VFXBloque.prototype = Object.create(Phaser.Sprite.prototype);
tetrisPlus.VFXBloque.prototype.constructor = tetrisPlus.VFXBloque;
tetrisPlus.VFXBloque.prototype.update = function()    
{
    //EN CUANTO FINALICE DESTRUIMOS
    if(this.flag == false)
    {
        this.animations.play('VFXBloque', 5, true);
    }

    if(this.animations.currentAnim.frame == 9)
    {
        this.flag = true;
    }
    
    console.log(this.flag);
};