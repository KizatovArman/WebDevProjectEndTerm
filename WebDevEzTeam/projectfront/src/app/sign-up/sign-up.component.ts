import { Component, OnInit } from '@angular/core';
import { ProviderService } from '../shared/services/provider.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {


  public login: any = "";
  public email: any = "";
  public password: any = "";
  public registered: boolean = false;

  constructor(private provider: ProviderService) { }

  ngOnInit() {
    this.registered = false;
  }

  register(){
    if(this.login !=="" && this.email !=="" && this.password!==""){
      this.provider.register(this.login, this.email, this.password).then(res=>{
        localStorage.setItem('token', res.token)
        localStorage.setItem('userId',res.user_id.toString());
        localStorage.setItem('userName', res.username);
        this.registered = true;
        window.location.reload();
      })
    }
  }

}
