import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { ProviderService } from '../shared/services/provider.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public is_admin = false;
  public logged = false;
  public login: any ="";
  public password: any ="";

  message: boolean = this.logged;
  @Output() messageEvent = new EventEmitter<boolean>();

  constructor(private provider: ProviderService) { }

  ngOnInit() {
    const token = localStorage.getItem('token');
    if(token){
      this.logged = true;
    }
  }

  sendMessageToHeader(){
    this.messageEvent.emit(this.message)
  }

  auth(){
    if((this.login !=='') && this.password !==''){
      this.provider.auth(this.login, this.password).then(res=>{
        localStorage.setItem('token', res.token);

        this.logged = true;
      });
    }
  }

  logout(){
    this.provider.logout().then(res=>{
      localStorage.clear();
      this.logged = false;
    })
  }
}
