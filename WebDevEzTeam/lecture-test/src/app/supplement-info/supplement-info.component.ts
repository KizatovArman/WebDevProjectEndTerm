import { Component, OnInit } from '@angular/core';
import { ProviderService } from '../shared/services/provider.service';
import { ISupplement } from '../shared/models/models';

@Component({
  selector: 'app-supplement-info',
  templateUrl: './supplement-info.component.html',
  styleUrls: ['./supplement-info.component.css']
})
export class SupplementInfoComponent implements OnInit {

  public supplements: ISupplement[] = [];
  public clicked: boolean = false;

  constructor(private provider: ProviderService) { }

  ngOnInit() {
    this.getSupplements()
  }

  checkClicked(){
    this.clicked = !this.clicked;
  }

  getSupplements(){
    this.provider.getSupplements().then(res=>{
      this.supplements = res;
    });
  }
}