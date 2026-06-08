// 1. LISTA DOS SELOS COM O CAMPO 'PRODUTOS'
var selos = [
    {
        nome: "Orgânico Brasil",
        desc: "Garante que o produto é natural e sem veneno.",
        foto: "https://www.gov.br/agricultura/pt-br/assuntos/sustentabilidade/organicos/logos/logo-organicos-brasil-colorido.png",
        produtos: "café, cacau, frutas, verduras, legumes, sucos, mel, maçã"
    },
    {
        nome: "Rainforest Alliance",
        desc: "Conservação florestal e bem estar dos produtores.",
        foto: "https://www.rainforest-alliance.org/wp-content/uploads/2020/06/ra-seal-300x300.png",
        produtos: "café, cacau, chocolate, chá, bananas, frutas"
    },
    {
        nome: "Bonsucro",
        desc: "Sustentabilidade na cadeia de produção da cana-de-açúcar.",
        foto: "https://bonsucro.com/wp-content/uploads/2021/04/Bonsucro_Logo_Standard_RGB.png",
        produtos: "açúcar, etanol, cana, cachaça, doces"
    }
];

// 2. FUNÇÃO QUE DESENHA OS SELOS NA TELA (COM DINÂMICA)
function mostrarTudo(lista) {
    var area = document.getElementById("listaSelos");
    area.innerHTML = ""; 

    if (lista.length == 0) {
        area.innerHTML = "<p style='text-align:center; color:red; font-weight:bold; width:100%;'>Nenhum selo encontrado para esta busca.</p>";
        return;
    }

    for (var i = 0; i < lista.length; i++) {
        area.innerHTML += 
            "<div class='card' onmouseover='destacarCard(this)' onmouseout='normalizarCard(this)'>" +
                "<img src='" + lista[i].foto + "'>" + 
                "<h3>" + lista[i].nome + "</h3>" +
                "<p>" + lista[i].desc + "</p>" +
                "<small style='display:block; margin-top:10px; color:#666;'><b>Exemplos:</b> " + lista[i].produtos + "</small>" +
            "</div>";
    }
}

// 3. FUNÇÃO DO BOTÃO BUSCAR (PROCURA POR NOME OU POR PRODUTO)
function buscar() {
    var termo = document.getElementById("inputBusca").value.toLowerCase();
    var resultados = [];

    for (var i = 0; i < selos.length; i++) {
        var nomeSelo = selos[i].nome.toLowerCase();
        var produtosSelo = selos[i].produtos.toLowerCase(); 
        
        if (nomeSelo.indexOf(termo) != -1 || produtosSelo.indexOf(termo) != -1) {
            resultados.push(selos[i]); 
        }
    }
    mostrarTudo(resultados);
}

// 4. EFEITOS DINÂMICOS DO JAVASCRIPT NOS CARDS
function destacarCard(elemento) {
    elemento.style.backgroundColor = "#e2ffe2"; 
    elemento.style.transform = "scale(1.05)";   
    elemento.style.transition = "0.3s";          
    elemento.style.boxShadow = "0px 8px 16px rgba(0,0,0,0.3)"; 
}

function normalizarCard(elemento) {
    elemento.style.backgroundColor = "#f9f9f9"; 
    elemento.style.transform = "scale(1.0)";     
    elemento.style.boxShadow = "none";           
}

// 5. FUNÇÃO QUE CONTROLA O MENU EM CASCATA
function mudarSecao(opcao) {
    var telaInicial = document.getElementById("secaoInicial");
    var telaMissao = document.getElementById("secaoMissao");

    if (opcao == "inicial") {
        telaInicial.style.display = "block";
        telaMissao.style.display = "none";
    } else if (opcao == "missao") {
        telaInicial.style.display = "none";
        telaMissao.style.display = "block";
    }
}

// Inicialização automática
mostrarTudo(selos);