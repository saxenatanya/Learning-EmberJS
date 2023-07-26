import EmberRouter from '@ember/routing/router';
import config from 'learning-ember-js/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {});
