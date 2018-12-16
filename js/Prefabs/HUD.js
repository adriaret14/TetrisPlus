var Phaser = Phaser || {};
var tetrisPlus = tetrisPlus || {};

tetrisPlus.HUD = function(game, x1, y1)
{
    Phaser.Sprite.call(this, game, x1, y1, 'HUDCla');
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
    
    this.newPiece;
    
    this.textScore = game.add.text(x1+140,y1+75, "Score", {
        font: "35px Arial",
        fill: "#000000",
        align: "center"
    });
    this.textTime = game.add.text(x1+120, y1+390, "Time", {
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
   //this.newPiece.destroy();
    if(nextPiece=="R")
       {
            this.newPiece=tetrisPlus.game.add.image(10,10,'R_Complete');
       }
    else if(nextPiece=="I")
        {
            this.newPiece=tetrisPlus.game.add.image(10,10,'I_Complete');
        }
    else if(nextPiece=="L")
        {
            this.newPiece=tetrisPlus.game.add.image(10,10,'L_Complete');
        }
    else if(nextPiece=="J")
        {
            this.newPiece=tetrisPlus.game.add.image(10,10,'J_Complete');
        }
    else if(nextPiece=="S")
        {
            this.newPiece=tetrisPlus.game.add.image(10,10,'S_Complete');
        }
    else if(nextPiece=="Z")
        {
            this.newPiece=tetrisPlus.game.add.image(10,10,'Z_Complete');
        }
    else if(nextPiece=="T")
        {
            this.newPiece=tetrisPlus.game.add.image(10,10,'T_Complete');
        }
   
}



