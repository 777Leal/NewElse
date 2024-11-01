// // -------------------- E x 1 - Fácil -------------------- //

let nota1 = 7
let nota2 = 10
let nota3 = 6
let notasJuntas = ((nota1 + nota2 + nota3)/3);

if (notasJuntas  >= 6) {
    console.log(`O aluno foi aprovado, sua média foi: ${notasJuntas}.`);
    } else {
        console.log(`O aluno reprovou com  média: ${notasJuntas}.`);
    }

// -------------------- E x 2 - Fácil-------------------- //

let idadeCadastro = (16);

if (idadeCadastro <= 16) {
    console.log(`O  usuário pode se cadastrar, pois tem ${idadeCadastro} anos.`);
} else {
    console.log(`O  usuário não pode se cadastrar, pois tem ${idadeCadastro} anos.`)
}

// -------------------- E x 3 - Fácil -------------------- //

let ValorLivro  = (40);
const DescontoLivro = (ValorLivro * 0.9)

if (ValorLivro >= 50) {
    console.log(`O valor do livro, é de: R$${DescontoLivro} com 10% de desconto.`)
} else {
    console.log(`O valor do livro, é de: R$${ValorLivro}.`)
}

// -------------------- E x 4 - Fácil -------------------- //

let FrequenciaFaltas = (75);

if (FrequenciaFaltas >= 75) {
    console.log(`O  aluno foi aprovado com ${FrequenciaFaltas}% de frequência.`);
} else {
    console.log(`O  aluno foi reprovado com ${FrequenciaFaltas}% de frequência.`);
}

// -------------------- E x 5  - Fácil -------------------- //

const usuario  = { mome: `Rogério`, Idade: 17, turno: `(manhã)` }
const mensagemBoasVindas1 = `Turno Matutino (manhã)`;
const mensagemBoasVindas2 = `Turno Vespertino (tarde)`;
const mensagemBoasVindas3 = `Turno Noturno (noite)`;

if (usuario.turno === `(manhã)`) {
    console.log(mensagemBoasVindas1);

} else if  (usuario.turno === `(tarde)`) {
console.log(mensagemBoasVindas2);

} else { (usuario.turno ===  `(noite)`); 
    console.log(mensagemBoasVindas3);
}

// -------------------- E x 6 - Médio -------------------- //

let notaNumber1 = 8
let notaNumber2 = 6
let notaNumber3 = 1
let notasSomadas = ((notaNumber1 + notaNumber2 + notaNumber3)/3);

if (notasSomadas  >= 6) {
    console.log(`O aluno foi aprovado, sua média foi: ${notasSomadas}.`);

    } else if (notasSomadas < 6 & notasSomadas == 4) {
        console.log(`O aluno está de recuperação, sua média foi: ${notasSomadas}.`)
    
    } else if (notasSomadas < 4 ){
        console.log(`O aluno foi reprovado, sua média foi: ${notasSomadas}.`)
    }

// -------------------- E x 7 - Médio -------------------- //

    let Monitor = 10
    let Teclado = 17
    let Mouse = 7

    if (Monitor >= 10) {
        console.log(`Ainda há no mínimo  10 unidades de monitor em estoque, contém: ${Monitor}.`);
    } else
    console.log(`Há menos de 10 unidades em estoque, é prciso de reposição. Contém: ${Monitor}.`);


    if (Teclado >= 10) {
        console.log(`Ainda há no mínimo  10 unidades de teclado em estoque, contém: ${Teclado}.`);
    } else
     console.log(`Há menos de 10 unidades em estoque, é prciso de reposição. Contém: ${Teclado}.`);


    if (Mouse >= 10) {
        console.log(`Ainda há no mínimo  10 unidades de mouse em estoque, contém: ${Mouse}.`);
    } else
    console.log(`Há menos de 10 unidades em estoque, é prciso de reposição. Contém: ${Mouse}.`);

// -------------------- E x 8 - Médio -------------------- //

let not1 = 7
let not2 = 8
let not3 = 7
let totalnootas = ((not1+not2+not3)/3)
console.log(totalnootas)
 
if(totalnootas >=8) {
    console.log("excelente")
}

else if(totalnootas < 7.9 && totalnootas >= 6 ){
console.log("bom")
}
else if(totalnootas < 5.9){
    console.log("melhorar")
}

// -------------------- E x 9 - Médio -------------------- //

let matriculadoYesOrNo = (`Sim`)
let matricula = 400
let resultado = matricula * 0.20
let pobre = matricula - resultado 

if (matriculadoYesOrNo === `Sim` ) {
    console.log(`O valor do curso para quem tem matrícula é de: R$ ${pobre}`);
} else {
    (console.log(`O valor do curso para quem não tem a matrícula é de R$${matricula}.`));

}

// -------------------- E x 10 - Médio -------------------- //

function avaliarProjeto(funcionalidade, design, documentacao) {
    let media = (funcionalidade + design + documentacao) / 3;
    console.log("A SUA NOTA FOI DE : " + media);

    if (media >= 8) {
        console.log("Excelente");
    } else if (media >= 6) {
        console.log("Bom");
    } else {
        console.log("Precisa Melhorar");
    }
}

avaliarProjeto(5, 7, 10);

// -------------------- E x 11 - Difícil -------------------- //

let nome = "João"
                