var Phaser = Phaser || {};
var tetrisPlus = tetrisPlus || {};

tetrisPlus.Bar_Piece = function(game, x1, y1, startj, starti, GridTetris)
{
    //Phaser.Sprite.call(this,game,x1,y1,'T');
    //Phaser.Sprite.call(this,game,x2,y2,'T');
    Phaser.Sprite.call(this,game,x1,y1,'I_Complete');
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
    this.previ2;
    this.prevj2;
    this.previ3;
    this.prevj3;
    this.previ4;
    this.prevj4;
    this.nexti1;
    this.nextj1;
    this.nexti2;
    this.nextj2;
    this.nexti3;
    this.nextj3;
    this.nexti4;
    this.nextj4;
    this.contDer;
    this.contIzq;
    this.contDown=0;
    this.currRot=0;
    this.RotFlag=false;
    this.type="I";
    
   //FISICAS
    this.game.physics.arcade.enable(this);
    this.body.collideWorldBounds = true;
    this.body.immovable = true;

    
};
tetrisPlus.Bar_Piece.prototype = Object.create(Phaser.Sprite.prototype);
tetrisPlus.Bar_Piece.prototype.constructor = tetrisPlus.Bar_Piece;
tetrisPlus.Bar_Piece.prototype.startGrid=function()
{
    //INICIAMOS LA PIEZA EN EL GRID
    this.GridTetris[this.starti][this.startj]=1;
    this.GridTetris[this.starti][this.startj-1]=2;
    this.GridTetris[this.starti][this.startj-2]=3;
    this.GridTetris[this.starti][this.startj+1]=4;
};
tetrisPlus.Bar_Piece.prototype.move=function(direction, distance)
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
            if(this.GridTetris[i][j]==1 || this.GridTetris[i][j]==2 || this.GridTetris[i][j]==3 || this.GridTetris[i][j]==4)
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
                         if(this.GridTetris[i][j]==1)
                         {
                             //tetrisPlus.movePieces();
                             //this.GridTetris[i][j]==null;
                             //this.GridTetris[i+1][j]==1;
                             //console.log("1-:"+i+","+j);
                             this.previ1=i;
                             this.prevj1=j;
                         }
                         else if(this.GridTetris[i][j]==2)
                         {
                             //this.GridTetris[i][j]==null;
                             //this.GridTetris[i+1][j]==2;
                             //console.log("2-:"+i+","+j);
                             this.previ2=i;
                             this.prevj2=j;
                         }
                         else if(this.GridTetris[i][j]==3)
                         {
                             //this.GridTetris[i][j]==null;
                             //this.GridTetris[i+1][j]==3;
                             //console.log("3-:"+i+","+j);
                             this.previ3=i;
                             this.prevj3=j;
                         }
                         else if(this.GridTetris[i][j]==4)
                         {
                             //this.GridTetris[i][j]==null;
                             //this.GridTetris[i+1][j]==4;
                             //console.log("4-:"+i+","+j);
                             this.previ4=i;
                             this.prevj4=j;
                         }
                     }
                }
                this.GridTetris[this.previ1][this.prevj1]=null;
                this.GridTetris[this.previ2][this.prevj2]=null;
                this.GridTetris[this.previ3][this.prevj3]=null;
                this.GridTetris[this.previ4][this.prevj4]=null;
                
                this.GridTetris[this.previ1][this.prevj1-1]=1;
                this.GridTetris[this.previ2][this.prevj2-1]=2;
                this.GridTetris[this.previ3][this.prevj3-1]=3;
                this.GridTetris[this.previ4][this.prevj4-1]=4;
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
                         if(this.GridTetris[i][j]==1)
                         {
                             //tetrisPlus.movePieces();
                             //this.GridTetris[i][j]==null;
                             //this.GridTetris[i+1][j]==1;
                             //console.log("1-:"+i+","+j);
                             this.previ1=i;
                             this.prevj1=j;
                         }
                         else if(this.GridTetris[i][j]==2)
                         {
                             //this.GridTetris[i][j]==null;
                             //this.GridTetris[i+1][j]==2;
                             //console.log("2-:"+i+","+j);
                             this.previ2=i;
                             this.prevj2=j;
                         }
                         else if(this.GridTetris[i][j]==3)
                         {
                             //this.GridTetris[i][j]==null;
                             //this.GridTetris[i+1][j]==3;
                             //console.log("3-:"+i+","+j);
                             this.previ3=i;
                             this.prevj3=j;
                         }
                         else if(this.GridTetris[i][j]==4)
                         {
                             //this.GridTetris[i][j]==null;
                             //this.GridTetris[i+1][j]==4;
                             //console.log("4-:"+i+","+j);
                             this.previ4=i;
                             this.prevj4=j;
                         }
                     }
                }
                this.GridTetris[this.previ1][this.prevj1]=null;
                this.GridTetris[this.previ2][this.prevj2]=null;
                this.GridTetris[this.previ3][this.prevj3]=null;
                this.GridTetris[this.previ4][this.prevj4]=null;
                
                this.GridTetris[this.previ1][this.prevj1+1]=1;
                this.GridTetris[this.previ2][this.prevj2+1]=2;
                this.GridTetris[this.previ3][this.prevj3+1]=3;
                this.GridTetris[this.previ4][this.prevj4+1]=4;
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
                         if(this.GridTetris[i][j]==1)
                         {
                             //tetrisPlus.movePieces();
                             //this.GridTetris[i][j]==null;
                             //this.GridTetris[i+1][j]==1;
                             //console.log("1-:"+i+","+j);
                             this.previ1=i;
                             this.prevj1=j;
                         }
                         else if(this.GridTetris[i][j]==2)
                         {
                             //this.GridTetris[i][j]==null;
                             //this.GridTetris[i+1][j]==2;
                             //console.log("2-:"+i+","+j);
                             this.previ2=i;
                             this.prevj2=j;
                         }
                         else if(this.GridTetris[i][j]==3)
                         {
                             //this.GridTetris[i][j]==null;
                             //this.GridTetris[i+1][j]==3;
                             //console.log("3-:"+i+","+j);
                             this.previ3=i;
                             this.prevj3=j;
                         }
                         else if(this.GridTetris[i][j]==4)
                         {
                             //this.GridTetris[i][j]==null;
                             //this.GridTetris[i+1][j]==4;
                             //console.log("4-:"+i+","+j);
                             this.previ4=i;
                             this.prevj4=j;
                         }
                     }
                }
                this.GridTetris[this.previ1][this.prevj1]=null;
                this.GridTetris[this.previ2][this.prevj2]=null;
                this.GridTetris[this.previ3][this.prevj3]=null;
                this.GridTetris[this.previ4][this.prevj4]=null;
                
                this.GridTetris[this.previ1+1][this.prevj1]=1;
                this.GridTetris[this.previ2+1][this.prevj2]=2;
                this.GridTetris[this.previ3+1][this.prevj3]=3;
                this.GridTetris[this.previ4+1][this.prevj4]=4;
            }
     }
};
tetrisPlus.Bar_Piece.prototype.rotate=function(currentRotation)
{
    //SETEAMOS EL VALOR DE LA FLAG
    this.RotFlag=false;
    
    
    //RECOGEMOS LOS VALORES DE LAS PIEZAS
    for(var i=0; i<this.GridTetris.length; i++)
    {
        for(var j=0; j<this.GridTetris[i].length; j++)
        {
            if(this.GridTetris[i][j]==1 || this.GridTetris[i][j]==2 || this.GridTetris[i][j]==3 || this.GridTetris[i][j]==4)
            {
                if(this.GridTetris[i][j]==1)
                {
                    this.previ1=i;
                    this.prevj1=j;
                }
                if(this.GridTetris[i][j]==2)
                {
                    this.previ2=i;
                    this.prevj2=j;
                }
                if(this.GridTetris[i][j]==3)
                {
                    this.previ3=i;
                    this.prevj3=j;
                }
                if(this.GridTetris[i][j]==4)
                {
                    this.previ4=i;
                    this.prevj4=j;
                }
            }
        }
    }
    
    
    //ROTAMOS LA PIEZA
    if(!this.cantMoveDown)
    {
        if(currentRotation==1 || currentRotation==3)
        {
            if(this.GridTetris[this.previ1][this.prevj1]!=5 && this.GridTetris[this.previ2+1][this.prevj2+1]!=5 && this.GridTetris[this.previ3+2][this.prevj3+2]!=5 && this.GridTetris[this.previ4-1][this.prevj4-1]!=5)
                {
                    //console.log("1/3");
                    this.angle=-90;
                    this.RotFlag=true;
                    this.currRot=currentRotation;
                }
        }
        else
        {
            if(this.GridTetris[this.previ1][this.prevj1]!=5 && this.GridTetris[this.previ2-1][this.prevj2-1]!=5 && this.GridTetris[this.previ3-2][this.prevj3-2]!=5 && this.GridTetris[this.previ4+1][this.prevj4+1]!=5)
               {
                    //console.log("0/2");
                    this.angle=0;
                    this.RotFlag=true;
                    this.currRot=currentRotation
               }
        }

        //ARREGLAMOS EL GRID DE POSICIONES
        if(this.RotFlag)
        {
            if(currentRotation==1 || currentRotation==3)
            { 
                 this.GridTetris[this.previ1][this.prevj1]=null;
                 this.GridTetris[this.previ2][this.prevj2]=null;
                 this.GridTetris[this.previ3][this.prevj3]=null;
                 this.GridTetris[this.previ4][this.prevj4]=null;

                 this.GridTetris[this.previ1][this.prevj1]=1;
                 this.GridTetris[this.previ2+1][this.prevj2+1]=2;
                 this.GridTetris[this.previ3+2][this.prevj3+2]=3;
                 this.GridTetris[this.previ4-1][this.prevj4-1]=4;       
            }
            else
            {
                this.GridTetris[this.previ1][this.prevj1]=null;
                this.GridTetris[this.previ2][this.prevj2]=null;
                this.GridTetris[this.previ3][this.prevj3]=null;
                this.GridTetris[this.previ4][this.prevj4]=null;

                this.GridTetris[this.previ1][this.prevj1]=1;
                this.GridTetris[this.previ2-1][this.prevj2-1]=2;
                this.GridTetris[this.previ3-2][this.prevj3-2]=3;
                this.GridTetris[this.previ4+1][this.prevj4+1]=4;
            }
        }
        
    }
        

};


