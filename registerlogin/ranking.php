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
    
    th {
    font-family: Arial, Helvetica, sans-serif;
    font-size: .7em;
    background: #666;
    color: #FFF;
    padding: 2px 6px;
    border-collapse: separate;
    border: 1px solid #000;
    text-align: center
    }

    td {
    font-family: Arial, Helvetica, sans-serif;
    font-size: .7em;
    border: 1px solid #DDD;
    text-align: center
    }   
    
    th, td {
    padding: 15px;
    text-align: left;
    border-color: black;    
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
                              font-size:35px;
                              background-color: lightblue;">
    
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
        <button type="button" onclick="window.location.href='home.php'">RESTART</button>
</div>

</body>
</html>