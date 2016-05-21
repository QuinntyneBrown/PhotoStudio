"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var core_1 = require("../core");
var AppActionCreator = (function (_super) {
    __extends(AppActionCreator, _super);
    function AppActionCreator($location, dispatcher, appService, guid) {
        _super.call(this, $location, appService, dispatcher, guid, AddOrUpdateAppAction, AllAppsAction, RemoveAppAction, SetCurrentAppAction);
    }
    return AppActionCreator;
}(core_1.BaseActionCreator));
exports.AppActionCreator = AppActionCreator;
var AddOrUpdateAppAction = (function () {
    function AddOrUpdateAppAction(id, entity) {
        this.id = id;
        this.entity = entity;
    }
    return AddOrUpdateAppAction;
}());
exports.AddOrUpdateAppAction = AddOrUpdateAppAction;
var AllAppsAction = (function () {
    function AllAppsAction(id, entities) {
        this.id = id;
        this.entities = entities;
    }
    return AllAppsAction;
}());
exports.AllAppsAction = AllAppsAction;
var RemoveAppAction = (function () {
    function RemoveAppAction(id, entity) {
        this.id = id;
        this.entity = entity;
    }
    return RemoveAppAction;
}());
exports.RemoveAppAction = RemoveAppAction;
var AppsFilterAction = (function () {
    function AppsFilterAction(id, term) {
        this.id = id;
        this.term = term;
    }
    return AppsFilterAction;
}());
exports.AppsFilterAction = AppsFilterAction;
var SetCurrentAppAction = (function () {
    function SetCurrentAppAction(entity) {
        this.entity = entity;
    }
    return SetCurrentAppAction;
}());
exports.SetCurrentAppAction = SetCurrentAppAction;
//# sourceMappingURL=app.actions.js.map