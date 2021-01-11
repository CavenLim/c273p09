<?php

include "dbFunctions.php";

$query = "SELECT * FROM statistics order by id"; 
$result = mysqli_query($link, $query);

while ($row = mysqli_fetch_assoc($result)) {
    $data[] = $row;
}
mysqli_close($link);

echo json_encode($data);


?>

