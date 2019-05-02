import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public pressedLogin = false;
  public pressedSignUp =false;

  constructor() { }

  ngOnInit() {
  }

  hideSignUp(event){
    this.pressedSignUp = true;
    this.pressedLogin = false;
  }

  hideLogin(event){
    this.pressedLogin = true;
    this.pressedSignUp = false;
  } 

  showLoginSignUp(){
    this.pressedLogin = false;
    this.pressedSignUp = false;
  }
}
