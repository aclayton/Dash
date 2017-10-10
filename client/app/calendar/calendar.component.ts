'use strict';
const angular = require('angular');
const uiRouter = require('angular-ui-router');
import routes from './calendar.routes';

export class CalendarComponent {
  message;
  /*@ngInject*/
  constructor() {
    this.message = 'Hello';
  }
}

export default angular.module('dashApp.calendar', [uiRouter])
  .config(routes)
  .component('calendar', {
    template: require('./calendar.html'),
    controller: CalendarComponent,
    controllerAs: 'calendarCtrl'
  })
  .name;
