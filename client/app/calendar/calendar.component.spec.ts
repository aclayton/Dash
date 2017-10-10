'use strict';

describe('Component: CalendarComponent', function() {
  // load the controller's module
  beforeEach(module('dashApp.calendar'));

  var CalendarComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    CalendarComponent = $componentController('calendar', {});
  }));

  it('should ...', function() {
    expect(1).to.equal(1);
  });
});
