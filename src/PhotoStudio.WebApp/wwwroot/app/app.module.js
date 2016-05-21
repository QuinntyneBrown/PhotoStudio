"use strict";
require("../core/core.module");
require("../router-outlet/router-outlet.module");
var app_component_1 = require("./app.component");
var header_component_1 = require("./header.component");
var app_actions_1 = require("./app.actions");
var app_service_1 = require("./app.service");
var reducers = require("./app.reducers");
var app = angular.module("app.app", [
    "app.core",
    "app.routerOutlet",
]);
app.service("appActionCreator", ["$location", "dispatcher", "appService", "guid", app_actions_1.AppActionCreator]);
app.service("appService", ["$q", "apiEndpoint", "fetch", app_service_1.AppService]);
app.component(app_component_1.AppComponent);
app.component(header_component_1.HeaderComponent);
app.config(["reducersProvider", function (reducersProvider) {
        for (var reducer in reducers) {
            reducersProvider.configure(reducers[reducer]);
        }
    }]);
//# sourceMappingURL=app.module.js.map