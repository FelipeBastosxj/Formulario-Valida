<?php

    if(isset($_POST['nome']) && isset($_POST['cpf']) && isset($_POST['sexo']) && isset($_POST['perfil']) && isset($_POST['email']) && isset($_POST['senha']) && isset($_POST['nr'])){

        echo $_POST['nome'] . $_POST['cpf'] . $_POST['sexo'] . $_POST['perfil'] . $_POST['email'] . $_POST['senha'] . $_POST['nr']

    }else{

        echo 'não recebeu nada'
    }

?>