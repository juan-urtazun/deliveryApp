/*#######################################################################

  Juan Urtazun

  #######################################################################*/

app.filter('byNameOrDescription', function() {

  function _fnEscapeRegex ( sVal ){
    var acEscape = [ '/', '.', '*', '+', '?', '|', '(', ')', '[', ']', '{', '}', '\\', '$', '^', '-' ],
    reReplace = new RegExp( '(\\' + acEscape.join('|\\') + ')', 'g' );
    return sVal.replace(reReplace, '\\$1');
  }

  function _getRegex(term){
    var sVal;
    if((term !== undefined) && term.replace(/(^\s+|\s+$)/g,'').length){
      sVal  = term.replace(/(^\s+|\s+$)/g,'');
      return  new RegExp( _fnEscapeRegex(sVal), "i");
    }
  }

  function _match( regex , str){
    return regex.test(str);
  }

  return function(deliveries, filter) {
    var matches = [],
    nameRegex = _getRegex(filter.name),
    descriptionRegex = _getRegex(filter.description);

    if((!nameRegex) && (!descriptionRegex)){
      return deliveries;
    }

    angular.forEach(deliveries, function (value, key) {
      if ( (nameRegex) && (descriptionRegex) ) {
        if( _match(nameRegex, value.name) || _match(descriptionRegex, value.description) ){
          matches.push(value);
        }
        return;
      }

      if( (nameRegex) && (!descriptionRegex) ){
        if( _match(nameRegex, value.name) ){
          matches.push(value);
        }
        return;
      }

      if( (!nameRegex) && (descriptionRegex) ){
        if( _match(descriptionRegex, value.description) ){
          matches.push(value);
        }
        return;
      }
    }, matches);

    return matches;
  }
});
