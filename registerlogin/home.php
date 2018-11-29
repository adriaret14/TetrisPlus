<?php
session_start();
include_once 'dbconnect.php';

if(!isset($_SESSION['userSession']))
{
	header("Location: index.php");
}

$query = $MySQLi_CON->query("SELECT * FROM users WHERE uid=".$_SESSION['userSession']);
$userRow=$query->fetch_array();
$MySQLi_CON->close();
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Welcome - <?php echo $userRow['email']; ?></title>

<link href="bootstrap/css/bootstrap.min.css" rel="stylesheet" media="screen"> 
<link href="bootstrap/css/bootstrap-theme.min.css" rel="stylesheet" media="screen"> 

<link rel="stylesheet" href="style.css" type="text/css" />

<!-- SCRIPTS -->
<script src="js/phaser.js"></script>
<script src="js/Prefabs/T_Piece.js"></script>
<script src="js/Prefabs/L_Piece.js"></script>
<script src="js/Prefabs/J_Piece.js"></script>
<script src="js/Prefabs/S_Piece.js"></script>
<script src="js/Prefabs/Z_Piece.js"></script>
<script src="js/Prefabs/Box_Piece.js"></script>
<script src="js/Prefabs/Bar_Piece.js"></script>
<script src="js/Prefabs/R_Single.js"></script>
<script src="js/Prefabs/Player.js"></script>
<script src="js/Prefabs/PlayerWin.js"></script>
<script src="js/Prefabs/Mace.js"></script>
<script src="js/gamestate.js"></script>
<script src="js/main.js"></script>
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

<div class="container" style="margin-top:150px;text-align:center;font-family:Verdana, Geneva, sans-serif;font-size:35px;">
	<div id="gameFrame"></div>
</div>

</body>
</html>