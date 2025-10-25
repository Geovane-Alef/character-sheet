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
            if ($bonusTamanho == "") { //Validação de campos vazios
                $bonusTamanho = 0;
            }
            $caExtra1 = $_POST["caExtra1"];
            if ($caExtra1 == "") { //Validação de campos vazios
                $caExtra1 = 0;
            }
            $caExtra2 = $_POST["caExtra2"];
            if ($caExtra2 == "") { //Validação de campos vazios
                $caExtra2 = 0;
            }
            //Término das informações de classe de armadura

            //Início das informações de resistências
            $totalFortitude = $_POST["totalFortitude"];
            $fortitudeExtra = $_POST["fortitudeExtra"];
            if ($fortitudeExtra == ""){ //Validação de campos vazios
                $fortitudeExtra = 0;
            }
            $totalReflexo = $_POST["totalReflexo"];
            $reflexoExtra = $_POST["reflexoExtra"];
            if ($reflexoExtra == ""){ //Validação de campos vazios
                $reflexoExtra = 0;
            }
            $totalVontade = $_POST["totalVontade"];
            $vontadeExtra = $_POST["vontadeExtra"];
            if ($vontadeExtra == ""){ //Validação de campos vazios
                $vontadeExtra = 0;
            }
            //Término das informações de resistências

            //Início das informações de perícias
            $acroTreinada = $_POST["acrobaciaTreinada"];
            $acroTotal = $_POST["acrobaciaTotal"];
            $acroGraduacao = $_POST{"graduacaoAcrobacia"};
            $acroExtra = $_POST["acrobaciaExtra"];
            if($acroExtra == "") {
                $acroExtra = 0;
            }
            $adesTreinada = $_POST["adestrarTreinada"];
            $adesTotal = $_POST["adestrarTotal"];
            $adesGraduacao = $_POST["graduacaoAdestrar"];
            $adesExtra = $_POST["adestrarExtra"];
            if($adesExtra == "") {
                $adesExtra = 0;
            }
            $atleTreinada = $_POST["atletismoTreinada"];
            $atleTotal = $_POST["atletismoTotal"];
            $atleGraduacao = $_POST["graduacaoAtletismo"];
            $atleExtra = $_POST["atletismoExtra"];
            if($atleExtra == "") {
                $atleExtra = 0;
            }
            $atua1Treinada = $_POST["atuacao1Treinada"];
            $atua1Habilidade = $_POST["habi1Atuacao"];
            $atua1Total = $_POST["atuacao1Total"];
            $atua1Graduacao = $_POST["graduacaoAtuacao1"];
            $atua1Extra = $_POST["atuacao1Extra"];
            if($atua1Extra == "") {
                $atua1Extra = 0;
            }
            //Término das informações de perícias


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
            echo "Pericia treinada $atua1Treinada<br>";
            echo "Habilidade $atua1Habilidade<br>";
            echo "Total de $atua1Total<br>";
            echo "Graduacao de $atleGraduacao<br>";
            echo "Pontos extra de $atua1Extra<br>";

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
                            $resistencia = "INSERT INTO resiPersonagem(idPersonagem, totalFortitude, fortitudeExtra, totalReflexo, reflexoExtra, totalVontade, vontadeExtra)
                            VALUES ('$idPersonagem', '$totalFortitude', '$fortitudeExtra', '$totalReflexo', '$reflexoExtra', '$totalVontade', '$vontadeExtra')";

                            if($con->query($resistencia) === TRUE) {
                                $pericias = "INSERT INTO periPersonagem(idPersonagem, acroTreinada, acroTotal, acroGraduacao, acroExtra, adesTreinada, adesTotal, adesGraduacao, adesExtra, atleTreinada, atleGraduacao, atleTotal, atleExtra, atua1Treinada, atua1Habilidade, atua1Total, atua1Extra)
                                VALUES ('$idPersonagem', '$acroTreinada', '$acroTotal', '$acroGraduacao', '$acroExtra', '$adesTreinada', '$adesTotal', '$adesGraduacao', '$adesExtra', '$atleTreinada', '$atleGraduacao', '$atleTotal', '$atleExtra', '$atua1Treinada', '$atua1Habilidade', '$atua1Total', '$atua1Extra')";
                                
                                if($con->query($pericias) === TRUE) {
                                    echo "Personagem, habilidades, vida, classe de armadura, resistências e perícias cadastrados.";
                                } else {
                                    echo "Erro ao inserir as pericias: " . $con->error;
                                }
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