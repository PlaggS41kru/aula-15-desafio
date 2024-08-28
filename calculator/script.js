let um = document.getElementById("um")
let dois = document.getElementById("dois")
let tres = document.getElementById("tres")
let quatro = document.getElementById("quatro")
let cinco = document.getElementById("cinco")
let seis = document.getElementById("seis")
let sete = document.getElementById("sete")
let oito = document.getElementById("oito")
let nove = document.getElementById("nove")
let zero = document.getElementById("zero")

let ponto = document.getElementById("ponto")
let adicao = document.getElementById("adicao")
let subtracao = document.getElementById("subtracao")
let divisao = document.getElementById("divisao")
let porcentagem = document.getElementById("porcentagem")
let multiplicacao = document.getElementById("multiplicacao")
let deletar = document.getElementById("deletar")
let limpar = document.getElementById("limpar")
let calcular = document.getElementById("calcular")

let numeros = []; 

um.addEventListener("click", () => {numeros.push('1')
    document.getElementById("resultado").innerHTML = result;
});
dois.addEventListener("click", () => {numeros.push('2')
    document.getElementById("resultado").innerHTML = result;
});
tres.addEventListener("click", () => {numeros.push('3')
    document.getElementById("resultado").innerHTML = result;
});
quatro.addEventListener("click", () => {numeros.push('4')
    document.getElementById("resultado").innerHTML = result;
});
cinco.addEventListener("click", () => {numeros.push('5')
    document.getElementById("resultado").innerHTML = result;
});
seis.addEventListener("click", () => {numeros.push('6')
    document.getElementById("resultado").innerHTML = result;
});
sete.addEventListener("click", () => {numeros.push('7')
    document.getElementById("resultado").innerHTML = result;
});
oito.addEventListener("click", () => {numeros.push('8')
    document.getElementById("resultado").innerHTML = result;
});
nove.addEventListener("click", () => {numeros.push('9')
    document.getElementById("resultado").innerHTML = result;
});
zero.addEventListener("click", () => {numeros.push('0')
    document.getElementById("resultado").innerHTML = result;
});

ponto.addEventListener("click", () => {numeros.push('.')
    document.getElementById("resultado").innerHTML = result;
});
adicao.addEventListener("click", () => {numeros.push('+')
    document.getElementById("resultado").innerHTML = result;
});
subtracao.addEventListener("click", () => {numeros.push('-')
    document.getElementById("resultado").innerHTML = result;
});
divisao.addEventListener("click", () => {numeros.push('/')
    document.getElementById("resultado").innerHTML = result;
});
porcentagem.addEventListener("click", () => {numeros.push("100/")
    document.getElementById("resultado").innerHTML = result;
});
multiplicacao.addEventListener("click", () => {numeros.push("*")
    document.getElementById("resultado").innerHTML = result;
});
deletar.addEventListener("click", () => {numeros.pop()
    document.getElementById("resultado").innerHTML = result;
});
limpar.addEventListener("click", () => {numeros = []
    document.getElementById("resultado").innerHTML = result;
});
calcular.addEventListener("click", () => {
    let numbers = numeros.join('');
    let result = eval(numbers);
    document.getElementById("resultado").innerHTML = result;
});










