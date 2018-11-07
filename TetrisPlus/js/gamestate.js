var Phaser = Phaser || {};
var tetrisPlus = tetrisPlus || {};

var counter=0;
var startX=4;
var startY=1;
var distX;
var distY;
var currentPiece;
var nextPiece;
var piece=new Array(4);

var GridTetris;

tetrisPlus.gameState = {
    preload:function(){
        this.stage.backgroundColor="00000";
        
        tetrisPlus.game.load.image('R','assets/img/Box_Single.png');
        tetrisPlus.game.load.image('I','assets/img/Bar_Single.png');
        tetrisPlus.game.load.image('L','assets/img/L_Single.png');
        tetrisPlus.game.load.image('J','assets/img/L_Inverted_Single.png');
        tetrisPlus.game.load.image('S','assets/img/S_Single.png');
        tetrisPlus.game.load.image('Z','assets/img/S_Inverted_Single.png');
        tetrisPlus.game.load.image('T','assets/img/T_Single.png');
        
    },
    create:function(){        
        
        //tetrisPlus.game.time.events.loop(Phaser.Timer.SECOND, updateCounter, this);
        //VARIABLES PARA DEFINIR EL CENTRO DE CADA CELDA DEL GRID(BASADAS EN LAS PIEZAS DEL TETRIS QUE SON DE 8X8 PX)
        
        distX=16;
        distY=distX;
        
        //CREACIÓN DEL GRID DE JUEGO
         
        GridTetris=new Array(25);
        for(var i=0; i<GridTetris.length; i++)
            {
                GridTetris[i]=new Array(10);
            }
        
        //ACTIVAMOS LA CASILLA DE SPAWN DEL COM DE LA PIEZA
        GridTetris[startX][startY]=1;
        
        //ASIGNAMOS LA PIEZA MEDIANTE UN TRUE RANDOM
       currentPiece=Math.floor((Math.random() * 7) + 1);
       //currentPiece=7;
        
                        if(GridTetris[startX][startY]!=null)
                            {
                                //var piece=tetrisPlus.game.add.image(distY*i, distX*j,'R');
                                //piece.scale.setTo(2);
                                //var PieceActive = new tetrisPlus.T_Piece(tetrisPlus.game,distY*i, distX*j);
                                switch(currentPiece)
                                    {
                                        case 1:
                                            //Cubo
                                             //var piece=tetrisPlus.game.add.image(distY*i, distX*j,'R');
                                            
                                            //POSICIONES INICIALES
                                            piece[0]=tetrisPlus.game.add.image(distY*startX, distX*startY,'R');
                                            piece[1]=tetrisPlus.game.add.image(distY*(startX-1), distX*startY,'R');
                                            piece[2]=tetrisPlus.game.add.image(distY*(startX-1), distX*(startY+1),'R');
                                            piece[3]=tetrisPlus.game.add.image(distY*startX, distX*(startY+1),'R');
                                            
                                            //ESCALAMOS LAS PIEZAS
                                            piece[0].scale.setTo(2);
                                            piece[1].scale.setTo(2);
                                            piece[2].scale.setTo(2);
                                            piece[3].scale.setTo(2);
                                            
                                            //ROTACION INICIAL
                                            
                                            //ACTIVAMOS LAS CASILLAS

                                            break;
                                        case 2:
                                            //Barra
                                            //var piece=tetrisPlus.game.add.image(distY*i, distX*j,'I');
                                            
                                            //POSICIONES INICIALES
                                            piece[0]=tetrisPlus.game.add.image(distY*startX, distX*startY,'I');
                                            piece[1]=tetrisPlus.game.add.image(distY*(startX-1), distX*startY,'I');
                                            piece[2]=tetrisPlus.game.add.image(distY*(startX-2), distX*startY,'I');
                                            piece[3]=tetrisPlus.game.add.image(distY*(startX+1), distX*startY,'I');
                                            
                                            //ESCALAMOS LAS PIEZAS
                                            piece[0].scale.setTo(2);
                                            piece[1].scale.setTo(2);
                                            piece[2].scale.setTo(2);
                                            piece[3].scale.setTo(2);
                                            
                                            //ROTACION INICIAL
                                            
                                            //ACTIVAMOS LAS CASILLAS
                                            
                                            break;
                                        case 3:
                                            //S
                                            //var piece=tetrisPlus.game.add.image(distY*i, distX*j,'S');
                                            
                                            //POSICIONES INICIALES
                                            piece[0]=tetrisPlus.game.add.image(distY*startX, distX*startY,'S');
                                            piece[1]=tetrisPlus.game.add.image(distY*(startX+1), distX*startY,'S');
                                            piece[2]=tetrisPlus.game.add.image(distY*startX, distX*(startY+1),'S');
                                            piece[3]=tetrisPlus.game.add.image(distY*(startX-1), distX*(startY+1),'S');
                                            
                                            //ESCALAMOS LAS PIEZAS
                                            piece[0].scale.setTo(2);
                                            piece[1].scale.setTo(2);
                                            piece[2].scale.setTo(2);
                                            piece[3].scale.setTo(2);
                                            
                                            //ROTACION INICIAL
                                            
                                            //ACTIVAMOS LAS CASILLAS
                                            
                                            break;
                                        case 4:
                                            //Z
                                            //var piece=tetrisPlus.game.add.image(distY*i, distX*j,'Z');
                                            
                                            //POSICIONES INICIALES
                                            piece[0]=tetrisPlus.game.add.image(distY*startX, distX*startY,'Z');
                                            piece[1]=tetrisPlus.game.add.image(distY*(startX-1), distX*startY,'Z');
                                            piece[2]=tetrisPlus.game.add.image(distY*startX, distX*(startY+1),'Z');
                                            piece[3]=tetrisPlus.game.add.image(distY*(startX+1), distX*(startY+1),'Z');
                                            
                                            //ESCALAMOS LAS PIEZAS
                                            piece[0].scale.setTo(2);
                                            piece[1].scale.setTo(2);
                                            piece[2].scale.setTo(2);
                                            piece[3].scale.setTo(2);
                                            
                                            //ROTACION INICIAL
                                            
                                            //ACTIVAMOS LAS CASILLAS
                                            
                                            break;
                                        case 5:
                                            //J
                                            //var piece=tetrisPlus.game.add.image(distY*i, distX*j,'J');
                                            
                                            //POSICIONES INICIALES
                                            piece[0]=tetrisPlus.game.add.image(distY*startX, distX*startY,'J');
                                            piece[1]=tetrisPlus.game.add.image(distY*(startX+1), distX*startY,'J');
                                            piece[2]=tetrisPlus.game.add.image(distY*(startX+1), distX*(startY+1),'J');
                                            piece[3]=tetrisPlus.game.add.image(distY*(startX-1), distX*startY,'J');
                                            
                                            //ESCALAMOS LAS PIEZAS
                                            piece[0].scale.setTo(2);
                                            piece[1].scale.setTo(2);
                                            piece[2].scale.setTo(2);
                                            piece[3].scale.setTo(2);
                                            
                                            //ROTACION INICIAL
                                            
                                            //ACTIVAMOS LAS CASILLAS
                                            
                                            break;
                                        case 6:
                                            //L
                                            //var piece=tetrisPlus.game.add.image(distY*i, distX*j,'L');
                                            
                                            //POSICIONES INICIALES
                                            piece[0]=tetrisPlus.game.add.image(distY*startX, distX*startY,'L');
                                            piece[1]=tetrisPlus.game.add.image(distY*(startX-1), distX*startY,'L');
                                            piece[2]=tetrisPlus.game.add.image(distY*(startX-1), distX*(startY+1),'L');
                                            piece[3]=tetrisPlus.game.add.image(distY*(startX+1), distX*startY,'L');
                                            
                                            //ESCALAMOS LAS PIEZAS
                                            piece[0].scale.setTo(2);
                                            piece[1].scale.setTo(2);
                                            piece[2].scale.setTo(2);
                                            piece[3].scale.setTo(2);
                                            
                                            //ROTACION INICIAL
                                            
                                            //ACTIVAMOS LAS CASILLAS
                                            
                                            break;
                                        case 7:
                                            //T
                                            //var piece=tetrisPlus.game.add.image(distY*i, distX*j,'T');
                                            
                                            //POSICIONES INICIALES
                                            piece[0]=tetrisPlus.game.add.image(distY*startX, distX*startY,'T');
                                            piece[1]=tetrisPlus.game.add.image(distY*startX, distX*(startY+1),'T');
                                            piece[2]=tetrisPlus.game.add.image(distY*(startX-1), distX*startY,'T');
                                            piece[3]=tetrisPlus.game.add.image(distY*(startX+1), distX*startY,'T');
                                            
                                            //ESCALADO DE PIEZAS
                                            piece[0].scale.setTo(2);
                                            piece[1].scale.setTo(2);
                                            piece[2].scale.setTo(2);
                                            piece[3].scale.setTo(2);
                                            
                                            //ROTACIÓN INICIAL
                                            
                                            //ACTIVAMOS LAS CASILLAS
                                            
                                            break;
                                    }
                            }

    },
    update:function(){
        counter++;
        if(counter>=80)
            {
                counter=0;
                console.log(counter);
                for(var i=0; i<GridTetris.length; i++)
                    {
                        for(var j=0;j<GridTetris[i].length; j++)
                            {
                                if(GridTetris[i][j]==1)
                                    {
                                        tetrisPlus.movePieces();
                                        GridTetris[i][j]==null;
                                        GridTetris[i+1][j]==1;
                                        piece[0].position.y+=distY;
                                        piece[1].position.y+=distY;
                                        piece[2].position.y+=distY;
                                        piece[3].position.y+=distY;
                                    }
                            }
                    }

            }
        
    },
    movePieces:function(var i, var j, var direction){
        
    }
};

