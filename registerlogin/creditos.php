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
<style>
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
<!-- SCRIPTS -->

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

<div class="container" style="margin-top:150px;text-align:center;
                              font-family:Verdana, Geneva, sans-serif;
                              font-size:35px; background-color: #000000; padding: 150px">
    
    <h1 style="color: white; font-weight: bold">Credits</h1>
    <h2 style="color: white; font-weight: bold">This Game has been developed by: </h1>
    <h3 style="color: white">Adrià Fret García</h3>
    <h3 style="color: white">Ignacio Pérez Velasco</h3>
    <h3 style="color: white">Martí Gómez Prunera</h3>
    
    <a href="home.php" class="button7">Restart</a>
    
</div>

</body>
</html>