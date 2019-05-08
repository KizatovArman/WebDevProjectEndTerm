import { Component, OnInit } from '@angular/core';
import { ProviderService } from '../shared/services/provider.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public logged = false;
  private userName = "";
  private isadmin = false;

  constructor(private provider: ProviderService) { }

  ngOnInit() {
    const token = localStorage.getItem('token');
    this.isadmin = false;
    this.userName = "";
    if(token){
      this.logged = true;
      this.userName = localStorage.getItem('userName');
      if(this.userName ==="A_Kizatov"){
        this.isadmin = true;
      }
    }
  }

  logout(){
    this.provider.logout();
    localStorage.clear();
  }
}
