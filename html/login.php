<?php
    // CONEXÃO COM O BANCO DE DADOS 
    $dbhost = "localhost";
    $dbuser = "root";
    $dbpass = "";
    $db = "helpfull";
    $conn = new mysqli($dbhost, $dbuser, $dbpass, $db);

    // VARIAVEIS
    $username = $_POST['username'];
    $password = $_POST['password'];

    // CONFERÊNCIA COM O BANCO DE DADOS
    $sql = "SELECT * FROM userdata WHERE (USERNAME = '$username' or EMAIL = '$username') AND PASSWORD = '$password'";
    $result = mysqli_query($conn, $sql);
    $row = mysqli_fetch_array($result);

    if (($row['USERNAME'] == $username or $row['EMAIL'] == $username) && $row['PASSWORD'] == $password) {
        echo "<script>location.replace('Helpfull.html')</script>";
    } 

    else {
        echo "<script>location.replace('login.html')</script>";
    }
?>