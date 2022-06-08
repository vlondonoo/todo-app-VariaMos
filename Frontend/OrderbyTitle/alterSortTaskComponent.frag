Fragment Images-alterAddImport {
    Action: add
    Priority: high
    FragmentationPoints: addImport 
    PointBracketsLan: java
    Destinations: Frontend-Todo-data-table-component
    SourceCode: [ALTERCODE-FRAG]    
    import {MatSort, Sort} from '@angular/material/sort';    
    [/ALTERCODE-FRAG]
}

Fragment Images-alterAddViewChild {
    Action: add
    Priority: high
    FragmentationPoints: addViewChild 
    PointBracketsLan: java
    Destinations: Frontend-Todo-data-table-component
    SourceCode: [ALTERCODE-FRAG]    
     @ViewChild(MatSort) sort: MatSort | undefined;   
    [/ALTERCODE-FRAG]
}

Fragment Images-alterAddannounceSortChange {
    Action: add
    Priority: high
    FragmentationPoints: addannounceSortChange 
    PointBracketsLan: java
    Destinations: Frontend-Todo-data-table-component
    SourceCode: [ALTERCODE-FRAG]    
        announceSortChange(sortState: Sort) {
            const selectService = this.dataSource[0].state === 'OPEN' ? this.todoService.sortPendingTasks(sortState.direction) : this.todoService.sortClosedTasks(sortState.direction);
            selectService.subscribe((data:any)=>{this.dataSource = data.list})

            if (sortState.direction) {
            this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
            } else {
            this._liveAnnouncer.announce('Sorting cleared');
            }
        }  
    [/ALTERCODE-FRAG]
}