class DashboardController {
  constructor(DashboardService) {
    this.name = 'dashboard';
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

DashboardController.$inject = ['DashboardService'];
export default DashboardController;
