<?php
    include 'conexao.php';

    $usuario = $_POST ["usuario"];
    $email = $_POST ["email"];
    $senha = $_POST ["senha"];

    $sql = mysql_query("select * from tb_login where USUARIO = '$usuario' and EMAIL = '$email'");

    if (mysql_num_rows($sql) > 0) {
        echo "<center>";
        echo "<hr>";
        echo "Este nome de usuário ou email já está em uso.";
        echo "<hr>";
        echo "<br";
    }

    else {
        $sql = mysql_query("insert into tb_login (USUARIO, EMAIL, SENHA) values ($usuario, $email, $senha)");

        echo "<center>";
        echo "<hr>";
        echo "Conta criada com sucesso.";
        echo "<hr>";
        echo "<br";
    }
?>