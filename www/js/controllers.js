angular.module('dentistapp.controllers', [])
  .controller('AppCtrl', function($scope, $ionicModal, $timeout, AppService, $rootScope, $cordovaCamera, $ionicPopup) {

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

  $scope.questionsList = [
    {
      question: "Cual es su estado de salud?",
      answers: [
        {
          id: "q1-a1",
          action: "q1_good()",
          text: "Bueno",
          color: "balanced"
        },
        {

          id: "q1-a2",
          action: "q1_bad()",
          text: "Malo",
          color: "assertive"
        },
        {
          id: "q1-a3",
          action: "q1_soso()",
          text: "Regular",
          color: "positive"
        }
      ],
      help: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci aspernatur atque commodi consectetur eligendi, eos, harum inventore laborum magnam maiores maxime quae qui quia repellat reprehenderit saepe sapiente veritatis!"
    },
    {
      question: "En los últimos dos años ha sufrido cambios de salud?",
      answers: [
        {
          id: "q2-a1",
          action: "q1_soso()",
          text: "Si",
          color: "positive"
        },
        {
          id: "q2-a2",
          action: "q1_good()",
          text: "No",
          color: "balanced"
        }
      ],
      help: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci aspernatur atque commodi consectetur eligendi, eos, harum inventore laborum magnam maiores maxime quae qui quia repellat reprehenderit saepe sapiente veritatis!"
    },
    {
      question: "Cuándo fue su último exámen médico? 2016-01-23",
      answers: [
        {
          id: "q3-a1",
          action: "q1_good()",
          text: "Ingrese una fecha",
          color: "balanced"
        }
      ],help: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci aspernatur atque commodi consectetur eligendi, eos, harum inventore laborum magnam maiores maxime quae qui quia repellat reprehenderit saepe sapiente veritatis!"
    },
    {
      question: "Está actualmente bajo algún tratamiento médico?",
      answers: [
        {
          id: "q4-a1",
          action: "q1_good()",
          text: "Si",
          color: "balanced"
        },
        {
          id: "q4-a2",
          action: "q1_soso()",
          text: "No",
          color: "positive"
        }
      ],
      help: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci aspernatur atque commodi consectetur eligendi, eos, harum inventore laborum magnam maiores maxime quae qui quia repellat reprehenderit saepe sapiente veritatis!"
    },
    {
      question: "Fuma usted?",
      answers: [
        {
          id: "q5-a1",
          action: "q1_bad()",
          text: "Si",
          color: "assertive"
        },
        {
          id: "q5-a2",
          action: "q1_good()",
          text: "No",
          color: "balanced"
        }
      ],
      help: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci aspernatur atque commodi consectetur eligendi, eos, harum inventore laborum magnam maiores maxime quae qui quia repellat reprehenderit saepe sapiente veritatis!"
    },
    {
      question: "Ha padecido alguna de las siguientes condiciones?",
      answers: [
        {
          id: "q6-a1",
          action: "",
          text: "Encias sangrantes o sensibles",
          color: "positive"
        },
        {
          id: "q6-a2",
          action: "",
          text: "Ampolloas y/o llagas",
          color: "positive"
        },
        {
          id: "q6-a3",
          action: "",
          text: "Dientes movibles",
          color: "positive"
        },
        {
          id: "q6-a4",
          action: "",
          text: "Sensibilidad dental",
          color: "positive"
        },
        {
          id: "q6-a5",
          action: "",
          text: "Cambio en la mordida",
          color: "positive"
        }
      ],
      help: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci aspernatur atque commodi consectetur eligendi, eos, harum inventore laborum magnam maiores maxime quae qui quia repellat reprehenderit saepe sapiente veritatis!"
    },
    {
      question: "¿Padece usted alguna de las siguientes condiciones?",
      answers: [
        {
          id: "q7-a1",
          action: "",
          text: "Se cansa facilmente",
          color: "positive"
        },
        {
          id: "q7-a2",
          action: "",
          text: "Sudoracion Noctura",
          color: "positive"
        },
        {
          id: "q7-a3",
          action: "",
          text: "Perdida de la audición",
          color: "positive"
        },
        {
          id: "q7-a4",
          action: "",
          text: "Ataques o crisis",
          color: "positive"
        },
        {
          id: "q7-a5",
          action: "",
          text: "Mareo o Vertigo",
          color: "positive"
        }
      ],
      help: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci aspernatur atque commodi consectetur eligendi, eos, harum inventore laborum magnam maiores maxime quae qui quia repellat reprehenderit saepe sapiente veritatis!"
    },
    {
      question: "¿Padece usted alguna de las siguientes condiciones?",
      answers: [
        {
          id: "q8-a1",
          action: "",
          text: "Tratamiento Psiquiatrico",
          color: "positive"
        },
        {
          id: "q8-a2",
          action: "",
          text: "Asma",
          color: "positive"
        },
        {
          id: "q8-a3",
          action: "",
          text: "Diabetes",
          color: "positive"
        },
        {
          id: "q8-a4",
          action: "",
          text: "Presion alteral alta",
          color: "positive"
        },
        {
          id: "q8-a5",
          action: "",
          text: "Presion alteral baja",
          color: "positive"
        }
      ],
      help: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci aspernatur atque commodi consectetur eligendi, eos, harum inventore laborum magnam maiores maxime quae qui quia repellat reprehenderit saepe sapiente veritatis!"
    },
    {
      question: "¿Padece usted alguna de las siguientes condiciones?",
      answers: [
        {
          id: "q9-a1",
          action: "",
          text: "Tendencia de sangrado",
          color: "positive"
        },
        {
          id: "q9-a2",
          action: "",
          text: "Reaccion a la Anestecia local",
          color: "positive"
        },
        {
          id: "q9-a3",
          action: "",
          text: "Reaccion a anticuagulantes",
          color: "positive"
        },
        {
          id: "q9-a4",
          action: "",
          text: "Gastritis",
          color: "positive"
        },
        {
          id: "q9-a5",
          action: "",
          text: "Desmayos",
          color: "positive"
        }
      ],
      help: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci aspernatur atque commodi consectetur eligendi, eos, harum inventore laborum magnam maiores maxime quae qui quia repellat reprehenderit saepe sapiente veritatis!"
    },
    {
      question: "¿El tratamiento dental lo pone nervioso?",
      answers: [
        {
          id: "q10-a1",
          action: "q1_soso()",
          text: "Si",
          color: "assertive"
        },
        {
          id: "q10-a2",
          action: "q1_good()",
          text: "No",
          color: "positive"
        }
      ],
      help: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci aspernatur atque commodi consectetur eligendi, eos, harum inventore laborum magnam maiores maxime quae qui quia repellat reprehenderit saepe sapiente veritatis!"
    },
    {
      question: "¿Ha tenido algún sangrado excesivo durante una extracción?",
      answers: [
        {
          id: "q11-a1",
          action: "q1_bad()",
          text: "Si",
          color: "assertive"
        },
        {
          id: "q11-a2",
          action: "q1_good()",
          text: "No",
          color: "balanced"
        }
      ],
      help: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci aspernatur atque commodi consectetur eligendi, eos, harum inventore laborum magnam maiores maxime quae qui quia repellat reprehenderit saepe sapiente veritatis!"
    },
    {
      question: "¿Bebe usted más de dos bebidas alcohólicas diarias?",
      answers: [
        {
          id: "q11-a1",
          action: "q1_bad()",
          text: "Si",
          color: "assertive"
        },
        {
          id: "q11-a2",
          action: "q1_good()",
          text: "No",
          color: "balanced"
        }
      ],
      help: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci aspernatur atque commodi consectetur eligendi, eos, harum inventore laborum magnam maiores maxime quae qui quia repellat reprehenderit saepe sapiente veritatis!"
    },
    {
      question: "¿Ha estado hospitalizado o sufre de alguna enfermedad grave?",
      answers: [
        {
          id: "q12-a1",
          action: "q1_bad()",
          text: "Si",
          color: "assertive"
        },
        {
          id: "q12-a2",
          action: "q1_good()",
          text: "No",
          color: "balanced"
        }
      ],
      help: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci aspernatur atque commodi consectetur eligendi, eos, harum inventore laborum magnam maiores maxime quae qui quia repellat reprehenderit saepe sapiente veritatis!"
    }
  ];

  $scope.showQuestionsHelp = function(help) {
    $scope.data = {};

    // An elaborate, custom popup
    var myPopup = $ionicPopup.show({
      title: "Ayuda",
      subTitle: help,
      template: '<div class="center-img" ><img src="img/ionic.png" /></div>',
      scope: $scope,
      buttons: [
        { text: 'Mas Info.' },
        { text: 'Continuar' }
      ]
    });

    myPopup.then(function(res) {
      console.log('Tapped!', res);
    });

    /*
    $timeout(function() {
      myPopup.close(); //close the popup after 3 seconds for some reason
    }, 3000);
    */
  };

  $scope.q1_good = function(){
    this.animateAnswer( "img/check.png" );
  };
  $scope.q1_bad = function(){
    this.animateAnswer( "img/bad.png" );
  };
  $scope.q1_soso = function(){
    this.animateAnswer( "img/hand.png" );
  };

  $scope.animateAnswer = function(path){
    var myEl = angular.element( document.querySelector( '#icon-answer' ) );
    myEl.children(0).removeClass('hide');
    myEl.children(0).attr("src", path);
    myEl.addClass('animateAnswer');
    $timeout(function(){
      myEl.removeClass('animateAnswer');
      myEl.children(0).addClass('hide');
    }, 2000);
  };
/*
  $scope.disabledButons = function(ids){
    for(var i = 0; i < ids.length ; i++){
      angular.element( document.querySelector( '#' + ids[i] ) ).attr("disabled", "disabled");
    }
  };
*/

})
  .controller('LoginCtrl', function($scope, $rootScope, AppService) {
    $scope.user = {
      nick : 'usuario',
      pass : 'usuario'
    };
    $scope.goLogin = function() {
       if( AppService.login( $scope.user.nick, $scope.user.pass ) ){
       $rootScope.goTo( 'app.dashboard' );
       } else{
       AppService.showMessage( 'Información incorrecta', 'El usuario y/o la contraseña son incorrectos.' );
       }
    };
  });
