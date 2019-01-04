<?php
session_start();
include_once 'dbconnect.php';

if(!isset($_SESSION['userSession']))
{
	header("Location: index.php");
}

$query = $MySQLi_CON->query("SELECT * FROM users WHERE uid=".$_SESSION['userSession']);
$userRow=$query->fetch_array();
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Welcome - <?php echo $userRow['email']; ?></title>

<link href="bootstrap/css/bootstrap.min.css" rel="stylesheet" media="screen"> 
<link href="bootstrap/css/bootstrap-theme.min.css" rel="stylesheet" media="screen"> 

<link rel="stylesheet" href="style.css" type="text/css" />

<style>
    
    @import url(https://fonts.googleapis.com/css?family=Roboto:400,500,700,300,100);

    body {
      /*background-color: #3e94ec;*/
      font-family: "Roboto", helvetica, arial, sans-serif;
      font-size: 16px;
      font-weight: 400;
      text-rendering: optimizeLegibility;
    }

    div.table-title {
       display: block;
      margin: auto;
      max-width: 600px;
      padding:5px;
      width: 100%;
    }

    .table-title h3 {
       color: #fafafa;
       font-size: 30px;
       font-weight: 400;
       font-style:normal;
       font-family: "Roboto", helvetica, arial, sans-serif;
       text-shadow: -1px -1px 1px rgba(0, 0, 0, 0.1);
       text-transform:uppercase;
    }


    /*** Table Styles **/

    .table-fill {
      background: white;
      border-radius:3px;
      border-collapse: collapse;
      height: 320px;
      margin: auto;
      max-width: 600px;
      padding:5px;
      width: 100%;
      box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
      animation: float 5s infinite;
    }

    th {
      color:#D5DDE5;;
      background:#1b1e24;
      border-bottom:4px solid #9ea7af;
      border-right: 1px solid #343a45;
      font-size:23px;
      font-weight: 100;
      padding:24px;
      text-align:left;
      text-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
      vertical-align:middle;
    }

    th:first-child {
      border-top-left-radius:3px;
    }

    th:last-child {
      border-top-right-radius:3px;
      border-right:none;
    }

    tr {
      border-top: 1px solid #C1C3D1;
      border-bottom-: 1px solid #C1C3D1;
      color:#666B85;
      font-size:16px;
      font-weight:normal;
      text-shadow: 0 1px 1px rgba(256, 256, 256, 0.1);
    }

    tr:hover td {
      background:#4E5066;
      color:#FFFFFF;
      border-top: 1px solid #22262e;
    }

    tr:first-child {
      border-top:none;
    }

    tr:last-child {
      border-bottom:none;
    }

    tr:nth-child(odd) td {
      background:#EBEBEB;
    }

    tr:nth-child(odd):hover td {
      background:#4E5066;
    }

    tr:last-child td:first-child {
      border-bottom-left-radius:3px;
    }

    tr:last-child td:last-child {
      border-bottom-right-radius:3px;
    }

    td {
      background:#FFFFFF;
      padding:20px;
      text-align:left;
      vertical-align:middle;
      font-weight:300;
      font-size:18px;
      text-shadow: -1px -1px 1px rgba(0, 0, 0, 0.1);
      border-right: 1px solid #C1C3D1;
    }

    td:last-child {
      border-right: 0px;
    }

    th.text-left {
      text-align: left;
    }

    th.text-center {
      text-align: center;
    }

    th.text-right {
      text-align: right;
    }

    td.text-left {
      text-align: left;
    }

    td.text-center {
      text-align: center;
    }

    td.text-right {
      text-align: right;
    }
    
    /*BUTTON*/
    a.button7{
     display:inline-block;
     padding:0.5em 0.7em;
     border-radius:0.2em;
     box-sizing: border-box;
     text-decoration:none;
     font-family:'Roboto',sans-serif;
     font-weight:400;
     color:#FFFFFF;
     background-color:#3369ff;
     box-shadow:inset 0 -0.6em 1em -0.35em rgba(0,0,0,0.17),inset 0 0.6em 2em -0.3em rgba(255,255,255,0.15),inset 0 0 0em 0.05em rgba(255,255,255,0.12);
     text-align:center;
     position:relative;
     margin-bottom: 50px;
     margin-top: 50px;
     margin-left: 25px;
     margin-right: 25px;
    }
    a.button7:active{
     box-shadow:inset 0 0.6em 2em -0.3em rgba(0,0,0,0.15),inset 0 0 0em 0.05em rgba(255,255,255,0.12);
    }
    @media all and (max-width:30em){
     a.button7{
      display:block;
      margin:0.4em auto;
     }
    }

    
</style>
</head>
<body>

<nav class="navbar navbar-default navbar-fixed-top">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#">TetrisPlus</a>
        </div>
        <div id="navbar" class="navbar-collapse collapse">
          <ul class="nav navbar-nav">
            <li class="active"><a href="#">Stats</a></li>
            <li><a href="#">Server Status</a></li>
            <li><a href="#">Friends</a></li>
          </ul>
          <ul class="nav navbar-nav navbar-right">
            <li><a href="#"><span class="glyphicon glyphicon-user"></span>&nbsp; <?php echo $userRow['username']; ?></a></li>
            <li><a href="logout.php?logout"><span class="glyphicon glyphicon-log-out"></span>&nbsp; Logout</a></li>
          </ul>
        </div><!--/.nav-collapse -->
      </div>
    </nav>

<div class="container" style="margin-top:150px;
                              text-align:center;
                              font-family:Verdana, Geneva, sans-serif;
                              font-size:35px;">
    
        <!--INSERTAR BASE DE DATOS-->
        <?php
            include_once 'dbconnect.php';
            $uid = $userRow['uid'];
            $username = $userRow['username'];
    
            //MODO & SCORE
            $score = $_GET['score'];
            $modo = $_GET['modo'];
                    
            //COMPROBAMOS QUE EXISTA O NO LA SCORE INSERTADA
            $userscore = $MySQLi_CON->query("SELECT * FROM score WHERE user = ".$uid."");
            $row_cnt = $userscore->num_rows;
    
            //EN CASO QUE YA HAYA UN SCORE AÑADIDO
            if($row_cnt >= 1)
            {
                $userscore = $MySQLi_CON->query("SELECT score FROM score WHERE user = ".$uid."");
                while($row = mysqli_fetch_array($userscore))
                {
                    $highScore = $row['score'];
                }
                
                //EN CASO QUE LA SCORE SEA MEJOR QUE LA ANTERIOR
                if($highScore < $score)
                {
                     $updateScore = "UPDATE score SET score=".$score." WHERE user=".$uid."";
                     $query = $MySQLi_CON->query($updateScore);
                }
            }
            else
            {
                $query = $MySQLi_CON->query("INSERT INTO score(user, modo, score, username) VALUES(".$uid.", ".$modo.", ".$score.", '".$username."')");
            }

            //RECOGEMOS DATOS
            $result = $MySQLi_CON->query("SELECT * FROM score ORDER BY score DESC");
    
            $position = 1;
            //MOSTRAMOS TABLA
            echo "<table border='1' align='center'>
                <tr>
                <th>Position</th>
                <th>User</th>
                <th>Score</th>
                </tr>";

                while($row = mysqli_fetch_array($result))
                {
                echo "<tr>";
                echo "<td>" . $position . "</td>";
                echo "<td>" . $row['username'] . "</td>";
                echo "<td>" . $row['score'] . "</td>";
                echo "</tr>";
                    
                //SUMAMOS COUNTER
                $position++;
                }
                echo "</table>";

                $MySQLi_CON->close();
        ?>
	
    
        <!--VOLVEMOS AL HOMRE -->
        <a href="home.php" class="button7">Restart</a>
        <a href="creditos.php" class="button7" style="background-color:#F2AA38">Credits</a>
</div>

</body>
</html>