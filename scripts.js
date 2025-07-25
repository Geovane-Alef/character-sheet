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
    26: 8, 27: 8
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
        "FET": bonusNivel(),
        "GUE": parseInt(document.getElementById("nivelPersonagem").value),
        "LAD": bbaDiferente(),
        "MAG": bonusNivel(),
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

    calcularAtaqueCorpo(); calcularAtaqueDistancia();
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

    calcularCA();

    return metade;
}

function converterForca() {
    var numero = parseInt(document.getElementById("valorForca").value);

    var modificador = modificadores[numero] !== undefined ? modificadores[numero] : 9;

    var camposResultado = document.querySelectorAll(".modificadorForca");
    
    camposResultado.forEach(function(campo) {
        campo.value = modificador;
    })

    calcularAtaqueCorpo();
}

function converterDestreza() {
    var numero = parseInt(document.getElementById("valorDestreza").value);

    var modificador = modificadores[numero] !== undefined ? modificadores[numero] : 9;

    var camposResultado = document.querySelectorAll(".modificadorDestreza");
    
    camposResultado.forEach(function(campo) {
        campo.value = modificador;
    })

    calcularReflexo(); calcularCA(); calcularAtaqueDistancia();
}

function converterConstituicao() {
    var numero = parseInt(document.getElementById("valorConstituicao").value);

    var modificador = modificadores[numero] !== undefined ? modificadores[numero] : 9;

    var camposResultado = document.querySelectorAll(".modificadorConstituicao");
    
    camposResultado.forEach(function(campo) {
        campo.value = modificador;
    })

    calcularFortitude();
}

function converterInteligencia() {
    var numero = parseInt(document.getElementById("valorInteligencia").value);

    var modificador = modificadores[numero] !== undefined ? modificadores[numero] : 9;

    var camposResultado = document.querySelectorAll(".modificadorInteligencia");
    
    camposResultado.forEach(function(campo) {
        campo.value = modificador;
    })
}

function converterSabedoria() {
    var numero = parseInt(document.getElementById("valorSabedoria").value);

    var modificador = modificadores[numero] !== undefined ? modificadores[numero] : 9;

    var camposResultado = document.querySelectorAll(".modificadorSabedoria");
    
    camposResultado.forEach(function(campo) {
        campo.value = modificador;
    })

    calcularVontade();
}

function converterCarisma() {
    var numero = parseInt(document.getElementById("valorCarisma").value);

    var modificador = modificadores[numero] !== undefined ? modificadores[numero] : 9;

    var camposResultado = document.querySelectorAll(".modificadorCarisma");
    
    camposResultado.forEach(function(campo) {
        campo.value = modificador;
    })
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

function calcularFortitude() {
    var bonusNivel = parseInt(document.getElementsByClassName("bonusNivel")[0].value) || 0; // || 0 = Se não for um número, trate como 0
    var modificadorConstituicao = parseInt(document.getElementsByClassName("modificadorConstituicao")[0].value) || 0; // || 0 = Se não for um número, trate como 0
    var fortitudeExtra = parseInt(document.getElementById("fortitudeExtra").value) || 0; // || 0 = Se não for um número, trate como 0

    var calculoFortitude = bonusNivel + modificadorConstituicao + fortitudeExtra;
    var fortitudeDefinida = calculoFortitude;

    document.getElementById("totalFortitude").value = fortitudeDefinida;
}

function calcularReflexo() {
    var bonusNivel = parseInt(document.getElementsByClassName("bonusNivel")[0].value) || 0;
    var modificadorDestreza = parseInt(document.getElementsByClassName("modificadorDestreza")[0].value) || 0;
    var reflexoExtra = parseInt(document.getElementById("reflexoExtra").value) || 0;

    var calculoReflexo = bonusNivel + modificadorDestreza + reflexoExtra;
    var reflexoDefinido = calculoReflexo;

    document.getElementById("totalReflexo").value = reflexoDefinido;
}

function calcularVontade() {
    var bonusNivel = parseInt(document.getElementsByClassName("bonusNivel")[0].value) || 0;
    var modificadorSabedoria = parseInt(document.getElementsByClassName("modificadorSabedoria")[0].value) || 0;
    var sabedoriaExtra = parseInt(document.getElementById("vontadeExtra").value) || 0;

    var calculoVontade = bonusNivel + modificadorSabedoria + sabedoriaExtra;
    var vontadeDefinida = calculoVontade;

    document.getElementById("totalVontade").value = vontadeDefinida;
}

function treinoAcrobacia() {
    var treinada = document.getElementById("acrobaciaTreinada").checked;

    if (treinada) {
        var nivel = parseInt(document.getElementById("nivelPersonagem").value) || 0;

        var periciaGraduada = nivel + 3;

        document.getElementById("graduacaoAcrobacia").value = periciaGraduada;
    } else {
        var nivel = parseInt(document.getElementsByClassName("bonusNivel")[0].value);

        document.getElementById("graduacaoAcrobacia").value = nivel;
    }

}

function calcularAcrobacia() {
    var graduacao = parseInt(document.getElementById("graduacaoAcrobacia").value) || 0;
    var modificadorDestreza = parseInt(document.getElementsByClassName("modificadorDestreza")[0].value) || 0;
    var acrobaciaExtra = parseInt(document.getElementById("acrobaciaExtra").value) || 0;

    var soma = graduacao + modificadorDestreza + acrobaciaExtra;

    document.getElementById("acrobaciaTotal").value = soma;
}

function treinoAdestrar() {
    var treinada = document.getElementById("adestrarTreinada").checked;

    if (treinada) {
        var nivel = parseInt(document.getElementById("nivelPersonagem").value) || 0;

        var periciaGraduada = nivel + 3;

        document.getElementById("graduacaoAdestrar").value = periciaGraduada;
    } else {
        var nivel = parseInt(document.getElementsByClassName("bonusNivel")[0].value);

        document.getElementById("graduacaoAdestrar").value = nivel;
    }
}

function calcularAdestrar() {
    var graduacao = parseInt(document.getElementById("graduacaoAdestrar").value) || 0;
    var modificadorCarisma = parseInt(document.getElementsByClassName("modificadorCarisma")[0].value) || 0;
    var adestrarExtra = parseInt(document.getElementById("adestrarExtra").value) || 0;

    var soma = graduacao + modificadorCarisma + adestrarExtra;

    document.getElementById("adestrarTotal").value = soma;
}

function treinoAtletismo() {
    var treinada = document.getElementById("atletismoTreinada").checked;

    if (treinada) {
        var nivel = parseInt(document.getElementById("nivelPersonagem").value) || 0;

        var periciaGraduada = nivel + 3;

        document.getElementById("graduacaoAtletismo").value = periciaGraduada;
    } else {
        var nivel = parseInt(document.getElementsByClassName("bonusNivel")[0].value);

        document.getElementById("graduacaoAtletismo").value = nivel;
    }
}

function calcularAtletismo() {
    var graduacao = parseInt(document.getElementById("graduacaoAtletismo").value) || 0;
    var modificadorForca = parseInt(document.getElementsByClassName("modificadorForca")[0].value) || 0;
    var atletismoExtra = parseInt(document.getElementById("atletismoExtra").value) || 0;

    var soma = graduacao + modificadorForca + atletismoExtra;

    document.getElementById("atletismoTotal").value = soma;
}

function treinoAtuacao1() {
    var treinada = document.getElementById("atuacao1Treinada").checked;

    if (treinada) {
        var nivel = parseInt(document.getElementById("nivelPersonagem").value) || 0;

        var periciaGraduada = nivel + 3;

        document.getElementById("graduacaoAtuacao1").value = periciaGraduada;
    } else {
        var nivel = parseInt(document.getElementsByClassName("bonusNivel")[0].value);

        document.getElementById("graduacaoAtuacao1").value = nivel;
    }
}

function calcularAtuacao1() {
    var graduacao = parseInt(document.getElementById("graduacaoAtuacao1").value) || 0;
    var modificadorCarisma = parseInt(document.getElementsByClassName("modificadorCarisma")[0].value) || 0;
    var atuacao1Extra = parseInt(document.getElementById("atuacao1Extra").value) || 0;

    var soma = graduacao + modificadorCarisma + atuacao1Extra;

    document.getElementById("atuacao1Total").value = soma;
}

function treinoAtuacao2() {
    var treinada = document.getElementById("atuacao2Treinada").checked;

    if (treinada) {
        var nivel = parseInt(document.getElementById("nivelPersonagem").value) || 0;

        var periciaGraduada = nivel + 3;

        document.getElementById("graduacaoAtuacao2").value = periciaGraduada;
    } else {
        var nivel = parseInt(document.getElementsByClassName("bonusNivel")[0].value);

        document.getElementById("graduacaoAtuacao2").value = nivel;
    }
}

function calcularAtuacao2() {
    var graduacao = parseInt(document.getElementById("graduacaoAtuacao2").value) || 0;
    var modificadorCarisma = parseInt(document.getElementsByClassName("modificadorCarisma")[0].value) || 0;
    var atuacao2Extra = parseInt(document.getElementById("atuacao2Extra").value) || 0;

    var soma = graduacao + modificadorCarisma + atuacao2Extra;

    document.getElementById("atuacao2Total").value = soma;
}

function treinoCavalgar() {
    var treinada = document.getElementById("cavalgarTreinada").checked;

    if (treinada) {
        var nivel = parseInt(document.getElementById("nivelPersonagem").value) || 0;

        var periciaGraduada = nivel + 3;

        document.getElementById("graduacaoCavalgar").value = periciaGraduada;
    } else {
        var nivel = parseInt(document.getElementsByClassName("bonusNivel")[0].value);

        document.getElementById("graduacaoCavalgar").value = nivel;
    }
}

function calcularCavalgar() {
    var graduacao = parseInt(document.getElementById("graduacaoCavalgar").value) || 0;
    var modificadorDestreza = parseInt(document.getElementsByClassName("modificadorDestreza")[0].value) || 0;
    var cavalgarExtra = parseInt(document.getElementById("cavalgarExtra").value) || 0;

    var soma = graduacao + modificadorDestreza + cavalgarExtra;

    document.getElementById("cavalgarTotal").value = soma;
}

function treinoConhecimento1() {
    var treinada = document.getElementById("conhecimento1Treinada").checked;

    if (treinada) {
        var nivel = parseInt(document.getElementById("nivelPersonagem").value) || 0;

        var periciaGraduada = nivel + 3;

        document.getElementById("graduacaoConhecimento1").value = periciaGraduada;
    } else {
        var nivel = parseInt(document.getElementsByClassName("bonusNivel")[0].value);

        document.getElementById("graduacaoConhecimento1").value = nivel;
    }
}

function calcularConhecimento1() {
    var graduacao = parseInt(document.getElementById("graduacaoConhecimento1").value) || 0;
    var modificadorInteligencia = parseInt(document.getElementsByClassName("modificadorInteligencia")[0].value) || 0;
    var conhecimento1Extra = parseInt(document.getElementById("conhecimento1Extra").value) || 0;

    var soma = graduacao + modificadorInteligencia + conhecimento1Extra;

    document.getElementById("conhecimento1Total").value = soma;
}

function treinoConhecimento2() {
    var treinada = document.getElementById("conhecimento2Treinada").checked;

    if (treinada) {
        var nivel = parseInt(document.getElementById("nivelPersonagem").value) || 0;

        var periciaGraduada = nivel + 3;

        document.getElementById("graduacaoConhecimento2").value = periciaGraduada;
    } else {
        var nivel = parseInt(document.getElementsByClassName("bonusNivel")[0].value);

        document.getElementById("graduacaoConhecimento2").value = nivel;
    }
}

function calcularConhecimento2() {
    var graduacao = parseInt(document.getElementById("graduacaoConhecimento2").value) || 0;
    var modificadorInteligencia = parseInt(document.getElementsByClassName("modificadorInteligencia")[0].value) || 0;
    var conhecimento2Extra = parseInt(document.getElementById("conhecimento2Extra").value) || 0;

    var soma = graduacao + modificadorInteligencia + conhecimento2Extra;

    document.getElementById("conhecimento2Total").value = soma;
}

function treinoCura() {
    var treinada = document.getElementById("curaTreinada").checked;

    if (treinada) {
        var nivel = parseInt(document.getElementById("nivelPersonagem").value) || 0;

        var periciaGraduada = nivel + 3;

        document.getElementById("graduacaoCura").value = periciaGraduada;
    } else {
        var nivel = parseInt(document.getElementsByClassName("bonusNivel")[0].value);

        document.getElementById("graduacaoCura").value = nivel;
    }
}

function calcularCura() {
    var graduacao = parseInt(document.getElementById("graduacaoCura").value) || 0;
    var modificadorSabedoria = parseInt(document.getElementsByClassName("modificadorSabedoria")[0].value) || 0;
    var curaExtra = parseInt(document.getElementById("curaExtra").value) || 0;

    var soma = graduacao + modificadorSabedoria + curaExtra;

    document.getElementById("curaTotal").value = soma;
}

function treinoDiplomacia() {
    var treinada = document.getElementById("diplomaciaTreinada").checked;

    if (treinada) {
        var nivel = parseInt(document.getElementById("nivelPersonagem").value) || 0;

        var periciaGraduada = nivel + 3;

        document.getElementById("graduacaoDiplomacia").value = periciaGraduada;
    } else {
        var nivel = parseInt(document.getElementsByClassName("bonusNivel")[0].value);

        document.getElementById("graduacaoDiplomacia").value = nivel;
    }
}

function calcularDiplomacia() {
    var graduacao = parseInt(document.getElementById("graduacaoDiplomacia").value) || 0;
    var modificadorSabedoria = parseInt(document.getElementsByClassName("modificadorSabedoria")[0].value) || 0;
    var diplomaciaExtra = parseInt(document.getElementById("diplomaciaExtra").value) || 0;

    var soma = graduacao + modificadorSabedoria + diplomaciaExtra;

    document.getElementById("diplomaciaTotal").value = soma;
}

function treinoEnganacao() {
    var treinada = document.getElementById("enganacaoTreinada").checked;

    if (treinada) {
        var nivel = parseInt(document.getElementById("nivelPersonagem").value) || 0;

        var periciaGraduada = nivel + 3;

        document.getElementById("graduacaoEnganacao").value = periciaGraduada;
    } else {
        var nivel = parseInt(document.getElementsByClassName("bonusNivel")[0].value);

        document.getElementById("graduacaoEnganacao").value = nivel;
    }
}

function calcularEnganacao() {
    var graduacao = parseInt(document.getElementById("graduacaoEnganacao").value) || 0;
    var modificadorCarisma = parseInt(document.getElementsByClassName("modificadorCarisma")[0].value) || 0;
    var enganacaoExtra = parseInt(document.getElementById("enganacaoExtra").value) || 0;

    var soma = graduacao + modificadorCarisma + enganacaoExtra;

    document.getElementById("enganacaoTotal").value = soma;
}

function treinoFurtividade() {
    var treinada = document.getElementById("furtividadeTreinada").checked;

    if (treinada) {
        var nivel = parseInt(document.getElementById("nivelPersonagem").value) || 0;

        var periciaGraduada = nivel + 3;

        document.getElementById("graduacaoFurtividade").value = periciaGraduada;
    } else {
        var nivel = parseInt(document.getElementsByClassName("bonusNivel")[0].value);

        document.getElementById("graduacaoFurtividade").value = nivel;
    }
}

function calcularFurtividade() {
    var graduacao = parseInt(document.getElementById("graduacaoFurtividade").value) || 0;
    var modificadorDestreza = parseInt(document.getElementsByClassName("modificadorDestreza")[0].value) || 0;
    var furtividadeExtra = parseInt(document.getElementById("furtividadeExtra").value) || 0;

    var soma = graduacao + modificadorDestreza + furtividadeExtra;

    document.getElementById("furtividadeTotal").value = soma;
}

function treinoIdentMagia() {
    var treinada = document.getElementById("identMagiaTreinada").checked;

    if (treinada) {
        var nivel = parseInt(document.getElementById("nivelPersonagem").value) || 0;

        var periciaGraduada = nivel + 3;

        document.getElementById("graduacaoIdentMagia").value = periciaGraduada;
    } else {
        var nivel = parseInt(document.getElementsByClassName("bonusNivel")[0].value);

        document.getElementById("graduacaoIdentMagia").value = nivel;
    }
}

function calcularIdentMagia() {
    var graduacao = parseInt(document.getElementById("graduacaoIdentMagia").value) || 0;
    var modificadorInteligencia = parseInt(document.getElementsByClassName("modificadorInteligencia")[0].value) || 0;
    var identMagiaExtra = parseInt(document.getElementById("identMagiaExtra").value) || 0;

    var soma = graduacao + modificadorInteligencia + identMagiaExtra;

    document.getElementById("identMagiaTotal").value = soma;
}

function treinoIniciativa() {
    var treinada = document.getElementById("iniciativaTreinada").checked;

    if (treinada) {
        var nivel = parseInt(document.getElementById("nivelPersonagem").value) || 0;

        var periciaGraduada = nivel + 3;

        document.getElementById("graduacaoIniciativa").value = periciaGraduada;
    } else {
        var nivel = parseInt(document.getElementsByClassName("bonusNivel")[0].value);

        document.getElementById("graduacaoIniciativa").value = nivel;
    }
}

function calcularIniciativa() {
    var graduacao = parseInt(document.getElementById("graduacaoIniciativa").value) || 0;
    var modificadorDestreza = parseInt(document.getElementsByClassName("modificadorDestreza")[0].value) || 0;
    var iniciativaExtra = parseInt(document.getElementById("iniciativaExtra").value) || 0;

    var soma = graduacao + modificadorDestreza + iniciativaExtra;

    document.getElementById("iniciativaTotal").value = soma;
}

function treinoIntimidacao() {
    var treinada = document.getElementById("intimidacaoTreinada").checked;

    if (treinada) {
        var nivel = parseInt(document.getElementById("nivelPersonagem").value) || 0;

        var periciaGraduada = nivel + 3;

        document.getElementById("graduacaoIntimidacao").value = periciaGraduada;
    } else {
        var nivel = parseInt(document.getElementsByClassName("bonusNivel")[0].value);

        document.getElementById("graduacaoIntimidacao").value = nivel;
    }
}

function calcularIntimidacao() {
    var graduacao = parseInt(document.getElementById("graduacaoIntimidacao").value) || 0;
    var modificadorCarisma = parseInt(document.getElementsByClassName("modificadorCarisma")[0].value) || 0;
    var intimidacaoExtra = parseInt(document.getElementById("intimidacaoExtra").value) || 0;

    var soma = graduacao + modificadorCarisma + intimidacaoExtra;

    document.getElementById("intimidacaoTotal").value = soma;
}

function treinoIntuicao() {
    var treinada = document.getElementById("intuicaoTreinada").checked;

    if (treinada) {
        var nivel = parseInt(document.getElementById("nivelPersonagem").value) || 0;

        var periciaGraduada = nivel + 3;

        document.getElementById("graduacaoIntuicao").value = periciaGraduada;
    } else {
        var nivel = parseInt(document.getElementsByClassName("bonusNivel")[0].value);

        document.getElementById("graduacaoIntuicao").value = nivel;
    }
}

function calcularIntuicao() {
    var graduacao = parseInt(document.getElementById("graduacaoIntuicao").value) || 0;
    var modificadorSabedoria = parseInt(document.getElementsByClassName("modificadorSabedoria")[0].value) || 0;
    var intuicaoExtra = parseInt(document.getElementById("intuicaoExtra").value) || 0;

    var soma = graduacao + modificadorSabedoria + intuicaoExtra;

    document.getElementById("intuicaoTotal").value = soma;
}

function treinoLadinagem() {
    var treinada = document.getElementById("ladinagemTreinada").checked;

    if (treinada) {
        var nivel = parseInt(document.getElementById("nivelPersonagem").value) || 0;

        var periciaGraduada = nivel + 3;

        document.getElementById("graduacaoLadinagem").value = periciaGraduada;
    } else {
        var nivel = parseInt(document.getElementsByClassName("bonusNivel")[0].value);

        document.getElementById("graduacaoLadinagem").value = nivel;
    }
}

function calcularLadinagem() {
    var graduacao = parseInt(document.getElementById("graduacaoLadinagem").value) || 0;
    var modificadorDestreza = parseInt(document.getElementsByClassName("modificadorDestreza")[0].value) || 0;
    var ladinagemExtra = parseInt(document.getElementById("ladinagemExtra").value) || 0;

    var soma = graduacao + modificadorDestreza + ladinagemExtra;

    document.getElementById("ladinagemTotal").value = soma;
}

function treinoObterInfo() {
    var treinada = document.getElementById("obterInfoTreinada").checked;

    if (treinada) {
        var nivel = parseInt(document.getElementById("nivelPersonagem").value) || 0;

        var periciaGraduada = nivel + 3;

        document.getElementById("graduacaoObterInfo").value = periciaGraduada;
    } else {
        var nivel = parseInt(document.getElementsByClassName("bonusNivel")[0].value);

        document.getElementById("graduacaoObterInfo").value = nivel;
    }
}

function calcularObterInfo() {
    var graduacao = parseInt(document.getElementById("graduacaoObterInfo").value) || 0;
    var modificadorCarisma = parseInt(document.getElementsByClassName("modificadorCarisma")[0].value) || 0;
    var obterInfoExtra = parseInt(document.getElementById("obterInfoExtra").value) || 0;

    var soma = graduacao + modificadorCarisma + obterInfoExtra;

    document.getElementById("obterInfoTotal").value = soma;
}

function treinoOficio1() {
    var treinada = document.getElementById("oficio1Treinada").checked;

    if (treinada) {
        var nivel = parseInt(document.getElementById("nivelPersonagem").value) || 0;

        var periciaGraduada = nivel + 3;

        document.getElementById("graduacaoOficio1").value = periciaGraduada;
    } else {
        var nivel = parseInt(document.getElementsByClassName("bonusNivel")[0].value);

        document.getElementById("graduacaoOficio1").value = nivel;
    }
}

function calcularOficio1() {
    var graduacao = parseInt(document.getElementById("graduacaoOficio1").value) || 0;
    var modificadorInteligencia = parseInt(document.getElementsByClassName("modificadorInteligencia")[0].value) || 0;
    var oficio1Extra = parseInt(document.getElementById("oficio1Extra").value) || 0;

    var soma = graduacao + modificadorInteligencia + oficio1Extra;

    document.getElementById("oficio1Total").value = soma;
}

function treinoOficio2() {
    var treinada = document.getElementById("oficio2Treinada").checked;

    if (treinada) {
        var nivel = parseInt(document.getElementById("nivelPersonagem").value) || 0;

        var periciaGraduada = nivel + 3;

        document.getElementById("graduacaoOficio2").value = periciaGraduada;
    } else {
        var nivel = parseInt(document.getElementsByClassName("bonusNivel")[0].value);

        document.getElementById("graduacaoOficio2").value = nivel;
    }
}

function calcularOficio2() {
    var graduacao = parseInt(document.getElementById("graduacaoOficio2").value) || 0;
    var modificadorInteligencia = parseInt(document.getElementsByClassName("modificadorInteligencia")[0].value) || 0;
    var oficio2Extra = parseInt(document.getElementById("oficio2Extra").value) || 0;

    var soma = graduacao + modificadorInteligencia + oficio2Extra;

    document.getElementById("oficio2Total").value = soma;
}

function treinoPercepcao() {
    var treinada = document.getElementById("percepcaoTreinada").checked;

    if (treinada) {
        var nivel = parseInt(document.getElementById("nivelPersonagem").value) || 0;

        var periciaGraduada = nivel + 3;

        document.getElementById("graduacaoPercepcao").value = periciaGraduada;
    } else {
        var nivel = parseInt(document.getElementsByClassName("bonusNivel")[0].value);

        document.getElementById("graduacaoPercepcao").value = nivel;
    }
}

function calcularPercepcao() {
    var graduacao = parseInt(document.getElementById("graduacaoPercepcao").value) || 0;
    var modificadorSabedoria = parseInt(document.getElementsByClassName("modificadorSabedoria")[0].value) || 0;
    var percepcaoExtra = parseInt(document.getElementById("percepcaoExtra").value) || 0;

    var soma = graduacao + modificadorSabedoria + percepcaoExtra;

    document.getElementById("percepcaoTotal").value = soma;
}

function treinoSobrevivencia() {
    var treinada = document.getElementById("sobrevivenciaTreinada").checked;

    if (treinada) {
        var nivel = parseInt(document.getElementById("nivelPersonagem").value) || 0;

        var periciaGraduada = nivel + 3;

        document.getElementById("graduacaoSobrevivencia").value = periciaGraduada;
    } else {
        var nivel = parseInt(document.getElementsByClassName("bonusNivel")[0].value);

        document.getElementById("graduacaoSobrevivencia").value = nivel;
    }
}

function calcularSobrevivencia() {
    var graduacao = parseInt(document.getElementById("graduacaoSobrevivencia").value) || 0;
    var modificadorSabedoria = parseInt(document.getElementsByClassName("modificadorSabedoria")[0].value) || 0;
    var sobrevivenciaExtra = parseInt(document.getElementById("sobrevivenciaExtra").value) || 0;

    var soma = graduacao + modificadorSabedoria + sobrevivenciaExtra;

    document.getElementById("sobrevivenciaTotal").value = soma;
}

function treinoPericiaExtra1() {
    var treinada = document.getElementById("periciaExtra1Treinada").checked;

    if (treinada) {
        var nivel = parseInt(document.getElementById("nivelPersonagem").value) || 0;

        var periciaGraduada = nivel + 3;

        document.getElementById("graduacaoPericiaExtra1").value = periciaGraduada;
    } else {
        var nivel = parseInt(document.getElementsByClassName("bonusNivel")[0].value);

        document.getElementById("graduacaoPericiaExtra1").value = nivel;
    }
}

function calcularPericiaExtra1() {
    var graduacao = parseInt(document.getElementById("graduacaoPericiaExtra1").value) || 0;
    var modificador = parseInt(document.getElementById("modificadorPericiaExtra1").value) || 0;
    var periciaExtra1Extra = parseInt(document.getElementById("periciaExtra1Extra").value) || 0;

    var soma = graduacao + modificador + periciaExtra1Extra;

    document.getElementById("periciaExtra1Total").value = soma;
}

function treinoPericiaExtra2() {
    var treinada = document.getElementById("periciaExtra2Treinada").checked;

    if (treinada) {
        var nivel = parseInt(document.getElementById("nivelPersonagem").value) || 0;

        var periciaGraduada = nivel + 3;

        document.getElementById("graduacaoPericiaExtra2").value = periciaGraduada;
    } else {
        var nivel = parseInt(document.getElementsByClassName("bonusNivel")[0].value);

        document.getElementById("graduacaoPericiaExtra2").value = nivel;
    }
}

function calcularPericiaExtra2() {
    var graduacao = parseInt(document.getElementById("graduacaoPericiaExtra2").value) || 0;
    var modificador = parseInt(document.getElementById("modificadorPericiaExtra2").value) || 0;
    var periciaExtra2Extra = parseInt(document.getElementById("periciaExtra2Extra").value) || 0;

    var soma = graduacao + modificador + periciaExtra2Extra;

    document.getElementById("periciaExtra2Total").value = soma;
}

function calcularAtaqueCorpo() {
    var bba = parseInt(document.getElementsByClassName("bbaAtual")[0].value) || 0;
    var modificador = parseInt(document.getElementsByClassName("modificadorForca")[0].value) || 0;
    var tamanho = parseInt(document.getElementById("modTamAtaqueCorpo").value) || 0;
    var extra = parseInt(document.getElementById("extraAtaqueCorpo").value) || 0;

    var ataque = bba + modificador + tamanho + extra;

    document.getElementById("totalAtaqueCorpo").value = ataque;
}

function calcularAtaqueDistancia() {
    var bba = parseInt(document.getElementsByClassName("bbaAtual")[0].value) || 0;
    var modificador = parseInt(document.getElementsByClassName("modificadorDestreza")[0].value) || 0;
    var tamanho = parseInt(document.getElementById("modTamAtaqueDistancia").value) || 0;
    var extra = parseInt(document.getElementById("extraAtaqueDistancia").value) || 0;

    var ataque = bba + modificador + tamanho + extra;

    document.getElementById("totalAtaqueDistancia").value = ataque;
}


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

    calcularAcrobacia(); calcularAtletismo(); calcularFurtividade(); calcularLadinagem();
    console.log(total);
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
        converterDestreza();
    }
}