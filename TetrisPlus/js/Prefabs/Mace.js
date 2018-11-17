var Phaser = Phaser || {};
var tetrisPlus = tetrisPlus || {};

tetrisPlus.Mace = function(game, x1, y1, startj, starti)
{
    Phaser.Sprite.call(this, game, x1, y1, 'MaceCompleted');
    this.scale.setTo(2);
    this.x1=x1;
    this.y1=y1;
    this.starti=starti;
    this.startj=startj;
};

tetrisPlus.Mace.prototype = Object.create(Phaser.Sprite.prototype);
tetrisPlus.Mace.prototype.constructor = tetrisPlus.Mace;

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