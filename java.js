// let jogadas = ['1 pedra', '2 tesoura', '3 papel']
let jogadas = [1,2,3]

let jogar = document.getElementById("jogar")
let input = document.getElementById("put")
let player2btn = document.getElementById("2player")
let playpcbtn = document.getElementById("playvspc")

player2btn.addEventListener("click",()=>{

    alert("jogar com 2 jogadores ihhihihhi")

    let p1 = Number(prompt("jogador 1 digite sua jogada [1 pedra 2 tesoura e 3 papel] "))

    let p2 = Number(prompt("jogador 2 digite sua jogada [1 - pedra 2 tesoura e 3 papel]"))

if (p1=== 1 && p2 === 2) {
    alert("Parabens jogador 1 venceu")
}

else if (p1 === 2 && p2 === 3 ) {
        alert("Parabens jogador 1 venceu")
}

else if (p1 === 3 && p2 === 1) {
   alert("Parabens jogador 1 venceu")
}

else if (p2 === 1 && p1 === 2) {
    alert("Parabens jogador 2 venceu")

}

else if (p2 === 2 && p1 === 3) {
        alert("Parabens jogador 2 venceu")

}

else if (p2 === 3 && p1 === 1) {
 alert("Parabens jogador 2 venceu")

}

else{
    alert("empate")
}


})

playpcbtn.addEventListener("click",()=>{

})