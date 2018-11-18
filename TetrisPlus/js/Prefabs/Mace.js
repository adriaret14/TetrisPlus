var Phaser = Phaser || {};
var tetrisPlus = tetrisPlus || {};

tetrisPlus.Mace = function(game, x1, y1, startj, starti)
{
    Phaser.Sprite.call(this, game, x1, y1, 'MaceCompleted');
    this.scale.setTo(2);
    this.x1=x1;
    this.y1=y1;
    this.starti=starti;
    this.previ1;
    this.startj=startj;
    this.nexti1=(starti+1);
   
};

tetrisPlus.Mace.prototype = Object.create(Phaser.Sprite.prototype);
tetrisPlus.Mace.prototype.constructor = tetrisPlus.Mace;

tetrisPlus.Mace.prototype.startGrid=function(GridTetris)
{
   //INICIAMOS LA MAZA EN EL GRID
    for(var i=0;i<10;i++)
    {
        GridTetris[this.starti][this.startj]=11;
        GridTetris[this.starti][this.startj+1]=11;
        GridTetris[this.starti][this.startj+2]=11;
        GridTetris[this.starti][this.startj+3]=11;
        GridTetris[this.starti][this.startj+4]=11;
        GridTetris[this.starti][this.startj+5]=11;
        GridTetris[this.starti][this.startj+6]=11;
        GridTetris[this.starti][this.startj+7]=11;
        GridTetris[this.starti][this.startj+8]=11;
        GridTetris[this.starti][this.startj+9]=11;
    }
};
tetrisPlus.Mace.prototype.fall=function(distance)
{
     this.y+=distance;    
    //Actualizamos Grid
    this.previ1=this.starti;    
    this.starti++;
    this.nexti1++;  
    //Actualizamos posicion previa
    /*for(var i=0;i<10;i++)
    {
        this.GridTetris[this.previ1][this.startj]=null;
        this.GridTetris[this.previ1][this.startj+1]=null;
        this.GridTetris[this.previ1][this.startj+2]=null;
        this.GridTetris[this.previ1][this.startj+3]=null;
        this.GridTetris[this.previ1][this.startj+4]=null;
        this.GridTetris[this.previ1][this.startj+5]=null;
        this.GridTetris[this.previ1][this.startj+6]=null;
        this.GridTetris[this.previ1][this.startj+7]=null;
        this.GridTetris[this.previ1][this.startj+8]=null;
        this.GridTetris[this.previ1][this.startj+9]=null;
    }
    //actualizamos posicion actual
    for(var j=0;j<10;j++)
    {
        this.GridTetris[this.starti][this.startj]=11;
        this.GridTetris[this.starti][this.startj+1]=11;
        this.GridTetris[this.starti][this.startj+2]=11;
        this.GridTetris[this.starti][this.startj+3]=11;
        this.GridTetris[this.starti][this.startj+4]=11;
        this.GridTetris[this.starti][this.startj+5]=11;
        this.GridTetris[this.starti][this.startj+6]=11;
        this.GridTetris[this.starti][this.startj+7]=11;
        this.GridTetris[this.starti][this.startj+8]=11;
        this.GridTetris[this.starti][this.startj+9]=11;
    }
    */
    
}