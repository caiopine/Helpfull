<?php 
include('LoginSystem.php');

if(empty($_POST['usuario']) || empty ($_POST['senha'])) {
    header('Location: index.html');
    exit();
}

$usuario = mysql_real_escape_string($conexao, $_POST['usuario']);
$senha = mysql_real_escape_string($conexao, $_POST['senha']);

$query = "select usuario_id, usuario from usuario where usuario = '{$usuario}' and senha = '{$senha}'";

$result = mysqli_query($conexao, $query);

$row = mysqli_num_rows($result);

echo $row;exit;