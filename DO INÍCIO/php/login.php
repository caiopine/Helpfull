<?php 
include('LoginSystem.php');

if(empty($_POST['usuario']) || empty ($_POST['senha'])) {
    header('Location: index.php');
    exit();
}

$usuario = mysql_real_escape_string($conexao, $_POST['usuario']);
$senha = mysql_real_escape_string($conexao, $_POST['senha']);

