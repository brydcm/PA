(function(){

  var app = angular.module('pokemonAssignment', []);

  app.controller('PokedexController', function($scope){
    this.pokemons = pokedex;
    $scope.pokemons = this.pokemons;
    // $scope.order = "0";
    // $scope.sortBy = "id";

    $scope.toggleReverse = function () {
      $scope.reverse = ($scope.order == 0) ? false : true;
    };

    $scope.expandDetails = function (pokemon) {
      angular.forEach($scope.pokemons, function (currentPokemon) {
        currentPokemon.showDetails = currentPokemon === pokemon && !currentPokemon.showDetails;
    });
    };

  });

})();
