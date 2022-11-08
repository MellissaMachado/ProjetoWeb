
const bd = `{
    "Alunos": [
        {
            "Nome": "Amanda Azevedo",
            "Rgm": 136,
            "AvaliacaoParcial": 2,
            "Exercicios": 1,
            "AvaliacaoRegimental": 5,
            "img": "./images/amanda.jpg"
        },
        {
            "Nome": "Alan Gomes",
            "Rgm": 120,
            "AvaliacaoParcial": 3,
            "Exercicios": 2,
            "AvaliacaoRegimental": 4,
            "img": "./images/alan.jpg"
        },
        {
            "Nome": "Bárbara Dantas",
            "Rgm": 129,
            "AvaliacaoParcial": 1,
            "Exercicios": 3,
            "AvaliacaoRegimental": 3,
            "img": "./images/barbara.jpg"
        },
        {
            "Nome": "Carolina Silva",
            "Rgm": 143,
            "AvaliacaoParcial": 1,
            "Exercicios": 2,
            "AvaliacaoRegimental": 5,
            "img": "./images/carolina.jpg"
        },
        {
            "Nome": "Davi Pereira",
            "Rgm": 127,
            "AvaliacaoParcial": 2,
            "Exercicios": 2,
            "AvaliacaoRegimental": 4,
            "img": "./images/davi.jpg"
        },
        {
            "Nome": "Dayane Oliveira",
            "Rgm": 134,
            "AvaliacaoParcial": 3,
            "Exercicios": 3,
            "AvaliacaoRegimental": 5,
            "img": "./images/dayane.jpg"
        },
        {
            "Nome": "Emily Feitosa",
            "Rgm": 112,
            "AvaliacaoParcial": 2,
            "Exercicios": 1,
            "AvaliacaoRegimental": 3,
            "img": "./images/emily.jpg"
        },
        {
            "Nome": "Gabriel Farias",
            "Rgm": 137,
            "AvaliacaoParcial": 2,
            "Exercicios": 2,
            "AvaliacaoRegimental": 2,
            "img": "./images/gabriel.jpg"
        },
        {
            "Nome": "Gislaine Silva",
            "Rgm": 115,
            "AvaliacaoParcial": 3,
            "Exercicios": 3,
            "AvaliacaoRegimental": 3,
            "img": "./images/gislaine.jpg"
        },
        {
            "Nome": "Isadora Santos",
            "Rgm": 020,
            "AvaliacaoParcial": 1,
            "Exercicios": 1,
            "AvaliacaoRegimental": 5,
            "img": "./images/isadora.jpg"
        },
        {
            "Nome": "Isaque Guedes",
            "Rgm": 011,
            "AvaliacaoParcial": 1,
            "Exercicios": 2,
            "AvaliacaoRegimental": 3,
            "img": "./images/isaque.jpg"
        },
        {
            "Nome": "Jean Lima",
            "Rgm": 142,
            "AvaliacaoParcial": 2,
            "Exercicios": 3,
            "AvaliacaoRegimental": 1,
            "img": "./images/jean.jpg"
        },
        {
            "Nome": "Jessica Moraes",
            "Rgm": 044,
            "AvaliacaoParcial": 1,
            "Exercicios": 1,
            "AvaliacaoRegimental": 1,
            "img": "./images/jessica.jpg"
        },
        {
            "Nome": "Kelly Lima",
            "Rgm": 110,
            "AvaliacaoParcial": 3,
            "Exercicios": 0,
            "AvaliacaoRegimental": 4,
            "img": "./images/kelly.jpg"
        },
        {
            "Nome": "Laura Silva",
            "Rgm": 133,
            "AvaliacaoParcial": 0,
            "Exercicios": 2,
            "AvaliacaoRegimental": 4,
            "img": "./images/laura.jpg"
        },
        {
            "Nome": "Lucas Ribeiro",
            "Rgm": 128,
            "AvaliacaoParcial": 2,
            "Exercicios": 2,
            "AvaliacaoRegimental": 3,
            "img": "./images/lucas.jpg"
        },
        {
            "Nome": "Maria Santana",
            "Rgm": 113,
            "AvaliacaoParcial": 1,
            "Exercicios": 2,
            "AvaliacaoRegimental": 1,
            "img": "./images/maria.jpg"
        },
        {
            "Nome": "Mateus Viana",
            "Rgm": 131,
            "AvaliacaoParcial": 3,
            "Exercicios": 1,
            "AvaliacaoRegimental": 3,
            "img": "./images/mateus.jpg"
        },
        {
            "Nome": "Nicole Carvalho",
            "Rgm": 116,
            "AvaliacaoParcial": 4,
            "Exercicios": 2,
            "AvaliacaoRegimental": 4,
            "img": "./images/nicole.jpg"
        },
        {
            "Nome": "Natan Gomes",
            "Rgm": 138,
            "AvaliacaoParcial": 2,
            "Exercicios": 3,
            "AvaliacaoRegimental": 5,
            "img": "./images/natan.jpg"
        },
        {
            "Nome": "Rafaela Ferreira",
            "Rgm": 141,
            "AvaliacaoParcial": 1,
            "Exercicios": 1,
            "AvaliacaoRegimental": 4,
            "img": "./images/rafaela.jpg"
        },
        {
            "Nome": "Rian Oliveira",
            "Rgm": 135,
            "AvaliacaoParcial": 3,
            "Exercicios": 3,
            "AvaliacaoRegimental": 3,
            "img": "./images/rian.jpg"
        },
        {
            "Nome": "Taina Medeiros",
            "Rgm": 043,
            "AvaliacaoParcial": 2,
            "Exercicios": 2,
            "AvaliacaoRegimental": 2,
            "img": "./images/taina.jpg"
        },
        {
            "Nome": "Viviane Pontes",
            "Rgm": 114,
            "AvaliacaoParcial": 1,
            "Exercicios": 2,
            "AvaliacaoRegimental": 3,
            "img": "./images/viviane.jpg"
        },
        {
            "Nome": "Vitor Correa",
            "Rgm": 132,
            "AvaliacaoParcial": 2,
            "Exercicios": 3,
            "AvaliacaoRegimental": 4,
            "img": "./images/vitor.jpg"
        }
    ]
}`

function exibirAlunos() {
    const objs = JSON.parse(bd)

    let resultado = document.getElementById("resultado")

    objs.alunos.forEach(element => {
        console.log(element)
        
        var media = element.avaliacaoParcial + element.exercicios + element.avaliacaoRegimental
        var status
            if(media >= 6){
                status = "Aprovado"
            } else if(media >= 2 && media <= 6){
                status = "Avaliação Final"
            } else if(media < 2){
                status = "Reprovado"
            }
        
        resultado.innerHTML +=
        `<div class="container">
        <img src="${element.img}" alt="1"/>
        <p><b>Nome: </b> ${element.Nome}</p>
        <p><b>RGM: </b> ${element.Rgm}</p>
        <p><b>Av. Parcial: </b> ${element.AvaliacaoParcial}</p>
        <p><b>Exercícios: </b> ${element.Exercicios}</p>
        <p><b>Av. Regimental: </b> ${element.AvaliacaoRegimental}</p>
        <p><b>Média: </b> ${media}</p>
        <p><b>Status: </b> ${status}</p>
        </div>`
    });
}