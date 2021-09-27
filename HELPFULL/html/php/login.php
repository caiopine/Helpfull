<?php

    include 'conexao.php';

    $usuario = $_POST["usuario"];
    $senha = $_POST["senha"];

    $sql = mysql_query("select * from tb_login where (USUARIO="$usuario" or EMAIL="$email" and senha="$senha");

    if (mysql_num_rows($sql) > 0) {

        echo "<script language=javascript>alert('Conta logada com sucesso!');</script>";

        echo "<center>";
        echo "<hr>";
        echo "Conta logada com sucesso!";
        echo "<hr>";
        echo "<br>";
    }

    else {
        echo "<center>";
        echo "<hr>";
        echo "Usuário ou Senha inválido!";
        echo "<hr>";
        echo "<br>";
        echo "<a href=\"login.php\">Tentar novamente</a>
    }
?> 