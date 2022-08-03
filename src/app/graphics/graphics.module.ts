import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GraphicsRoutingModule } from './graphics-routing.module';
import { BarsComponent } from './pages/bars/bars.component';
import { DoubleBarsComponent } from './pages/double-bars/double-bars.component';
import { DoughnutComponent } from './pages/doughnut/doughnut.component';
import { DoughnutHttpComponent } from './pages/doughnut-http/doughnut-http.component';


@NgModule({
  declarations: [
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
