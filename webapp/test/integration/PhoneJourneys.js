jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

sap.ui.require([
	"sap/ui/test/Opa5",
	"assetinv/AssetInventory/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"assetinv/AssetInventory/test/integration/pages/App",
	"assetinv/AssetInventory/test/integration/pages/Browser",
	"assetinv/AssetInventory/test/integration/pages/Master",
	"assetinv/AssetInventory/test/integration/pages/Detail",
	"assetinv/AssetInventory/test/integration/pages/NotFound"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "assetinv.AssetInventory.view."
	});

	sap.ui.require([
		"assetinv/AssetInventory/test/integration/NavigationJourneyPhone",
		"assetinv/AssetInventory/test/integration/NotFoundJourneyPhone",
		"assetinv/AssetInventory/test/integration/BusyJourneyPhone"
	], function () {
		QUnit.start();
	});
});