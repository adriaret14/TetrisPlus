var Phaser = Phaser || {};
var tetrisPlus = tetrisPlus || {};

tetrisPlus.VFXBomba = function(game, x1, y1)
{
    //Phaser.Sprite.call(this,game,x1,y1,'T');
    //Phaser.Sprite.call(this,game,x2,y2,'T');
    Phaser.Sprite.call(this,game,x1,y1,'explosion');
    this.scale.setTo(3);
    this.x1=x1;
    this.y1=y1;
    this.anchor.setTo(.5);
    
    //FLAG DE CONTROL
    this.flag = false;  
    this.animations.add('VFXExplosion', [0, 1, 2, 3, 4, 5, 6], 10, true);
};
tetrisPlus.VFXBomba.prototype = Object.create(Phaser.Sprite.prototype);
tetrisPlus.VFXBomba.prototype.constructor = tetrisPlus.VFXBomba;
tetrisPlus.VFXBomba.prototype.update = function()    
{
    //EN CUANTO FINALICE DESTRUIMOS
    if(this.flag == false)
    {
        this.animations.play('VFXExplosion', 10, true);
    }

    if(this.animations.currentAnim.frame == 6)
    {
        this.flag = true;
    }
    
    console.log(this.flag);
};