<?php
$con = mysqli_connect('153.121.39.201','temp','g67r0tw3qb','Companies');

$projectName = $_POST["ProjectName"];

$query = mysqli_query($con, "SELECT * FROM ProjectTable WHERE ProjectName = '$projectName'");

  if(mysqli_num_rows($query)){
    echo json_encode("Success");
  }
  else{
    echo json_encode("Failed");
  }
?>
