import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
} from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  Highcharts = Highcharts;
  data :number[]= [1, 20, 30, 40];
  data2 :number[]= [42, 10, 10, 10];
  investedMoney:number[]= [25,25,50];
  cashMoney:number[]= [25,50,25];
  spendMoney:number[]= [50,25,25];
  updateFlag = false;
  chartOptions:Highcharts.Options = {
    chart: {
      animation: false,
    },

    title: {
      text: 'Highcharts draggable points demo',
    },

    xAxis: {
      categories: [
        'Jun',
        'Jul',
        'Aug'
      ],
    },

    yAxis: {
      softMin: 0,
      softMax: 100,
    },

    plotOptions: {
      series: {
        stickyTracking: false,
        dragDrop: {
          draggableY: true,
          draggableX: false,
          dragMaxY: 500,
          dragMinY: 0,
        },
        point: {
          events: {
            drag: function (e: any) {
              console.log('e ==> ', e);
            }
          },
        },
      },
      column: {
        stacking: 'normal',
        minPointLength: 2,
      },
      line: {
        cursor: 'ns-resize',
      },
    },

    tooltip: {
      valueDecimals: 2,
    },
    series: [
      {
        type: 'line',
        data: this.investedMoney
      },
      {
        type: 'line',
        data: this.cashMoney
      },
      {
        type: 'line',
        data: this.spendMoney
      },
    ],
  };
  constructor(private cdr: ChangeDetectorRef) {}

  handleUpdate() {
    console.log('handleUpdate');
    if (this.chartOptions.series!=null && this.chartOptions.series!=undefined && this.chartOptions.series) {
      this.data=this.data2;
      this.updateFlag = true;
    }

    console.log(this.chartOptions.series);
    this.cdr.markForCheck();
  }
  ngAfterViewInit(): void {
    setInterval(() => {
      this.handleUpdate();
      // this.chartOptions!.series!.data=[1,1,1];
    }, 4000);
  }
}
