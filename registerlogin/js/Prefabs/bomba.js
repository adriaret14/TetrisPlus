var Phaser = Phaser || {};
var tetrisPlus = tetrisPlus || {};

tetrisPlus.bomba = function(game, x1, y1, startj, starti, GridTetris)
{
    //Phaser.Sprite.call(this,game,x1,y1,'T');
    //Phaser.Sprite.call(this,game,x2,y2,'T');
    Phaser.Sprite.call(this,game,x1,y1,'bomba');
    this.scale.setTo(2);
    this.x1=x1;
    this.y1=y1;
    this.starti=starti;
    this.startj=startj;
    this.anchor.setTo(0.625, 0.5);
    this.cantMoveDown=false;
    this.cantMoveLeft=false;
    this.cantMoveRight=false;
    this.cantRotate=false;
    this.GridTetris=GridTetris;
    this.previ1;
    this.prevj1;
    this.contDer;
    this.contIzq;
    this.contDown=0;
    this.currRot=0;
    this.RotFlag=false;
    this.type="B";
    
    //FISICAS
    this.game.physics.arcade.enable(this);
    this.body.collideWorldBounds = true;
    this.body.immovable = true;

    
};
tetrisPlus.bomba.prototype = Object.create(Phaser.Sprite.prototype);
tetrisPlus.bomba.prototype.constructor = tetrisPlus.bomba;
tetrisPlus.bomba.prototype.startGrid=function()
{
    //INICIAMOS LA PIEZA EN EL GRID
    this.GridTetris[this.starti][this.startj]=6;
};
tetrisPlus.bomba.prototype.move=function(direction, distance)
{
    this.contDer=0;
    this.contIzq=0;
    //MIRAMOS SI COLISIONA
    for(var i=0; i< this.GridTetris.length; i++)
    {
        for(var j=0; j<this.GridTetris[i].length; j++)
        {
            /*if(this.GridTetris[i][j]==5)
                console.log("Obstáculo: "+i+","+j);*/
            if(this.GridTetris[i][j]==6)
            {
                //Abajo
                //console.log("VAL: "+this.GridTetris[i][j]+" ["+i+","+j+"]");
                if(this.GridTetris[i+1][j]==5)
                {
                   
                    //console.log(i+","+j);
                    //console.log(this.GridTetris[i][j]+"-No puedes abajo");
                    //console.log("entra");
                    this.contDown++;
                    //this.cantMoveDown=true;
                    //this.cantMoveLeft=true;
                    //this.cantMoveRight=true;
                    //break;
                }
                //Izquierda
                if(this.GridTetris[i][j-1]==5)
                {
                    //console.log(this.GridTetris[i][j]+"-No puedes izquierda"+this.cantMoveLeft);
                    //this.cantMoveLeft=true;
                    //break;
                    this.contIzq++;
                }
                else
                {
                    //console.log(this.GridTetris[i][j]+"-Puedes izquierda");
                    //this.cantMoveLeft=false;
                }
                
                //Derecha
                if(this.GridTetris[i][j+1]==5)
                {
                    //console.log(i+","+j);
                    //console.log(this.GridTetris[i][j]+"-No puedes derecha"+this.cantMoveRight);
                    //this.cantMoveRight=true;
                    //break;
                    this.contDer++;
                }
                else
                {
                    //console.log(this.GridTetris[i][j]+"-Puedes derecha");
                    //this.cantMoveRight=false;
                }
            }
        }
    }
    
    
    if(this.contDer>0)
        {
            this.cantMoveRight=true;
        }
    else{
        this.cantMoveRight=false;
    }
    if(this.contIzq>0)
        {
            this.cantMoveLeft=true;
        }
    else{
        this.cantMoveLeft=false;
    }
    if(this.contDown>0)
        {
            this.cantMoveDown=true;
            this.cantMoveLeft=true;
            this.cantMoveRight=true;
        }
    
    //MOVEMOS LA PIEZA POR EL GRID DEL MAPA
    if(direction==1)
        {
            if(!this.cantMoveLeft)
            {
                this.x-=distance;
                
                //ARREGLAMOS EL GRID DE POSICIONES(Para el cálculo de colisiones de piezas)
                 for(var i=0; i<this.GridTetris.length; i++)
                 {
                     for(var j=0;j<this.GridTetris[i].length; j++)
                     {
                         if(this.GridTetris[i][j]==6)
                         {
                             //tetrisPlus.movePieces();
                             //this.GridTetris[i][j]==null;
                             //this.GridTetris[i+1][j]==1;
                             //console.log("1-:"+i+","+j);
                             this.previ1=i;
                             this.prevj1=j;
                         }
                     }
                }
                this.GridTetris[this.previ1][this.prevj1]=null;
                
                this.GridTetris[this.previ1][this.prevj1-1]=6;
            }
            
        }
    else if(direction==2)
        {
            if(!this.cantMoveRight)
            {
               this.x+=distance;
                
                //ARREGLAMOS EL GRID DE POSICIONES(Para el cálculo de colisiones de piezas)
                 for(var i=0; i<this.GridTetris.length; i++)
                 {
                     for(var j=0;j<this.GridTetris[i].length; j++)
                     {
                         if(this.GridTetris[i][j]==6)
                         {
                             //tetrisPlus.movePieces();
                             //this.GridTetris[i][j]==null;
                             //this.GridTetris[i+1][j]==1;
                             //console.log("1-:"+i+","+j);
                             this.previ1=i;
                             this.prevj1=j;
                         }
                     }
                }
                this.GridTetris[this.previ1][this.prevj1]=null;
                
                this.GridTetris[this.previ1][this.prevj1+1]=6;
            }
            
        }
    else if(direction==3)
        {
            if(!this.cantMoveDown)
            {
                this.y+=distance;
                
                //ARREGLAMOS EL GRID DE POSICIONES(Para el cálculo de colisiones de piezas)
                 for(var i=0; i<this.GridTetris.length; i++)
                 {
                     for(var j=0;j<this.GridTetris[i].length; j++)
                     {
                         if(this.GridTetris[i][j]==6)
                         {
                             //tetrisPlus.movePieces();
                             //this.GridTetris[i][j]==null;
                             //this.GridTetris[i+1][j]==1;
                             //console.log("1-:"+i+","+j);
                             this.previ1=i;
                             this.prevj1=j;
                         }
                     }
                }
                this.GridTetris[this.previ1][this.prevj1]=null;
                
                this.GridTetris[this.previ1+1][this.prevj1]=6;
            }
     }
};