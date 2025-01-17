<!DOCTYPE html>

<html lang="pt-br">
    <head>
        <title>Criando Personagem</title>
        <meta charset="UTF-8">
    </head>
    <body>
        <?php 
            //Inicio das informações básicas
            $nomePersonagem = $_POST["nomePersonagem"];
            $nomeJogador = $_POST["nomeJogador"];
            $nivelPersonagem = $_POST["nivelPersonagem"];
            $racaPersonagem = $_POST["racaPersonagem"];
            $classePersonagem = $_POST["classePersonagem"];
            $tendenciaPersonagem = $_POST["tendenciaPersonagem"];
            $sexoPersonagem = $_POST["sexoPersonagem"];
            $idadePersonagem = $_POST["idadePersonagem"];
            $divindadePersonagem = $_POST["divindadePersonagem"];
            $tamanhoPersonagem = $_POST["tamanhoPersonagem"];
            $deslocamentoPersonagem = $_POST["deslocamentoPersonagem"];
            //Término das informações básicas

            //Inicio das informações de habilidade
            $valorForca = $_POST["valorForca"];
            $modificadorForca = $_POST["modificadorForca"]; //Campo salvo apenas uma vez, mas utilizado diversas vezes
            $valorDestreza = $_POST["valorDestreza"];
            $modificadorDestreza = $_POST["modificadorDestreza"]; //Campo salvo apenas uma vez, mas utilizado diversas vezes
            $valorConstituicao = $_POST["valorConstituicao"];
            $modificadorConstituicao = $_POST["modificadorConstituicao"]; //Campo salvo apenas uma vez, mas utilizado diversas vezes
            $valorInteligencia = $_POST["valorInteligencia"];
            $modificadorInteligencia = $_POST["modificadorInteligencia"]; //Campo salvo apenas uma vez, mas utilizado diversas vezes
            $valorSabedoria = $_POST["valorSabedoria"];
            $modificadorSabedoria = $_POST["modificadorSabedoria"]; //Campo salvo apenas uma vez, mas utilizado diversas vezes
            $valorCarisma = $_POST["valorCarisma"];
            $modificadorCarisma = $_POST["modificadorCarisma"]; //Campo salvo apenas uma vez, mas utilizado diversas vezes
            //Término das informações habilidades

            //Inicio das informações de vida
            $vidaTotal = $_POST["vidaTotal"];
            $vidaAtual = $_POST["vidaAtual"];
            //Término das informações de vida

            //Início das informações de classe de armadura
            $totalCA = $_POST["totalCA"];
            $bonusNivel = $_POST["bonusNivel"]; //Campo salvo apenas uma vez, mas utilizado diversas vezes
            $bonusTamanho = $_POST["bonusTamanho"];
            $caExtra1 = $_POST["caExtra1"];
            $caExtra2 = $_POST["caExtra2"];
            //Término das informações de classe de armadura

            //Início das informações de resistências
            $totalFortitude = $_POST["totalFortitude"];
            $fortitudeExtra = $_POST["fortitudeExtra"];
            $totalReflexo = $_POST["totalReflexo"];
            $reflexoExtra = $_POST["reflexoExtra"];
            $totalVontade = $_POST["totalVontade"];
            $vontadeExtra = $_POST["vontadeExtra"];
            //Término das informações de resistências

            echo "<h1>Personagem cadastrado</h1>";
            echo "O personagem possui o nome de $nomePersonagem<br>";
            echo "O personagem é do jogador $nomeJogador<br>";
            echo "O personagem é de nivel $nivelPersonagem<br>";
            echo "O personagem é da raça $racaPersonagem<br>";
            echo "O personagem é da classe $classePersonagem<br>";
            echo "O personagem é da tendencia $tendenciaPersonagem<br>";
            echo "O personagem é do sexo $sexoPersonagem<br>";
            echo "O personagem possui a idade de $idadePersonagem<br>";
            echo "O personagem segue aos deus $divindadePersonagem<br>";
            echo "O personagem possui o tamanho de $tamanhoPersonagem<br>";
            echo "O personagem possui o deslocamento de $deslocamentoPersonagem<br>";
            echo "O personagem possui forca de $valorForca<br>";

            //Conexão com o Banco de Dados
            $con = mysqli_connect("localhost", "root", "");

            mysqli_select_db($con, "rpgtormenta") or
                die("Erro na abertura do banco de dados: " . mysqli_error($con) );

            //Inserir informações no banco de dados
            $sql = "INSERT INTO infoPersonagem(nomePersonagem, nomeJogador, nivelPersonagem, racaPersonagem, classePersonagem, tendenciaPersonagem, sexoPersonagem, idadePersonagem, divindadePersonagem, tamanhoPersonagem, deslocamentoPersonagem)
            VALUES ('$nomePersonagem', '$nomeJogador', '$nivelPersonagem', '$racaPersonagem', '$classePersonagem', '$tendenciaPersonagem', '$sexoPersonagem', '$idadePersonagem', '$divindadePersonagem', '$tamanhoPersonagem', '$deslocamentoPersonagem')";
            
            if ($con->query($sql) === TRUE) {
                // Recuperar o ID do último registro inserido
                $idPersonagem = $con->insert_id;
            
                // Inserir dados na tabela habiPersonagem
                $habi = "INSERT INTO habiPersonagem(idPersonagem, valorForca, modificadorForca, valorDestreza, modificadorDestreza, valorConstituicao, modificadorConstituicao, valorInteligencia, modificadorInteligencia, valorSabedoria, modificadorSabedoria, valorCarisma, modificadorCarisma) 
                        VALUES ('$idPersonagem', '$valorForca', '$modificadorForca', '$valorDestreza', '$modificadorDestreza', '$valorConstituicao', '$modificadorConstituicao', '$valorInteligencia', '$modificadorInteligencia', '$valorSabedoria', '$modificadorSabedoria', '$valorCarisma', '$modificadorCarisma')";

                if ($con->query($habi) === TRUE) {
                    $vida = "INSERT INTO pontosVida(idPersonagem, vidaTotal, vidaAtual)
                    VALUES ('$idPersonagem', '$vidaTotal', '$vidaAtual')";

                    if ($con->query($vida) === TRUE) {
                        $classeArmadura = "INSERT INTO classeArmadura(idPersonagem, totalCA, bonusNivel, bonusTamanho, caExtra1, caExtra2)
                        VALUES ('$idPersonagem', '$totalCA', '$bonusNivel', '$bonusTamanho', '$caExtra1', '$caExtra2')";
                        
                        if($con->query($classeArmadura) === TRUE) {
                            $resistencia = "INSERT INTO resiPersonagem(idPersonagem, totalFortitude, fortitudeExtra)
                            VALUES ('$idPersonagem', '$totalFortitude', '$fortitudeExtra')";

                            if($con->query($resistencia) === TRUE) {
                                echo "Personagem, habilidades, vida, classe de armadura e resistências cadastrados.";
                            } else {
                                echo "Erro ao inserir as resistências: " . $con->error;
                            }
                        } else {
                            echo "Erro ao inserir classe de armadura: " . $con->error;
                        }
                    } else {
                        echo "Erro ao inserir vida: " . $con->error;
                    }
                } else {
                    echo "Erro ao inserir habilidades: " . $con->error;
                }
            } else {
                echo "Erro ao cadastrar personagem: " . $con->error;
            }

        ?>
    </body>
</html>