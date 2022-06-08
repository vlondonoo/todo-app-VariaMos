Fragment Images-alterAddSortTasks {
    Action: add
    Priority: high
    FragmentationPoints: addSortTasks
    PointBracketsLan: java
    Destinations: Frontend-Todo-todoService
    SourceCode: [ALTERCODE-FRAG]    
    sortPendingTasks(direction:any){
        return this.http.get(`${this.url}/listOrderedPending/${direction}`,this.httpOptions).pipe(
            tap(_ => console.log('response sort')),
            ) 
    }
    sortClosedTasks(direction:string){
        return this.http.get(`${this.url}/todosOrderedClosed/${direction}`,this.httpOptions).pipe(
            tap(_ => console.log('response sort')),
            ) 
    }
    [/ALTERCODE-FRAG]
}