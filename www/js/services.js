/**
 * Created by eliasgomez on 9/17/16.
 */
var Services = angular.module('dentistapp.services', []);

Services.factory( "AppService", function( $rootScope, $state ) {
  var global = {
    appVersion : '1.3',
    shareURL : '',
    shareSubject : '',
    baseURL : '',
    user: {},
    imageURL : '',
    androidSenderID : '',
    posts: [],
    pushToken : '',
    lang: {},
    langCode: 'es',
    device: {},
    event: {},
    pushSent: 0,
    isAdLoopOn: false
  };
  global.getUser = function () {
    return global.user;
  };
  global.setUser = function ( pUser ) {
    global.user = pUser;
  };
  global.initDevice = function () {};
  global.initNetwork = function () {};
  global.initPush = function () {};
  global.init = function () {
    $rootScope.goTo = function(pScreen) {
      $state.transitionTo( pScreen );
    };
  };
  return global;
});
