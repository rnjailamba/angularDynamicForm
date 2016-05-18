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
