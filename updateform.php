<?php
  header('Content-Type: text/xml');
  echo '<?xml version="1.0" encoding="UTF-8" standalone="yes" ?>';

  echo '<response>';

    $projectname = $_GET['projectname'];
    $projectArray = array('davy bolivar','bacon','beef','loaf','ham');

    if(in_array($projectname,$projectArray))
      echo '"'.$projectname.'" already exist!';
    elseif($projectname=='')
      echo ' ';
    else
      echo ' ';

  echo'</response>';
?>
