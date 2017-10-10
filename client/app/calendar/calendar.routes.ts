'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('calendar', {
      url: '/calendar',
      template: '<calendar></calendar>'
    });
}
