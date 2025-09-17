import { Component } from '@angular/core';

@Component({
  selector: 'app-conversor-temperatura',
  standalone: false,
  templateUrl: './conversor-temperatura.html',
  styleUrl: './conversor-temperatura.css'
})
export class ConversorTemperatura {

  celsius: number = 0;
  fahrenheit: number | null = null;
  kelvin: number | null = null;

  converter(): void {
    this.fahrenheit = (this.celsius * 9 / 5) + 32;
    this.kelvin = this.celsius + 273.15;
  }

}
