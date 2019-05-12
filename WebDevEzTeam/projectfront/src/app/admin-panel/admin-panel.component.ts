import { Component, OnInit } from '@angular/core';
import { ProviderService } from '../shared/services/provider.service';
import { IExerciseCategory, IDiet,ISupplement, IUserProfileList } from '../shared/models/models';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {

  constructor(private provider: ProviderService) { }

  public exerciseCategories: IExerciseCategory[];
  public exerciseCategoryName = "";

  public diets: IDiet[];
  public supplements: ISupplement[];
  public dietName = "";
  public dietDescription = "";
  public supplementName = "";
  public supplementDescription = "";
  public manipulateExCatPressed = false;  
  public manipulateSupplementPressed = false;
  public maniplateDietsPressed = false;
  public manipulateExercisePressed = false;
  public showUserListPressed = false;

  public updateExerciseCategoryPressed = false;
  public updateSupplementPressed=false;
  public updateDietPressed = false;
  public updateExercisePressed= false;

  public userlist: IUserProfileList[];

  ngOnInit() {
    this.getDietsList();
    this.getSupplementsList();
    this.getExerciseCategoryList();
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

  manipulateDiets(){
    this.maniplateDietsPressed = !this.maniplateDietsPressed;
    this.manipulateExCatPressed = false;
    this.manipulateSupplementPressed = false;
    this.updateExerciseCategoryPressed = false;
    this.updateSupplementPressed = false;
    this.updateDietPressed = false; 
    this.updateExercisePressed = false;
    this.manipulateExercisePressed = false;
    this.showUserListPressed = false;
    this.targetExCategory = null;
    this.targetExercise = null;
    this.targetExerciseId = 0;
  }

  getUsersList(){
    this.provider.getUserList().then(res=>{
      this.userlist = res;
    })
  }

  getSupplementsList(){
    this.provider.getSupplements().then(res=>{
      this.supplements = res;
    })
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

  showSupplement(){
    this.updateSupplementPressed =!this.updateSupplementPressed;
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

  getDietsList(){
    this.provider.getDiets().then(res=>{
      this.diets = res;
    })
  }

  showDiet(){
    this.updateDietPressed = !this.updateDietPressed;
  }

  createDiet(){
    if(this.dietName !==''){
      this.provider.createNewDiet(this.dietName, this.dietDescription).then(res=>{
        this.diets.push(res);
        this.dietName="";
        this.dietDescription="";
      })
    }
  }

  createSupplement(){
    if(this.supplementName!==""){
      this.provider.createNewSupplement(this.supplementName, this.supplementDescription).then(res=>{
        this.supplements.push(res);
        this.supplementName="";
        this.supplementDescription ="";
      })
    }
  }

  updateDiet(diet: IDiet){
    this.provider.updateDiet(diet).then(res=>{
      this.provider.getDiets().then(r=>{
        this.diets = r;
      })
    })
  }

  updateSupplement(supplement: ISupplement){
    this.provider.updateSupplement(supplement).then(res=>{
      this.provider.getSupplements().then(r=>{
        this.supplements = r;
      })
    })
  }

  deleteDiet(diet: IDiet){
    this.provider.deleteDiet(diet).then(res=>{
      this.provider.getDiets().then(r=>{
        this.diets = r;
      })
    })
  }

  deleteThisSupplement(supplement: ISupplement){
    this.provider.deleteSupplement(supplement).then(res=>{
      this.provider.getSupplements().then(r=>{
        this.supplements = r;
      })
    })
  }
}
