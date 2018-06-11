import auth from '@feathersjs/authentication';
import jwt from '@feathersjs/authentication-jwt';
import local from '@feathersjs/authentication-local';
import { discard } from 'feathers-hooks-common';

function populateUser(authConfig) {
  return async hook => {
    const payload = await hook.app.passport.verifyJWT(hook.result.accessToken, authConfig);
    const user = await hook.app.service('users').get(payload.userId);
    hook.result.user = user;
  };
}

export default function authenticationService() {
  const app = this;

  const config = app.get('config').auth;

  app
    .configure(auth(config))
    .configure(jwt())
    .configure(local());

  app.service('authentication').hooks({
    before: {
      // You can chain multiple strategies on create method
      create: auth.hooks.authenticate(['jwt', 'local']),
      remove: auth.hooks.authenticate('jwt')
    },
    after: {
      create: [populateUser(config), discard('user.password')]
    }
  });
}
