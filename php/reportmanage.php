<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
$conn = new mysqli("localhost:3306", "root", "root", "grouplus");
$result = $conn->query("select*from reportmanage order by time desc");
$outp = "";
while($rs = $result->fetch_array(MYSQLI_ASSOC)) {
  if ($outp != "") {$outp .= ",";}
  $outp .= '{"id":"' . $rs["Id"] . '",';
  $outp .= '"title":"'  . $rs["title"]    . '",';
  $outp .= '"time":"'  . $rs["time"]    . '",';
  $outp .= '"status":"'  . $rs["status"]    . '",';
  $outp .= '"read":"'  . $rs["read"]    . '",';
  $outp .= '"newtickling":"'  . $rs["newtickling"]    . '",';
  $outp .= '"alltickling":"'. $rs["alltickling"]   . '"}';
}
$outp ='{"report_data":['.$outp.']}';
$conn->close();
echo($outp);
?>