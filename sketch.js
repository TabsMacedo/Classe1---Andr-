let quadrado1, quadrado2;

function setup() {
  createCanvas(400, 400);
  // Criar instâncias da classe Quadrado
  quadrado1 = new Quadrado(50, 50, 50, 'red');
  quadrado2 = new Quadrado(200, 200, 100, 'blue');
}

function draw() {
  background(220);

  // Desenhar os quadrados
  quadrado1.desenhar();
  quadrado2.desenhar();

  // Mover os quadrados
  quadrado1.mover(1, 0); // Move para a direita
  quadrado2.mover(0, 1); // Move para baixo

  // Mudar a cor de quadrado1 se ele tocar a borda direita da tela
  if (quadrado1.x + quadrado1.lado > width) {
    quadrado1.mudarCor('green');
  }

  // Mudar a cor de quadrado2 se ele tocar a borda inferior da tela
  if (quadrado2.y + quadrado2.lado > height) {
    quadrado2.mudarCor('yellow');
  }
}
