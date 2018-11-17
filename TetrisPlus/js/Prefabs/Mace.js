var Phaser = Phaser || {};
var tetrisPlus = tetrisPlus || {};

tetrisPlus.Z_Piece = function(game, x1, y1, startj, starti)
{
    //Phaser.Sprite.call(this,game,x1,y1,'T');
    //Phaser.Sprite.call(this,game,x2,y2,'T');
    Phaser.Sprite.call(this,game,x1,y1,'Z_Complete');
    this.scale.setTo(2);
    this.x1=x1;
    this.y1=y1;
    this.starti=starti;
    this.startj=startj;
//  this.anchor.setTo(0.5, 0.25);
};

tetrisPlus.Mace.prototype = Object.create(Phaser.Sprite.prototype);

tetrisPlus.Mace = function(game, x1, y1, startj, starti)
{
    Phaser.Sprite.call(this,game,x1,y1,'Mace');
    this.x1=x1;
    this.y1=y1;
    this.starti=starti;
    this.startj=startj;
    this.anchor.setTo(0.5, 0.5);
};

tetrisPlus.Mace.prototype.startGrid=function(GridTetris)
{
   //INICIAMOS LA MAZA EN EL GRID
    GridTetris[this.starti][this.startj]=1;
    GridTetris[this.starti][this.startj-1]=2;
    GridTetris[this.starti][this.startj-2]=3;
    GridTetris[this.starti][this.startj-3]=4;
    GridTetris[this.starti][this.startj-4]=5;
    GridTetris[this.starti][this.startj+1]=6;
    GridTetris[this.starti][this.startj+2]=7;
    GridTetris[this.starti][this.startj+3]=8;    
};