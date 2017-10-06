const angular = require('angular');
const uiRouter = require('angular-ui-router');
import routing from './main.routes';

export class MainController {
  $http;
  Auth;
  getCurrentUser;

  awesomeThings = [];
  newThing = '';

  /*@ngInject*/
  constructor($http, Auth) {
    this.$http = $http;
    this.Auth = Auth;
    this.getCurrentUser = Auth.getCurrentUserSync;
  }

  $onInit() {
    this.$http.get('/api/things').then(response => {
      this.awesomeThings = JSON.parse(response.data).items;
      console.log(this.awesomeThings);
    });
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
