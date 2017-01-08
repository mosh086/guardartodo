class DashboardController {
  constructor(DashboardService) {
    'ngInject';

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
}

export default DashboardController;
