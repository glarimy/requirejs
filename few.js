/*
 * Works good when only few dependencies are required locally, only. 
 * Leads to unnecessary loading of the modules, when only some of these modules are required.
 */

// set up the paths for all the modules
require.config({
  paths: {
    "common-library": "lib/modules/common-library",
    "print-common": "lib/modules/print-common",
    "scan-common": "lib/modules/scan-common",
    "properties": "lib/modules/common-properties"
  }
});

// import all the modules and assign alias
require([
	'print-common', 
	'scan-common'
], function(
	printer, 
	scanner
){
	document.getElementById('printBtn').addEventListener('click', function(event){
		printer.print();
	});

	document.getElementById('scanBtn').addEventListener('click', function(event){
		scanner.scan();
	});	
});