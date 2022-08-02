import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GraphicsRoutingModule } from './graphics-routing.module';
import { BarsChartComponent } from './pages/bars-chart/bars-chart.component';
import { DoubleBarsChartComponent } from './pages/double-bars-chart/double-bars-chart.component';
import { DoughnutChartComponent } from './pages/doughnut-chart/doughnut-chart.component';
import { DoughnutHttpChartComponent } from './pages/doughnut-http-chart/doughnut-http-chart.component';
import { BarsComponent } from './pages/bars/bars.component';
import { DoubleBarsComponent } from './pages/double-bars/double-bars.component';
import { DoughnutComponent } from './pages/doughnut/doughnut.component';
import { DoughnutHttpComponent } from './pages/doughnut-http/doughnut-http.component';


@NgModule({
  declarations: [
    BarsChartComponent,
    DoubleBarsChartComponent,
    DoughnutChartComponent,
    DoughnutHttpChartComponent,
    BarsComponent,
    DoubleBarsComponent,
    DoughnutComponent,
    DoughnutHttpComponent
  ],
  imports: [
    CommonModule,
    GraphicsRoutingModule
  ]
})
export class GraphicsModule { }
