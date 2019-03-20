jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

// We cannot provide stable mock data out of the template.
// If you introduce mock data, by adding .json files in your webapp/localService/mockdata folder you have to provide the following minimum data:
// * At least 3 assetSet in the list

sap.ui.require([
	"sap/ui/test/Opa5",
	"assetinv/AssetInventory/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"assetinv/AssetInventory/test/integration/pages/App",
	"assetinv/AssetInventory/test/integration/pages/Browser",
	"assetinv/AssetInventory/test/integration/pages/Master",
	"assetinv/AssetInventory/test/integration/pages/Detail",
	"assetinv/AssetInventory/test/integration/pages/Create",
	"assetinv/AssetInventory/test/integration/pages/NotFound"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "assetinv.AssetInventory.view."
	});

	sap.ui.require([
		"assetinv/AssetInventory/test/integration/MasterJourney",
		"assetinv/AssetInventory/test/integration/NavigationJourney",
		"assetinv/AssetInventory/test/integration/NotFoundJourney",
		"assetinv/AssetInventory/test/integration/BusyJourney",
		"assetinv/AssetInventory/test/integration/FLPIntegrationJourney"
	], function () {
		QUnit.start();
	});
});