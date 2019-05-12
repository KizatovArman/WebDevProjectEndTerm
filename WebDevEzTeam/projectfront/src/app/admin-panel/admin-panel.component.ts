import { Component, OnInit } from '@angular/core';
import { ProviderService } from '../shared/services/provider.service';
import { IExerciseCategory, ISupplement, IDiet, IUserProfileList, IExercise } from '../shared/models/models';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {

  constructor(private provider: ProviderService) { }

  public exerciseCategories: IExerciseCategory[];
  public exercises: IExercise[];
  public targetExCategory: IExerciseCategory;
  public targetExercise: IExercise;
  public targetExerciseId: number;

  public updateExerciseCategoryPressed = false;
  public updateSupplementPressed=false;
  public updateDietPressed = false;
  public updateExercisePressed= false;

  public exerciseCategoryName = "";
  public dietName = "";
  public dietDescription = "";
  public exerciseName="";
  public exerciseLink="";
  public exerciseEquipment="";
  public exerciseHowTodo="";

  public manipulateExCatPressed = false;
  public manipulateSupplementPressed = false;
  public maniplateDietsPressed = false;
  public manipulateExercisePressed = false;
  public showUserListPressed = false;

  ngOnInit() {
    this.getExerciseCategoryList();
    this.getUsersList();
  }

  manipulateExerciseCategories(){
    this.manipulateExCatPressed = !this.manipulateExCatPressed;
    this.manipulateSupplementPressed = false;
    this.maniplateDietsPressed = false;
    this.updateExerciseCategoryPressed = false;
    this.updateSupplementPressed = false;
    this.updateDietPressed = false;
    this.showUserListPressed = false;
    this.updateExercisePressed = false;
    this.manipulateExercisePressed = false;
    this.targetExCategory = null;
    this.targetExerciseId = 0;
    this.targetExercise=null;
  }

  manipulateExercises(excat: IExerciseCategory){
    this.targetExCategory = excat;
    this.manipulateExercisePressed = !this.manipulateExercisePressed;
    this.updateSupplementPressed=false;
    this.updateDietPressed = false;
    this.updateExercisePressed= false;
    this.manipulateSupplementPressed = false;
    this.maniplateDietsPressed = false;
    this.targetExercise=null;
    this.showUserListPressed = false;
  }
    
  manipulateSupplements(){
    this.manipulateSupplementPressed = !this.manipulateSupplementPressed;
    this.manipulateExCatPressed = false;
    this.maniplateDietsPressed = false;
    this.updateExerciseCategoryPressed = false;
    this.updateSupplementPressed = false;
    this.updateDietPressed = false; 
    this.updateExercisePressed = false;
    this.manipulateExercisePressed = false;
    this.showUserListPressed = false;
    this.targetExCategory = null;
    this.targetExercise=null;
    this.targetExerciseId = 0;
  }


  getUsersList(){
    this.provider.getUserList().then(res=>{
      this.userlist = res;
    })
  }

  getExercisesList(id: number){
    this.provider.getExercisesAdminOnly(id).then(res=>{
      this.exercises = res;
    })
  }

  getExerciseCategoryList(){
    this.provider.getExerciseCategories().then(res=>{
      this.exerciseCategories = res;
    })
  }

  showExerciseCategories(){
    this.updateExerciseCategoryPressed = !this.updateExerciseCategoryPressed;
    this.targetExercise=null;
    this.targetExCategory = null;
    this.targetExerciseId = 0;
  }
  
  showExercises(){
    this.updateExercisePressed = !this.updateExercisePressed;
  }

  chooseExercise(ex: IExercise){
    this.targetExerciseId = ex.id;
    this.targetExercise=ex;
    console.log(this.targetExercise)

  }

  createExercise(excat: IExerciseCategory){
    if(this.exerciseName !=='' && this.exerciseLink !=='' && this.exerciseEquipment !=='' && this.exerciseHowTodo !==''){
      this.provider.createNewExercise(this.exerciseName, this.exerciseLink, this.exerciseEquipment, this.exerciseHowTodo, excat).then(res=>{
        this.exercises.push(res);
        this.exerciseName = "";
        this.exerciseLink ="";
        this.exerciseEquipment="";
        this.exerciseHowTodo="";
      })
    }
  }


  createExerciseCategory(){
    if(this.exerciseCategoryName !==''){
      this.provider.createNewExerciseCategory(this.exerciseCategoryName).then(res=>{
        this.exerciseCategories.push(res)
        this.exerciseCategoryName ='';
      })
    }
  }

  updateExercise(excat: IExerciseCategory, ex: IExercise){
    if(ex.title !=='' && ex.photo_link !=='' && ex.equipment_needed !=='' && ex.how_to_do_tips !==''){
      this.provider.updateExercise(excat,ex).then(res=>{
        this.provider.getExercisesAdminOnly(excat.id).then(r=>{
          this.exercises = r;
          this.targetExerciseId = 0;
        })
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

  deleteExercise(excat: IExerciseCategory, ex: IExercise){
    this.provider.deleteExercise(excat, ex).then(res=>{
      this.provider.getExercisesAdminOnly(excat.id).then(r=>{
        this.exercises = r;
        this.targetExerciseId = 0;
      })
    })
  }

  deleteExerciseCategory(exerciseCategory: IExerciseCategory){
    this.provider.deleteExerciseCategory(exerciseCategory).then(res=>{
      this.provider.getExerciseCategories().then(r=>{
        this.exerciseCategories = r;
      })
    })
  }
}
