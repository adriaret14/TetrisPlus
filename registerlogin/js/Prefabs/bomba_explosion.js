var Phaser = Phaser || {};
var tetrisPlus = tetrisPlus || {};

tetrisPlus.VFXExplosion = function(game, x1, y1, startj, starti, GridTetris)
{
    //Phaser.Sprite.call(this,game,x1,y1,'T');
    //Phaser.Sprite.call(this,game,x2,y2,'T');
    Phaser.Sprite.call(this,game,x1,y1,'bombaExplosion');
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
    this.previ1;
    this.prevj1;
    this.contDer;
    this.contIzq;
    this.contDown=0;
    this.currRot=0;
    this.RotFlag=false;
    this.type="B";
    
    //FISICAS
    this.game.physics.arcade.enable(this);
    this.body.collideWorldBounds = true;
    this.body.immovable = true;
    
    //ANIMATIONS       
    this.animations.add('explosion', [0, 1, 2, 3, 4, 5, 6], 10, true);
    
};
tetrisPlus.VFXExplosion.prototype = Object.create(Phaser.Sprite.prototype);
tetrisPlus.VFXExplosion.prototype.constructor = tetrisPlus.VFXExplosion;
tetrisPlus.VFXExplosion.prototype.startGrid=function()
{
    this.animations.play('explosion', 5, true);
};