<?php
$id=$_GET['id'];
include "dbFunctions.php";

$query = "SELECT * FROM statistics where id=$id"; 
$result = mysqli_query($link, $query);

while ($row = mysqli_fetch_assoc($result)) {
    $data[] = $row;
}
mysqli_close($link);

echo json_encode($data);
?>
