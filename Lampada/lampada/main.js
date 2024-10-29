const lampada = document.querySelector("#lampada")
const botaoLigar = document.querySelector("#ligar")
const botaoDesligar = document.querySelector("#desligar")
let quebrado = false

function ligar() {
  if(quebrado == false){
    lampada.src = "imagens/ligada.jpg"
  }
}

function desligar() {
  if(quebrado == false){
    lampada.src = "imagens/desligada.jpg"
  }
}

function quebrar() {
  lampada.src = "imagens/quebrada.jpg"
  quebrado = true
}

botaoLigar.addEventListener("click", ligar)
botaoDesligar.addEventListener("click", desligar)
lampada.addEventListener("dblclick", quebrar)