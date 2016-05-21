"use strict";
require("../core/core.module");
require("../backdrop/backdrop.module");
var core_1 = require("../core");
var modal_actions_1 = require("./modal.actions");
var modal_service_1 = require("./modal.service");
var reducers = require("./modal.reducers");
var modal_component_1 = require("./modal.component");
var modal_title_component_1 = require("./modal-title.component");
var modal_content_component_1 = require("./modal-content.component");
var app = angular.module("app.modal", [
    "app.core",
    "app.backdrop"
]);
core_1.provide(app, modal_actions_1.ModalActionCreator);
core_1.provide(app, modal_service_1.Modal);
app.component(modal_component_1.ModalComponent);
app.component(modal_title_component_1.ModalTitleComponent);
app.component(modal_content_component_1.ModalContentComponent);
app.config(["reducersProvider", function (reducersProvider) {
        for (var reducer in reducers) {
            reducersProvider.configure(reducers[reducer]);
        }
    }]);
app.run(["modal", "modalActionCreator", function (modal, modalActionCreator) { }]);
//# sourceMappingURL=modal.module.js.map