import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  url:string = 'https://todoappsplback-pewzp22whq-uc.a.run.app'

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json',"Access-Control-Allow-Origin": '*' })
  };
  constructor(private http: HttpClient) { }

  getTodos():Observable<object> {
    return this.http.get(`${this.url}/todos`,this.httpOptions).pipe(
      tap(_ => console.log('response')),
      )  
  }
  getPendingTasks():Observable<object> {
    return this.http.get(`${this.url}/todos/pending`,this.httpOptions).pipe(
      tap(_ => console.log('response')),
      )  
  }

  getClosedTasks():Observable<object> {
    return this.http.get(`${this.url}/todos/closed`,this.httpOptions).pipe(
      tap(_ => console.log('response')),
      )  
  }
  getTodosOrdered(id:any):Observable<object> {
    return this.http.get(`${this.url}/todosOrdered`,this.httpOptions).pipe(
      tap(_ => console.log('response')),
      )  
  }

  deleteTask(id:any):Observable<object> {
    return this.http.get(`${this.url}/todos/delete/${id}`,this.httpOptions).pipe(
      tap(_ => console.log('response')),
      )  
  }

  updateTask(id:any,state:string):Observable<object> {
    return this.http.get(`${this.url}/todos/update/${id}/${state}`,this.httpOptions).pipe(
      tap(_ => console.log('response')),
      )  
  }

  /*B-addSortTasks*/
  
 
 createTask(formData:any) { 
   /*B-addUploadImages*/
  return this.http.post(`${this.url}/todos`,formData).pipe(
    tap(_ => console.log('image uploaded')),
    )}  
}
