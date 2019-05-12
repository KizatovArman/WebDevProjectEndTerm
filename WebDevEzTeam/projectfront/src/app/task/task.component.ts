import { Component, OnInit } from '@angular/core';
import { ProviderService } from '../shared/services/provider.service';
import { ITask, IProfile } from '../shared/models/models';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  constructor(private provider: ProviderService) { }

  public tasks: ITask[];
  public nameOfTask = '';
  public statusOfTask = '';
  private profile: IProfile;
  private user_id =0;
  public cur_task_id = 0;

  ngOnInit() {
    this.getAllTasks();
    const token = localStorage.getItem('token');
    if(token){
      this.user_id = Number(localStorage.getItem('userId'));
      this.getProfile()
    }
  }

  increaseTasknumber(){
    this.provider.increaseTaskNumber(this.user_id, this.profile.task_count, this.profile).then(res=>{
    })
  }  

  getProfile(){
    this.provider.accessProfile(this.user_id).then(res=>{
      this.profile = res;
    })
  }

  getAllTasks(){
    this.provider.getAllUserTasks().then(res=>{
      this.tasks = res;
    })
  }

  updateTaskI(task: ITask){
    this.provider.updateUserTask(task).then(res=>{
      this.provider.getAllUserTasks().then(r=>{
        this.tasks = r;
        this.cur_task_id = 0;
      })
    })
  }

  chooseTask(task: ITask){
    this.cur_task_id = task.id;
  }

  deleteTask(task: ITask){
    this.provider.deleteUserTask(task).then(res=>{
      this.getAllTasks()
    })
  }

  createNewTask(){
    if(this.nameOfTask !=='' && this.statusOfTask !==''){
      this.provider.createNewTask(this.nameOfTask, this.statusOfTask).then(res=>{
        this.tasks.push(res);
        this.nameOfTask ="";
        this.statusOfTask="";
      })
    }
  }
}
