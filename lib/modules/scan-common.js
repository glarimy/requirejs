define(['common-library', 'properties'], function(clib, props){
	//private
	var scan = function(){
		console.log("Scan-Common: scan - start");
		clib.connect();
		fax();
		console.log("Scan-Common: scan - end");
	};

	var fax = function(){
		console.log("Faxing to " + props.phone + " for " + props.vendor);
	}

	//public
	return {
		scan: scan
	}
});