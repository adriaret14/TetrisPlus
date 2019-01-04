var Phaser = Phaser || {};
var tetrisPlus = tetrisPlus || {};

var counter=0;
var startX=4;
var startY=1;
var distX;
var distY;
var currentPiece;
var nextPiece;
var PrevNext;
var PieceActive;
var piece=new Array(4);
var blocks=new Array();
var tapL=false;
var tapR=false;
var tapZ=false;
var dropSpeed;
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

var destroyables;

//CLASSIC GAME MODE VARIABLES
var Score;
var currentLevel;
var currentDropSpeed;
var totalLinesCleared;
var currentLevelLinesCleared;
var contLinesToScore;

//GRID FOR THE PIECES
var GridTetris;

//SOUNDS
var bgSound;
var singleSound;
var doubleSound;
var tripleSound;
var tetrisSound;
var gameOverSound;

//HUD
var HUD

tetrisPlus.gameStateClassic = {
    
  
    
    init:function(){
        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.game.physics.startSystem(Phaser.Physics.ARCADE);
        
        //VARIABLES FISICAS
        this.game.physics.arcade.gravity.y = 0;
        this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVertically = true;
    },
    
    preload:function(){
        this.stage.backgroundColor="000000";
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
        
        //HUD
        tetrisPlus.game.load.image('HUD','assets/img/HUD.png');
        tetrisPlus.game.load.image('HUDCla','assets/img/HUDClasicP.png');
        tetrisPlus.game.load.image('auxPieceB','assets/img/Auxiliar.png');
        tetrisPlus.game.load.image('ScoreAux','assets/img/ScoreAux.png');
        
        //SOUNDS
        tetrisPlus.game.load.audio('backgroundMusic', 'assets/sounds/ClassicMode_Background_Music_V2.mp3')
        tetrisPlus.game.load.audio('single', 'assets/sounds/TetrisPlusSingle.mp3')
        tetrisPlus.game.load.audio('double', 'assets/sounds/TetrisPlusDouble.mp3')
        tetrisPlus.game.load.audio('triple', 'assets/sounds/TetrisPlusTriple.mp3')
        tetrisPlus.game.load.audio('tetris', 'assets/sounds/TetrisPlusTetris.mp3')
        tetrisPlus.game.load.audio('gameOver', 'assets/sounds/TetrisPlusGameOver.mp3')
        
        
        //FONDO
        this.game.load.image('bg1', 'assets/img/FondoClassico.png');
        this.game.load.image('Classicbg', 'assets/img/Classicbg.png');
    },
    create:function(){     
        
        //SOUNDS
        bgSound=tetrisPlus.game.add.audio('backgroundMusic');
        singleSound=tetrisPlus.game.add.audio('single');
        doubleSound=tetrisPlus.game.add.audio('double');
        tripleSound=tetrisPlus.game.add.audio('triple');
        tetrisSound=tetrisPlus.game.add.audio('tetris');
        gameOverSound=tetrisPlus.game.add.audio('gameOver');
        
        bgSound.loopFull(0.6);
        
        //CLASSIC GAME MODE VARIABLES
        currentLevel=0;
        totalLinesCleared=0;
        currentLevelLinesCleared=0;
        contLinesToScore=0;
        Score=0;
        this.assignSpeedToLevel();
        
        
        //BACKGROUND
        this.Classicbg = this.game.add.tileSprite(this.game.world.centerX,this.game.world.centerY,1024,800,'Classicbg');
        this.bg1 = this.game.add.tileSprite(this.game.world.centerX,this.game.world.centerY,119,272,'bg1');
       
        
        //TRANSFORMACIONES
        this.bg1.anchor.setTo(.5);
        this.bg1.scale.setTo(2);
        this.Classicbg.anchor.setTo(.5);
        this.Classicbg.scale.setTo(1);
        
        //HUD
        HUD = new tetrisPlus.HUDC(tetrisPlus.game, (this.game.world.centerX+125), (this.game.world.centerY - 245));
        tetrisPlus.game.add.existing(HUD);
        
        HUD.updateScore(Score);
        HUD.updateLevel(currentLevel);
        
        /************************ FRET ********************************/
        //CREAMOS EL GRUPO DE PIEZAS ESTATICAS
        destroyables=tetrisPlus.game.add.group();
        
        //FISICAS JUEGO
        this.game.physics.arcade.enable(destroyables);
        
        //VARIABLES PARA DEFINIR EL CENTRO DE CADA CELDA DEL GRID(BASADAS EN LAS PIEZAS DEL TETRIS QUE SON DE 8X8 PX)
        
        distX=16;
        distY=distX;
        
        //CREACIÓN DEL GRID DE JUEGO
         
        GridTetris=new Array(30);
        for(var i=0; i<GridTetris.length; i++)
        {
            GridTetris[i]=new Array(10);
        }
        
        
        //BORDES DEL MAPA

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
        GridTetris[14][0]=5;
        GridTetris[15][0]=5;
        GridTetris[16][0]=5;
        GridTetris[17][0]=5;
        GridTetris[18][0]=5;
        GridTetris[19][0]=5;
        GridTetris[20][0]=5;
        GridTetris[21][0]=5;
        GridTetris[22][0]=5;
        GridTetris[23][0]=5;
        GridTetris[24][0]=5;
        GridTetris[25][0]=5;
        GridTetris[26][0]=5;
        GridTetris[27][0]=5;
        GridTetris[28][0]=5;
        GridTetris[29][0]=5;
        
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
        GridTetris[14][11]=5;
        GridTetris[15][11]=5;
        GridTetris[16][11]=5;
        GridTetris[17][11]=5;
        GridTetris[18][11]=5;
        GridTetris[19][11]=5;
        GridTetris[20][11]=5;
        GridTetris[21][11]=5;
        GridTetris[22][11]=5;
        GridTetris[23][11]=5;
        GridTetris[24][11]=5;
        GridTetris[25][11]=5;
        GridTetris[26][11]=5;
        GridTetris[27][11]=5;
        GridTetris[28][11]=5;
        GridTetris[29][11]=5;
                
        GridTetris[29][1]=5;
        GridTetris[29][2]=5;
        GridTetris[29][3]=5;
        GridTetris[29][4]=5;
        GridTetris[29][5]=5;
        GridTetris[29][6]=5;
        GridTetris[29][7]=5;
        GridTetris[29][8]=5;
        GridTetris[29][9]=5;
        GridTetris[29][10]=5;
        
        for(var i=0; i<GridTetris.length; i++)
            {
                for(var j=0; j< GridTetris[i].length; j++)
                    {
                        if(GridTetris[i][j]==5)
                            {
                                if(i<29 && (j>0 && j<11))
                                    {
                                      var Static= new tetrisPlus.R_Single(tetrisPlus.game, ((1024 / 2) - (87) + (distX*j)), (800/4) -4 + distY*(i) , j, i-1, GridTetris);
                                      destroyables.add(Static);
                                    }
                            }
                    }
            }

        //ASIGNAMOS LA PIEZA MEDIANTE UN TRUE RANDOM
        PrevNext=null;
        this.createNewPiece("Current");
        this.createNewPiece("Next");
        
        
        //ASIGNAMOS LOS INPUTS
        key_right=tetrisPlus.game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
        key_left=tetrisPlus.game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
        key_down=tetrisPlus.game.input.keyboard.addKey(Phaser.Keyboard.DOWN);
        key_Z=tetrisPlus.game.input.keyboard.addKey(Phaser.Keyboard.Z);
        
        cursores=tetrisPlus.game.input.keyboard.createCursorKeys();
        HUD.updateNextPiece(nextPiece.type);
    },
    update:function(){
        console.log(Score);
        /*if(PrevNext!=null)
            {
                console.log("Previous: "+PrevNext.type+", Piece: "+PieceActive.type+", Next: "+nextPiece.type);
            }*/
        //Drop the piece
        counter++;
        if(counter>=realDropSpeed)
        {
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
                 initialRot=PieceActive.currRot;

                 //console.log(initialRot);
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
                Piecei1=PieceActive.previ1;
                Piecej1=PieceActive.prevj1;
                Piecei2=PieceActive.previ2;
                Piecej2=PieceActive.prevj2;
                Piecei3=PieceActive.previ3;
                Piecej3=PieceActive.prevj3;
                Piecei4=PieceActive.previ4;
                Piecej4=PieceActive.prevj4;
                
                var Static= new tetrisPlus.R_Single(tetrisPlus.game, ((1024 / 2) - (87) + (distX*Piecej1)), (800/4) -4 + distY*(Piecei1+1) , Piecej1, Piecei1, GridTetris);
                destroyables.add(Static);
                 var Static= new tetrisPlus.R_Single(tetrisPlus.game, ((1024 / 2) - (87) + (distX*Piecej2)), (800/4) -4 + distY*(Piecei2+1) , Piecej2, Piecei2, GridTetris);
                destroyables.add(Static);
                 var Static= new tetrisPlus.R_Single(tetrisPlus.game, ((1024 / 2) - (87) + (distX*Piecej3)), (800/4) -4 + distY*(Piecei3+1) , Piecej3, Piecei3, GridTetris);
                destroyables.add(Static);
                 var Static= new tetrisPlus.R_Single(tetrisPlus.game, ((1024 / 2) - (87) + (distX*Piecej4)), (800/4) -4 + distY*(Piecei4+1) , Piecej4, Piecei4, GridTetris);
                destroyables.add(Static);
                
                this.GridTetris=PieceActive.GridTetris;
                
                for(var i=0; i<GridTetris.length; i++)
                {
                    for(var j=0; j<GridTetris[i].length; j++)
                        {
                            if(GridTetris[i][j]==1 || GridTetris[i][j]==2 || GridTetris[i][j]==3 || GridTetris[i][j]==4)
                                {
                                    GridTetris[i][j]=5;
                                }
                        }
                }
                
                this.checkGameLost();
                PieceActive.destroy();
                this.createNewPiece("Next");
                this.makeLines();
                HUD.updateNextPiece(nextPiece.type);
            }
        
        this.seconds = Math.floor(this.time.totalElapsedSeconds());
        
    },
    createNewPiece:function(tipo)
    {
        
        if(tipo=="Next")
            {
                    PrevNext=nextPiece;
            }
        for(var i=0; i<GridTetris.length; i++)
            {
                for(var j=0; j<GridTetris[i].length; j++)
                    {
                        if(GridTetris[i][j]==5)
                            {
                                //console.log(i+","+j);
                            }
                    }
            }
        
        currentPiece=Math.floor((Math.random() * 7) + 1);
        //currentPiece=7;
        switch(currentPiece)
            {
                case 1:
                    if(tipo=="Current")
                        {
                             PieceActive = new tetrisPlus.Bar_Piece(tetrisPlus.game, ((1024 / 2) - (89) + (distX*5)), (800/4) -4 + distY*2 , 5, 2, GridTetris);
                        }
                    else if(tipo=="Next")
                        {
                            nextPiece = new tetrisPlus.Bar_Piece(tetrisPlus.game, ((1024 / 2) - (89) + (distX*5)), (800/4) -4 + distY*2 , 5, 2, GridTetris);
                        }
                    break;
                case 2:
                    if(tipo=="Current")
                        {
                            PieceActive = new tetrisPlus.Box_Piece(tetrisPlus.game, ((1024 / 2) - (89) + (distX*5)), (800/4) -4 + distY*2 , 5, 2, GridTetris);
                        }
                    else if(tipo=="Next")
                        {
                            nextPiece = new tetrisPlus.Box_Piece(tetrisPlus.game, ((1024 / 2) - (89) + (distX*5)), (800/4) -4 + distY*2 , 5, 2, GridTetris);
                        }
                    break;
                case 3:
                    if(tipo=="Current")
                        {
                            PieceActive = new tetrisPlus.J_Piece(tetrisPlus.game, ((1024 / 2) - (89) + (distX*5)), (800/4) -4 + distY*2 , 5, 2, GridTetris);
                        }
                    else if(tipo=="Next")
                        {
                            nextPiece = new tetrisPlus.J_Piece(tetrisPlus.game, ((1024 / 2) - (89) + (distX*5)), (800/4) -4 + distY*2 , 5, 2, GridTetris);
                        }
                    break;
                case 4:
                    if(tipo=="Current")
                        {
                            PieceActive = new tetrisPlus.L_Piece(tetrisPlus.game, ((1024 / 2) - (89) + (distX*5)), (800/4) -4 + distY*2 , 5, 2, GridTetris);
                        }
                    else if(tipo=="Next")
                        {
                            nextPiece = new tetrisPlus.L_Piece(tetrisPlus.game, ((1024 / 2) - (89) + (distX*5)), (800/4) -4 + distY*2 , 5, 2, GridTetris);
                        }
                    break;
                case 5:
                    if(tipo=="Current")
                        {
                            PieceActive = new tetrisPlus.S_Piece(tetrisPlus.game, ((1024 / 2) - (89) + (distX*5)), (800/4) -4 + distY*2 , 5, 2, GridTetris);
                        }
                    else if(tipo=="Next")
                        {
                            nextPiece= new tetrisPlus.S_Piece(tetrisPlus.game, ((1024 / 2) - (89) + (distX*5)), (800/4) -4 + distY*2 , 5, 2, GridTetris);
                        }
                    break;
                case 6:
                    if(tipo=="Current")
                        {
                             PieceActive = new tetrisPlus.Z_Piece(tetrisPlus.game, ((1024 / 2) - (89) + (distX*5)), (800/4) -4 + distY*2 , 5, 2, GridTetris);
                        }
                    else if(tipo=="Next")
                        {
                            nextPiece = new tetrisPlus.Z_Piece(tetrisPlus.game, ((1024 / 2) - (89) + (distX*5)), (800/4) -4 + distY*2 , 5, 2, GridTetris);
                        }
                    break;
                case 7:
                    if(tipo=="Current")
                        {
                            PieceActive = new tetrisPlus.T_Piece(tetrisPlus.game, ((1024 / 2) - (89) + (distX*5)), (800/4) -4 + distY*2 , 5, 2, GridTetris);
                        }
                    else if(tipo=="Next")
                        {
                            nextPiece = new tetrisPlus.T_Piece(tetrisPlus.game, ((1024 / 2) - (89) + (distX*5)), (800/4) -4 + distY*2 , 5, 2, GridTetris);
                        }
                    break;
            }
        
        if(tipo=="Current")
            {
                tetrisPlus.game.add.existing(PieceActive);
                PieceActive.startGrid(GridTetris);
                initialRot=0;
            }
        else if(tipo=="Next")
            {
                if(PrevNext!=null)
                    {
                        PieceActive=PrevNext;
                        tetrisPlus.game.add.existing(PieceActive);
                        PieceActive.startGrid(GridTetris);
                        initialRot=0;
                    }
            }
        
    },
    makeLines:function()
    {        
        for(var i=0; i<GridTetris.length; i++)
            {
                if(i!=29)
                    {
                       if(GridTetris[i][1]==5 && GridTetris[i][2]==5 && GridTetris[i][3]==5 && GridTetris[i][4]==5 && GridTetris[i][5]==5 && GridTetris[i][6]==5 && GridTetris[i][7]==5 && GridTetris[i][8]==5 && GridTetris[i][9]==5 && GridTetris[i][10]==5)
                        {
                            contLinesToScore++;
                            //console.log("BORRAR LINEA: "+i);
                            //Borrar la linea y dropear todos los 5's de encima hacia abajo
                            GridTetris[i][1]=null;
                            GridTetris[i][2]=null;
                            GridTetris[i][3]=null;
                            GridTetris[i][4]=null;
                            GridTetris[i][5]=null;
                            GridTetris[i][6]=null;
                            GridTetris[i][7]=null;
                            GridTetris[i][8]=null;
                            GridTetris[i][9]=null;
                            GridTetris[i][10]=null;

                            for(var j=0; j<destroyables.children.length; j++)
                                {
                                    //console.log("TODOS: "+destroyables.children[j].starti+","+destroyables.children[j].startj);
                                    if(destroyables.children[j].starti==i-1 && (destroyables.children[j].startj==1 || destroyables.children[j].startj==2 || destroyables.children[j].startj==3 || destroyables.children[j].startj==4 || destroyables.children[j].startj==5 || destroyables.children[j].startj==6 || destroyables.children[j].startj==7 || destroyables.children[j].startj==8 || destroyables.children[j].startj==9 || destroyables.children[j].startj==10))
                                        {
                                            //console.log("ELIMINA: "+destroyables.children[j].starti+","+destroyables.children[j].startj);
                                            var aux=destroyables.children[j];
                                            //destroyables.remove(aux);
                                            //aux.destroy;
                                            aux.kill();
                                            //aux.destroy;
                                        }
                                }
                            
                            this.makeStaticsFall(i);
                            currentLevelLinesCleared++;
                            //console.log(currentLevelLinesCleared);
                            totalLinesCleared++;
                            this.changeLevel();
                        } 
                    }  
            }
        
        //Choose sound for lines
        switch(contLinesToScore)
            {
                case 1:
                    singleSound.play();
                    break;
                case 2:
                    doubleSound.play();
                    break;
                case 3:
                    tripleSound.play();
                    break;
                case 4:
                    tetrisSound.play();
                    break;    
            }
        this.computeScore(contLinesToScore);
        contLinesToScore=0;
        this.clearGrid();
        
    },
    makeStaticsFall:function(row)
    {
        //console.log("Bajar las siguientes piezas: "+row);
        //console.log(GridTetris.length-1);
        for(var i=GridTetris.length-1; i>=0; i--)
        {
            for(var j=0; j<GridTetris[i].length; j++)
            {
                //if(GridTetris[i][j]==5 && (j>0 && j<11))
                if(i<row && GridTetris[i][j]==5 && (j>0 && j<11))
                {
                    //console.log(i+","+j);
                    this.makeSingleFall(i, j);
                }
            }
        }
    },
    makeSingleFall:function(row, col)
    {
        for(var cont=0; cont<destroyables.length; cont++)
            {
                if(destroyables.children[cont].starti==row)
                    {
                        //console.log(destroyables.children[cont].PieceType);
                    }
            }
        GridTetris[row][col]=null;
        GridTetris[row+1][col]=5;
        
        for(var j=0; j<destroyables.children.length; j++)
            {
                if(destroyables.children[j].starti!=29)
                    {
                        destroyables.children[j].kill();
                    }
                
                //if(destroyables.children[j].starti==row && destroyables.children[j].startj==col)
                    //{
                        //destroyables.children[j].kill();
                        //console.log("Previous: "+destroyables.children[j].y+"//"+destroyables.children[j].starti);
                        //destroyables.children[j].starti+=1;
                        //destroyables.children[j].y+=16;
                        //destroyables.children[j].moveSingle(distY);
                        //console.log("Updated: "+destroyables.children[j].y+"//"+destroyables.children[j].starti);
                    //}
            }
        
    },
    clearGrid:function()
    {
        for(var i=GridTetris.length-1; i>=0; i--)
        {
            for(var j=0; j<GridTetris[i].length; j++)
            {
                if(GridTetris[i][j]==5 && (j>0 && j<11) && i!=29)
                {
                    //console.log(i+","+j);
                    var Static= new tetrisPlus.R_Single(tetrisPlus.game, ((1024 / 2) - (87) + (distX*j)), (800/4) -4 + distY*(i) , j, i-1, GridTetris);
                    destroyables.add(Static);
                }
            }
        }
    },
    assignSpeedToLevel:function()
    {
        switch(currentLevel)
            {
                case 0:
                    dropSpeed=48;
                    break;
                case 1:
                    dropSpeed=43;
                    break;
                case 2:
                    dropSpeed=38;
                    break;
                case 3:
                    dropSpeed=33;
                    break;
                case 4:
                    dropSpeed=28;
                    break;
                case 5:
                    dropSpeed=23;
                    break;
                case 6:
                    dropSpeed=18;
                    break;
                case 7:
                    dropSpeed=13;
                    break;
                case 8:
                    dropSpeed=8;
                    break;
                case 9:
                    dropSpeed=6;
                    break;
                case 10:
                    dropSpeed=5;
                    break;
                case 11:
                    dropSpeed=5;
                    break;
                case 12:
                    dropSpeed=5;
                    break;
                case 13:
                    dropSpeed=4;
                    break;
                case 14:
                    dropSpeed=4;
                    break;
                case 15:
                    dropSpeed=4;
                    break;
                case 16:
                    dropSpeed=3;
                    break;
                case 17:
                    dropSpeed=3;
                    break;
                case 18:
                    dropSpeed=3;
                    break;
                case 19:
                    dropSpeed=2;
                    break;
                case 20:
                    dropSpeed=2;
                    break;
                case 21:
                    dropSpeed=2;
                    break;
                case 22:
                    dropSpeed=2;
                    break;
                case 23:
                    dropSpeed=2;
                    break;
                case 24:
                    dropSpeed=2;
                    break;
                case 25:
                    dropSpeed=2;
                    break;
                case 26:
                    dropSpeed=2;
                    break;
                case 27:
                    dropSpeed=2;
                    break;
                case 28:
                    dropSpeed=2;
                    break;
                case 29:
                    dropSpeed=1;
                    break;
            }
        
        realDropSpeed=dropSpeed;
    },
    changeLevel:function()
    {
        if(currentLevelLinesCleared>=(currentLevel*10)+10)
            {
                console.log("Cambiando de nivel");
                if(currentLevel<29)
                    {
                        currentLevel++;
                        currentLevelLinesCleared=0;
                        //TODO: Ejecutar sonido de cambio de nivel
                        
                        this.assignSpeedToLevel();
                    }
            }
        
        HUD.updateLevel(currentLevel);
    },
    checkGameLost:function()
    {
        if(GridTetris[5][1]==5 || GridTetris[5][2]==5 || GridTetris[5][3]==5 || GridTetris[5][4]==5 || GridTetris[5][5]==5 || GridTetris[5][6]==5 || GridTetris[5][7]==5 || GridTetris[5][8]==5 || GridTetris[5][9]==5 || GridTetris[5][10]==5)
            {
                //TODO: Game Lost go to ranking screen
                console.log("PARTIDA FINALIZADA");
            }
    },
    computeScore:function(cont)
    {
        switch (cont)
            {
                case 1:
                    Score+=40*(currentLevel+1);
                    break;
                case 2:
                    Score+=100*(currentLevel+1);
                    break;
                case 3:
                    Score+=300*(currentLevel+1);
                    break;
                case 4:
                    //TETRIS!!!!
                    Score+=1200*(currentLevel+1);
                    break;
            }
        
        HUD.updateScore(Score);
    }
};

 


