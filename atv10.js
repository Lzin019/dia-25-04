let rankingDeJogos = ["Roblox⭕", "Minecraft🌎", "Free Fire🔥"];
let jogoFavorito = "Minecraft🌎";

let posicao = -1;
for (let i = 0; i < rankingDeJogos.length; i++) {
    if (rankingDeJogos[i] === jogoFavorito) {
        posicao = i + 1;
        break;
    }
}

if (posicao > 0) {
    console.log(`${jogoFavorito} está no ranking na posição ${posicao}º.`);
} else {
    console.log(`${jogoFavorito} não está no ranking.`);
}
