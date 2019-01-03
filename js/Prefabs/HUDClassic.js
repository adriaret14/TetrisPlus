var Phaser = Phaser || {};
var tetrisPlus = tetrisPlus || {};

tetrisPlus.HUDC = function(game, x1, y1)
{
    Phaser.Sprite.call(this, game, x1, y1, 'HUDCla');
    this.scale.setTo(1);
    this.x1=x1;
    this.y1=y1;
    
    this.game.physics.arcade.enable(this);
    this.body.collideWorldBounds = false;
    this.body.immovable = true;
    
    this.textScore;
    this.textLevel;
    this.currentTime;
    this.bestTime;
    
    this.newPiece;
    this.auxPiece;
    //this.newPiece.anchor.setTo(0.5,0.5);
    
    this.textScore = game.add.text(x1+140,y1+275, "Score", {
        font: "35px Revalia",
        fill: "#000000",
        align: "center"
    });
    this.textLevel = game.add.text(x1+140, y1+400, "Level", {
        font: "35px Revalia",
        fill: "#000000",
        align: "center"
    });
};

tetrisPlus.HUDC.prototype = Object.create(Phaser.Sprite.prototype);
tetrisPlus.HUDC.prototype.constructor = tetrisPlus.HUD;

tetrisPlus.HUDC.prototype.startHUD=function()
{ 
};
tetrisPlus.HUDC.prototype.updateScore=function(score)
{ 
    this.textScore.setText(score);
};
tetrisPlus.HUDC.prototype.updateLevel=function(level)
{ 
    this.textLevel.setText(level);
};
tetrisPlus.HUDC.prototype.updateNextPiece=function(nextPiece)
{
   //this.newPiece.setSize(2);
    //this.newPiece.scale.setTo(2);
    this.auxPiece=tetrisPlus.game.add.image(this.x1+100,this.y1+70,'ImgAux');
    if(nextPiece=="R")
       {            
            this.newPiece=tetrisPlus.game.add.image(this.x1+100,this.y1+70,'R_Complete');           
       }
    else if(nextPiece=="I")
        {
            this.newPiece=tetrisPlus.game.add.image(this.x1+100,this.y1+70,'I_Complete');
        }
    else if(nextPiece=="L")
        {
            this.newPiece=tetrisPlus.game.add.image(this.x1+100,this.y1+70,'L_Complete');
        }
    else if(nextPiece=="J")
        {
            this.newPiece=tetrisPlus.game.add.image(this.x1+100,this.y1+70,'J_Complete');
        }
    else if(nextPiece=="S")
        {
            this.newPiece=tetrisPlus.game.add.image(this.x1+100,this.y1+70,'S_Complete');
        }
    else if(nextPiece=="Z")
        {
            this.newPiece=tetrisPlus.game.add.image(this.x1+100,this.y1+70,'Z_Complete');
        }
    else if(nextPiece=="T")
        {
            this.newPiece=tetrisPlus.game.add.image(this.x1+100,this.y1+70,'T_Complete');
        }
   this.auxPiece.scale.setTo(3.5);
   this.newPiece.scale.setTo(3.5);
}



