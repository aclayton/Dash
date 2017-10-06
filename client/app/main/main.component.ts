const angular = require('angular');
const uiRouter = require('angular-ui-router');
import routing from './main.routes';

export class MainController {
  $http;
  Auth;
  getCurrentUser;
  profile;

  awesomeThings = [];
  newThing = '';

  /*@ngInject*/
  constructor($http, Auth) {
    this.$http = $http;
    this.getCurrentUser = Auth.getCurrentUser;
    this.profile = {};
  }


  $onInit() {
    this.$http.get('/api/things').then(response => {
      this.awesomeThings = JSON.parse(response.data).items;
    });

    this.getCurrentUser()
      .then((res) => { this.profile = res; })
      .catch((err) => { console.log(err); });
  }

  getEvents() {
    
  }

  addThing() {
    if (this.newThing) {
      this.$http.post('/api/things', { name: this.newThing });
      this.newThing = '';
    }
  }

  deleteThing(thing) {
    this.$http.delete('/api/things/' + thing._id);
  }
}

export default angular.module('dashApp.main', [
  uiRouter])
    .config(routing)
    .component('main', {
      template: require('./main.html'),
      controller: MainController
    })
    .name;
