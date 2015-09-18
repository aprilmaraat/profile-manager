<?php
	$con = mysqli_connect('153.121.39.201','temp','g67r0tw3qb','Companies');
	$projectId = $_POST["ProjectId"]; // Use this when passing ProjectId variable is implemented
	$query = mysqli_query($con, "SELECT * FROM ServiceTable WHERE ProjectId = '$projectId'"); // Use this when passing ProjectId variable is implemented
	$resultCount = 0;
	$services = array();
	// $query = mysqli_query($con, "SELECT * FROM ServiceTable WHERE ProjectId = 1"); // Comment this when passing ProjectId variable is implemented
	while($fetch = mysqli_fetch_array($query,MYSQLI_ASSOC)) {
		$s = array();
		$s['name'] = $fetch['ServiceName'];
		$s['x'] = $fetch['ButtonPositionX'];
		$s['y'] = $fetch['ButtonPositionY'];
		$s['displayFlag'] = $fetch['DisplayFlag'];
		$s['description'] = $fetch['ServiceDescription'];
		array_push($services,$s);
	}
	echo json_encode($services);
?>
