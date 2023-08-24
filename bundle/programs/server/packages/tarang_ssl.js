(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var global = Package.meteor.global;
var meteorEnv = Package.meteor.meteorEnv;
var WebApp = Package.webapp.WebApp;
var WebAppInternals = Package.webapp.WebAppInternals;
var main = Package.webapp.main;

/* Package-scope variables */
var SSLProxy;

(function(){

/////////////////////////////////////////////////////////////////////////////
//                                                                         //
// packages/tarang_ssl/packages/tarang_ssl.js                              //
//                                                                         //
/////////////////////////////////////////////////////////////////////////////
                                                                           //
(function () {

///////////////////////////////////////////////////////////////////////
//                                                                   //
// packages/tarang:ssl/lib.js                                        //
//                                                                   //
///////////////////////////////////////////////////////////////////////
                                                                     //
SSLProxy = function(params) {                                        // 1
	var httpProxy = Npm.require("http-proxy");                          // 2
                                                                     // 3
	httpProxy.createServer({                                            // 4
		target: {                                                          // 5
			host: '127.0.0.1',                                                // 6
			port: process.env.PORT                                            // 7
		},                                                                 // 8
		ssl: params.ssl                                                    // 9
	}).listen(params.port || 443);                                      // 10
}                                                                    // 11
///////////////////////////////////////////////////////////////////////

}).call(this);

/////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
Package._define("tarang:ssl", {
  SSLProxy: SSLProxy
});

})();
