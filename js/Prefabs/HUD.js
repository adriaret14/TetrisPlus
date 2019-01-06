var Phaser = Phaser || {};
var tetrisPlus = tetrisPlus || {};

var min=0;
var sec=0;
var textTime;

tetrisPlus.HUD = function(game, x1, y1, mins, seconds)
{
    Phaser.Sprite.call(this, game, x1, y1, 'HUD');
    this.scale.setTo(1);
    this.x1=x1;
    this.y1=y1;
    
    min=mins;
    sec=seconds;
    
    this.game.physics.arcade.enable(this);
    this.body.collideWorldBounds = false;
    this.body.immovable = true;
    
    this.textScore;
    this.textTime;
    this.textBestTime;
    this.currentTime;
    this.bestTime;
    
    
    
    this.newPiece;
    this.aux=tetrisPlus.game.add.image(this.x1+20,this.y1+70,'auxx');
    
    this.textScore = game.add.text(x1+120,y1+75, "Score", {
        font: "35px Revalia",
        fill: "#000000",
        align: "center"
    });
    textTime = game.add.text(x1+120, y1+270, "Time", {
        font: "35px Revalia",
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
tetrisPlus.HUD.prototype.updateTime=function()
{ 
    sec++;
    if(sec>59)
    {
        sec=0;
        min=min+1;
    }
    if(min<10)
    {
    textTime.setText("0"+min + " : " + sec);
    }
    else
    {
        textTime.setText(min + " : " + sec);
    }
    
};




