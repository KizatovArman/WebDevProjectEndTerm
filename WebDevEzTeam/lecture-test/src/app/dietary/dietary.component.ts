import { Component, OnInit } from '@angular/core';
import { IDiet } from '../shared/models/models';
import { ProviderService } from '../shared/services/provider.service';

@Component({
  selector: 'app-dietary',
  templateUrl: './dietary.component.html',
  styleUrls: ['./dietary.component.css']
})
export class DietaryComponent implements OnInit {

  public diets: IDiet[] = [];
  

  constructor(private provider: ProviderService) { }

  ngOnInit() {
    this.getDiets()
  }

  getDiets(){
    this.provider.getDiets().then(res=>{
      this.diets = res;
    })
  }
}