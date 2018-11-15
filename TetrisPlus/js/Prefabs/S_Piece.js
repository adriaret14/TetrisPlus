var Phaser = Phaser || {};
var tetrisPlus = tetrisPlus || {};

tetrisPlus.S_Piece = function(game, x1, y1, startj, starti)
{
    //Phaser.Sprite.call(this,game,x1,y1,'T');
    //Phaser.Sprite.call(this,game,x2,y2,'T');
    Phaser.Sprite.call(this,game,x1,y1,'S_Complete');
    this.scale.setTo(2);
    this.x1=x1;
    this.y1=y1;
    this.starti=starti;
    this.startj=startj;
    this.anchor.setTo(0.5, 0.25);
    
   

    
};
tetrisPlus.S_Piece.prototype = Object.create(Phaser.Sprite.prototype);
tetrisPlus.S_Piece.prototype.constructor = tetrisPlus.S_Piece;
tetrisPlus.S_Piece.prototype.startGrid=function(GridTetris)
{
    //INICIAMOS LA PIEZA EN EL GRID
    GridTetris[this.starti][this.startj]=1;
    GridTetris[this.starti][this.startj+1]=2;
    GridTetris[this.starti+1][this.startj]=3;
    GridTetris[this.starti+1][this.startj-1]=4;
};
tetrisPlus.S_Piece.prototype.move=function(direction, distance, GridTetris)
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
tetrisPlus.S_Piece.prototype.rotate=function(currentRotation, GridTetris)
{
    //ROTAMOS LA PIEZA
    if(currentRotation==1 || currentRotation==3)
    {
        //console.log("1");
        this.angle=-90;
    }
    else
    {
        //console.log("4");
        this.angle=0;
    }
    
    //ARREGLAMOS EL GRID DE POSICIONES(Para el cálculo de colisiones de piezas)
    
    if(currentRotation==1 || currentRotation==3)
    {
         for(var i=0; i<GridTetris.length; i++)
         {
             for(var j=0; j<GridTetris[i].length; j++)
                 {
                     if(GridTetris[i][j]==1 || GridTetris[i][j]==2 || GridTetris[i][j]==3 || GridTetris[i][j]==4)
                         {
                             GridTetris[i][j]=null;
                             if(GridTetris[i][j]==2)
                                 {
                                     GridTetris[i-1][j-1]=2;
                                 }
                             if(GridTetris[i][j]==3)
                                 {
                                     GridTetris[i-1][j+1]=3;
                                 }
                             if(GridTetris[i][j]==4)
                                 {
                                     GridTetris[i][j+2]=4;
                                 }
                         }
                 }
         }   
    }
    else 
    {
        for(var i=0; i<GridTetris.length; i++)
         {
             for(var j=0; j<GridTetris[i].length; j++)
                 {
                     if(GridTetris[i][j]==1 || GridTetris[i][j]==2 || GridTetris[i][j]==3 || GridTetris[i][j]==4)
                         {
                             GridTetris[i][j]=null;
                             if(GridTetris[i][j]==2)
                                 {
                                     GridTetris[i+1][j+1]=2;
                                 }
                             if(GridTetris[i][j]==3)
                                 {
                                     GridTetris[i+1][j-1]=3;
                                 }
                             if(GridTetris[i][j]==4)
                                 {
                                     GridTetris[i][j-2]=4;
                                 }
                         }
                 }
         }
    }    

};

