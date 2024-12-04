<?php

$stu_name = $_POST['name'];
$stu_email = $_POST['email'];
$stu_message = $_POST['message'];

$conn = mysqli_connect("localhost", "root", "" , "portfolio") or die("connection failed");

$sql = "INSERT INTO myportfolio (name, email,  message) VALUES ('{$stu_name}',  '{$stu_email}',    '{$stu_message}' )";

$result = mysqli_query($conn,  $sql) or die("query uncessfull");

  
    
header("Location: http://localhost/resume%20cv%20second/index.php");


mysqli_close($conn);

?>