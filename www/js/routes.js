angular.module('app.routes', ['ionicUIRouter'])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.home'
      2) Using $state.go programatically:
        $state.go('tabsController.home');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page2
      /page1/tab2/page2
  */
  .state('tabsController.home', {
    url: '/page2',
    views: {
      'tab1': {
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
      },
      'tab2': {
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
      }
    }
  })

  .state('tabsController.cadastrarVaga', {
    url: '/page6',
    views: {
      'tab2': {
        templateUrl: 'templates/cadastrarVaga.html',
        controller: 'cadastrarVagaCtrl'
      }
    }
  })

  .state('tabsController.excluirVagas', {
    url: '/page7',
    views: {
      'tab3': {
        templateUrl: 'templates/excluirVagas.html',
        controller: 'excluirVagasCtrl'
      }
    }
  })

  .state('tabsController.suasVagas', {
    url: '/page8',
    views: {
      'tab4': {
        templateUrl: 'templates/suasVagas.html',
        controller: 'suasVagasCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('aMAVEIS', {
    url: '/page5',
    templateUrl: 'templates/aMAVEIS.html',
    controller: 'aMAVEISCtrl'
  })

$urlRouterProvider.otherwise('/page5')


});