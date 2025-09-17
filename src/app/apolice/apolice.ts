import { Component } from '@angular/core';

@Component({
  selector: 'app-apolice',
  standalone: false,
  templateUrl: './apolice.html',
  styleUrl: './apolice.css'
})
export class Apolice {

  nome: string = '';
  sexo: string = '';
  idade: number = 0;
  valorCarro: number = 0;
  valorApolice: number | null = null;

  calcularApolice(): void {
    if (this.sexo === 'masculino' && this.idade <= 25) {
      this.valorApolice = this.valorCarro * 0.15;
    } else if (this.sexo === 'masculino' && this.idade > 25) {
      this.valorApolice = this.valorCarro * 0.10;
    } else if (this.sexo === 'feminino') {
      this.valorApolice = this.valorCarro * 0.08;
    }
  }

}
