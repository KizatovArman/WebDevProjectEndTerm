import { Component, OnInit } from '@angular/core';
import { ProviderService } from '../shared/services/provider.service';
import { IExerciseCategory } from '../shared/models/models';

@Component({
  selector: 'app-exercises',
  templateUrl: './exercises.component.html',
  styleUrls: ['./exercises.component.css']
})
export class ExercisesComponent implements OnInit {

  public exerciseCategories: IExerciseCategory[];

  constructor(private provider: ProviderService) { }

  ngOnInit() {
    this.getExerciseCategories()
  }

  getExerciseCategories(){
    this.provider.getExerciseCategories().then(res=>{
      this.exerciseCategories = res;
    })
  }

}

