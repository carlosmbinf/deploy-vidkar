(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var global = Package.meteor.global;
var meteorEnv = Package.meteor.meteorEnv;
var ECMAScript = Package.ecmascript.ECMAScript;
var OAuth = Package.oauth.OAuth;
var HTTP = Package.http.HTTP;
var HTTPInternals = Package.http.HTTPInternals;
var ServiceConfiguration = Package['service-configuration'].ServiceConfiguration;
var meteorInstall = Package.modules.meteorInstall;
var Promise = Package.promise.Promise;

/* Package-scope variables */
var Google;

var require = meteorInstall({"node_modules":{"meteor":{"google-oauth":{"google_server.js":function module(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                           //
// packages/google-oauth/google_server.js                                                                    //
//                                                                                                           //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                             //
let _objectSpread;

module.link("@babel/runtime/helpers/objectSpread2", {
  default(v) {
    _objectSpread = v;
  }

}, 0);
let Google;
module.link("./namespace.js", {
  default(v) {
    Google = v;
  }

}, 0);
let Accounts;
module.link("meteor/accounts-base", {
  Accounts(v) {
    Accounts = v;
  }

}, 1);
const hasOwn = Object.prototype.hasOwnProperty; // https://developers.google.com/accounts/docs/OAuth2Login#userinfocall

Google.whitelistedFields = ['id', 'email', 'verified_email', 'name', 'given_name', 'family_name', 'picture', 'locale', 'timezone', 'gender'];

const getServiceDataFromTokens = tokens => {
  const {
    accessToken,
    idToken
  } = tokens;
  const scopes = getScopes(accessToken);
  const identity = getIdentity(accessToken);
  const serviceData = {
    accessToken,
    idToken,
    scope: scopes
  };

  if (hasOwn.call(tokens, "expiresIn")) {
    serviceData.expiresAt = Date.now() + 1000 * parseInt(tokens.expiresIn, 10);
  }

  const fields = Object.create(null);
  Google.whitelistedFields.forEach(function (name) {
    if (hasOwn.call(identity, name)) {
      fields[name] = identity[name];
    }
  });
  Object.assign(serviceData, fields); // only set the token in serviceData if it's there. this ensures
  // that we don't lose old ones (since we only get this on the first
  // log in attempt)

  if (tokens.refreshToken) {
    serviceData.refreshToken = tokens.refreshToken;
  }

  return {
    serviceData,
    options: {
      profile: {
        name: identity.name
      }
    }
  };
};

Accounts.registerLoginHandler(request => {
  if (request.googleSignIn !== true) {
    return;
  }

  const tokens = {
    accessToken: request.accessToken,
    refreshToken: request.refreshToken,
    idToken: request.idToken
  };

  if (request.serverAuthCode) {
    Object.assign(tokens, getTokens({
      code: request.serverAuthCode
    }));
  }

  const result = getServiceDataFromTokens(tokens);
  return Accounts.updateOrCreateUserFromExternalService("google", _objectSpread({
    id: request.userId,
    idToken: request.idToken,
    accessToken: request.accessToken,
    email: request.email,
    picture: request.imageUrl
  }, result.serviceData), result.options);
});

const getServiceData = query => getServiceDataFromTokens(getTokens(query));

OAuth.registerService('google', 2, null, getServiceData); // returns an object containing:
// - accessToken
// - expiresIn: lifetime of token in seconds
// - refreshToken, if this is the first authorization request

const getTokens = query => {
  const config = ServiceConfiguration.configurations.findOne({
    service: 'google'
  });
  if (!config) throw new ServiceConfiguration.ConfigError();
  let response;

  try {
    response = HTTP.post("https://accounts.google.com/o/oauth2/token", {
      params: {
        code: query.code,
        client_id: config.clientId,
        client_secret: OAuth.openSecret(config.secret),
        redirect_uri: OAuth._redirectUri('google', config),
        grant_type: 'authorization_code'
      }
    });
  } catch (err) {
    throw Object.assign(new Error("Failed to complete OAuth handshake with Google. ".concat(err.message)), {
      response: err.response
    });
  }

  if (response.data.error) {
    // if the http response was a json object with an error attribute
    throw new Error("Failed to complete OAuth handshake with Google. ".concat(response.data.error));
  } else {
    return {
      accessToken: response.data.access_token,
      refreshToken: response.data.refresh_token,
      expiresIn: response.data.expires_in,
      idToken: response.data.id_token
    };
  }
};

const getIdentity = accessToken => {
  try {
    return HTTP.get("https://www.googleapis.com/oauth2/v1/userinfo", {
      params: {
        access_token: accessToken
      }
    }).data;
  } catch (err) {
    throw Object.assign(new Error("Failed to fetch identity from Google. ".concat(err.message)), {
      response: err.response
    });
  }
};

const getScopes = accessToken => {
  try {
    return HTTP.get("https://www.googleapis.com/oauth2/v1/tokeninfo", {
      params: {
        access_token: accessToken
      }
    }).data.scope.split(' ');
  } catch (err) {
    throw Object.assign(new Error("Failed to fetch tokeninfo from Google. ".concat(err.message)), {
      response: err.response
    });
  }
};

Google.retrieveCredential = (credentialToken, credentialSecret) => OAuth.retrieveCredential(credentialToken, credentialSecret);
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"namespace.js":function module(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                           //
// packages/google-oauth/namespace.js                                                                        //
//                                                                                                           //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                             //
!function (module1) {
  // The module.exports object of this module becomes the Google namespace
  // for other modules in this package.
  Google = module.exports; // So that api.export finds the "Google" property.

  Google.Google = Google;
}.call(this, module);
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}}}},{
  "extensions": [
    ".js",
    ".json"
  ]
});

require("/node_modules/meteor/google-oauth/google_server.js");
var exports = require("/node_modules/meteor/google-oauth/namespace.js");

/* Exports */
Package._define("google-oauth", exports, {
  Google: Google
});

})();

//# sourceURL=meteor://💻app/packages/google-oauth.js
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1ldGVvcjovL/CfkrthcHAvcGFja2FnZXMvZ29vZ2xlLW9hdXRoL2dvb2dsZV9zZXJ2ZXIuanMiLCJtZXRlb3I6Ly/wn5K7YXBwL3BhY2thZ2VzL2dvb2dsZS1vYXV0aC9uYW1lc3BhY2UuanMiXSwibmFtZXMiOlsiX29iamVjdFNwcmVhZCIsIm1vZHVsZSIsImxpbmsiLCJkZWZhdWx0IiwidiIsIkdvb2dsZSIsIkFjY291bnRzIiwiaGFzT3duIiwiT2JqZWN0IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJ3aGl0ZWxpc3RlZEZpZWxkcyIsImdldFNlcnZpY2VEYXRhRnJvbVRva2VucyIsInRva2VucyIsImFjY2Vzc1Rva2VuIiwiaWRUb2tlbiIsInNjb3BlcyIsImdldFNjb3BlcyIsImlkZW50aXR5IiwiZ2V0SWRlbnRpdHkiLCJzZXJ2aWNlRGF0YSIsInNjb3BlIiwiY2FsbCIsImV4cGlyZXNBdCIsIkRhdGUiLCJub3ciLCJwYXJzZUludCIsImV4cGlyZXNJbiIsImZpZWxkcyIsImNyZWF0ZSIsImZvckVhY2giLCJuYW1lIiwiYXNzaWduIiwicmVmcmVzaFRva2VuIiwib3B0aW9ucyIsInByb2ZpbGUiLCJyZWdpc3RlckxvZ2luSGFuZGxlciIsInJlcXVlc3QiLCJnb29nbGVTaWduSW4iLCJzZXJ2ZXJBdXRoQ29kZSIsImdldFRva2VucyIsImNvZGUiLCJyZXN1bHQiLCJ1cGRhdGVPckNyZWF0ZVVzZXJGcm9tRXh0ZXJuYWxTZXJ2aWNlIiwiaWQiLCJ1c2VySWQiLCJlbWFpbCIsInBpY3R1cmUiLCJpbWFnZVVybCIsImdldFNlcnZpY2VEYXRhIiwicXVlcnkiLCJPQXV0aCIsInJlZ2lzdGVyU2VydmljZSIsImNvbmZpZyIsIlNlcnZpY2VDb25maWd1cmF0aW9uIiwiY29uZmlndXJhdGlvbnMiLCJmaW5kT25lIiwic2VydmljZSIsIkNvbmZpZ0Vycm9yIiwicmVzcG9uc2UiLCJIVFRQIiwicG9zdCIsInBhcmFtcyIsImNsaWVudF9pZCIsImNsaWVudElkIiwiY2xpZW50X3NlY3JldCIsIm9wZW5TZWNyZXQiLCJzZWNyZXQiLCJyZWRpcmVjdF91cmkiLCJfcmVkaXJlY3RVcmkiLCJncmFudF90eXBlIiwiZXJyIiwiRXJyb3IiLCJtZXNzYWdlIiwiZGF0YSIsImVycm9yIiwiYWNjZXNzX3Rva2VuIiwicmVmcmVzaF90b2tlbiIsImV4cGlyZXNfaW4iLCJpZF90b2tlbiIsImdldCIsInNwbGl0IiwicmV0cmlldmVDcmVkZW50aWFsIiwiY3JlZGVudGlhbFRva2VuIiwiY3JlZGVudGlhbFNlY3JldCIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxhQUFKOztBQUFrQkMsTUFBTSxDQUFDQyxJQUFQLENBQVksc0NBQVosRUFBbUQ7QUFBQ0MsU0FBTyxDQUFDQyxDQUFELEVBQUc7QUFBQ0osaUJBQWEsR0FBQ0ksQ0FBZDtBQUFnQjs7QUFBNUIsQ0FBbkQsRUFBaUYsQ0FBakY7QUFBbEIsSUFBSUMsTUFBSjtBQUFXSixNQUFNLENBQUNDLElBQVAsQ0FBWSxnQkFBWixFQUE2QjtBQUFDQyxTQUFPLENBQUNDLENBQUQsRUFBRztBQUFDQyxVQUFNLEdBQUNELENBQVA7QUFBUzs7QUFBckIsQ0FBN0IsRUFBb0QsQ0FBcEQ7QUFBdUQsSUFBSUUsUUFBSjtBQUFhTCxNQUFNLENBQUNDLElBQVAsQ0FBWSxzQkFBWixFQUFtQztBQUFDSSxVQUFRLENBQUNGLENBQUQsRUFBRztBQUFDRSxZQUFRLEdBQUNGLENBQVQ7QUFBVzs7QUFBeEIsQ0FBbkMsRUFBNkQsQ0FBN0Q7QUFHL0UsTUFBTUcsTUFBTSxHQUFHQyxNQUFNLENBQUNDLFNBQVAsQ0FBaUJDLGNBQWhDLEMsQ0FFQTs7QUFDQUwsTUFBTSxDQUFDTSxpQkFBUCxHQUEyQixDQUFDLElBQUQsRUFBTyxPQUFQLEVBQWdCLGdCQUFoQixFQUFrQyxNQUFsQyxFQUEwQyxZQUExQyxFQUNSLGFBRFEsRUFDTyxTQURQLEVBQ2tCLFFBRGxCLEVBQzRCLFVBRDVC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Q0MsZUFBRCxFQUFrQkMsZ0JBQWxCLEtBQzFCakMsS0FBSyxDQUFDK0Isa0JBQU4sQ0FBeUJDLGVBQXpCLEVBQTBDQyxnQkFBMUMsQ0FERixDOzs7Ozs7Ozs7Ozs7QUNuSkE7QUFDQTtBQUNBL0UsUUFBTSxHQUFHSixNQUFNLENBQUNvRixPQUFoQixDLENBRUE7O0FBQ0FoRixRQUFNLENBQUNBLE1BQVAsR0FBZ0JBLE1BQWhCIiwiZmlsZSI6Ii9wYWNrYWdlcy9nb29nbGUtb2F1dGguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgR29vZ2xlIGZyb20gJy4vbmFtZXNwYWNlLmpzJztcbmltcG9ydCB7IEFjY291bnRzIH0gZnJvbSAnbWV0ZW9yL2FjY291bnRzLWJhc2UnO1xuXG5jb25zdCBoYXNPd24gPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuXG4vLyBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9hY2NvdW50cy9kb2NzL09BdXRoMkxvZ2luI3VzZXJpbmZvY2FsbFxuR29vZ2xlLndoaXRlbGlzdGVkRmllbGRzID0gWydpZCcsICdlbWFpbCcsICd2ZXJpZmllZF9lbWFpbCcsICduYW1lJywgJ2dpdmVuX25hbWUnLFxuICAgICAgICAgICAgICAgICAgICdmYW1pbHlfbmFtZScsICdwaWN0dXJlJywgJ2xvY2FsZScsICd0aW1lem9uZScsICdnZW5kZXInXTtcblxuY29uc3QgZ2V0U2VydmljZURhdGFGcm9tVG9rZW5zID0gdG9rZW5zID0+IHtcbiAgY29uc3QgeyBhY2Nlc3NUb2tlbiwgaWRUb2tlbiB9ID0gdG9rZW5zO1xuICBjb25zdCBzY29wZXMgPSBnZXRTY29wZXMoYWNjZXNzVG9rZW4pO1xuICBjb25zdCBpZGVudGl0eSA9IGdldElkZW50aXR5KGFjY2Vzc1Rva2VuKTtcbiAgY29uc3Qgc2VydmljZURhdGEgPSB7XG4gICAgYWNjZXNzVG9rZW4sXG4gICAgaWRUb2tlbixcbiAgICBzY29wZTogc2NvcGVzXG4gIH07XG5cbiAgaWYgKGhhc093bi5jYWxsKHRva2VucywgXCJleHBpcmVzSW5cIikpIHtcbiAgICBzZXJ2aWNlRGF0YS5leHBpcmVzQXQgPVxuICAgICAgRGF0ZS5ub3coKSArIDEwMDAgKiBwYXJzZUludCh0b2tlbnMuZXhwaXJlc0luLCAxMCk7XG4gIH1cblxuICBjb25zdCBmaWVsZHMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICBHb29nbGUud2hpdGVsaXN0ZWRGaWVsZHMuZm9yRWFjaChmdW5jdGlvbiAobmFtZSkge1xuICAgIGlmIChoYXNPd24uY2FsbChpZGVudGl0eSwgbmFtZSkpIHtcbiAgICAgIGZpZWxkc1tuYW1lXSA9IGlkZW50aXR5W25hbWVdO1xuICAgIH1cbiAgfSk7XG5cbiAgT2JqZWN0LmFzc2lnbihzZXJ2aWNlRGF0YSwgZmllbGRzKTtcblxuICAvLyBvbmx5IHNldCB0aGUgdG9rZW4gaW4gc2VydmljZURhdGEgaWYgaXQncyB0aGVyZS4gdGhpcyBlbnN1cmVzXG4gIC8vIHRoYXQgd2UgZG9uJ3QgbG9zZSBvbGQgb25lcyAoc2luY2Ugd2Ugb25seSBnZXQgdGhpcyBvbiB0aGUgZmlyc3RcbiAgLy8gbG9nIGluIGF0dGVtcHQpXG4gIGlmICh0b2tlbnMucmVmcmVzaFRva2VuKSB7XG4gICAgc2VydmljZURhdGEucmVmcmVzaFRva2VuID0gdG9rZW5zLnJlZnJlc2hUb2tlbjtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgc2VydmljZURhdGEsXG4gICAgb3B0aW9uczoge1xuICAgICAgcHJvZmlsZToge1xuICAgICAgICBuYW1lOiBpZGVudGl0eS5uYW1lXG4gICAgICB9XG4gICAgfVxuICB9O1xufVxuXG5BY2NvdW50cy5yZWdpc3RlckxvZ2luSGFuZGxlcihyZXF1ZXN0ID0+IHtcbiAgaWYgKHJlcXVlc3QuZ29vZ2xlU2lnbkluICE9PSB0cnVlKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3QgdG9rZW5zID0ge1xuICAgIGFjY2Vzc1Rva2VuOiByZXF1ZXN0LmFjY2Vzc1Rva2VuLFxuICAgIHJlZnJlc2hUb2tlbjogcmVxdWVzdC5yZWZyZXNoVG9rZW4sXG4gICAgaWRUb2tlbjogcmVxdWVzdC5pZFRva2VuLFxuICB9O1xuXG4gIGlmIChyZXF1ZXN0LnNlcnZlckF1dGhDb2RlKSB7XG4gICAgT2JqZWN0LmFzc2lnbih0b2tlbnMsIGdldFRva2Vucyh7XG4gICAgICBjb2RlOiByZXF1ZXN0LnNlcnZlckF1dGhDb2RlXG4gICAgfSkpO1xuICB9XG5cbiAgY29uc3QgcmVzdWx0ID0gZ2V0U2VydmljZURhdGFGcm9tVG9rZW5zKHRva2Vucyk7XG5cbiAgcmV0dXJuIEFjY291bnRzLnVwZGF0ZU9yQ3JlYXRlVXNlckZyb21FeHRlcm5hbFNlcnZpY2UoXCJnb29nbGVcIiwge1xuICAgIGlkOiByZXF1ZXN0LnVzZXJJZCxcbiAgICBpZFRva2VuOiByZXF1ZXN0LmlkVG9rZW4sXG4gICAgYWNjZXNzVG9rZW46IHJlcXVlc3QuYWNjZXNzVG9rZW4sXG4gICAgZW1haWw6IHJlcXVlc3QuZW1haWwsXG4gICAgcGljdHVyZTogcmVxdWVzdC5pbWFnZVVybCxcbiAgICAuLi5yZXN1bHQuc2VydmljZURhdGEsXG4gIH0sIHJlc3VsdC5vcHRpb25zKTtcbn0pO1xuXG5jb25zdCBnZXRTZXJ2aWNlRGF0YSA9IHF1ZXJ5ID0+IGdldFNlcnZpY2VEYXRhRnJvbVRva2VucyhnZXRUb2tlbnMocXVlcnkpKTtcblxuT0F1dGgucmVnaXN0ZXJTZXJ2aWNlKCdnb29nbGUnLCAyLCBudWxsLCBnZXRTZXJ2aWNlRGF0YSk7XG5cbi8vIHJldHVybnMgYW4gb2JqZWN0IGNvbnRhaW5pbmc6XG4vLyAtIGFjY2Vzc1Rva2VuXG4vLyAtIGV4cGlyZXNJbjogbGlmZXRpbWUgb2YgdG9rZW4gaW4gc2Vjb25kc1xuLy8gLSByZWZyZXNoVG9rZW4sIGlmIHRoaXMgaXMgdGhlIGZpcnN0IGF1dGhvcml6YXRpb24gcmVxdWVzdFxuY29uc3QgZ2V0VG9rZW5zID0gcXVlcnkgPT4ge1xuICBjb25zdCBjb25maWcgPSBTZXJ2aWNlQ29uZmlndXJhdGlvbi5jb25maWd1cmF0aW9ucy5maW5kT25lKHtzZXJ2aWNlOiAnZ29vZ2xlJ30pO1xuICBpZiAoIWNvbmZpZylcbiAgICB0aHJvdyBuZXcgU2VydmljZUNvbmZpZ3VyYXRpb24uQ29uZmlnRXJyb3IoKTtcblxuICBsZXQgcmVzcG9uc2U7XG4gIHRyeSB7XG4gICAgcmVzcG9uc2UgPSBIVFRQLnBvc3QoXG4gICAgICBcImh0dHBzOi8vYWNjb3VudHMuZ29vZ2xlLmNvbS9vL29hdXRoMi90b2tlblwiLCB7cGFyYW1zOiB7XG4gICAgICAgIGNvZGU6IHF1ZXJ5LmNvZGUsXG4gICAgICAgIGNsaWVudF9pZDogY29uZmlnLmNsaWVudElkLFxuICAgICAgICBjbGllbnRfc2VjcmV0OiBPQXV0aC5vcGVuU2VjcmV0KGNvbmZpZy5zZWNyZXQpLFxuICAgICAgICByZWRpcmVjdF91cmk6IE9BdXRoLl9yZWRpcmVjdFVyaSgnZ29vZ2xlJywgY29uZmlnKSxcbiAgICAgICAgZ3JhbnRfdHlwZTogJ2F1dGhvcml6YXRpb25fY29kZSdcbiAgICAgIH19KTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgdGhyb3cgT2JqZWN0LmFzc2lnbihcbiAgICAgIG5ldyBFcnJvcihgRmFpbGVkIHRvIGNvbXBsZXRlIE9BdXRoIGhhbmRzaGFrZSB3aXRoIEdvb2dsZS4gJHtlcnIubWVzc2FnZX1gKSxcbiAgICAgIHsgcmVzcG9uc2U6IGVyci5yZXNwb25zZSB9XG4gICAgKTtcbiAgfVxuXG4gIGlmIChyZXNwb25zZS5kYXRhLmVycm9yKSB7IC8vIGlmIHRoZSBodHRwIHJlc3BvbnNlIHdhcyBhIGpzb24gb2JqZWN0IHdpdGggYW4gZXJyb3IgYXR0cmlidXRlXG4gICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gY29tcGxldGUgT0F1dGggaGFuZHNoYWtlIHdpdGggR29vZ2xlLiAke3Jlc3BvbnNlLmRhdGEuZXJyb3J9YCk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGFjY2Vzc1Rva2VuOiByZXNwb25zZS5kYXRhLmFjY2Vzc190b2tlbixcbiAgICAgIHJlZnJlc2hUb2tlbjogcmVzcG9uc2UuZGF0YS5yZWZyZXNoX3Rva2VuLFxuICAgICAgZXhwaXJlc0luOiByZXNwb25zZS5kYXRhLmV4cGlyZXNfaW4sXG4gICAgICBpZFRva2VuOiByZXNwb25zZS5kYXRhLmlkX3Rva2VuXG4gICAgfTtcbiAgfVxufTtcblxuY29uc3QgZ2V0SWRlbnRpdHkgPSBhY2Nlc3NUb2tlbiA9PiB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIEhUVFAuZ2V0KFxuICAgICAgXCJodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9vYXV0aDIvdjEvdXNlcmluZm9cIixcbiAgICAgIHtwYXJhbXM6IHthY2Nlc3NfdG9rZW46IGFjY2Vzc1Rva2VufX0pLmRhdGE7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIHRocm93IE9iamVjdC5hc3NpZ24oXG4gICAgICBuZXcgRXJyb3IoYEZhaWxlZCB0byBmZXRjaCBpZGVudGl0eSBmcm9tIEdvb2dsZS4gJHtlcnIubWVzc2FnZX1gKSxcbiAgICAgIHsgcmVzcG9uc2U6IGVyci5yZXNwb25zZSB9XG4gICAgKTtcbiAgfVxufTtcblxuY29uc3QgZ2V0U2NvcGVzID0gYWNjZXNzVG9rZW4gPT4ge1xuICB0cnkge1xuICAgIHJldHVybiBIVFRQLmdldChcbiAgICAgIFwiaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20vb2F1dGgyL3YxL3Rva2VuaW5mb1wiLFxuICAgICAge3BhcmFtczoge2FjY2Vzc190b2tlbjogYWNjZXNzVG9rZW59fSkuZGF0YS5zY29wZS5zcGxpdCgnICcpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICB0aHJvdyBPYmplY3QuYXNzaWduKFxuICAgICAgbmV3IEVycm9yKGBGYWlsZWQgdG8gZmV0Y2ggdG9rZW5pbmZvIGZyb20gR29vZ2xlLiAke2Vyci5tZXNzYWdlfWApLFxuICAgICAgeyByZXNwb25zZTogZXJyLnJlc3BvbnNlIH1cbiAgICApO1xuICB9XG59O1xuXG5Hb29nbGUucmV0cmlldmVDcmVkZW50aWFsID0gKGNyZWRlbnRpYWxUb2tlbiwgY3JlZGVudGlhbFNlY3JldCkgPT5cbiAgT0F1dGgucmV0cmlldmVDcmVkZW50aWFsKGNyZWRlbnRpYWxUb2tlbiwgY3JlZGVudGlhbFNlY3JldCk7XG4iLCIvLyBUaGUgbW9kdWxlLmV4cG9ydHMgb2JqZWN0IG9mIHRoaXMgbW9kdWxlIGJlY29tZXMgdGhlIEdvb2dsZSBuYW1lc3BhY2Vcbi8vIGZvciBvdGhlciBtb2R1bGVzIGluIHRoaXMgcGFja2FnZS5cbkdvb2dsZSA9IG1vZHVsZS5leHBvcnRzO1xuXG4vLyBTbyB0aGF0IGFwaS5leHBvcnQgZmluZHMgdGhlIFwiR29vZ2xlXCIgcHJvcGVydHkuXG5Hb29nbGUuR29vZ2xlID0gR29vZ2xlO1xuIl19
