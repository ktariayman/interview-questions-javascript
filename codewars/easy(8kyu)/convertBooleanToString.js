// booleanToString
function booleanToString(b){
    if( typeof b ==="boolean") 
      return b? "true" : "false"
    return 'invalid boolean'
  }
function booleanToString(b){
    return b.toString();
}

function booleanToString(b){
    return `${b}`
  }

  function booleanToString(b){
    return b+'';
  }