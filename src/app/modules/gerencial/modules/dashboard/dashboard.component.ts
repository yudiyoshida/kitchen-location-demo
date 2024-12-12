import { Component } from '@angular/core';
import { ApexAxisChartSeries, ApexChart, ApexTitleSubtitle, NgApexchartsModule } from 'ng-apexcharts';
import { DashboardCardComponent } from './components/dashboard-card/dashboard-card.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  imports: [
    NgApexchartsModule,
    DashboardCardComponent,
  ],
})
export class DashboardComponent {
  public series01: ApexAxisChartSeries = [
    {
      name: 'Faturamento',
      data: [30, 40, 45, 50, 49, 60, 70, 91, 125],
      color: '#4758B8',
    },
  ];

  public chart01: ApexChart = {
    type: 'line',
  };

  public title01: ApexTitleSubtitle = {
    text: 'Vendas',
  };

  public series02: ApexAxisChartSeries = [
    {
      name: 'Lucro',
      data: [15, 20, 25, 30, 29, 40, 50, 71, 105],
      color: '#4758B8',
    },
  ];

  public chart02: ApexChart = {
    type: 'bar',
  };

  public title02: ApexTitleSubtitle = {
    text: 'Faturamento',
  };
}
