"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var core_1 = require("../core");
var AppService = (function (_super) {
    __extends(AppService, _super);
    function AppService($q, apiEndpoint, fetch) {
        _super.call(this, $q, apiEndpoint, fetch);
    }
    Object.defineProperty(AppService.prototype, "baseUri", {
        get: function () { return this.apiEndpoint.getBaseUrl() + "/app"; },
        enumerable: true,
        configurable: true
    });
    return AppService;
}(core_1.BaseService));
exports.AppService = AppService;
//# sourceMappingURL=app.service.js.map