// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
  // your code here
  var output = [];
	
	var walkDom = function(node) {
		var next = node.childNodes;
		classCheck(node);
		for (var i = 0; i < next.length; i++) {
			walkDom(next[i]);
		}
	}
	
	var classCheck = function(node) {
		if (node.classList) {
			if (node.classList.contains(className)) {
				output.push(node);
			}
		}
	}

	walkDom(document.body);
	return output;
};
