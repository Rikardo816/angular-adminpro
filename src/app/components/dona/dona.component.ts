import { Component, Input } from '@angular/core';
import { ChartConfiguration } from 'chart.js';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: ``,
})
export class DonaComponent {
  @Input() title: string = 'Dona';
  @Input('labels') doughnutChartLabels: string[] = ['Label1', 'Label2', 'Label3'];
  // @Input('datasets') dataset: number[] = [350, 450, 100];

  // public data1: number[] = [350, 450, 100];
  @Input('datasets') doughnutChartDatasets: ChartConfiguration<'doughnut'>['data']['datasets'] =
    [{ data: [350, 450, 100], backgroundColor: ['#6857E6', '#009FEE', '#F02059'] }];
}
