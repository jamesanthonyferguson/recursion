// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
var stringifyJSON = function(obj) {
  // your code goes here
  var type = typeof obj;
  if (type === 'string' || type === 'boolean' || type === 'number'  || obj === null) {
  	if (type === "string") {
  		obj = '"' + obj + '"';
  	}
  	return String(obj);
  } else if (type === 'function' || type === 'undefined') {
    return;
  } else if (Array.isArray(obj)) {
      var output = "[";
      for (var i = 0; i < obj.length; i++) {
        if (i>0) {output += ',';}
        output += stringifyJSON(obj[i]);
      }
      output += ']';
      return String(output)
  	} else if (type === 'object') {
      var objOutput = "{";
      var counter = 0;
      for (var key in obj) {
        if (typeof(key)== 'undefined' || typeof(obj[key])=='undefined' || typeof(key)=='function' || typeof(obj[key])=='function'){
          objOutput += "";
        } else {
                if (counter > 0){
                  objOutput += ","
                }
                objOutput += stringifyJSON(key) + ':' + stringifyJSON(obj[key]);
                counter ++}
      }
      objOutput += '}';
      counter = 0;
      return objOutput;
    }

  
};