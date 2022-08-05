import { Component, OnInit } from '@angular/core';
import { ChartData, ChartType, ChartConfiguration, ChartEvent } from 'chart.js';
import { GraphicsService } from '../../services/graphics.service';

@Component({
  selector: 'app-doughnut-http',
  templateUrl: './doughnut-http.component.html'
})
export class DoughnutHttpComponent implements OnInit {

  // Doughnut
  public doughnutChartLabels: string[] = [
    //    'Download Sales', 'In-Store Sales', 'Mail-Order Sales' 
  ];
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      //   { data: [350, 450, 100], backgroundColor: ['red', 'blue', 'violet'] },
    ]
  };
  public doughnutChartType: ChartType = 'doughnut';

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
  };

  // events
  public chartClicked({ event, active }: { event: ChartEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: ChartEvent, active: {}[] }): void {
    console.log(event, active);
  }
  constructor(private gs: GraphicsService) { }

  ngOnInit(): void {
    // this.gs.getSocialMediaUsers().subscribe(data => {
    //   const labels_array: string[] = Object.keys(data);
    //   const data_array = Object.values(data);
    //   const colors = ['blue', 'red', 'violet', 'pink', 'purple']
    //   const datasets = {
    //     data: data_array,
    //     backgroundColor: colors
    //   }
    //   this.doughnutChartData.datasets.push(datasets);
    //   for (let i = 0; i < labels_array.length; i++) {
    //     const label = labels_array[i];
    //     this.doughnutChartLabels.push(label);
    //   }
    // });

    this.gs.getSocialMediaUsersDoughnut().subscribe(({ labels, values }) => {
      const colors = ['blue', 'red', 'violet', 'pink', 'purple']
        const datasets = {
          data: values,
          backgroundColor: colors
        }
        this.doughnutChartData.datasets.push(datasets);
        for (let i = 0; i < labels.length; i++) {
          const label = labels[i];
          this.doughnutChartLabels.push(label);
        }
    });
  }

}
