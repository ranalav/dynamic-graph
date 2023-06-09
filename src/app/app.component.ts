import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  Highcharts = Highcharts;

  chartOptions:Highcharts.Options = {
    chart: {
      animation: false
    },

    title: {
      text: "Highcharts draggable points demo"
    },

    xAxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
      ]
    },

    yAxis: {
      softMin: 0,
      softMax: 100
    },

    plotOptions: {
      series: {
        stickyTracking: false,
        dragDrop: {
          draggableY: true
        },
        point: {
          events: {
            drag: function (e:any) {
              console.log("e ==> ", e);
            },
            // drop: function () {
            // }
          }
        }
      },
      column: {
        stacking: "normal",
        minPointLength: 2
      },
      line: {
        cursor: "ns-resize"
      }
    },

    tooltip: {
      valueDecimals: 2
    },

    series: [{
      data: [1, 50, 3],
      type: 'line'
    }]
  };
}
