const angular = require('angular');
const uiRouter = require('angular-ui-router');
import routing from './main.routes';

export class MainController {
  $http;
  Auth;
  getCurrentUser;
  profile;
  currentCalendar;

  awesomeThings = [];
  newThing = '';

  /*@ngInject*/
  constructor($http, Auth) {
    this.$http = $http;
    this.getCurrentUser = Auth.getCurrentUser;
    this.profile = {};
    this.currentCalendar = {};
  }


  $onInit() {
    this.$http.get('/api/things').then(response => {
      this.awesomeThings = JSON.parse(response.data).items;
      console.log(this.awesomeThings);
    });

    this.getCurrentUser()
      .then((res) => { this.profile = res; console.log('Profile: ', this.profile); })
      .catch((err) => { console.log(err); });
  }

  testLoad(calendar) {

    this.$http.get(`/api/things/${calendar.id}`)
      .then((res) => {
        this.currentCalendar = JSON.parse(res.data);
        console.log(this.currentCalendar);
      })
      .catch((err) => { console.log(err); });
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
