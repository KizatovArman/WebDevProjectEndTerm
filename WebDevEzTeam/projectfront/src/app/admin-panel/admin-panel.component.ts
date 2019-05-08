import { Component, OnInit } from '@angular/core';
import { ProviderService } from '../shared/services/provider.service';
import { IExerciseCategory } from '../shared/models/models';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {

  constructor(private provider: ProviderService) { }

  public exerciseCategories: IExerciseCategory[];
  public updateExerciseCategoryPressed = false;

  public exerciseCategoryName = "";



  ngOnInit() {
    this.getExerciseCategoryList();
  }

  getExerciseCategoryList(){
    this.provider.getExerciseCategories().then(res=>{
      this.exerciseCategories = res;
    })
  }

  showExerciseCategories(){
    this.updateExerciseCategoryPressed = !this.updateExerciseCategoryPressed;
  }

  createExerciseCategory(){
    if(this.exerciseCategoryName !==''){
      this.provider.createNewExerciseCategory(this.exerciseCategoryName).then(res=>{
        this.exerciseCategories.push(res)
        this.exerciseCategoryName ='';
      })
    }
  }

  updateExerciseCategory(exerciseCategory: IExerciseCategory){
    this.provider.updateExerciseCategory(exerciseCategory).then(res=>{
      this.provider.getExerciseCategories().then(r=>{
        this.exerciseCategories = r;
      })
    })
  }

  deleteExerciseCategory(exerciseCategory: IExerciseCategory){
    this.provider.updateExerciseCategory(exerciseCategory).then(res=>{
      this.provider.getExerciseCategories().then(r=>{
        this.exerciseCategories = r;
      })
    })
  }
}
