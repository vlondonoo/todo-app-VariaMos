import { Component, Input, OnInit, Output , EventEmitter, ViewChild, AfterViewInit} from '@angular/core';
import { TodoService } from '../todo.service';
import {LiveAnnouncer} from '@angular/cdk/a11y';
/*B-addImport*/

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit {
  @Input() tableName: string  = '';
  @Input() columnNames:any;
  @Input() dataSource:any;
  @Input() actionIcons:any;
  @Output() updateTasks = new EventEmitter<string>();
  
  constructor(private todoService:TodoService, private _liveAnnouncer: LiveAnnouncer) { }
  /*B-addViewChild*/
  dataSource2:any
  
  ngOnInit(): void {
  }
  updateTable(state:string){
    const selectService = state === 'OPEN' ? this.todoService.getPendingTasks() : this.todoService.getClosedTasks();
    selectService.subscribe((data:any)=>{this.dataSource = data.list})
  }
  updateTask(id:any,state:string){
    this.todoService.updateTask(id,state).subscribe((res: any) => {
      this.updateTasks.emit();
    })
  }

  deleteTask(element:any){
    this.todoService.deleteTask(element.id).subscribe((res: any) => {
    this.updateTable(element.state) 
    })
  }

 /*B-addannounceSortChange*/


}
