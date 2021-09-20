<?php

    include 'conexao.php';

    $usuario = $_POST["usuario"];
    $senha = $_POST["senha"];

    $sql = mysql_query("select * from tb_login where (USUARIO="$usuario" or EMAIL="")

?>