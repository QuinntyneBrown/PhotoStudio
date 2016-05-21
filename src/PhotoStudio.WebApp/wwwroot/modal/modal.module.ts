require("../core/core.module");
require("../backdrop/backdrop.module");

import { provide } from "../core";
import { ModalActionCreator } from "./modal.actions";
import { Modal } from "./modal.service";
import * as reducers from "./modal.reducers";
import { ModalComponent } from "./modal.component";
import { ModalTitleComponent } from "./modal-title.component";
import { ModalContentComponent } from "./modal-content.component";

var app = (<any>angular.module("app.modal", [
    "app.core",
    "app.backdrop"    
]));

provide(app, ModalActionCreator);
provide(app, Modal);
app.component(ModalComponent);
app.component(ModalTitleComponent);
app.component(ModalContentComponent);

app.config(["reducersProvider", reducersProvider => {
    for (var reducer in reducers) { reducersProvider.configure(reducers[reducer]); }
}]);

app.run(["modal", "modalActionCreator", (modal, modalActionCreator) => { }]);
