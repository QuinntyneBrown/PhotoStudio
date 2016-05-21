"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("../core");
var modal_actions_1 = require("../modal/modal.actions");
var HeaderComponent = (function () {
    //TODO: Implement Sticky Header
    //http://www.webdesignerdepot.com/2014/05/how-to-create-an-animated-sticky-header-with-css3-and-jquery/
    function HeaderComponent($window, modalActionCreator) {
        var _this = this;
        this.$window = $window;
        this.modalActionCreator = modalActionCreator;
        this.openSearch = function () {
            _this.modalActionCreator.open({ html: "<search-modal></search-modal>" });
        };
    }
    HeaderComponent = __decorate([
        core_1.Component({
            template: require("./header.component.html"),
            styles: [require("./header.component.css")],
            selector: "header",
            viewProviders: ["$window", "modalActionCreator"],
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        }), 
        __metadata('design:paramtypes', [Object, modal_actions_1.ModalActionCreator])
    ], HeaderComponent);
    return HeaderComponent;
}());
exports.HeaderComponent = HeaderComponent;
//# sourceMappingURL=header.component.js.map