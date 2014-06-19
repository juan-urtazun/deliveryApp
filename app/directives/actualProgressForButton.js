/*#######################################################################

  Juan Urtazun

  #######################################################################*/

/* Se puede usar como sigue
      <button type="button"  class="btn btn-success"  ng-set-class-base-on-location  match-with="/miPath" >"hola"</button>
*/

app.directive('ngSetClassBaseOnLocation', ['$location', function(location){
    console.log("$location",location)
    var isActiveLocation = function(path){
        if (location.path().substr(0, path.length) == path) {
            return true
        } else {
            return false;
        }
    }
    return {
        restrict:"A",
        scope: {
            details: '=',
            matchWith: '@'
        },
        link: function(scope, elem, attrs){
            if(isActiveLocation(scope.matchWith)){
                $(elem).addClass('btn-info');
            }else{
                $(elem).removeClass('btn-info');
            }
}
};
}]);


