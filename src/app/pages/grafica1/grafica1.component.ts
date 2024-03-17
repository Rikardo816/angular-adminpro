import { Component } from '@angular/core';
import { ChartConfiguration } from 'chart.js';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: ``,
})
export class Grafica1Component {
  public labels1: string[] = ['Ventas', 'Alquileres', 'Servicios'];
  public labels2: string[] = ['Pan', 'Tacos', 'Refrescos'];
  public data1: ChartConfiguration<'doughnut'>['data']['datasets'] = [
    { data: [10, 20, 70], backgroundColor: ['#6857E6', '#009FEE', '#F02059'] },
  ];
  public data2: ChartConfiguration<'doughnut'>['data']['datasets'] = [
    {
      data: [100, 200, 70],
      backgroundColor: ['#6857E6', '#009FEE', '#F02059'],
    },
  ];
}
