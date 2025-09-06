// Lista de heróis disponíveis:
// Gaviao Arqueiro, Hulk, Thor, Viúva Negra, Capitão América, Pantera Negra,
// Homem de Ferro, Capitã Marvel, Homem Aranha, Doutor Estranho, Feiticeira Escarlate,
// Visão, Groot, Rocket Raccoon
const herois = [
  {
    nome: "Gaviao Arqueiro",
    poder: "Mira",
    xp: 998,
  },
  {
    nome: "Hulk",
    poder: "Forca",
    xp: 7000,
  },
  {
    nome: "Thor",
    poder: "Relampago",
    xp: 10000,
  },
  {
    nome: "Viúva Negra",
    poder: "Agilidade",
    xp: 7500,
  },
  {
    nome: "Capitão América",
    poder: "Escudo",
    xp: 6800,
  },
  {
    nome: "Pantera Negra",
    poder: "Agilidade",
    xp: 9000,
  },
  {
    nome: "Homem de Ferro",
    poder: "Tecnologia",
    xp: 12000,
  },
  {
    nome: "Capitã Marvel",
    poder: "Energia",
    xp: 9000,
  },
  {
    nome: "Homem Aranha",
    poder: "Agilidade",
    xp: 4000,
  },
  {
    nome: "Doutor Estranho",
    poder: "Magia",
    xp: 11000,
  },
  {
    nome: "Feiticeira Escarlate",
    poder: "Magia",
    xp: 8500,
  },
  {
    nome: "Visão",
    poder: "Tecnologia",
    xp: 3000,
  },
  {
    nome: "Groot",
    poder: "Botânica",
    xp: 2000,
  },
  {
    nome: "Rocket Raccoon",
    poder: "Tecnologia",
    xp: 4000,
  },
];

function getNivel(xp) {
  switch (true) {
    case xp < 1000:
      return "Ferro 🛡️";
    case xp >= 1001 && xp <= 2000:
      return "Bronze 🥉";
    case xp >= 2001 && xp <= 5000:
      return "Prata 🥈";
    case xp >= 5001 && xp <= 7000:
      return "Ouro 🥇";
    case xp >= 7001 && xp <= 8000:
      return "Platina 💎";
    case xp >= 8001 && xp <= 9000:
      return "Ascendente 🚀";
    case xp >= 9001 && xp <= 10000:
      return "Imortal 👑";
    case xp >= 10001:
      return "Radiante 🌟";
    default:
      return "Nível desconhecido";
  }
}

console.log("O Herói de nome " + herois[0].nome + " está no nível de " + getNivel(herois[0].xp));
console.log("O Herói de nome " + herois[1].nome + " está no nível de " + getNivel(herois[1].xp));
console.log("O Herói de nome " + herois[2].nome + " está no nível de " + getNivel(herois[2].xp));
console.log("O Herói de nome " + herois[3].nome + " está no nível de " + getNivel(herois[3].xp));
console.log("O Herói de nome " + herois[4].nome + " está no nível de " + getNivel(herois[4].xp));
console.log("O Herói de nome " + herois[5].nome + " está no nível de " + getNivel(herois[5].xp));
console.log("O Herói de nome " + herois[6].nome + " está no nível de " + getNivel(herois[6].xp));
console.log("O Herói de nome " + herois[7].nome + " está no nível de " + getNivel(herois[7].xp));
console.log("O Herói de nome " + herois[8].nome + " está no nível de " + getNivel(herois[8].xp));
console.log("O Herói de nome " + herois[9].nome + " está no nível de " + getNivel(herois[9].xp));
console.log("O Herói de nome " + herois[10].nome + " está no nível de " + getNivel(herois[10].xp));
console.log("O Herói de nome " + herois[11].nome + " está no nível de " + getNivel(herois[11].xp));
console.log("O Herói de nome " + herois[12].nome + " está no nível de " + getNivel(herois[12].xp));
console.log("O Herói de nome " + herois[13].nome + " está no nível de " + getNivel(herois[13].xp));
