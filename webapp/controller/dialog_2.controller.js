sap.ui.define(["sap/ui/core/mvc/Controller"], function(BaseController) {
	"use strict";

	return BaseController.extend("generated.app.controller.dialog_2", {

    onInit: function() {
        this.mBindingOptions = {};
        this._oDialog = this.getView().getContent()[0];
    },
    onExit: function() {
        this._oDialog.destroy();
    },
    setRouter: function(oRouter) {
        this.oRouter = oRouter;
    },
	getBindingParameters: function () {
		return {};
		
	},
	_onButtonPress: function () {
		var oDialog = this.getView().getContent()[0];
		
		return new ES6Promise.Promise(function (resolve, reject) {
		    oDialog.attachEventOnce("afterClose", null, resolve);
		    oDialog.close();
		});
		
	}
    });
}, /* bExport= */true);
