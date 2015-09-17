<?php

function getGUID(){
  if (function_exists('com_create_guid')){
    return com_create_guid();
  }
  else{
    mt_srand((double)microtime()*10000);//optional for php 4.2.0 and up.
    $charid = strtoupper(md5(uniqid(rand(), true)));
    $hyphen = chr(45);// "-"
    $uuid = strtolower(substr($charid, 0, 8)).$hyphen
    .strtolower(substr($charid, 8, 4)).$hyphen
    .strtolower(substr($charid,12, 4)).$hyphen
    .strtolower(substr($charid,16, 4)).$hyphen
    .strtolower(substr($charid,20,12));
    return $uuid;
  }
}

$projectId = getGUID();

$con = mysqli_connect('153.121.39.201','temp','g67r0tw3qb','Companies');

$employeeName = str_replace("'", "\'",$_POST["EmployeeName"]);
$projectName = str_replace("'", "\'",$_POST["ProjectName"]);
$projectSummary = str_replace("'", "\'",$_POST["ProjectSummary"]);

$startGreeting = str_replace("'", "\'",$_POST["StartGreeting"]);
$endGreeting = str_replace("'", "\'",$_POST["EndGreeting"]);
// $serviceIdArray = array();
$serviceIdArray = $_POST["ServiceIdArray"];

$query = mysqli_query($con, "INSERT INTO ProjectTable (ProjectId, EmployeeName, ProjectName,
                             ProjectSummary, StartGreeting, EndGreeting)
                             VALUES ('$projectId', '$employeeName', '$projectName',
                             '$projectSummary' ,'$startGreeting' ,'$endGreeting')");

// $service_query = mysqli_query($con, "INSERT INTO ServiceTable (ProjectId, ServiceName,
//                                     ServiceDesption, ButtonFileName, TabletImageName,
//                                     ButtonPositionX, ButtonPositionY, DisplayFlag,
//                                     ButtonImage)
//                              VALUES ('$projectId', '$employeeName');
// echo json_encode((string)$serviceIdArray);
// for($ctr = 0; $ctr<count($serviceArray); $ctr++)
// {
//
// }

if($query)
{
echo json_encode($projectId);
}
else{
echo json_encode("Failed");
}

?>
