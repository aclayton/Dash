'use strict';
// @flow
interface User {
  name: string;
  email: string;
  password: string;
}

export default class LoginController {
  user: User = {
    name: '',
    email: '',
    password: ''
  };
  errors = {login: undefined};
  submitted = false;
  Auth;
  $state;
  getCurrentUser: Function;

  /*@ngInject*/
  constructor(Auth, $state) {
    this.Auth = Auth;
    this.$state = $state;

    this.getCurrentUser = Auth.getCurrentUserSync;
  }

  login(form) {
    this.submitted = true;

    if (form.$valid) {
      this.Auth.login({
        email: this.user.email,
        password: this.user.password
      })
      .then(() => {
        // Logged in, redirect to home
        console.log(this.getCurrentUser());
        this.$state.go('main');
      })
      .catch(err => {
        this.errors.login = err.message;
      });
    }
  }
}
