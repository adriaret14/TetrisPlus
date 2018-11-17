var Phaser = Phaser || {};
var tetrisPlus = tetrisPlus || {};

var counter=0;
var startX=4;
var startY=1;
var distX;
var distY;
var currentPiece;
var nextPiece;
var PieceActive;
var piece=new Array(4);
var blocks=new Array();
var tapL=false;
var tapR=false;
var tapZ=false;
var dropSpeed=80;
var realDropSpeed=dropSpeed;
var initialRot=0;

var Piecei1;
var Piecej1;
var Piecei2;
var Piecej2;
var Piecei3;
var Piecej3;
var Piecei4;
var Piecej1;


var GridTetris;

tetrisPlus.gameState = {
    preload:function(){
        this.stage.backgroundColor="00000";
        //Añadimos las imagenes simples
        tetrisPlus.game.load.image('R','assets/img/Box_Single.png');
        tetrisPlus.game.load.image('I','assets/img/Bar_Single.png');
        tetrisPlus.game.load.image('L','assets/img/L_Single.png');
        tetrisPlus.game.load.image('J','assets/img/L_Inverted_Single.png');
        tetrisPlus.game.load.image('S','assets/img/S_Single.png');
        tetrisPlus.game.load.image('Z','assets/img/S_Inverted_Single.png');
        tetrisPlus.game.load.image('T','assets/img/T_Single.png');
        
        //Añadimos las imagenes completas
        tetrisPlus.game.load.image('R_Complete','assets/img/Box.png');
        tetrisPlus.game.load.image('I_Complete','assets/img/Bar.png');
        tetrisPlus.game.load.image('L_Complete','assets/img/L.png');
        tetrisPlus.game.load.image('J_Complete','assets/img/L_Inverted.png');
        tetrisPlus.game.load.image('S_Complete','assets/img/S.png');
        tetrisPlus.game.load.image('Z_Complete','assets/img/S_Inverted.png');
        tetrisPlus.game.load.image('T_Complete','assets/img/T.png');
        
        //Añadimos extras
        tetrisPlus.game.load.image('Mace','assets/img/Sierra.png');
    
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
        

        //GridTetris[18][4]=5;
        GridTetris[0][0]=5;
        GridTetris[1][0]=5;
        GridTetris[2][0]=5;
        GridTetris[3][0]=5;
        GridTetris[4][0]=5;
        GridTetris[5][0]=5;
        GridTetris[6][0]=5;
        GridTetris[7][0]=5;
        GridTetris[8][0]=5;
        GridTetris[9][0]=5;
        GridTetris[10][0]=5;
        GridTetris[11][0]=5;
        GridTetris[12][0]=5;
        GridTetris[13][0]=5;
        
        GridTetris[0][11]=5;
        GridTetris[1][11]=5;
        GridTetris[2][11]=5;
        GridTetris[3][11]=5;
        GridTetris[4][11]=5;
        GridTetris[5][11]=5;
        GridTetris[6][11]=5;
        GridTetris[7][11]=5;
        GridTetris[8][11]=5;
        GridTetris[9][11]=5;
        GridTetris[10][11]=5;
        GridTetris[11][11]=5;
        GridTetris[12][11]=5;
        GridTetris[13][11]=5;
        
        GridTetris[13][1]=5;
        GridTetris[13][2]=5;
        GridTetris[13][3]=5;
        GridTetris[13][4]=5;
        GridTetris[13][5]=5;
        GridTetris[13][6]=5;
        GridTetris[13][7]=5;
        GridTetris[13][8]=5;
        GridTetris[13][9]=5;
        GridTetris[13][10]=5;
        
        //GridTetris[18][6]=5;
        
        for(var i=0; i<GridTetris.length; i++)
            {
                for(var j=0; j< GridTetris[i].length; j++)
                    {
                        if(GridTetris[i][j]==5)
                            {
                                var a=tetrisPlus.game.add.image(distX*j, distY*i ,'R');
                                a.scale.setTo(2);
                                a.anchor.setTo(0.5);
                            }
                    }
            }

        
        

       /*var b=tetrisPlus.game.add.image(distX*4, distY*18 ,'R');
        b.scale.setTo(2);
        b.anchor.setTo(0.5);
        var c=tetrisPlus.game.add.image(distX*6, distY*18 ,'R');
        c.scale.setTo(2);
        c.anchor.setTo(0.5);*/

        
        
        //ASIGNAMOS LA PIEZA MEDIANTE UN TRUE RANDOM
       currentPiece=Math.floor((Math.random() * 7) + 1);
       //currentPiece=7;
        
       //var piece=tetrisPlus.game.add.image(distY*i, distX*j,'R');
       //piece.scale.setTo(2);
       /*PieceActive = new tetrisPlus.T_Piece(tetrisPlus.game,5*distX, 2*distY, 5, 2);
       tetrisPlus.game.add.existing(PieceActive);
       PieceActive.startGrid(GridTetris);*/
        /*PieceActive = new tetrisPlus.L_Piece(tetrisPlus.game,5*distX, 2*distY, 5, 2);
       tetrisPlus.game.add.existing(PieceActive);
       PieceActive.startGrid(GridTetris);*/
       /*PieceActive = new tetrisPlus.J_Piece(tetrisPlus.game,5*distX, 2*distY, 5, 2);
       tetrisPlus.game.add.existing(PieceActive);
       PieceActive.startGrid(GridTetris);*/
       /*PieceActive = new tetrisPlus.S_Piece(tetrisPlus.game,5*distX, 2*distY, 5, 2);
       tetrisPlus.game.add.existing(PieceActive);
       PieceActive.startGrid(GridTetris);*/
       /*PieceActive = new tetrisPlus.Z_Piece(tetrisPlus.game,5*distX, 2*distY, 5, 2);
       tetrisPlus.game.add.existing(PieceActive);
       PieceActive.startGrid(GridTetris);*/
       /*PieceActive = new tetrisPlus.Box_Piece(tetrisPlus.game,5*distX, 2*distY, 5, 2);
       tetrisPlus.game.add.existing(PieceActive);
       PieceActive.startGrid(GridTetris);*/
       PieceActive = new tetrisPlus.Bar_Piece(tetrisPlus.game,5*distX, 2*distY, 5, 2, GridTetris);
       tetrisPlus.game.add.existing(PieceActive);
       PieceActive.startGrid(GridTetris);
    
        
        //newPiece();
        
        //ASIGNAMOS LOS INPUTS
        key_right=tetrisPlus.game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
        key_left=tetrisPlus.game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
        key_down=tetrisPlus.game.input.keyboard.addKey(Phaser.Keyboard.DOWN);
        key_Z=tetrisPlus.game.input.keyboard.addKey(Phaser.Keyboard.Z);
        
        cursores=tetrisPlus.game.input.keyboard.createCursorKeys();

    },
    update:function(){
        
        //Drop the piece
        counter++;
        if(counter>=realDropSpeed)
        {
            console.log(PieceActive.cantMoveDown);
            PieceActive.move(3, distY);
            counter=0;
        }
        
        //MOVER HACIA LA IZQUIERDA
        if(cursores.left.isDown)
        {
            if(tapL==false)
            {
                PieceActive.move(1, distX);                        
                tapL=true;
            }
           
        }
        else 
        {
            tapL=false;
        }
        
        //MOVER HACIA LA DERECHA
        if(cursores.right.isDown)
        {
                if(tapR==false)
                {
                    PieceActive.move(2, distX);                        
                    tapR=true;
                }
            }
        else 
        {
            tapR=false;
        }
        
        //ACELERAR EL DROP DE PIEZAS
        if(cursores.down.isDown)
        {
            realDropSpeed=dropSpeed/8;
        }
        else
        {
            realDropSpeed=dropSpeed;
        }
        
        //ROTAR LA PIEZA
        if(key_Z.isDown)
        {
             if(tapZ==false)
             {
                 initialRot++;
                 if(initialRot>=4)
                 {
                    initialRot=0;    
                 }
                 PieceActive.rotate(initialRot);

                 console.log(initialRot);
                 tapZ=true;
             }
        }
        else
        {
            tapZ=false;
        }
        
        //SPAWNEAR NUEVA PIEZA
        if(PieceActive.cantMoveDown)
            {
                //console.log("A");
                
                //PieceActive.destroy();
            }
        
    }

};



