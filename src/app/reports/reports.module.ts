import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule } from 'ng2-charts';

import { ReportsRoutingModule } from './reports-routing.module';

import { RadarChartComponent } from './radar-chart/radar-chart.component';


@NgModule({
  declarations: [RadarChartComponent],
  imports: [
    CommonModule,
    ReportsRoutingModule,
    ChartsModule
  ]
})
export class ReportsModule { }
