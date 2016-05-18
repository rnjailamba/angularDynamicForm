(function () {
  'use strict';
  angular
      .module('starterApp')
      .controller('DemoCtrl', DemoCtrl);
  function DemoCtrl($mdDialog,$mdToast) {
    var self = this;
    self.openDialog = function($event) {
      $mdDialog.show({
        controller: DialogCtrl,
        controllerAs: 'ctrl',
        templateUrl: '/app/src/users/view/dialog.tmpl.html',
        parent: angular.element(document.body),
        targetEvent: $event,
        clickOutsideToClose:true
      })
    }
  }
  function DialogCtrl ($timeout, $q, $scope, $mdDialog, $mdToast, $document, sharedProperties) {
    var self = this;
    // list of `state` value/display objects
    self.states        = loadAll();
    self.querySearch   = querySearch;




    // ******************************
    // Template methods
    // ******************************
    self.cancel = function($event) {
      $mdDialog.cancel();
    };
    self.finish = function($event) {
      // console.log(self.searchText,"attempt to shut");
      var checkAuto = checkAutocompleteEntry();
      var checkSelect = checkSelectEntry();
      console.log(checkAuto);
      if(checkAuto.bool && checkSelect){
        $mdDialog.hide();
      }
      else{
        var el = angular.element(document.getElementById('toastBounds'));
        showCustomToastBelowButton(el,checkAuto.msg);
        if(!checkAuto.bool){
          $timeout(function(){
            self.showTooltip = true;
          }, 500);
        }

        if(!checkSelect){
          console.log("enter select",checkSelect);
          $timeout(function(){
            self.showTooltip1  = true;
          }, 500);
        }


      }
    };

    function checkSelectEntry(){
      var select1 = sharedProperties.getProperty1();
      var select2 = sharedProperties.getProperty2();
      if(select1 && select2){
        return true;
      }
      else {
        return false;
      }
    }

    function showCustomToastBelowButton(el,msg) {
      var toast = $mdToast.simple()
        .content("There were issues in filling the form.Please click ok to see the issues")
        .action('OK')
        .highlightAction(true)
        .hideDelay(0)
        .position('right')
        .parent($document[0].querySelector('#toastBounds1'));

      $mdToast.show(toast);
    };

    function checkAutocompleteEntry(){

      var array = (self.states);
      var returnMsg = {};
      returnMsg.bool = false;
      for (var i = array.length - 1; i >= 0; i--) {
        if( (self.searchText == array[i].value) || (self.searchText == array[i].display) ){
          returnMsg.bool = true;
          returnMsg.msg = "you have entered something from the list";
        }
      };
      if( returnMsg.bool == false ){
          returnMsg.bool = false;
          returnMsg.msg = "you have NOT entered something from the list";
      }
      return returnMsg;

    }
    // ******************************
    // Internal methods
    // ******************************
    /**
     * Search for states... use $timeout to simulate
     * remote dataservice call.
     */
    function querySearch (query) {
      return query ? self.states.filter( createFilterFor(query) ) : self.states;
    }
    /**
     * Build `states` list of key/value pairs
     */
    function loadAll() {
      var allStates = 'Alabama, Alaska, Arizona, Arkansas, California, Colorado, Connecticut, Delaware,\
              Florida, Georgia, Hawaii, Idaho, Illinois, Indiana, Iowa, Kansas, Kentucky, Louisiana,\
              Maine, Maryland, Massachusetts, Michigan, Minnesota, Mississippi, Missouri, Montana,\
              Nebraska, Nevada, New Hampshire, New Jersey, New Mexico, New York, North Carolina,\
              North Dakota, Ohio, Oklahoma, Oregon, Pennsylvania, Rhode Island, South Carolina,\
              South Dakota, Tennessee, Texas, Utah, Vermont, Virginia, Washington, West Virginia,\
              Wisconsin, Wyoming';
      return allStates.split(/, +/g).map( function (state) {
        var x  = {
          value: state.toLowerCase(),
          display: state
        };
        // console.log(x);
        return x;
      });
    }
    /**
     * Create filter function for a query string
     */
    function createFilterFor(query) {
      var lowercaseQuery = angular.lowercase(query);
      return function filterFn(state) {
        return (state.value.indexOf(lowercaseQuery) === 0);
      };
    }
  }

})();



angular
    .module('starterApp')
    .controller('SelectOptGroupController', function($scope,sharedProperties) {
      $scope.sizes = [
        "meat",
        "veg"

      ];
      $scope.toppings = [
        { category: 'meat', name: 'Pepperoni' },
        { category: 'meat', name: 'Sausage' },
        { category: 'meat', name: 'Ground Beef' },
        { category: 'meat', name: 'Bacon' },
        { category: 'veg', name: 'Mushrooms' },
        { category: 'veg', name: 'Onion' },
        { category: 'veg', name: 'Green Pepper' },
        { category: 'veg', name: 'Green Olives' }
      ];

      $scope.sizes1 = [
        { category: 'meat', name: 'Pepperoni' },
        { category: 'meat', name: 'Sausage' },
        { category: 'meat', name: 'Ground Beef' },
        { category: 'meat', name: 'Bacon' },
        { category: 'veg', name: 'Mushrooms' },
        { category: 'veg', name: 'Onion' },
        { category: 'veg', name: 'Green Pepper' },
        { category: 'veg', name: 'Green Olives' }
      ];
      $scope.selectedToppings = '';
      $scope.size1 = '';
      $scope.clearValue = function() {
        $scope.size1 = undefined;
        $scope.selectedToppings = undefined;
      };

      console.log(sharedProperties.getProperty1()," get the prop1");


      $scope.selectChanged1 = function(){
        console.log("in selectChanged1",$scope.size1);
        sharedProperties.setProperty1($scope.size1);
      };
      $scope.selectChanged2 = function(){
        console.log("in selectChanged2",$scope.selectedToppings);
        sharedProperties.setProperty2($scope.selectedToppings);
      };



    });
