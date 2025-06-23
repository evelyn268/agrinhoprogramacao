function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
}

let perguntas = [
  {
    pergunta: "Qual produto do campo é usado para fazer pão na cidade?",
    opcoes: ["Trigo", "Carro", "Energia", "Tinta"],
    correta: 0
  },
  {
    pergunta: "O que liga o campo à cidade para transporte de alimentos?",
    opcoes: ["Caminhão", "Bicicleta", "Navio de guerra", "Trator"],
    correta: 0
  },
  {
    pergunta: "Qual destes produtos vem do campo e é consumido na cidade?",
    opcoes: ["Leite", "Petróleo", "Aço", "Plástico"],
    correta: 0
  },
  {
    pergunta: "A cidade depende do campo para:",
    opcoes: ["Alimentos", "Tecnologia", "Internet", "Cinema"],
    correta: 0
  },
  {
    pergunta: "Qual veículo é típico do campo para plantar e colher?",
    opcoes: ["Trator", "Carro de Fórmula 1", "Ônibus", "Metrô"],
    correta: 0
  },
  {
    pergunta: "O milho produzido no campo pode virar:",
    opcoes: ["Pipoca", "Madeira", "Papel", "Vidro"],
    correta: 0
  },
  {
    pergunta: "O que a cidade oferece para o campo?",
    opcoes: ["Máquinas e ferramentas", "Sementes", "Animais", "Água da chuva"],
    correta: 0
  },
  {
    pergunta: "Qual é um produto animal comum do campo usado na cidade?",
    opcoes: ["Ovos", "Aço", "Gasolina", "Concreto"],
    correta: 0
  },
  {
    pergunta: "Qual é uma atividade econômica da cidade relacionada ao campo?",
    opcoes: ["Comércio de alimentos", "Pesca no mar", "Fabricação de carros", "Cinema"],
    correta: 0
  },
  {
    pergunta: "Qual dessas opções conecta campo e cidade?",
    opcoes: ["Rede de transporte", "Parque de diversões", "Cinema", "Estádio"],
    correta: 0
  }
];

let perguntaAtual = 0;
let pontuacao = 0;
let feedback = "";
let podeResponder = true;

function setup() {
  createCanvas(800, 400);
  textAlign(CENTER, CENTER);
  textSize(18);
}

function draw() {
  background("#bbdefb");

  if (perguntaAtual < perguntas.length) {
    // Mostrar número da pergunta
    fill("#0d47a1");
    textSize(22);
    text(`Pergunta ${perguntaAtual + 1} de ${perguntas.length}`, width / 2, 40);

    // Mostrar pergunta
    fill(0);
    textSize(20);
    text(perguntas[perguntaAtual].pergunta, width / 2, 100);

    // Mostrar opções em retângulos clicáveis
    for (let i = 0; i < 4; i++) {
      let x = width / 2;
      let y = 180 + i * 50;
      fill("#e3f2fd");
      stroke("#0d47a1");
      strokeWeight(2);
      rectMode(CENTER);
      rect(x, y, 600, 40, 10);

      fill(0);
      noStroke();
      textSize(18);
      text(perguntas[perguntaAtual].opcoes[i], x, y);
    }

    // Mostrar feedback
    fill(feedback === "Correto!" ? "green" : "red");
    textSize(20);
    text(feedback, width / 2, height - 40);

  } else {
    // Fim do quiz
    background("#c8e6c9");
    fill("#0d47a1");
    textSize(32);
    text("Quiz finalizado!", width / 2, height / 2 - 40);
    textSize(28);
    fill("#2e7d32");
    text(`Sua pontuação: ${pontuacao} de ${perguntas.length}`, width / 2, height / 2 + 10);
  }
}

function mousePressed() {
  if (!podeResponder || perguntaAtual >= perguntas.length) return;

  for (let i = 0; i < 4; i++) {
    let x = width / 2;
    let y = 180 + i * 50;
    let dentroX = mouseX > x - 300 && mouseX < x + 300;
    let dentroY = mouseY > y - 20 && mouseY < y + 20;

    if (dentroX && dentroY) {
      podeResponder = false;

      if (i === perguntas[perguntaAtual].correta) {
        feedback = "Correto!";
        pontuacao++;
      } else {
        feedback = "Errado!";
      }

      setTimeout(() => {
        perguntaAtual++;
        feedback = "";
        podeResponder = true;
      }, 1500);

      break;
    }
  }
}
