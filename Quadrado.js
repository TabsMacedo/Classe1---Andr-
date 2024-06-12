// Classe Quadrado
class Quadrado {
    constructor(x, y, lado, cor) {
      this.x = x;
      this.y = y;
      this.lado = lado;
      this.cor = cor;
    }
  
    // Método para desenhar o quadrado
    desenhar() {
      fill(this.cor);
      rect(this.x, this.y, this.lado, this.lado);
    }
  
    // Método para mover o quadrado
    mover(dx, dy) {
      this.x += dx;
      this.y += dy;
    }
  
    // Método para mudar a cor do quadrado
    mudarCor(novaCor) {
      this.cor = novaCor;
    }
  }
  