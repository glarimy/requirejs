// define the module
define(['common-library'], function(clib){
	// private 
	var print = function(){
		console.log("Print-Common: print - start");
		clib.connect();
		console.log("Print-Common: print - end");
	}

	var erase = function(){
		console.log("Print-Common: erase - start");
		clib.connect();
		console.log("Print-Common: erase - end");
	}

	// public
	return {
		print: print,
		erase: erase
	}
});