var modificadores = {
    1: -5,
    2: -4, 3: -4,
    4: -3, 5: -3,
    6: -2, 7: -2,
    8: -1, 9: -1,
    10: 0, 11: 0,
    12: 1, 13: 1,
    14: 2, 15: 2,
    16: 3, 17: 3,
    18: 4, 19: 4,
    20: 5, 21: 5,
    22: 6, 23: 6,
    24: 7, 25: 7,
    26: 8, 27: 8,
    28: 9, 29: 9,
    30: 10
};

function racaEscolhida() {
  let selecionaRaca = document.getElementById('racaPersonagem').value;

  let racas = {
  "AN": { forca: 0, destreza: -2, constituicao: 4, inteligencia: 0, sabedoria: 2, carisma: 0 },
  "EL": { forca: 0, destreza: 4, constituicao: -2, inteligencia: 2, sabedoria: 0, carisma: 0 },
  "GO": { forca: 0, destreza: 4, constituicao: 2, inteligencia: 0, sabedoria: 0, carisma: -2 },
  "GN": { forca: -2, destreza: 0, constituicao: 2, inteligencia: 4, sabedoria: 0, carisma: 0 },
  "HA": { forca: -2, destreza: 4, constituicao: 0, inteligencia: 0, sabedoria: 0, carisma: 2 },
  "HU": 'Livre',
  "LE": 'Livre',
  "ME": { forca: 0, destreza: 2, constituicao: 0, inteligencia: 0, sabedoria: 2, carisma: 0 },
  "MO": { forca: 2, destreza: 0, constituicao: 2, inteligencia: 0, sabedoria: 0, carisma: 0 },
  "MI": { forca: 4, destreza: 0, constituicao: 2, inteligencia: 0, sabedoria: 0, carisma: -2 },
  "QA": { forca: 0, destreza: 0, constituicao: 0, inteligencia: 2, sabedoria: -2, carisma: 4 }
  }
  let racaSelecionada = racas[selecionaRaca];

  if (racaSelecionada === 'Livre') {
    alert('Essa raça permite que você recebe +2 no valor de 2 habilidades de sua escolha.')
    return;
  }

  for (let habilidade in racaSelecionada) {
    let campo = document.getElementById(`valor${capitalize(habilidade)}`);
    if (campo) {
      campo.value = parseInt(campo.value || 0) + racaSelecionada[habilidade];
    }
  }
}

function classeEscolhida() {
    let selecionaClasse = document.getElementById("classePersonagem").value;

    let vidaInicial = {
        "BBR": 24, "BRD": 12,
        "CLR": 16, "DRD": 16,
        "FET": 8, "GUE": 20,
        "LAD": 12, "MAG": 8,
        "MNG": 16, "PAL": 20,
        "RGR": 16, "SMR": 20,
        "SWB": 16
    }
    let classeSelecionada = vidaInicial[selecionaClasse];
    document.getElementById("vidaInicial").value = classeSelecionada;

    let vidaPorNivel = {
        "BBR": 6, "BRD": 3,
        "CLR": 4, "DRD": 4,
        "FET": 2, "GUE": 5,
        "LAD": 3, "MAG": 2,
        "MNG": 4, "PAL": 5,
        "RGR": 4, "SMR": 5,
        "SWB": 4
    }
    let vidaUpada = vidaPorNivel[selecionaClasse];
    document.getElementById("vidaPorNivel").value = vidaUpada;

    let periciaTreinada = {
        "BBR": 4, "BRD": 6,
        "CLR": 2, "DRD": 4,
        "FET": 2, "GUE": 2,
        "LAD": 8, "MAG": 2,
        "MNG": 4, "PAL": 2,
        "RGR": 6, "SMR": 4,
        "SWB": 4
    }
    let quantidadePericias = periciaTreinada[selecionaClasse];
    document.getElementById("periciaBase").value = quantidadePericias;

    let todosCheckboxes = document.querySelectorAll(".pericias");
    todosCheckboxes.forEach(checkbox => {
        checkbox.disabled = true;
        checkbox.checked = false;
    });
    
    let classeCheckboxes = document.querySelectorAll(`.${selecionaClasse}`);
    classeCheckboxes.forEach(checkbox => {
        checkbox.disabled = false;
    });

    let bba = {
        "BBR": parseInt(document.getElementById("nivelPersonagem").value),
        "BRD": bbaDiferente(),
        "CLR": bbaDiferente(),
        "DRD": bbaDiferente(),
        "FET": metadeNivel(),
        "GUE": parseInt(document.getElementById("nivelPersonagem").value),
        "LAD": bbaDiferente(),
        "MAG": metadeNivel(),
        "MNG": parseInt(document.getElementById("nivelPersonagem").value),
        "PAL": parseInt(document.getElementById("nivelPersonagem").value),
        "RGR": parseInt(document.getElementById("nivelPersonagem").value),
        "SMR": parseInt(document.getElementById("nivelPersonagem").value),
        "SWB": parseInt(document.getElementById("nivelPersonagem").value),
    }

    let bbaAtual = bba[selecionaClasse];
    let camposResultado = document.querySelectorAll(".bbaAtual");
    camposResultado.forEach(function(campo){
        campo.value = bbaAtual;
    })

    calcularAtaque('forca','corpo');
}

function bbaDiferente() {
    let nivel = parseInt(document.getElementById("nivelPersonagem").value);

    let nivelAtual = {
        1: 0, 2: 1,
        3: 2, 4: 3,
        5: 3, 6: 4,
        7: 5, 8: 6,
        9: 6, 10: 7,
        11: 8, 12: 9,
        13: 9, 14: 10,
        15: 11, 16: 12,
        17: 12, 18: 13,
        19: 14, 20: 15
    }

    let bbaDiferente = nivelAtual[nivel];

    return bbaDiferente;
}

function metadeNivel() {
    let nivel = parseInt(document.getElementById("nivelPersonagem").value);
    
    //operador ternário
    let metade = nivel % 2 === 0 ? nivel / 2 : (nivel - 1) / 2;

    let camposResultado = document.querySelectorAll(".bonusNivel");
    camposResultado.forEach(function(campo) {
        campo.value = metade;
    })

    calcularCA(); calcularAtaque('forca','corpo'); calcularAtaque('destreza','distancia');

    return metade;
}

function rolarDado(habilidade){
    dadoSorteado = Math.floor(Math.random() * (20 - 1 + 1) + 1);
    console.log(dadoSorteado);
    document.getElementById(`valor${capitalize(habilidade)}`).value = dadoSorteado;

    calcularModificador(habilidade);
}

function calcularModificador(habilidade) {
    let numero = parseInt(document.getElementById(`valor${capitalize(habilidade)}`).value) || 0;
    let modificador = modificadores[numero] !== undefined ? modificadores[numero] : -6;
    
    let camposResultado = document.querySelectorAll(`.modificador${capitalize(habilidade)}`);

    camposResultado.forEach(function(campo) {
        campo.value = modificador;
    })

    calcularAtaque('forca','corpo'); calcularAtaque('destreza','distancia'); calcularCA(); calcularResistencia('constituicao','fortitude');  calcularResistencia('destreza','reflexo');  calcularResistencia('sabedoria','vontade'); 
}

function calcularCA() {
    let bonusNivel = parseInt(document.getElementsByClassName("bonusNivel")[0].value) || 0; // || 0 = Se não for um número, trate como 0
    let modificadorDestreza = parseInt(document.getElementsByClassName("modificadorDestreza")[0].value) || 0; // || 0 = Se não for um número, trate como 0
    let bonusArmadura = parseInt(document.getElementById("bonusArmadura").value) || 0; // || 0 = Se não for um número, trate como 0
    let bonusEscudo = parseInt(document.getElementById("bonusEscudo").value) || 0; // || 0 = Se não for um número, trate como 0
    let bonusTamanho = parseInt(document.getElementById("bonusTamanho").value) || 0; // || 0 = Se não for um número, trate como 0
    let caExtra1 = parseInt(document.getElementById("caExtra1").value) || 0; // || 0 = Se não for um número, trate como 0
    let caExtra2 = parseInt(document.getElementById("caExtra2").value) || 0; // || 0 = Se não for um número, trate como 0

    let calculoCA = 10 + bonusNivel + modificadorDestreza + bonusArmadura + bonusEscudo + bonusTamanho + caExtra1 + caExtra2;

    let caDefinida = calculoCA;
    document.getElementById("totalCA").value = caDefinida;
}

function calcularResistencia(habilidade, resistencia) {
    let bonusNivel = parseInt(document.getElementsByClassName("bonusNivel")[0].value) || 0; // || 0 = Se não for um número, trate como 0
    let modificadorHabilidade = parseInt(document.getElementsByClassName(`modificador${capitalize(habilidade)}`)[0].value) || 0;
    let resistenciaExtra = parseInt(document.getElementById(`${resistencia}Extra`).value) || 0;

    let calculoResistencia = bonusNivel + modificadorHabilidade + resistenciaExtra;

    document.getElementById(`total${capitalize(resistencia)}`).value = calculoResistencia;
}

function calcularPericia(pericia, habilidade) {
    let nivel = parseInt(document.getElementById("nivelPersonagem").value) || 0;
    let treinada = document.getElementById(`${pericia}Treinada`).checked;
    let graduacao = treinada == true ? (nivel + 3) : Math.floor(nivel / 2);
    document.getElementById(`graduacao${capitalize(pericia)}`).value = graduacao;
    let modificadorElement = document.getElementsByClassName(`modificador${capitalize(habilidade)}`)[0];
    let modificador = modificadorElement ? parseInt(modificadorElement.value) || 0 : 0;

    let outros = parseInt(document.getElementById(`${pericia}Extra`).value) || 0;

    let total = graduacao + modificador + outros;
    document.getElementById(`${pericia}Total`).value = total;
}

function capitalize(texto){
    return texto.charAt(0).toUpperCase() + texto.slice(1);
}

function calcularPericiaExtra(pericia) {
    let nivel = parseInt(document.getElementById("nivelPersonagem").value) || 0;
    let treinada = document.getElementById(`${pericia}Treinada`).checked;
    let graduacao = treinada == true ? (nivel + 3) : Math.floor(nivel / 2);
    document.getElementById(`graduacao${capitalize(pericia)}`).value = graduacao;
    let modificadorElement = document.getElementById(`modificador${capitalize(pericia)}`);
    let modificador = modificadorElement ? parseInt(modificadorElement.value) || 0 : 0;

    let outros = parseInt(document.getElementById(`${pericia}Extra`).value) || 0;

    let total = graduacao + modificador + outros;
    document.getElementById(`${pericia}Total`).value = total;
}

function calcularAtaque(habilidade, ataque) {
    let bba = parseInt(document.getElementsByClassName("bbaAtual")[0].value) || 0;
    let modificador = parseInt(document.getElementsByClassName(`modificador${capitalize(habilidade)}`)[0].value) || 0;
    let tamanho = parseInt(document.getElementById(`modTamAtaque${capitalize(ataque)}`).value) || 0;
    let extra = parseInt(document.getElementById(`extraAtaque${capitalize(ataque)}`).value) || 0;

    let total = bba + modificador + tamanho + extra;
    document.getElementById(`totalAtaque${capitalize(ataque)}`).value = total;
}

//Preenchimento a lista com as armas padrões
function preencherSelecaoArmas(selectElement) {
  for (let categoria in estrutura) {
    let optgroupCategoria = document.createElement("optgroup");
    optgroupCategoria.label = categoria;

    for (let grupo in estrutura[categoria]) {
      let optionGrupo = document.createElement("option");
      optionGrupo.textContent = `--- ${grupo} ---`;
      optionGrupo.disabled = true; // Serve de título
      optionGrupo.classList.add("optionTitulosDesativados");
      optgroupCategoria.appendChild(optionGrupo);

      estrutura[categoria][grupo].forEach(arma => {
        let option = document.createElement("option");
        option.value = arma.index;
        option.textContent = arma.nome;
        optgroupCategoria.appendChild(option);
      });
    }

    selectElement.appendChild(optgroupCategoria);
  }
}

// Preenchimento das armas
function preencherInputsArmas(selectElement, slot) {
  selectElement.addEventListener("change", () => {
    let selectedIndex = selectElement.value;
    if (selectedIndex !== "") {
      let arma = armasPadrao[selectedIndex];
      document.getElementById("nomeArma" + slot).value = arma.nome;
      document.getElementById("danoArma" + slot).value = arma.dano;
      document.getElementById("criticoArma" + slot).value = arma.critico;
      document.getElementById("distanciaArma" + slot).value = arma.distancia;
      document.getElementById("tipoArma" + slot).value = arma.tipo;
    } else {
      document.getElementById("nomeArma" + slot).value = "";
      document.getElementById("danoArma" + slot).value = "";
      document.getElementById("criticoArma" + slot).value = "";
      document.getElementById("distanciaArma" + slot).value = "";
      document.getElementById("tipoArma" + slot).value = "";
    }
  });
}

// Inicializa os 6 selects
for (let i = 1; i <= 6; i++) {
  let selectElement = document.getElementById("selecionarArma" + i);
  preencherSelecaoArmas(selectElement);
  preencherInputsArmas(selectElement, i);
}

let armaduraSelecao = document.getElementById("selecionarArmadura");
// Estrutura: categorias > grupos > armas
let estruturaArmadura = {};
armadurasPadrao.forEach((armadura, i) => {
  if (!estruturaArmadura[armadura.categoria]) {
    estruturaArmadura[armadura.categoria] = {};
  }
  if (!estruturaArmadura[armadura.categoria][armadura.grupo]) {
    estruturaArmadura[armadura.categoria][armadura.grupo] = [];
  }
  estruturaArmadura[armadura.categoria][armadura.grupo].push({ ...armadura, index: i });
});

// Preenche o select
for (let categoria in estruturaArmadura) {
  let optgroupCategoria = document.createElement("optgroup");
  optgroupCategoria.label = categoria;

  for (let grupo in estruturaArmadura[categoria]) {
    // Adiciona um "option" vazio como separador de grupo
    let optionGrupo = document.createElement("option");
    optionGrupo.textContent = `--- ${grupo} ---`;
    optionGrupo.disabled = true; // Serve de título
    optionGrupo.classList.add("optionTitulosDesativados");
    optgroupCategoria.appendChild(optionGrupo);

    // Adiciona armadura do grupo
    estruturaArmadura[categoria][grupo].forEach(armadura => {
      let option = document.createElement("option");
      option.value = armadura.index;
      option.textContent = armadura.nome;
      optgroupCategoria.appendChild(option);
    });
  }

  armaduraSelecao.appendChild(optgroupCategoria);
}

//Evento de seleção das armaduras
armaduraSelecao.addEventListener("change", () => {
    let selectedIndex = armaduraSelecao.value;

    if (selectedIndex !== ""){
        let armadura = armadurasPadrao[selectedIndex];
        document.getElementById("nomeArmadura").value = armadura.nome;
        document.getElementById("bonusClasseArmadura").value = armadura.bonusCA;
        document.getElementById("limiteDesArmadura").value = armadura.maxDestreza;
        document.getElementById("penalidadePerArmadura").value = armadura.penalArmadura;
    } else {
        document.getElementById("nomeArmadura").value = "";
        document.getElementById("bonusClasseArmadura").value = "";
        document.getElementById("limiteDesArmadura").value = "";
        document.getElementById("penalidadePerArmadura").value = "";
    }

    valorArmadura(); limiteDestreza(); penalidadePericias();
})


let escudoSelecao = document.getElementById("selecionarEscudo");
// Estrutura: categorias > grupos > armas
let estruturaEscudo = {};
escudosPadrao.forEach((escudo, i) => {
  if (!estruturaEscudo[escudo.categoria]) {
    estruturaEscudo[escudo.categoria] = {};
  }
  if (!estruturaEscudo[escudo.categoria][escudo.grupo]) {
    estruturaEscudo[escudo.categoria][escudo.grupo] = [];
  }
  estruturaEscudo[escudo.categoria][escudo.grupo].push({ ...escudo, index: i });
});

// Preenche o select dos escudos
for (let categoria in estruturaEscudo) {
  let optgroupCategoria = document.createElement("optgroup");
  optgroupCategoria.label = categoria;

  for (let grupo in estruturaEscudo[categoria]) {
    // Adiciona um "option" vazio como separador de grupo
    let optionGrupo = document.createElement("option");
    optionGrupo.textContent = `--- ${grupo} ---`;
    optionGrupo.disabled = true; // Serve de título
    optionGrupo.classList.add("optionTitulosDesativados");
    optgroupCategoria.appendChild(optionGrupo);

    // Adiciona o escudo do grupo
    estruturaEscudo[categoria][grupo].forEach(escudo => {
      let option = document.createElement("option");
      option.value = escudo.index;
      option.textContent = escudo.nome;
      optgroupCategoria.appendChild(option);
    });
  }

  escudoSelecao.appendChild(optgroupCategoria);
}

//Evento de seleção dos escudos
escudoSelecao.addEventListener("change", () => {
    let selectedIndex = escudoSelecao.value;

    if (selectedIndex !== ""){
        let escudo = escudosPadrao[selectedIndex];
        document.getElementById("nomeEscudo").value = escudo.nome;
        document.getElementById("bonusClasseEscudo").value = escudo.bonusCA;
        document.getElementById("limiteDesEscudo").value = escudo.maxDestreza;
        document.getElementById("penalidadePerEscudo").value = escudo.penalArmadura;
    } else {
        document.getElementById("nomeEscudo").value = "";
        document.getElementById("bonusClasseEscudo").value = "";
        document.getElementById("limiteDesEscudo").value = "";
        document.getElementById("penalidadePerEscudo").value = "";
    }

    valorEscudo(); limiteDestreza(); penalidadePericias();
})

function valorArmadura() {
    let armadura = parseInt(document.getElementById("bonusClasseArmadura").value) || 0;

    document.getElementById("bonusArmadura").value = armadura;
    calcularCA();
}

function valorEscudo() {
    let escudo = parseInt(document.getElementById("bonusClasseEscudo").value) || 0;

    document.getElementById("bonusEscudo").value = escudo;
    calcularCA();
}

function calcularBonusDefesa() {
    let extra1 = parseInt(document.getElementById("bonusCAExtra1").value) || 0;
    let extra2 = parseInt(document.getElementById("bonusCAExtra2").value) || 0;
    let extra3 = parseInt(document.getElementById("bonusCAExtra3").value) || 0;
    let extra4 = parseInt(document.getElementById("bonusCAExtra4").value) || 0;

    let total = extra1 + extra2 + extra3 + extra4;

    document.getElementById("caExtra1").value = total;
    calcularCA();
}

function penalidadePericias() {
    let armadura = parseInt(document.getElementById("penalidadePerArmadura").value) || 0;
    let escudo = parseInt(document.getElementById("penalidadePerEscudo").value) || 0;
    let extra1 = parseInt(document.getElementById("penalidadePerExtra1").value) || 0;
    let extra2 = parseInt(document.getElementById("penalidadePerExtra2").value) || 0;
    let extra3 = parseInt(document.getElementById("penalidadePerExtra3").value) || 0;
    let extra4 = parseInt(document.getElementById("penalidadePerExtra4").value) || 0;

    total = 0 - armadura - escudo - extra1 - extra2 - extra3 - extra4;

    let camposResultado = document.querySelectorAll(".penalidadeArmadura");
    
    camposResultado.forEach(function(campo) {
        campo.value = total;
    })

    calcularPericia('acrobacia', 'destreza'); calcularPericia('atletismo','forca'); calcularPericia('furtividade','destreza'); calcularPericia('Ladinagem','´destreza');
}

function limiteDestreza() {
    let values = [
        document.getElementById("limiteDesArmadura").value,
        document.getElementById("limiteDesEscudo").value,
        document.getElementById("limiteDesExtra1").value,
        document.getElementById("limiteDesExtra2").value,
        document.getElementById("limiteDesExtra3").value,
        document.getElementById("limiteDesExtra4").value,
    ];

    let numbers = values
        .map(value => value.trim() === "" ? NaN : Number(value))
        .filter(value => !isNaN(value) && value !== 0);

    if (numbers.lenght !== 0) {
        let min = Math.min(...numbers);

        let valorDestreza = parseInt(document.getElementById("valorDestreza").value) || 0;

        while (modificadores[valorDestreza] > min) {
            valorDestreza--;
            if (valorDestreza < 1) {
                valorDestreza = 1;
                break;
            }
        }

        document.getElementById("valorDestreza").value = valorDestreza;
        calcularModificador('destreza');
    }
}

// Modal das raças
let abrir = document.getElementById("escolhaRacas");
let modal = document.getElementById("modalRacas");
let fechar = document.getElementById("fecharRacas");

// Abrir o modal
abrir.addEventListener("click", () => {
  modal.style.display = "flex"; // aparece centralizado
});

// Fechar ao clicar no "x"
fechar.addEventListener("click", () => {
  modal.style.display = "none";
});

// Fechar ao clicar fora do conteúdo
window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});

// Seletor das raças
function descreveRaca() {

let racaAtual = 0;

if (racaAtual < 1) {
    racaAtual++;
    document.getElementById('racasMoveis').style.transform = `translateX(-${racaAtual} - 100vw)`;
  };

if (racaAtual > 0) {
  racaAtual--;
  document.getElementById('racasMoveis').style.transform = `translateX(-${racaAtual} - 100vw)`;
}
;
}