// ===== ELEMENTOS =====

let player2btn = document.getElementById("2player")
let playpcbtn = document.getElementById("playvspc")
let jogarcomimagen = document.getElementById("jogarcomimagen")

let fotopedra = document.getElementById("fotopedra")
let fotopapel = document.getElementById("fotopapel")
let fototesoura = document.getElementById("fototesoura")

// ===== PROMPT PVP =====

player2btn.addEventListener("click",()=>{

alert("Modo 2 jogadores")

let p1 = Number(prompt("Jogador 1 [1 pedra 2 tesoura 3 papel]"))
let p2 = Number(prompt("Jogador 2 [1 pedra 2 tesoura 3 papel]"))

verificar(p1,p2)

})

// ===== PROMPT VS PC =====

playpcbtn.addEventListener("click",()=>{

let jogador = Number(prompt("Jogador [1 pedra 2 tesoura 3 papel]"))

let pc = Math.floor(Math.random()*3)+1

verificar(jogador,pc)

})

// ===== MODO IMAGEM =====

let jogador1 = null
let jogador2 = null
let turno = 1
let modo = null

jogarcomimagen.addEventListener("click", ()=>{

modo = Number(prompt("modo de jogo [1 pvp | 2 vs pc]"))

alert("Escolha clicando nas imagens")

})

// ===== JOGADA =====

function jogar(valor){

if(modo === null) return

if(modo === 1){

if(turno === 1){

jogador1 = valor
alert("Jogador 1 escolheu")

turno = 2

}

else{

jogador2 = valor
verificar(jogador1,jogador2)

turno = 1

}

}

else if(modo === 2){

let pc = Math.floor(Math.random()*3)+1

verificar(valor,pc)

}

}

// ===== VERIFICAR VENCEDOR =====

function verificar(p1,p2){

if(p1 === p2){
alert("Empate")
}

else if(p1 === 1 && p2 === 2){
alert("Jogador 1 venceu")
}

else if(p1 === 2 && p2 === 3){
alert("Jogador 1 venceu")
}

else if(p1 === 3 && p2 === 1){
alert("Jogador 1 venceu")
}

else{
alert("Jogador 2 venceu")
}

}

// ===== CLIQUE NAS IMAGENS =====

fotopedra.addEventListener("click", ()=> jogar(1))
fototesoura.addEventListener("click", ()=> jogar(2))
fotopapel.addEventListener("click", ()=> jogar(3))