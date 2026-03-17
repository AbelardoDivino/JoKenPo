

// let jogadas = ['1 pedra', '2 tesoura', '3 papel']
let jogadas = [1,2,3]

let jogar = document.getElementById("jogar")
let input = document.getElementById("put")
let player2btn = document.getElementById("2player")
let playpcbtn = document.getElementById("playvspc")
let jogarcomimagen = document.getElementById("jogarcomimagen")
let fotopedra = document.getElementById("fotopedra")
let fotopapal = document.getElementById("fotopapel")
let fototesoura = document.getElementById("fototesoura")

let papel1 = document.getElementById("papel")
let tesoura1  = document.getElementById("tesoura")
let pedra1 = document.getElementById("pedra")

player2btn.addEventListener("click",()=>{

    alert("jogar com 2 jogadores ihhihihhi")

    let p1 = Number(prompt("jogador 1 digite sua jogada [1 pedra 2 tesoura e 3 papel] "))

    let p2 = Number(prompt("jogador 2 digite sua jogada [1 - pedra 2 tesoura e 3 papel]"))

    if (p1 === p2 ) {
        alert("empate")
    }

if (p1=== 1 && p2 === 2) {
    alert("Parabens jogador 1 venceu")
}

else if (p1 === 2 && p2 === 3 ) {
        alert("Parabens jogador 1 venceu")
}

else if (p1 === 3 && p2 === 1) {
   alert("Parabens jogador 1 venceu")
}


else{
    alert("jogador 2 venceu")
}


})

playpcbtn.addEventListener("click",()=>{

    let jogador = Number(prompt("jogador 1 digite sua jogada [1 pedra 2 tesoura e 3 papel] "))

    let pc = Math.floor(Math.random() *3)+1

    if (jogador === pc ) {
        alert("empato PORRA")
    }

 else   if (jogador=== 1 && pc === 2) {
    alert("Parabens jogador 1 venceu")
}

else if (jogador === 2 && pc === 3 ) {
        alert("Parabens jogador 1 venceu")
}

else if (jogador === 3 && pc === 1) {
   alert("Parabens jogador 1 venceu")
}

else{
    alert("pc venceu")
}

})

jogarcomimagen.addEventListener("click",()=>{

let modo = Number(prompt("digite o modo de jogo [1 - pvp 2 - vs pc]"))

if (modo === 1) {
    //imagen representando um numero para vereficar se venceu ou nao
    // if () {
        
    // }


papel1.addEventListener("click",()=>{
    let papel =1
})

tesoura1.addEventListener("click",()=>{
    let tesoura = 0
})

pedra1.addEventListener("click",()=>{
    let pedra = 2
})

let jogador1 = Number(prompt("digite 1 valor entre 1,0 e 2"))
let jogador2 = Number(prompt("digite 1 valor entre 1,0 e 2"))

if (jogador1 === jogador2) {
    alert("empate")
}

else if (jogado1 === 1 && jogador2 === 2 ) {
        alert("jogador 1 venceu")
}

else if (jogador1 === 0 && jogador1 === 1) {
    alert("jogador 1 venceu")
}

else if (jogador1 === 2 && jogador2 === 0) {
    alert("jogador 1 venceu")
}

else{
    alert("jogador 2 venceu")
}

}

if (modo === 2) {
    
    let jogar
    let pc = Math.floor(Math.random()*3)

}

else{
alert("sem amigos lkkkkkkkkkkkkkk")
}

})