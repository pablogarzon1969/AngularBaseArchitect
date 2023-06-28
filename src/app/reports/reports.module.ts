import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgChartsModule  } from 'ng2-charts';

import { ReportsRoutingModule } from './reports-routing.module';

import { RadarChartComponent } from './radar-chart/radar-chart.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [RadarChartComponent],
  imports: [
    HttpClientModule,
    CommonModule,
    ReportsRoutingModule,
    NgChartsModule 
  ]
})
export class ReportsModule { }
