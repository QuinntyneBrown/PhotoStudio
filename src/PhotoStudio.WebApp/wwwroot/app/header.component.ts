import { CanActivate, Component, ChangeDetectionStrategy } from "../core";
import { ModalActionCreator } from "../modal/modal.actions";

@Component({
    template: require("./header.component.html"),
    styles: [require("./header.component.css")],
    selector: "header",
    viewProviders: ["$window","modalActionCreator"],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
    //TODO: Implement Sticky Header
    //http://www.webdesignerdepot.com/2014/05/how-to-create-an-animated-sticky-header-with-css3-and-jquery/
    constructor(private $window, private modalActionCreator: ModalActionCreator) {

    }

    openSearch = () => {
        this.modalActionCreator.open({ html: "<search-modal></search-modal>" });
    }
  
}
