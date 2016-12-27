/**
 * Created by eliasgomez on 9/17/16.
 */
var Services = angular.module('dentistapp.services', []);

Services.factory( "AppService", function( $rootScope, $state, $ionicPopup) {
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
    $rootScope.toggledrag = false;
    $rootScope.goTo = function(pScreen) {
      $state.transitionTo( pScreen );
    };
  };
  global.login = function ( pUsername, pPassword ) {
    var res = ( ( pUsername == 'usuario' ) && ( pPassword == 'usuario' ) );
    if( res ){
      $rootScope.toggledrag = true;
    }
    return res;
  };
  global.showMessage = function( pTitle, pMessage ){
    $ionicPopup.alert({
      title: pTitle,
      template: pMessage
    });
  };
  return global;
});
