import { Component,
        Input,
        Output,
        EventEmitter,} from "@angular/core";
@Component({
    selector: 'grid-UI',
    templateUrl: './app/shared/grid.component.html'
})
export class GridComponent {
    @Output("grid-selected")
    selected: EventEmitter<Object> = new EventEmitter<Object>();
    gridColumns: Array<Object> = new Array<Object>();
    // inputs
    gridData: Array<Object> = new Array<Object>();
    // inputs
    @Input("grid-entityname")
    EntityName: string = "";

    constructor() {
        console.log("Constructor fired"); // 1
    }
    @Input("grid-data")
    set gridDataSet(_gridData: Array<Object>) {
        
        if (_gridData.length > 0) {
            // Fill column names in gridColumns collection
            if (this.gridColumns.length == 0) {
                var columnNames = Object.keys(_gridData[0]);
                this.gridColumns = new Array<Object>();
                for (var index in columnNames) {
                    this.gridColumns.push(columnNames[index]);
                }
            }
            this.gridData = _gridData;
        }
    }
    Select(_selected: Object) {
        this.selected.emit(_selected);
    }
} 