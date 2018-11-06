var Phaser = Phaser || {};
var tetrisPlus = tetrisPlus || {};


var counter=0;
tetrisPlus.gameState = {
    preload:function(){
        this.stage.backgroundColor="00000";
        
    },
    create:function(){        
        
        tetrisPlus.time.events.loop(Phaser.Timer.SECOND, updateCounter, this);
        //VARIABLES PARA DEFINIR EL CENTRO DE CADA CELDA DEL GRID(BASADAS EN LAS PIEZAS DEL TETRIS QUE SON DE 8X8 PX)
        
        var distX=4;
        var distY=distX;
        
        //CREACIÓN DEL GRID DE JUEGO
        
        var columns1=new Array(10);
        var columns2=new Array(10);
        var columns3=new Array(10);
        var columns4=new Array(10);
        var columns5=new Array(10);
        var columns6=new Array(10);
        var columns7=new Array(10);
        var columns8=new Array(10);
        var columns9=new Array(10);
        var columns10=new Array(10);
        var columns11=new Array(10);
        var columns12=new Array(10);
        var columns13=new Array(10);
        var columns14=new Array(10);
        var columns15=new Array(10);
        var columns16=new Array(10);
        var columns17=new Array(10);
        var columns18=new Array(10);
        var columns19=new Array(10);
        var columns20=new Array(10);
        var columns21=new Array(10);
        var columns22=new Array(10);
        var columns23=new Array(10);
        var columns24=new Array(10);
        var columns25=new Array(10);
        
        columns20[4]=true;
        columns3[2]=true;
 
        var GridTetris=new Array(25);
        GridTetris[0]=columns1;
        GridTetris[1]=columns2;
        GridTetris[2]=columns3;
        GridTetris[3]=columns4;
        GridTetris[4]=columns5;
        GridTetris[5]=columns6;
        GridTetris[6]=columns7;
        GridTetris[7]=columns8;
        GridTetris[8]=columns9;
        GridTetris[9]=columns10;
        GridTetris[10]=columns11;
        GridTetris[11]=columns12;
        GridTetris[12]=columns13;
        GridTetris[13]=columns14;
        GridTetris[14]=columns15;
        GridTetris[15]=columns16;
        GridTetris[16]=columns17;
        GridTetris[17]=columns18;
        GridTetris[18]=columns19;
        GridTetris[19]=columns20;
        GridTetris[20]=columns21;
        GridTetris[21]=columns22;
        GridTetris[22]=columns23;
        GridTetris[23]=columns24;
        GridTetris[24]=columns25;
        
        var cont=0;

       /* for(var i=0; i<GridTetris.length; i++)
            {
                for(var j=0; j<GridTetris[i].length; j++)
                    {
                        cont=cont+1;
                        if(GridTetris[i][j]!=null)
                            {
                                alert(i);
                            }
                    }
            }*/
        
       
        

    },
    update:function(){
         alert(counter);
        
    },
    updateCounter:function(){
        counter=counter+1;
    }
};

