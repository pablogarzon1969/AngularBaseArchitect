import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import { catchError, map, throwError } from 'rxjs';

@Component({
  selector: 'app-radar-chart',
  templateUrl: './radar-chart.component.html',
})
export class RadarChartComponent implements OnInit {
  data: any;

  constructor(private http: HttpClient) {}

  // Radar
  public radarChartOptions: ChartConfiguration['options'] = {
    responsive: true,
  };

  public radarChartLabels: string[] = [
    'Eating',
    'Drinking',
    'Sleeping',
    'Designing',
    'Coding',
    'Cycling',
    'Running',
  ];

  public radarChartData: ChartData<'radar'> = {
    labels: this.radarChartLabels,
    datasets: [
      { data: [65, 59, 90, 81, 56, 55, 40], label: 'Series A' },
      { data: [28, 48, 40, 19, 96, 27, 100], label: 'Series B' },
    ],
  };
  public radarChartType: ChartType = 'radar';

  // events
  public chartClicked({
    event,
    active,
  }: {
    event: MouseEvent;
    active: {}[];
  }): void {
    console.log(event, active);
  }

  public chartHovered({
    event,
    active,
  }: {
    event: MouseEvent;
    active: {}[];
  }): void {
    console.log(event, active);
  }

  ngOnInit(): void {
    this.getData().subscribe((response) => {
      this.data = response;
      console.log(this.data);
    });
  }

  getData() {
    /*return this.http
      .get(
        'https://172.18.16.58:7482/famisanar-file-manager/v1/download?content=true&file=a60a9382-430a-4960-a3df-d18a44225c7e&token=c9773671-695b-4e38-90db-40cc63390e08',
        { responseType: 'blob' }
      )
      .pipe(
        map((response: Blob) => {
          return response;
        })
      );*/

    const url =
      'https://172.18.16.58:7482/afamisanar-file-manager/v1/download?content=true&file=a60a9382-430a-4960-a3df-d18a44225c7e&token=c9773671-695b-4e38-90db-40cc63390e08';

    return this.http.get(url, { responseType: 'blob' }).pipe(
      map((response: Blob) => {
        return response;
      }),
      catchError((error: HttpErrorResponse) => {
        console.error('Error:', error);
        return throwError('Something went wrong.');
      })
    );
  }
}
