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
    this.textTime;
    this.currentTime;
    this.bestTime;
    
    this.textScore = game.add.text(game.world.centerX-300, game.world.centerY, "Score", {
        font: "35px Arial",
        fill: "#000000",
        align: "center"
    });
    this.textTime = game.add.text(game.world.centerX-300, game.world.centerY+100, "Time", {
        font: "35px Arial",
        fill: "#000000",
        align: "center"
    });
};

tetrisPlus.HUD.prototype = Object.create(Phaser.Sprite.prototype);
tetrisPlus.HUD.prototype.constructor = tetrisPlus.HUD;

tetrisPlus.HUD.prototype.startHUD=function()
{ 
};
tetrisPlus.HUD.prototype.updateScore=function(score)
{ 
    this.textScore.setText(score);
};
tetrisPlus.HUD.prototype.updateTime=function(minute,seconds)
{ 
    this.textTime.setText( minute + " : " + seconds);
};
tetrisPlus.HUD.prototype.updateNextPiece=function(nextPiece)
{
    if(nextPiece=="R")
       {
            tetrisPlus.game.add.image(10,10,'I_Complete');
       }
    else if(nextPiece=="R")
        {
            tetrisPlus.game.add.image(10,10,'I_Complete');
        }
    else if(nextPiece=="R")
        {
            tetrisPlus.game.add.image(10,10,'I_Complete');
        }
    else if(nextPiece=="R")
        {
            tetrisPlus.game.add.image(10,10,'I_Complete');
        }
    else if(nextPiece=="R")
        {
            tetrisPlus.game.add.image(10,10,'I_Complete');
        }
    else if(nextPiece=="R")
        {
            tetrisPlus.game.add.image(10,10,'I_Complete');
        }
   
}



