import { Injectable, EventEmitter } from '@angular/core';
import { MainService } from './main.service';
import { HttpClient } from '@angular/common/http';
import { IAuthResponse, Task, TaskList } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class ProviderService extends MainService{

  public sendMessage = new EventEmitter<string>();1

  constructor(http: HttpClient) {
    super(http);
   }

   getTaskLists(): Promise<TaskList[]>{
     return this.get('http://localhost:8000/api/task_lists/', {});
   }

   getTasks(task_lists: TaskList): Promise<Task[]>{
     return this.get(`http://localhost:8000/api/task_lists/${task_lists.id}/tasks/`,{});
   }

   createTaskList(name: any): Promise<TaskList> {
    return this.post('http://localhost:8000/api/task_lists/',{
      name: name
    });
   }

   updateTaskList(task_lists: TaskList): Promise<TaskList>{
     return this.put(`http://localhost:8000/api/task_lists/${task_lists.id}/`,{
      name: task_lists.name
     });
   }

   deleteTaskList(id: number): Promise<any>{
     return this.delet(`http://localhost:8000/api/task_lists/${id}/`,{});
   }

   auth(login: any, password: any): Promise<IAuthResponse>{
     return this.post('http://localhost:8000/apip/login/',{
       username: login,
       password: password
     });
   }

   logout():Promise<any>{
     return this.post('http://localhost:8000/apip/logout/',{
       
     });
   }

}