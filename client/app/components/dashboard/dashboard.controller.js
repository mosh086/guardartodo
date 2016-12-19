class DashboardController {
  constructor() {
    this.name = 'dashboard';
    this.posts = [];
  }

  $onInit() {
    console.log("initializing Posts...");
    this.posts = [
       { id: 1, title: 'Getting started with REST', content: 'Content of Getting started with REST', createdAt: '9/22/16 4:15 PM' },
       { id: 2, title: 'Getting started with AngularJS 1.x', content: 'Content of Getting started with AngularJS 1.x', createdAt: '9/22/16 4:15 PM' },
       { id: 3, title: 'Getting started with Angular2', content: 'Content of Getting started with Angular2', createdAt: '9/22/16 4:15 PM' },
    ]
  }

  $onDestroy() {
    console.log("destroying Posts...");
  }

  search() {
    console.log("query posts by keyword" + this.q);
  }
}

export default DashboardController;
