/*
 * Works good when all the dependencies are required globally, only. 
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
	'common-library', 
	'print-common', 
	'scan-common', 
	'properties'
], function(
	clib, 
	printer, 
	scanner,
	properties
){

	// register all the modules for global access	
	window.clib = clib;
	window.printer = printer;
	window.scanner = scanner;
	window.properties = properties;
});