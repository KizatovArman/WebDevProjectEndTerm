import { Injectable, EventEmitter } from '@angular/core';
import { MainService } from './main.service';
import { HttpClient } from '@angular/common/http';
import { IAuthResponse, ITask, ISupplement, IDiet, IRegResponse, IExerciseCategory, IProfile, IUserProfileList } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class ProviderService extends MainService{

  public sendMessage = new EventEmitter<string>();1

  constructor(http: HttpClient) {
    super(http);
   }

  //  getTaskLists(): Promise<TaskList[]>{
  //    return this.get('http://localhost:8000/api/task_lists/', {});
  //  }

  //  getTasks(task_lists: TaskList): Promise<Task[]>{
  //    return this.get(`http://localhost:8000/api/task_lists/${task_lists.id}/tasks/`,{});
  //  }

  

   login(uname: any, password: any): Promise<IAuthResponse>{
     return this.post('http://localhost:8000/api/login/',{
       username: uname,
       password: password
     });
   }

   register(login: any, email: any, password: any): Promise<IRegResponse>{
    return this.post('http://localhost:8000/api/register/',{
      username: login,
      email: email,
      password: password
    });
  }

   logout():Promise<any>{
     return this.post('http://localhost:8000/api/logout/',{});
   }

  getSupplements():Promise<ISupplement[]>{
    return this.get('http://localhost:8000/api/supplements/',{});
  }

  getDiets():Promise<IDiet[]>{
    return this.get('http://localhost:8000/api/diets/',{});
  }

  getExerciseCategories():Promise<IExerciseCategory[]>{
    return this.get('http://localhost:8000/api/exercise_categories/',{})
  }

  createNewExerciseCategory(name: any):Promise<IExerciseCategory>{
    return this.post('http://localhost:8000/api/exercise_category/',{
      name: name
    })
  }

  updateExerciseCategory(exerciseCategory: IExerciseCategory):Promise<IExerciseCategory>{
    return this.put('http://localhost:8000/api/exercise_category/'+exerciseCategory.id+'/',{
      name: exerciseCategory.name
    })
  }

  deleteExerciseCategory(exerciseCategory: IExerciseCategory):Promise<IExerciseCategory>{
    return this.delet('http://localhost:8000/api/exercise_category/' + exerciseCategory.id + '/',{})
  }

  accessProfile(userId: any):Promise<IProfile>{
    return this.get('http://localhost:8000/api/profile/' + userId + "/",{})
  }

  changeProfile(userId: any, first_name: any, second_name:any, task_count:any, overall_body_test:any, allergies:any, blood_pressure: any):Promise<IProfile>{
    return this.put('http://localhost:8000/api/profile/' + userId + "/",{
      first_name: first_name,
      second_name: second_name,
      task_count: task_count,
      overall_body_test: overall_body_test,
      allergies: allergies,
      blood_pressuer: blood_pressure
    })
  }
  
  // Admin Panel
  deleteDiet(diet: IDiet):Promise<any>{
    return this.delet('http://localhost:8000/api/diet/'+ diet.id + "/",{})
  }

  // Admin Panel
  updateDiet(diet: IDiet):Promise<IDiet>{
    return this.put('http://localhost:8000/api/diet/' + diet.id + "/",{
      title: diet.title,
      description: diet.description
    })
  }

  // Admin Panel
  createNewDiet(title: any, description: any):Promise<IDiet>{
    return this.post('http://localhost:8000/api/diet/',{
      title: title,
      description: description
    })
  }

  // Admin Panel
  getUserList():Promise<IUserProfileList[]>{
    return this.get('http://localhost:8000/api/users/',{})
  }

}