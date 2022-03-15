import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _authS: AuthService) { }

  ngOnInit(): void {
  }

  needsLogin(){
    console.log('Needs to login');
    return !this._authS.isAuthenticated();
  }
}
