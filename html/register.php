<?php
    // CONEXÃO COM O BANCO DE DADOS 
    $dbhost = "localhost";
    $dbuser = "root";
    $dbpass = "";
    $db = "helpfull";
    $conn = new mysqli($dbhost, $dbuser, $dbpass, $db);

    // VARIAVEIS
    $email = $_POST['email'];
    $username = $_POST['username'];
    $password = $_POST['password'];

    // CADASTRO NO BANCO DE DADOS
    $count = mysqli_num_rows(mysqli_query($conn, "SELECT * FROM userdata WHERE USERNAME = '$username' or EMAIL = '$username'"));

    if ($count > 0) {
        echo "Username is alredy taken!";
    }

    else {
        $sql = "INSERT INTO userdata(USERNAME, EMAIL, PASSWORD) VALUES ('$username', '$email', '$password')";

        if (mysqli_query($conn, $sql)) {
            echo "<script>location.replace('login.html')</script>";
        }
        
        else {
            echo "<script>location.replace('login.html')</script>";
        }
    }

    
?>