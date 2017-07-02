import Chart from 'chart'
import moment from 'moment';
import _ from 'lodash';

class DashboardController {
  constructor(DashboardService) {
    'ngInject';

    let myChart;
    let myChart2;
    let myDoughnutChart;
    this._Dashboard = DashboardService;

    //this.getChartRented();
    //this.getNewClientChart();
    //this.getInRent();

  }

  $onInit() {
    console.log("initializing Dashboard...");
  }

  $onDestroy() {
    console.log("destroying Dashboard...");
  }

  search() {
    console.log("query dashboard by keyword" + this.q);
  }


  getChartRented() {
    this._Dashboard
    .getRented()
    .then(
      (data) => {
        moment.locale('es');
          let d = _.forEach(data, function(value) {
              value.month = moment(value.date).format('MMMM').toUpperCaseFirstChar()
            });
          this.myChart = new Chart($("#myChart"), {
          type: 'bar',
          data: {
              labels:  _.map(d,'month'),
              datasets: [{
                  label: 'bodegas en renta',
                  data: _.map(d,'count'),
                  backgroundColor: [
                      'rgba(255, 99, 132, 0.2)',
                      'rgba(54, 162, 235, 0.2)',
                      'rgba(255, 206, 86, 0.2)',
                      'rgba(75, 192, 192, 0.2)',
                      'rgba(153, 102, 255, 0.2)'
                  ],
                  borderColor: [
                      'rgba(255,99,132,1)',
                      'rgba(54, 162, 235, 1)',
                      'rgba(255, 206, 86, 1)',
                      'rgba(75, 192, 192, 1)',
                      'rgba(153, 102, 255, 1)'
                  ],
                  borderWidth: 1
              }]
          },
          options: {
              scales: {
                  yAxes: [{
                      ticks: {
                          beginAtZero:true
                      }
                  }]
              }
          }})
       },
      (err) => {
      });
  }

  getNewClientChart() {
   this._Dashboard
    .getNewClients()
    .then(
      (data) => {
        moment.locale('es');
        let d = _.forEach(data, function(value) {
            value.month = moment(value.date).format('MMMM').toUpperCaseFirstChar()
          });
        this.myChart2 = new Chart($("#myChart2"), {
          type: 'line',
          data: {
              labels: _.map(d,'month'),
              datasets: [
                {
                    label: "Nuevos clientes",
                    fill: false,
                    lineTension: 0.1,
                    backgroundColor: "rgba(75,192,192,0.4)",
                    borderColor: "rgba(75,192,192,1)",
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: "rgba(75,192,192,1)",
                    pointBackgroundColor: "#fff",
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: "rgba(75,192,192,1)",
                    pointHoverBorderColor: "rgba(220,220,220,1)",
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: _.map(d,'count'),
                    spanGaps: false
              }]
          },
          options: {}
        })
      }, (err) => {})
  }

  getInRent() {
    this._Dashboard
    .getStoragelokerAvailable()
    .then(
      (data) => {
            this.myDoughnutChart = new Chart($("#myChart3"), {
              type: 'doughnut',
              animation:{
                  animateScale:true
              },
              data: {
                  labels: [
                      "Bodega libre",
                      "Bodega en renta"
                  ],
                  datasets: [
                      {
                          data: [data.available, data.unavailable],
                          backgroundColor: [
                              "#FF6384",
                              "#36A2EB"
                          ],
                          hoverBackgroundColor: [
                              "#FF6384",
                              "#36A2EB"
                          ]
                      }]
              },
              options: {}
          });

      } , (err) => {

      })

  }

}

String.prototype.toUpperCaseFirstChar = function() {
    return this.substr( 0, 1 ).toUpperCase() + this.substr( 1 );
}

export default DashboardController;
