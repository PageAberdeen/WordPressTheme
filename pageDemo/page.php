<?php
header('Content-Type: application/json');
$iNow =intval($_REQUEST['page']);

$total = 30;
$output = [];

$output[] = ['page'=>$iNow,'total'=>$total];


$str = json_encode($output); //只能编码UTF-8字符
echo $str;
?>