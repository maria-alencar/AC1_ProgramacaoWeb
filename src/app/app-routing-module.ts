import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CalcularMedia } from './calcular-media/calcular-media'
import { Apolice } from './apolice/apolice';
import { ConversorTemperatura } from './conversor-temperatura/conversor-temperatura';
import { Imc } from './imc/imc';

const routes: Routes = [
  { path: 'calcular-media', component: CalcularMedia },
  { path: 'apolice', component: Apolice },
  { path: 'conversor-temperatura', component: ConversorTemperatura },
  { path: 'imc', component: Imc }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
