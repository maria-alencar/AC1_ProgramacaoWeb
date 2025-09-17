import { Component } from '@angular/core';

@Component({
  selector: 'app-imc',
  standalone: false,
  templateUrl: './imc.html',
  styleUrl: './imc.css'
})
export class Imc {

  peso: number = 0;
  altura: number = 0;
  imc: number | null = null;
  classificacao: string | null = null;

  calcularImc(): void {
    if (this.altura > 0) { // Garante que não haverá divisão por zero
      const imcCalculado = this.peso / (this.altura * this.altura);
      this.imc = parseFloat(imcCalculado.toFixed(2));

      if (imcCalculado < 18.5) {
        this.classificacao = 'Abaixo do peso';
      } else if (imcCalculado >= 18.5 && imcCalculado < 24.9) {
        this.classificacao = 'Peso normal';
      } else if (imcCalculado >= 25 && imcCalculado < 29.9) {
        this.classificacao = 'Sobrepeso';
      } else if (imcCalculado >= 30 && imcCalculado < 34.9) {
        this.classificacao = 'Obesidade grau I';
      } else if (imcCalculado >= 35 && imcCalculado < 39.9) {
        this.classificacao = 'Obesidade grau II';
      } else {
        this.classificacao = 'Obesidade grau III';
      }
    }
  }

}
