<?php

	 $DB_host = "db4free.net:3306";
	 $DB_user = "tetrisplus";
	 $DB_pass = "admin1234";
	 $DB_name = "tetrisplus";
	 
	 $MySQLi_CON = new MySQLi($DB_host,$DB_user,$DB_pass,$DB_name);
    
     if($MySQLi_CON->connect_errno)
     {
         die("ERROR : -> ".$MySQLi_CON->connect_error);
     }

?>