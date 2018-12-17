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
    this.textBestTime;
    this.currentTime;
    this.bestTime;
    
    this.newPiece;
    
    this.textScore = game.add.text(x1+120,y1+75, "Score", {
        font: "35px Arial",
        fill: "#000000",
        align: "center"
    });
    this.textTime = game.add.text(x1+120, y1+390, "Time", {
        font: "35px Arial",
        fill: "#000000",
        align: "center"
    });
    this.textBestTime = game.add.text(x1+120, y1+270, "BTime", {
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
tetrisPlus.HUD.prototype.updateBestTime=function(minute,seconds)
{ 
    this.textBestTime.setText( minute + " : " + seconds);
};



