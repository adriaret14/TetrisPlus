var Phaser = Phaser || {};
var tetrisPlus = tetrisPlus || {};

tetrisPlus.Box_Piece = function(game, x1, y1, startj, starti)
{
    //Phaser.Sprite.call(this,game,x1,y1,'T');
    //Phaser.Sprite.call(this,game,x2,y2,'T');
    Phaser.Sprite.call(this,game,x1,y1,'R_Complete');
    this.scale.setTo(2);
    this.x1=x1;
    this.y1=y1;
    this.starti=starti;
    this.startj=startj;
    this.anchor.setTo(0.75, 0.25);
    
   

    
};
tetrisPlus.Box_Piece.prototype = Object.create(Phaser.Sprite.prototype);
tetrisPlus.Box_Piece.prototype.constructor = tetrisPlus.Box_Piece;
tetrisPlus.Box_Piece.prototype.startGrid=function(GridTetris)
{
    //INICIAMOS LA PIEZA EN EL GRID
    GridTetris[this.starti][this.startj]=1;
    GridTetris[this.starti+1][this.startj]=2;
    GridTetris[this.starti+1][this.startj-1]=3;
    GridTetris[this.starti][this.startj-1]=4;
};
tetrisPlus.Box_Piece.prototype.move=function(direction, distance, GridTetris)
{
    //MOVEMOS LA PIEZA POR EL GRID DEL MAPA
    if(direction==1)
        {
           this.x-=distance; 
        }
    else if(direction==2)
        {
            this.x+=distance;
        }
    else if(direction==3)
        {
            this.y+=distance;
        }
    
    //ARREGLAMOS EL GRID DE POSICIONES(Para el cálculo de colisiones de piezas)
     for(var i=0; i<GridTetris.length; i++)
     {
         for(var j=0;j<GridTetris[i].length; j++)
             {
                 if(GridTetris[i][j]==1 || GridTetris[i][j]==2 || GridTetris[i][j]==3 || GridTetris[i][j]==4)
                     {
                         //tetrisPlus.movePieces();
                         GridTetris[i][j]==null;
                         GridTetris[i+1][j]==1;   
                     }
             }
     }
};
tetrisPlus.Box_Piece.prototype.rotate=function(currentRotation, GridTetris)
{
    //ROTAMOS LA PIEZA    

};

