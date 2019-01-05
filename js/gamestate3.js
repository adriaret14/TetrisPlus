var Phaser = Phaser || {};
var tetrisPlus = tetrisPlus || {};

var counter=0;
var counterMace=0;
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
var dropMaceSpeed=260;
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

//PLAYER
var Player;
var PlayerVictory;
var PuertaLlegada;
var seACABO;
var HUD;
//WIN
var counterWin;

//MAZA
var Mace;
var MaceFall;
//pause
var pause;
var pauseBool;
var imgPause;
var GridTetris;

tetrisPlus.gameState3 = {
    
    init:function(){
        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.game.physics.startSystem(Phaser.Physics.ARCADE);
        
        //VARIABLES FISICAS
        this.game.physics.arcade.gravity.y = 0;
        this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVertically = true;
         pauseBool=false;
    },
    
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
        tetrisPlus.game.load.image('MaceCompleted','assets/img/Sierra.png');
         //HUD
         tetrisPlus.game.load.image('HUD','assets/img/HUD.png');
         tetrisPlus.game.load.image('auxx','assets/img/puzzleAux.png');
        //FONDO
        this.game.load.image('bg1', 'assets/img/Fondo1.png');
        this.game.load.image('Puzzlebg', 'assets/img/Puzzlebg2.png');
        //pause
        tetrisPlus.game.load.image('pauseI','assets/img/pause.png');
        //PERSONAJE ANIMS
        this.load.spritesheet('Player', 'assets/img/SpriteSheetPersonaje.png', 16, 16);
        this.load.spritesheet('PlayerVictoria', 'assets/img/SpriteSheetVictoria.png', 32, 32);
    
    },
    create:function(){        
        
        //BACKGROUND
        this.Puzzlebg = this.game.add.tileSprite(this.game.world.centerX,this.game.world.centerY,1024,800,'Puzzlebg');
        this.bg1 = this.game.add.tileSprite(this.game.world.centerX,this.game.world.centerY,119,272,'bg1');
         //HUD
        HUD = new tetrisPlus.HUD(tetrisPlus.game, (this.game.world.centerX+125), (this.game.world.centerY - 245));
        tetrisPlus.game.add.existing(HUD);        
        pause=false;
        //TRANSFORMACIONES
        this.bg1.anchor.setTo(.5);
        this.bg1.scale.setTo(2);
        this.Puzzlebg.anchor.setTo(.5);        
        //MAZA 
        Mace = new tetrisPlus.Mace(tetrisPlus.game, (this.game.world.centerX-81.5), (this.game.world.centerY - 245), 25, 25);
        tetrisPlus.game.add.existing(Mace);
        this.MazeFall = false;
                
        //PREFAB PLAYER
        //92
        Player = new tetrisPlus.Player(tetrisPlus.game, this.game.world.centerX, this.game.world.centerY);
        tetrisPlus.game.add.existing(Player);
        
        //COUNTER PLAYER
        this.LastCollision = 0;
        
        //WIN
        this.counterWin = 0;
        this.finallyCollision = false;
        this.PuertaLlegada = false;
        this.SeACABO = false;
        
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
        
        GridTetris[19][1]=5;
        GridTetris[19][2]=5;
        GridTetris[19][3]=5;
        GridTetris[19][5]=5;
        GridTetris[19][7]=5;
        GridTetris[19][9]=5;
        GridTetris[19][10]=5;
        GridTetris[19][11]=5;
        
        GridTetris[20][1]=5;
        GridTetris[20][10]=5;
    
        /*GridTetris[21][1]=5;
        GridTetris[21][2]=5;
        GridTetris[21][3]=5;
        GridTetris[21][4]=5;*/
        //GridTetris[21][5]=5;
        /*GridTetris[21][6]=5;
        GridTetris[21][7]=5;
        GridTetris[21][8]=5;
        GridTetris[21][9]=5;
        GridTetris[21][10]=5;*/
        
        GridTetris[22][1]=5;
        GridTetris[22][2]=5;
        GridTetris[22][3]=5;
        GridTetris[22][4]=5;
        GridTetris[22][5]=5;
        GridTetris[22][6]=5;
        GridTetris[22][7]=5;
        GridTetris[22][8]=5;
        GridTetris[22][9]=5;
        GridTetris[22][10]=5;
        
        for(var i=0; i<GridTetris.length; i++)
            {
                for(var j=0; j< GridTetris[i].length; j++)
                    {
                        if(GridTetris[i][j]==5)
                            {
                                if(i<22 && (j>0 && j<11))
                                    {
                                      var Static= new tetrisPlus.R_Single(tetrisPlus.game, ((1024 / 2) - (87) + (distX*j)), (800/4) -4 + distY*(i) , j, i-1, GridTetris);
                                      destroyables.add(Static);
                                    }
                            }
                    }
            }

        //ASIGNAMOS LA PIEZA MEDIANTE UN TRUE RANDOM
        this.createNewPiece();        
        
        
        //ASIGNAMOS LOS INPUTS
        key_right=tetrisPlus.game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
        key_left=tetrisPlus.game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
        key_down=tetrisPlus.game.input.keyboard.addKey(Phaser.Keyboard.DOWN);
        key_Z=tetrisPlus.game.input.keyboard.addKey(Phaser.Keyboard.Z);
        esc=tetrisPlus.game.input.keyboard.addKey(Phaser.Keyboard.P); 
        cursores=tetrisPlus.game.input.keyboard.createCursorKeys();
        this.game.time.events.loop(Phaser.Timer.SECOND, HUD.updateTime, this.HUD);
    },
    update:function(){        
        if(esc.isDown)
            {
                if( pause==false)
                    {
                        tetrisPlus.game.input.onDown.add(this.unpause, self);      
                        imgPause=tetrisPlus.game.add.image(0, 0, 'pauseI');                         
                        tetrisPlus.game.paused=true;
                    }
                else
                    {
                     tetrisPlus.game.paused=false;
                    }
              
            }
        //Drop the piece
        //console.log(destroyables.length);
        counter++;
        counterMace++;
        
        //console.log(destroyables.children[0].PieceType);
        if(counter>=realDropSpeed)
        {
            //console.log(PieceActive.cantMoveDown);
            //console.log(PieceActive.cantMoveLeft);
            PieceActive.move(3, distY);
            counter=0;
        }
        
        if(this.MazeFall == false)
        {
            if(counterMace>=dropMaceSpeed)
            {
                Mace.fall(distY);
                counterMace=0;
            }
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
        
        //SI NO HA GANADO
        if(PlayerVictory == null)
        {
            //GANAR
            if((Player.y > (this.game.world.centerY + 124)) && (Player.y < (this.game.world.centerY + 125)))
            {
                Player.y = this.game.world.centerY + 124;
                Player.body.gravity.y = 0;

                //CHANGE PREFAB
                PlayerVictory = new tetrisPlus.PlayerWin(tetrisPlus.game, (Player.x - 16), (Player.y - 14));
                Player.destroy();
                tetrisPlus.game.add.existing(PlayerVictory);
                
                //AFTER CERT TIME
                this.flagWinFinally = true;                
            }
        }
        
        //CAER DESPUES DE GANAR
        if(this.flagWinFinally == true)
        {
            this.counterWin++;
            if(this.counterWin == 36)
            {
                this.counterWin = 0;
                this.flagWinFinally = false;
                
                //CHANGE PREFAB
                Player = new tetrisPlus.Player(tetrisPlus.game, (PlayerVictory.x + 16), (PlayerVictory.y + 14));
                PlayerVictory.destroy();
                tetrisPlus.game.add.existing(Player);
                
                //YA HA GANADO
                this.flagWinFinally = false;
                
                //NO HAY MAS PIEZAS
                PieceActive.destroy();
                
                //PARAMOS SIERRA
                this.MazeFall = true;
                
                //CAMBIAMOS DE NIVEL
                /*this.game.state.add('main',tetrisPlus.gameState1);
                this.game.state.start('main');*/
            }
        }
        
        //COLLISION CON FINAL DE MAPA
        if(Player.y >= this.game.world.centerY + 234)
        {
            Player.y = this.game.world.centerY + 234;
            Player.body.gravity.y = 0;
            this.finallyCollision = true;
            
            //HACIA LA PUERTA
            if(this.PuertaLlegada == false)
            {
                if(Player.x < this.game.world.centerX - 8)
                {
                    this.PuertaLlegada = true;
                }            
            }
        }
    
        //COLLISION ARRIBA (SEGUN SI A ACABO EL NIVEL O NO)
        if(this.finallyCollision == false)
        {
           this.collisionUp = this.game.physics.arcade.collide(Player, destroyables, this.collideHandler, null, this);
        }
        else
        {
            this.collisionUp = true;
        }
        
        if(this.collisionUp == true)
        {
            //COLLISION LATERAL
            if(Player.ColLeft == true)
            {
                this.game.physics.arcade.collide(Player, destroyables, this.collideLeft, null, this);
                //this.collisionLateral = true;
            }
            else if(Player.ColRight == true)
            {
                this.game.physics.arcade.collide(Player, destroyables, this.collideRight, null, this);
                //this.collisionLateral = true;
            }
            Player.DontMove = false;
        }
        else
        {
            Player.DontMove = true; 
        }        
        
        //OVERLAP
        this.game.physics.arcade.overlap(Player, destroyables, this.overlapScale, null, this);
        
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
        
                
                //console.log(Piecei1+1+","+Piecej1);
                //console.log(GridTetris[21][5]);
                
                //console.log(Piecei1);
                PieceActive.destroy();
                this.createNewPiece();
                this.makeLines();
            }
        
        this.seconds = Math.floor(this.time.totalElapsedSeconds());
        //PARAMOS ANIMACION
        if(this.PuertaLlegada == true)
        {
            Player.ColLeft = false;
            Player.ColRight = false;
            Player.DontMove = true;
        }
        
        //DIE PLAYER
        this.game.physics.arcade.collide(Player, Mace, this.loseGame, null, this);
    },
    
    
    //NEW FUNCTIONS
    collideLeft:function()
    {
        Player.ColLeft = false;
        Player.ColRight = true;
    },
    collideRight:function()
    {
        Player.ColLeft = true;
        Player.ColRight = false;
    },
    collideUp:function(Player, destroyables)
    {
        //ENCIMA DE LAS PIEZAS
        if(Player.body.touching.down && destroyables.body.touching.up)
        {
            Player.body.gravity.y = 0;
        }    
    },
    overlapScale:function()
    {
        Player.y -= 1
    },
    loseGame:function()
    {
        //Flip/Flop diretion player
        Player.Die();
    },
    createNewPiece:function()
    {
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
                    PieceActive = new tetrisPlus.Bar_Piece(tetrisPlus.game, ((1024 / 2) - (89) + (distX*5)), (800/4) -4 + distY*2 , 5, 2, GridTetris);
                    break;
                case 2:
                    PieceActive = new tetrisPlus.Box_Piece(tetrisPlus.game, ((1024 / 2) - (89) + (distX*5)), (800/4) -4 + distY*2 , 5, 2, GridTetris);
                    break;
                case 3:
                    PieceActive = new tetrisPlus.J_Piece(tetrisPlus.game, ((1024 / 2) - (89) + (distX*5)), (800/4) -4 + distY*2 , 5, 2, GridTetris);
                    break;
                case 4:
                    PieceActive = new tetrisPlus.L_Piece(tetrisPlus.game, ((1024 / 2) - (89) + (distX*5)), (800/4) -4 + distY*2 , 5, 2, GridTetris);
                    break;
                case 5:
                    PieceActive = new tetrisPlus.S_Piece(tetrisPlus.game, ((1024 / 2) - (89) + (distX*5)), (800/4) -4 + distY*2 , 5, 2, GridTetris);
                    break;
                case 6:
                    PieceActive = new tetrisPlus.Z_Piece(tetrisPlus.game, ((1024 / 2) - (89) + (distX*5)), (800/4) -4 + distY*2 , 5, 2, GridTetris);
                    break;
                case 7:
                    PieceActive = new tetrisPlus.T_Piece(tetrisPlus.game, ((1024 / 2) - (89) + (distX*5)), (800/4) -4 + distY*2 , 5, 2, GridTetris);
                    break;
            }
        
        
        tetrisPlus.game.add.existing(PieceActive);
        PieceActive.startGrid(GridTetris);
        initialRot=0;
    },
    makeLines:function()
    {        
        for(var i=0; i<GridTetris.length; i++)
            {
                if(i!=22)
                    {
                       if(GridTetris[i][1]==5 && GridTetris[i][2]==5 && GridTetris[i][3]==5 && GridTetris[i][4]==5 && GridTetris[i][5]==5 && GridTetris[i][6]==5 && GridTetris[i][7]==5 && GridTetris[i][8]==5 && GridTetris[i][9]==5 && GridTetris[i][10]==5)
                        {
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
                        } 
                    }  
            }
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
                        console.log(destroyables.children[cont].PieceType);
                    }
            }
        GridTetris[row][col]=null;
        GridTetris[row+1][col]=5;
        
        for(var j=0; j<destroyables.children.length; j++)
            {
                if(destroyables.children[j].starti!=22)
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
                if(GridTetris[i][j]==5 && (j>0 && j<11) && i!=22)
                {
                    //console.log(i+","+j);
                    var Static= new tetrisPlus.R_Single(tetrisPlus.game, ((1024 / 2) - (87) + (distX*j)), (800/4) -4 + distY*(i) , j, i-1, GridTetris);
                    destroyables.add(Static);
                }
            }
        }
    },
     unpause:function(event)
    {
        imgPause.destroy();
        tetrisPlus.game.paused=false;        
    }
};

 


