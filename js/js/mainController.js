(function(){

  var app = angular.module('pokemonAssignment', []);

  app.controller('PokedexController', function($scope){
    this.pokemons = pokedex;
    $scope.pokemons = this.pokemons;
    $scope.types = types;
    $scope.skills = skills;
    // $scope.order = "0";
    // $scope.sortBy = "id";
    $scope.currentPokemonType = [];

    $scope.toggleReverse = function () {
      $scope.reverse = ($scope.order == 0) ? false : true;
    };

    $scope.expandDetails = function (pokemon) {
      $scope.currentPokemonType = []; //clear data
      //to hide details of other pokemons
      angular.forEach($scope.pokemons, function (currentPokemon) {
        currentPokemon.showDetails = currentPokemon === pokemon && !currentPokemon.showDetails;
      });

      //get Type
      for(var i = 0; i < pokemon.type.length; i++) {
        angular.forEach($scope.types, function(type) {
          if((pokemon.type[i] == type.cname)) {
            $scope.currentPokemonType.push(type.ename);
          }
        });
      }
    };

  });

})();
