<?php
$con = mysqli_connect('153.121.39.201','temp','g67r0tw3qb','Companies');

$projId = $_POST["ProjectId"];
$sName = str_replace("'", "\'",$_POST["ServiceName"]);
$sDescription = str_replace("'", "\'",$_POST["ServiceDescription"]);
$fieldX = $_POST["FieldX"];
$fieldY = $_POST["FieldY"];
$displayButton = $_POST["DisplayButton"];
// $sName = "Watattops";
// $sDescription = "watatting";
// $fieldX = "100px";
// $fieldY = "150px";

// $query = mysqli_query($con, "INSERT INTO `ServiceTable`(`ServiceName`, `ServiceDescription`, `ButtonPositionX`, `ButtonPositionY`) VALUES ('Watattops','watatting','100px','150px')");
$query = mysqli_query($con, "INSERT INTO `ServiceTable`(`ProjectId`, `ServiceName`, `ServiceDescription`, `ButtonPositionX`, `ButtonPositionY`, `DisplayFlag`) VALUES ('$projId','$sName','$sDescription','$fieldX','$fieldY',$displayButton)");

if($query)
{
	echo json_encode("Success");
}
else
{
	echo json_encode("Error");
}
?>
