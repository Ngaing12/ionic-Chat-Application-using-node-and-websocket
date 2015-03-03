// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('login', {
      url: "/login",
      templateUrl: "templates/login.html"
  })

  .state('app', {
    url: "/app",
    abstract: true,
    templateUrl: "templates/menu.html",
    controller: 'AppCtrl'
  })

  .state('app.account', {
    url: "/account",
    views: {
      'menuContent': {
        templateUrl: "templates/account.html",
      }
    },
    controller: 'accountCtrl'
  })

  .state('app.recentChat', {
    url: "/recentChat",
    views: {
      'menuContent': {
        templateUrl: "templates/recentChat.html",
      }
    },
    controller: 'recentChat'
  })


  .state('app.contact', {
    url: "/contact",
    views: {
      'menuContent': {
        templateUrl: "templates/contact.html",
      }
    },
    controller: 'contactCtrl'
  })

  .state('app.status', {
    url: "/status",
    views: {
      'menuContent': {
        templateUrl: "templates/status.html",
      }
    },
    controller: 'statusCtrl'
  })
    .state('app.chat', {
      url: "/recentChat/:chatId",
      views: {
        'menuContent': {
          templateUrl: "templates/chat.html",
          controller: 'chatCtrl'
        }
      }
    })

    .state('app.chatContact', {
      url: "/contact/:chatId",
      views: {
        'menuContent': {
          templateUrl: "templates/chat.html",
          controller: 'chatCtrl'
        }
      }
    })

    .state('app.changeProfile', {
      url: "/changeProfile",
      views: {
        'menuContent': {
          templateUrl: "templates/changeProfile.html",
          controller: 'changeProfileCtrl'
        }
      }
    })
    .state('app.changePassword', {
      url: "/changePassword",
      views: {
        'menuContent': {
          templateUrl: "templates/changePassword.html",
          controller: 'changePasswordCtrl'
        }
      }
    })
    
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/recentChat');
})
