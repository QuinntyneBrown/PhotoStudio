import { CanActivate, ChangeDetectionStrategy, Component } from "../core";
import { toPageListFromInMemory } from "../paged-list/to-paged-list-from-in-memory";
import { IPagedList } from "../paged-list/ipaged-list.d";
import { Customer } from "./customer.model";

@Component({
    template: require("./customer-paged-list.component.html"),
    styles: [require("./customer-paged-list.component.css")],
    selector: "customer-paged-list",
    inputs: ['entities', 'edit', 'remove', 'pageNumber', 'pageSize'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomerPagedListComponent {
    constructor() { }

    ngOnInit = () => {
        //TODO: Sometimes nul here
        if (this.entities)
            this.pagedList = toPageListFromInMemory<Customer>(this.entities, this.pageNumber, this.pageSize)
    };

    entities: Array<Customer>;
    pagedList: IPagedList<Customer>;
    pageNumber: number;
    pageSize: number;

    next = () => {
        if (this.pageNumber == this.pagedList.totalPages) {
            this.pageNumber = 1;
        } else {
            this.pageNumber = this.pageNumber + 1;
        }
        this.ngOnInit();
    }

    previous = () => {
        if (this.pageNumber == 1) {
            this.pageNumber = this.pagedList.totalPages;
        } else {
            this.pageNumber = this.pageNumber - 1;
        }
        this.ngOnInit();
    }
}
