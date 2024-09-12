const atletas = [
    { 
        nome: "Neymar Jr.",
        dataDeNascimento: "5 de fevereiro de 1992",
        nacionalidade: "Brasil",
        esporte: "Futebol",
        descricao: "Neymar é considerado um dos maiores talentos do futebol brasileiro moderno. Ele teve uma carreira brilhante no Barcelona e no PSG, além de ser uma figura chave na Seleção Brasileira.",
        img: "img/neymar.jpg"
    },
    { 
        nome: "Marta",
        dataDeNascimento: "19 de fevereiro de 1986",
        nacionalidade: "Brasil",
        esporte: "Futebol",
        descricao: "Marta é amplamente reconhecida como uma das maiores jogadoras de futebol feminino de todos os tempos. Ela venceu 6 vezes o prêmio de Melhor Jogadora do Mundo pela FIFA.",
        img: "img/marta.jpg"
    },
    { 
        nome: "Gustavo Kuerten",
        dataDeNascimento: "10 de setembro de 1976",
        nacionalidade: "Brasil",
        esporte: "Tênis",
        descricao: "Gustavo Kuerten, conhecido como Guga, conquistou três títulos de Roland Garros e foi número 1 do mundo em 2000. Ele é uma lenda do tênis brasileiro.",
        img: "img/Gustavo_Kuerten.jpg"
    },
    { 
        nome: "Gabriel Barbosa",
        dataDeNascimento: "30 de agosto de 1996",
        nacionalidade: "Brasil",
        esporte: "Futebol",
        descricao: "Gabriel Barbosa, conhecido como Gabigol, é um dos maiores artilheiros do futebol brasileiro contemporâneo, tendo se destacado pelo Flamengo e pela Seleção Brasileira.",
        img: "img/Gabriel_Barbosa.jpg"
    },
    { 
        nome: "Alison dos Santos",
        dataDeNascimento: "3 de junho de 2000",
        nacionalidade: "Brasil",
        esporte: "Atletismo",
        descricao: "Alison dos Santos, também conhecido como 'Piu', é um dos principais nomes do atletismo brasileiro e medalhista olímpico nos 400m com barreiras.",
        img: "img/Alison_dos_Santos.jpg"
    },
    { 
        nome: "Rebeca Andrade",
        dataDeNascimento: "8 de maio de 1999",
        nacionalidade: "Brasil",
        esporte: "Ginástica Artística",
        descricao: "Rebeca Andrade é uma das maiores ginastas brasileiras da história, conquistando medalhas de ouro e prata nas Olimpíadas de Tóquio em 2021.",
        img: "img/Rebeca_Andrade.jpg"
    },
    { 
        nome: "Maurren Maggi",
        dataDeNascimento: "25 de junho de 1976",
        nacionalidade: "Brasil",
        esporte: "Atletismo",
        descricao: "Maurren Maggi é uma atleta brasileira que conquistou a medalha de ouro no salto em distância nas Olimpíadas de 2008, sendo uma referência no esporte nacional.",
        img: "img/Maurren_Maggi.jpg"
    },
    { 
        nome: "Daiane dos Santos",
        dataDeNascimento: "10 de fevereiro de 1983",
        nacionalidade: "Brasil",
        esporte: "Ginástica Artística",
        descricao: "Daiane dos Santos foi a primeira ginasta brasileira a conquistar uma medalha de ouro em um Campeonato Mundial, sendo uma das pioneiras da ginástica no Brasil.",
        img: "img/Daiane_dos_Santos.jpg"
    },
    { 
        nome: "Adriana Araújo",
        dataDeNascimento: "4 de novembro de 1981",
        nacionalidade: "Brasil",
        esporte: "Boxe",
        descricao: "Adriana Araújo é a primeira pugilista brasileira a conquistar uma medalha olímpica, levando o bronze nos Jogos de Londres em 2012.",
        img: "img/Adriana_Araújo.jpg"
    },
    { 
        nome: "Rafaela Silva",
        dataDeNascimento: "24 de abril de 1992",
        nacionalidade: "Brasil",
        esporte: "Judô",
        descricao: "Rafaela Silva é uma judoca brasileira que conquistou o ouro nas Olimpíadas de 2016, sendo uma das principais referências do judô feminino no Brasil.",
        img: "img/Rafaela.jpg"
    },
    { 
        nome: "Tandara Caixeta",
        dataDeNascimento: "30 de outubro de 1988",
        nacionalidade: "Brasil",
        esporte: "Vôlei",
        descricao: "Tandara é uma jogadora de vôlei brasileira com uma carreira brilhante, tendo conquistado diversos títulos pela Seleção Brasileira, incluindo o ouro olímpico em Londres 2012.",
        img: "img/Tandara_Caixeta.jpg"
    },
    { 
        nome: "Giba",
        dataDeNascimento: "23 de dezembro de 1976",
        nacionalidade: "Brasil",
        esporte: "Vôlei",
        descricao: "Giba é considerado um dos maiores jogadores de vôlei de todos os tempos, tendo sido peça fundamental em várias conquistas da Seleção Brasileira de Vôlei Masculino.",
        img: "img/Giba.jpg"
    },
    { 
        nome: "Vinicius Junior",
        dataDeNascimento: "12 de julho de 2000",
        nacionalidade: "Brasil",
        esporte: "Futebol",
        descricao: "Vinicius Junior é um dos principais talentos da nova geração do futebol brasileiro, atualmente brilhando no Real Madrid e na Seleção Brasileira.",
        img: "img/vini.jpg"
    }
];
const btn = document.getElementById('btn');
let section = document.getElementById('local');

btn.addEventListener('click', pesquisar);

function pesquisar() {
    let campoPesquisa = document.getElementById('campoPesquisa').value.toLowerCase(); 
    let pesquisa = ""; 

    if (campoPesquisa === "") {
        section.innerHTML = "<p>Por favor, insira um nome para pesquisar.</p>";
        return; 
    }
    for (let atleta of atletas) {
        if (atleta.nome.toLowerCase().includes(campoPesquisa)) { 
            pesquisa += `
            <ul>
                <li>
                    <div class="containerAtleta">
                        <img src="${atleta.img}" alt="atleta">
                        <div class="players">
                            <h1>${atleta.nome}</h1>
                            <p><strong>Data de Nascimento:</strong> ${atleta.dataDeNascimento}</p>
                            <p><strong>Nacionalidade:</strong> ${atleta.nacionalidade}</p>
                            <p><strong>Esporte:</strong> ${atleta.esporte}</p>
                            <p>${atleta.descricao}</p>
                        </div>
                    </div>
                </li>
            </ul>
        `;
        }
    }
    if (pesquisa === "" ) {
        pesquisa = "<p>Nenhum atleta encontrado.</p>";
    }

    section.innerHTML = pesquisa;

    let footer = document.getElementById('footer');
    let body = document.getElementById('introduction');
    if (body) {
        body.style.height = 'auto'; 
        footer.style.height = '60px'; 
    }
}