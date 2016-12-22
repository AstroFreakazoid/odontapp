angular.module('dentistapp.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout, AppService, $rootScope, $cordovaCamera) {
  $scope.loginData = {};

  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  $scope.login = function() {
    $scope.modal.show();
  };

  $scope.appointments = [
    {
      title: 'Extracción de molar',
      datetime: '17 de Octubre, 12:00 m.d. - 2:30 p.m.',
      place: 'Consultorio Doctor Castro.',
      text: 'Para esta sesión vamos a necesitar al menos una hora, vente preparado.'
    },
    {
      title: 'Extracción de molar',
      datetime: '17 de Octubre, 12:00 m.d. - 2:30 p.m.',
      place: 'Consultorio Doctor Castro.',
      text: 'Para esta sesión vamos a necesitar al menos una hora, vente preparado.'
    },
    {
      title: 'Extracción de molar',
      datetime: '17 de Octubre, 12:00 m.d. - 2:30 p.m.',
      place: 'Consultorio Doctor Castro.',
      text: 'Para esta sesión vamos a necesitar al menos una hora, vente preparado.'
    },
    {
      title: 'Extracción de molar',
      datetime: '17 de Octubre, 12:00 m.d. - 2:30 p.m.',
      place: 'Consultorio Doctor Castro.',
      text: 'Para esta sesión vamos a necesitar al menos una hora, vente preparado.'
    }
  ];

  $scope.saveSettings = function () {

  };
  $scope.takePic = function () {
    var options = {
      quality: 50,
      destinationType: Camera.DestinationType.DATA_URL,
      sourceType: Camera.PictureSourceType.CAMERA,
      allowEdit: true,
      encodingType: Camera.EncodingType.JPEG,
      targetWidth: 100,
      targetHeight: 100,
      popoverOptions: CameraPopoverOptions,
      saveToPhotoAlbum: false,
      correctOrientation:true
    };
    $cordovaCamera.getPicture(options).then(function(imageData) {
      var image = document.getElementById('myImage');
      image.src = "data:image/jpeg;base64," + imageData;
    }, function(err) {
      // error
    });
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);
    if( ( $scope.loginData.username == 'usuario' ) && ( $scope.loginData.password == 'usuario' ) ){
      AppService.setUser( $scope.loginData );
      $rootScope.goTo( 'app.dashboard' );
    }
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };

  $scope.calendar = {
    date: new Date(),
    mondayFirst: false,
    months: [ "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Setiembre", "Octubre", "Noviembre", "Diciembre" ],
    calendarWeekdayHeaders: ["Do", "Lu", "Ma", "Mi", "Ju", "Vi", "Sa"],
    startDate: new Date(),
    endDate: new Date( ( new Date().getFullYear() ), 11, 31 ),
    disablePastDays: true,
    disableSwipe: true,
    disableWeekend: true,
    disableDates: false,
    disableDaysOfWeek: false,
    showDatepicker: true,
    showTodayButton: true,
    calendarMode: true,
    hideCancelButton: true,
    hideSetButton: false,
    highlights: [
      {
        date: new Date(2016, 1, 7),
        color: '#8FD4D9',
        textColor: '#fff'
      },
      {
        date: new Date(2016, 1, 18)
      },
      {
        date: new Date(2016, 1, 19)
      },
      {
        date: new Date(2016, 1, 20)
      }
    ],
    callback: function(value){
      $rootScope.goTo('app.appointment');
    }
  };
  $scope.messages = [
    {
      photoURL: null,
      isVideo: false,
      isMe: false,
      timeDateString: 'hace 25 min',
      isGroup: true,
      messageText: 'Hola Elías, recuerda utilizar bien el hilo dental sin dañar las encías.',
      name: 'Dr. Castro'
    },
    {
      photoURL: null,
      isVideo: false,
      isMe: true,
      timeDateString: 'hace 10 min',
      isGroup: true,
      messageText: 'Sí señor, muchas gracias por el arreglo de hoy, ya me siento mucho mejor.',
      name: 'Elías Gómez'
    },
    {
      photoURL: null,
      isVideo: false,
      isMe: false,
      timeDateString: 'hace 5 min',
      isGroup: true,
      messageText: 'Hola Elías, recuerda utilizar bien el hilo dental sin dañar las encías.',
      name: 'Dr. Castro'
    },
    {
      photoURL: null,
      isVideo: false,
      isMe: true,
      timeDateString: 'hace 1 min',
      isGroup: true,
      messageText: 'Sí señor, muchas gracias por el arreglo de hoy, ya me siento mucho mejor.',
      name: 'Elías Gómez'
    },
    {
      photoURL: null,
      isVideo: false,
      isMe: false,
      timeDateString: 'hace 40 seg',
      isGroup: true,
      messageText: 'Hola Elías, recuerda utilizar bien el hilo dental sin dañar las encías.',
      name: 'Dr. Castro'
    },
    {
      photoURL: null,
      isVideo: false,
      isMe: true,
      timeDateString: 'hace 10 seg',
      isGroup: true,
      messageText: 'Sí señor, muchas gracias por el arreglo de hoy, ya me siento mucho mejor.',
      name: 'Elías Gómez'
    }
  ];
  $scope.articles = [
    {
      id : 0,
      title : 'ELECCIONES 2018',
      subtitle : 'Las muchas preguntas del pueblo sobre nuestros candidatos',
      img : 'img/noticia.jpg',
      body : 'Al ser las 8:00 p.m,  Oscar Arias Sánchez dará a conocer en cadena nacional de televisión su futuro político, pero desde ya  los politólogos aseguran que con esto el exmandatario busca salir “por la puerta grande” y anticipan las razones por las que dirá no a una contienda por la candidatura.',
      date_time : '2016-01-01'
    },
    {
      id : 0,
      title : 'ELECCIONES 2018',
      subtitle : 'Las muchas preguntas del pueblo sobre nuestros candidatos',
      img : 'img/noticia.jpg',
      body : 'Al ser las 8:00 p.m,  Oscar Arias Sánchez dará a conocer en cadena nacional de televisión su futuro político, pero desde ya  los politólogos aseguran que con esto el exmandatario busca salir “por la puerta grande” y anticipan las razones por las que dirá no a una contienda por la candidatura.',
      date_time : '2016-01-01'
    }
  ];
  $scope.toggleItem= function(item) {
    if ($scope.isItemShown(item)) {
      $scope.shownItem = null;
    } else {
      $scope.shownItem = item;
    }
  };
  $scope.isItemShown = function(item) {
    return $scope.shownItem === item;
  };
});
