var Phaser = Phaser || {};
var tetrisPlus = tetrisPlus || {};

tetrisPlus.HUD = function(game, x1, y1)
{
    Phaser.Sprite.call(this, game, x1, y1, 'HUD');
    this.scale.setTo(1);
    this.x1=x1;
    this.y1=y1;
    
    this.game.physics.arcade.enable(this);
    this.body.collideWorldBounds = false;
    this.body.immovable = true;
    
    this.textScore;
    this.currentTime;
    this.bestTime;
};

tetrisPlus.HUD.prototype = Object.create(Phaser.Sprite.prototype);
tetrisPlus.HUD.prototype.constructor = tetrisPlus.HUD;

tetrisPlus.HUD.prototype.startHUD=function()
{ 
};
