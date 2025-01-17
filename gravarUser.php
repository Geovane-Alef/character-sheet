<!DOCTYPE html>

<html lang="pt-br">
    <head>
        <title>Gravando Usuários</title>
        <meta charset="UTF-8">
    </head>
    <body>
        <?php 

            $nome = $_POST["nome"];
            $email = $_POST["email"];
            $senha = $_POST["senha"];
            $sexo = $_POST["sexo"];

        if($nome == ""){
            die("O campo nome deve ser preenchido.");
        }

        if($email == ""){
            die("O campo email deve ser preenchido");
        }

        if($senha == ""){
            die("O campo senha deve ser preenchido");
        }

        if($sexo != "F"){
            if($sexo != "M"){
                die("O campo sexo deve ser Feminino ou Masculino");
            }
        }

        echo "<h1>Usuários cadastrado</h1>";
        echo "Usuário possui o nome de $nome<br>";
        echo "Usuário do sexo $sexo<br>";
        echo "Usuário cadastro com email $email<br>";

        //Conexão com o Banco de Dados
        $con = mysqli_connect("localhost", "root", "");

        mysqli_select_db($con, "RPG") or
            die("Erro na abertura do banco de dados: " . mysqli_error($con) );

        //Inserir informações no banco de dados
        $sql = "insert into USERS(nome, email, senha, sexo) values('$nome', '$email', '$senha', '$sexo')";

        //Enviar comando para o MySQL
        mysqli_query($con, $sql) or
            die ("Erro na gravação do usuário: " . mysqli_error($con) );

        echo "<hr>Usuário $nome cadastrado com sucesso!</hr>";
        ?>
    </body>
</html>