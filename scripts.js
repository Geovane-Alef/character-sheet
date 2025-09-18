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

function classeEscolhida() {
    var selecionaClasse = document.getElementById("classePersonagem").value;

    var vidaInicial = {
        "BBR": 24, "BRD": 12,
        "CLR": 16, "DRD": 16,
        "FET": 8, "GUE": 20,
        "LAD": 12, "MAG": 8,
        "MNG": 16, "PAL": 20,
        "RGR": 16, "SMR": 20,
        "SWB": 16
    }
    var classeSelecionada = vidaInicial[selecionaClasse];
    document.getElementById("vidaInicial").value = classeSelecionada;

    var vidaPorNivel = {
        "BBR": 6, "BRD": 3,
        "CLR": 4, "DRD": 4,
        "FET": 2, "GUE": 5,
        "LAD": 3, "MAG": 2,
        "MNG": 4, "PAL": 5,
        "RGR": 4, "SMR": 5,
        "SWB": 4
    }
    var vidaUpada = vidaPorNivel[selecionaClasse];
    document.getElementById("vidaPorNivel").value = vidaUpada;

    var periciaTreinada = {
        "BBR": 4, "BRD": 6,
        "CLR": 2, "DRD": 4,
        "FET": 2, "GUE": 2,
        "LAD": 8, "MAG": 2,
        "MNG": 4, "PAL": 2,
        "RGR": 6, "SMR": 4,
        "SWB": 4
    }
    var quantidadePericias = periciaTreinada[selecionaClasse];
    document.getElementById("periciaBase").value = quantidadePericias;

    const todosCheckboxes = document.querySelectorAll(".pericias");
    todosCheckboxes.forEach(checkbox => {
        checkbox.disabled = true;
        checkbox.checked = false;
    });
    
    const classeCheckboxes = document.querySelectorAll(`.${selecionaClasse}`);
    classeCheckboxes.forEach(checkbox => {
        checkbox.disabled = false;
    });

    var bba = {
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

    var bbaAtual = bba[selecionaClasse];
    var camposResultado = document.querySelectorAll(".bbaAtual");
    camposResultado.forEach(function(campo){
        campo.value = bbaAtual;
    })

    calcularAtaque('forca','corpo');
}

function bbaDiferente() {
    var nivel = parseInt(document.getElementById("nivelPersonagem").value);

    var nivelAtual = {
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

    var bbaDiferente = nivelAtual[nivel];

    return bbaDiferente;
}

function metadeNivel() {
    var nivel = parseInt(document.getElementById("nivelPersonagem").value);
    
    //operador ternário
    let metade = nivel % 2 === 0 ? nivel / 2 : (nivel - 1) / 2;

    var camposResultado = document.querySelectorAll(".bonusNivel");
    camposResultado.forEach(function(campo) {
        campo.value = metade;
    })

    calcularCA(); calcularAtaque('forca','corpo'); calcularAtaque('destreza','distancia');

    return metade;
}

function rolarDado(habilidade){
    dadoSorteado = Math.floor(Math.random() * (20 - 1 + 1) + 1);
    
    document.getElementById(`valor${capitalize(habilidade)}`).value = dadoSorteado;

    calcularModificador(habilidade);
}

function calcularModificador(habilidade) {
    const numero = parseInt(document.getElementById(`valor${capitalize(habilidade)}`).value) || 0;
    var modificador = modificadores[numero] !== undefined ? modificadores[numero] : -6;
    
    var camposResultado = document.querySelectorAll(`.modificador${capitalize(habilidade)}`);

    camposResultado.forEach(function(campo) {
        campo.value = modificador;
    })

    calcularAtaque('forca','corpo'); calcularAtaque('destreza','distancia'); calcularReflexo(); calcularCA(); calcularFortitude(); calcularVontade();
}

function calcularCA() {
    var bonusNivel = parseInt(document.getElementsByClassName("bonusNivel")[0].value) || 0; // || 0 = Se não for um número, trate como 0
    var modificadorDestreza = parseInt(document.getElementsByClassName("modificadorDestreza")[0].value) || 0; // || 0 = Se não for um número, trate como 0
    var bonusArmadura = parseInt(document.getElementById("bonusArmadura").value) || 0; // || 0 = Se não for um número, trate como 0
    var bonusEscudo = parseInt(document.getElementById("bonusEscudo").value) || 0; // || 0 = Se não for um número, trate como 0
    var bonusTamanho = parseInt(document.getElementById("bonusTamanho").value) || 0; // || 0 = Se não for um número, trate como 0
    var caExtra1 = parseInt(document.getElementById("caExtra1").value) || 0; // || 0 = Se não for um número, trate como 0
    var caExtra2 = parseInt(document.getElementById("caExtra2").value) || 0; // || 0 = Se não for um número, trate como 0

    var calculoCA = 10 + bonusNivel + modificadorDestreza + bonusArmadura + bonusEscudo + bonusTamanho + caExtra1 + caExtra2;

    var caDefinida = calculoCA;
    document.getElementById("totalCA").value = caDefinida;
}

function calcularResistencia(habilidade, resistencia) {
    var bonusNivel = parseInt(document.getElementsByClassName("bonusNivel")[0].value) || 0; // || 0 = Se não for um número, trate como 0
    var modificadorHabilidade = parseInt(document.getElementsByClassName(`modificador${capitalize(habilidade)}`)[0].value) || 0;
    var resistenciaExtra = parseInt(document.getElementById(`${resistencia}Extra`).value) || 0;

    var calculoResistencia = bonusNivel + modificadorHabilidade + resistenciaExtra;

    document.getElementById(`total${capitalize(resistencia)}`).value = calculoResistencia;
}

function calcularPericia(pericia, habilidade) {
    const nivel = parseInt(document.getElementById("nivelPersonagem").value) || 0;
    const treinada = document.getElementById(`${pericia}Treinada`).checked;
    const graduacao = treinada == true ? (nivel + 3) : Math.floor(nivel / 2);
    document.getElementById(`graduacao${capitalize(pericia)}`).value = graduacao;
    const modificadorElement = document.getElementsByClassName(`modificador${capitalize(habilidade)}`)[0];
    const modificador = modificadorElement ? parseInt(modificadorElement.value) || 0 : 0;

    const outros = parseInt(document.getElementById(`${pericia}Extra`).value) || 0;

    const total = graduacao + modificador + outros;
    document.getElementById(`${pericia}Total`).value = total;
}

function capitalize(texto){
    return texto.charAt(0).toUpperCase() + texto.slice(1);
}

function calcularPericiaExtra(pericia) {
    const nivel = parseInt(document.getElementById("nivelPersonagem").value) || 0;
    const treinada = document.getElementById(`${pericia}Treinada`).checked;
    const graduacao = treinada == true ? (nivel + 3) : Math.floor(nivel / 2);
    document.getElementById(`graduacao${capitalize(pericia)}`).value = graduacao;
    const modificadorElement = document.getElementById(`modificador${capitalize(pericia)}`);
    const modificador = modificadorElement ? parseInt(modificadorElement.value) || 0 : 0;
    console.log(modificadorElement);
    console.log(modificador);

    const outros = parseInt(document.getElementById(`${pericia}Extra`).value) || 0;

    const total = graduacao + modificador + outros;
    document.getElementById(`${pericia}Total`).value = total;
}

function calcularAtaque(habilidade, ataque) {
    var bba = parseInt(document.getElementsByClassName("bbaAtual")[0].value) || 0;
    console.log(bba);
    var modificador = parseInt(document.getElementsByClassName(`modificador${capitalize(habilidade)}`)[0].value) || 0;
    console.log(modificador);
    var tamanho = parseInt(document.getElementById(`modTamAtaque${capitalize(ataque)}`).value) || 0;
    console.log(tamanho);
    var extra = parseInt(document.getElementById(`extraAtaque${capitalize(ataque)}`).value) || 0;
    console.log(extra);

    var total = bba + modificador + tamanho + extra;
    document.getElementById(`totalAtaque${capitalize(ataque)}`).value = total;
    console.log(ataque);
}

//Preenchimento a lista com as armas padrões
function preencherSelecaoArmas(selectElement) {
  for (const categoria in estrutura) {
    const optgroupCategoria = document.createElement("optgroup");
    optgroupCategoria.label = categoria;

    for (const grupo in estrutura[categoria]) {
      const optionGrupo = document.createElement("option");
      optionGrupo.textContent = `--- ${grupo} ---`;
      optionGrupo.disabled = true; // Serve de título
      optionGrupo.classList.add("optionTitulosDesativados");
      optgroupCategoria.appendChild(optionGrupo);

      estrutura[categoria][grupo].forEach(arma => {
        const option = document.createElement("option");
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
    const selectedIndex = selectElement.value;
    if (selectedIndex !== "") {
      const arma = armasPadrao[selectedIndex];
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
  const selectElement = document.getElementById("selecionarArma" + i);
  preencherSelecaoArmas(selectElement);
  preencherInputsArmas(selectElement, i);
}

const armaduraSelecao = document.getElementById("selecionarArmadura");
// Estrutura: categorias > grupos > armas
const estruturaArmadura = {};
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
for (const categoria in estruturaArmadura) {
  const optgroupCategoria = document.createElement("optgroup");
  optgroupCategoria.label = categoria;

  for (const grupo in estruturaArmadura[categoria]) {
    // Adiciona um "option" vazio como separador de grupo
    const optionGrupo = document.createElement("option");
    optionGrupo.textContent = `--- ${grupo} ---`;
    optionGrupo.disabled = true; // Serve de título
    optionGrupo.classList.add("optionTitulosDesativados");
    optgroupCategoria.appendChild(optionGrupo);

    // Adiciona armadura do grupo
    estruturaArmadura[categoria][grupo].forEach(armadura => {
      const option = document.createElement("option");
      option.value = armadura.index;
      option.textContent = armadura.nome;
      optgroupCategoria.appendChild(option);
    });
  }

  armaduraSelecao.appendChild(optgroupCategoria);
}

//Evento de seleção das armaduras
armaduraSelecao.addEventListener("change", () => {
    const selectedIndex = armaduraSelecao.value;

    if (selectedIndex !== ""){
        const armadura = armadurasPadrao[selectedIndex];
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


const escudoSelecao = document.getElementById("selecionarEscudo");
// Estrutura: categorias > grupos > armas
const estruturaEscudo = {};
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
for (const categoria in estruturaEscudo) {
  const optgroupCategoria = document.createElement("optgroup");
  optgroupCategoria.label = categoria;

  for (const grupo in estruturaEscudo[categoria]) {
    // Adiciona um "option" vazio como separador de grupo
    const optionGrupo = document.createElement("option");
    optionGrupo.textContent = `--- ${grupo} ---`;
    optionGrupo.disabled = true; // Serve de título
    optionGrupo.classList.add("optionTitulosDesativados");
    optgroupCategoria.appendChild(optionGrupo);

    // Adiciona o escudo do grupo
    estruturaEscudo[categoria][grupo].forEach(escudo => {
      const option = document.createElement("option");
      option.value = escudo.index;
      option.textContent = escudo.nome;
      optgroupCategoria.appendChild(option);
    });
  }

  escudoSelecao.appendChild(optgroupCategoria);
}

//Evento de seleção dos escudos
escudoSelecao.addEventListener("change", () => {
    const selectedIndex = escudoSelecao.value;

    if (selectedIndex !== ""){
        const escudo = escudosPadrao[selectedIndex];
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
    var armadura = parseInt(document.getElementById("bonusClasseArmadura").value) || 0;

    document.getElementById("bonusArmadura").value = armadura;
    calcularCA();
}

function valorEscudo() {
    var escudo = parseInt(document.getElementById("bonusClasseEscudo").value) || 0;

    document.getElementById("bonusEscudo").value = escudo;
    calcularCA();
}

function calcularBonusDefesa() {
    var extra1 = parseInt(document.getElementById("bonusCAExtra1").value) || 0;
    var extra2 = parseInt(document.getElementById("bonusCAExtra2").value) || 0;
    var extra3 = parseInt(document.getElementById("bonusCAExtra3").value) || 0;
    var extra4 = parseInt(document.getElementById("bonusCAExtra4").value) || 0;

    var total = extra1 + extra2 + extra3 + extra4;

    document.getElementById("caExtra1").value = total;
    calcularCA();
}

function penalidadePericias() {
    var armadura = parseInt(document.getElementById("penalidadePerArmadura").value) || 0;
    var escudo = parseInt(document.getElementById("penalidadePerEscudo").value) || 0;
    var extra1 = parseInt(document.getElementById("penalidadePerExtra1").value) || 0;
    var extra2 = parseInt(document.getElementById("penalidadePerExtra2").value) || 0;
    var extra3 = parseInt(document.getElementById("penalidadePerExtra3").value) || 0;
    var extra4 = parseInt(document.getElementById("penalidadePerExtra4").value) || 0;

    total = 0 - armadura - escudo - extra1 - extra2 - extra3 - extra4;

    var camposResultado = document.querySelectorAll(".penalidadeArmadura");
    
    camposResultado.forEach(function(campo) {
        campo.value = total;
    })

    calcularPericia('acrobacia', 'destreza'); calcularPericia('atletismo','forca'); calcularPericia('furtividade','destreza'); calcularPericia('Ladinagem','´destreza');
}

function limiteDestreza() {
    const values = [
        document.getElementById("limiteDesArmadura").value,
        document.getElementById("limiteDesEscudo").value,
        document.getElementById("limiteDesExtra1").value,
        document.getElementById("limiteDesExtra2").value,
        document.getElementById("limiteDesExtra3").value,
        document.getElementById("limiteDesExtra4").value,
    ];

    const numbers = values
        .map(value => value.trim() === "" ? NaN : Number(value))
        .filter(value => !isNaN(value) && value !== 0);

    if (numbers.lenght !== 0) {
        var min = Math.min(...numbers);

        var valorDestreza = parseInt(document.getElementById("valorDestreza").value) || 0;

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