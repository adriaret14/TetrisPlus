var Phaser = Phaser || {};
var tetrisPlus = tetrisPlus || {};

tetrisPlus.PlayerWin = function(game, x, y)
{
    //NOMBRE DEL PREFAB
    Phaser.Sprite.call(this, game, x, y, 'PlayerVictoria');
    
    //VARIABLES
    this.x=x;
    this.y=y;
    this.anchor.setTo(.5);
    this.scale.setTo(2);
    
    //ANIMATIONS (MOVEMENT)        
    this.animations.add('Win', [5, 6, 7], 10, true);
};
tetrisPlus.PlayerWin.prototype = Object.create(Phaser.Sprite.prototype);
tetrisPlus.PlayerWin.prototype.constructor = tetrisPlus.PlayerWin;

//UPDATE FUNCTION
tetrisPlus.PlayerWin.prototype.update = function(){    
    

};
tetrisPlus.PlayerWin.prototype.Die=function()
{
    //Hacer Animacion
    this.destroy();
}
