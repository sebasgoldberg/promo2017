sap.ui.define(["sap/ui/core/mvc/Controller",
    "sap/m/MessageBox",
    "sap/ui/core/routing/History"
    ], function(BaseController, MessageBox, History) {
    "use strict";

    return BaseController.extend("generated.app.controller.detail_page_2", {
    	handleRouteMatched: function (oEvent) {
		var oParams = {"expand":"ventas"};
		
		if (oEvent.mParameters.data.context || oEvent.mParameters.data.masterContext) {
		    var oModel = this.getView ? this.getView().getModel() : null;
		    if (oModel) {
		        oModel.setRefreshAfterChange(true);
		
		        if (oModel.hasPendingChanges()) {
		            oModel.resetChanges();
		        }
		    }
		
		    this.sContext = oEvent.mParameters.data.context;
		    this.sMasterContext = oEvent.mParameters.data.masterContext;
		
		    if (!this.sContext) {
		        this.getView().bindElement("/" + this.sMasterContext, oParams);
		    }
		    else {
		        this.getView().bindElement("/" + this.sContext, oParams);
		    }
		
		}
		
	},
	_onButtonPress1: function () {
		var oHistory = History.getInstance();
		var sPreviousHash = oHistory.getPreviousHash();
		
		if (sPreviousHash !== undefined) {
		    window.history.go(-1);
		} else {
		    var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
		    oRouter.navTo("default", true);
		}
		
	},
	_onTableItemPress: function (oEvent) {
		var sDialogName = "dialog_1";
		this.mDialogs = this.mDialogs || {};
		var oDialog = this.mDialogs[sDialogName];
		var oSource = oEvent.getParameter("listItem");
		var oBindingContext = oSource.getBindingContext();
		var sPath = (oBindingContext) ? oBindingContext.getPath() : null;
		var oModel = (oBindingContext) ? oBindingContext.getModel() : this.getView().getModel();
		var oView;
		if (!oDialog) {
		    this.getOwnerComponent().runAsOwner(function () {
		        oView = sap.ui.xmlview({viewName: "generated.app.view." + sDialogName});
		        this.getView().addDependent(oView);
		        oView.getController().setRouter(this.oRouter);
		        oDialog = oView.getContent()[0];
		        this.mDialogs[sDialogName] = oDialog;
		    }.bind(this));
		}
		
		return new ES6Promise.Promise(function(resolve, reject) {
		    oDialog.attachEventOnce("afterOpen", null, resolve);
		
		    oDialog.open();
		    if (oView) {
		        oDialog.attachAfterOpen(function () {
		            oDialog.rerender();
		        });
		    }
		    else {
		        oView = oDialog.getParent();
		    }
		    oView.setModel(oModel);
		    if (sPath) {
		        var oParams = oView.getController().getBindingParameters();
		        oView.bindElement(sPath, oParams);
		    }
		});
		
	},
	_onComboBoxSelectionChange: function (oEvent) {
		var sDialogName = "dialog_2";
		this.mDialogs = this.mDialogs || {};
		var oDialog = this.mDialogs[sDialogName];
		var oSource = oEvent.getSource();
		var oBindingContext = oSource.getBindingContext();
		var sPath = (oBindingContext) ? oBindingContext.getPath() : null;
		var oModel = (oBindingContext) ? oBindingContext.getModel() : this.getView().getModel();
		var oView;
		if (!oDialog) {
		    this.getOwnerComponent().runAsOwner(function () {
		        oView = sap.ui.xmlview({viewName: "generated.app.view." + sDialogName});
		        this.getView().addDependent(oView);
		        oView.getController().setRouter(this.oRouter);
		        oDialog = oView.getContent()[0];
		        this.mDialogs[sDialogName] = oDialog;
		    }.bind(this));
		}
		
		return new ES6Promise.Promise(function(resolve, reject) {
		    oDialog.attachEventOnce("afterOpen", null, resolve);
		
		    oDialog.open();
		    if (oView) {
		        oDialog.attachAfterOpen(function () {
		            oDialog.rerender();
		        });
		    }
		    else {
		        oView = oDialog.getParent();
		    }
		    oView.setModel(oModel);
		    if (sPath) {
		        var oParams = oView.getController().getBindingParameters();
		        oView.bindElement(sPath, oParams);
		    }
		});
		
	},
	onAfterRendering: function () {
		
        var oBindingParameters;
        
        oBindingParameters = {"path":"ventas","parameters":{}};
        this.getView().byId("sap_uxap_ObjectPageLayout_0-sections-sap_uxap_ObjectPageSection-1493927072308-subSections-sap_uxap_ObjectPageSubSection-1-blocks-sap_chart_BarChart-1493929437647").bindData(oBindingParameters);


	},
	onInit: function () {
		this.mBindingOptions = {};
        this.oRouter = sap.ui.core.UIComponent.getRouterFor(this);
        this.oRouter.getTarget("detail_page_2").attachDisplay(jQuery.proxy(this.handleRouteMatched, this));
        var oView = this.getView();
        oView.addEventDelegate({
            onBeforeShow: function () {
                if (sap.ui.Device.system.phone) {
                    var oPage = oView.getContent()[0];
                    if (oPage.getShowNavButton && ! oPage.getShowNavButton()) {
                        oPage.setShowNavButton(true);
                        oPage.attachNavButtonPress(function () {
                            this.oRouter.navTo("detail_page_1", {}, true);
                        }.bind(this));
                    }
                }
            }.bind(this)
        });

        var oView = this.getView();
        var oModel = new sap.ui.model.json.JSONModel();
        oView.setModel(oModel, 'staticDataModel');
    
        var oData = [{"dim0":"India","mea0":"296"},{"dim0":"Canada","mea0":"133"},{"dim0":"USA","mea0":"489"},{"dim0":"Japan","mea0":"270"},{"dim0":"Germany","mea0":"350"}];
        oView.getModel("staticDataModel").setData({'sap_uxap_ObjectPageLayout_0-sections-sap_uxap_ObjectPageSection-1493927072308-subSections-sap_uxap_ObjectPageSubSection-1-blocks-sap_chart_BarChart-1493929437647':oData}, true);
        this.oBindingParameters = {"path":"ventas","parameters":{}};
        oView.byId("sap_uxap_ObjectPageLayout_0-sections-sap_uxap_ObjectPageSection-1493927072308-subSections-sap_uxap_ObjectPageSubSection-1-blocks-sap_chart_BarChart-1493929437647").bindData(this.oBindingParameters);
    


	}
});
}, /* bExport= */true);
