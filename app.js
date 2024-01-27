
let numeroSecreto = 0;
let intentos = 1;
let numerosSorteados = [];
let numeroMaximo = prompt("Escribe el número máximo de número secreto del juego");


function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function generarNumeroSecreto(){
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(numerosSorteados);

    if(numerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p','Ya se sortearon todos los números posibles');
    }else{
        if(numerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        }else{
            numerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
    
}

function verificarIntento(){
    let numeroDeUsuario =  parseInt(document.getElementById('valorUsuario').value);
    console.log(intentos);

    if(numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${intentos > 1 ? 'veces' : 'vez'}`);
        document.querySelector('#reiniciar').removeAttribute('disabled');
    }else{
        if(numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p','El número secreto es menor');
        }else{
            asignarTextoElemento('p','El número secreto es mayor');
        }
    }
    intentos++;
    limpiarCaja();
    return;
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';
}

function condicionesIniciales(){
    asignarTextoElemento('h1',"Juego del número secreto");
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego(){
    console.log("Aqui");
    limpiarCaja();
    condicionesIniciales();
    document.querySelector("#reiniciar").setAttribute('disabled','true');
}

condicionesIniciales();
console.log(numeroSecreto);
