import { Component } from '@angular/core';
import { AccountService } from '../../core/services/account.service';
import { signIn, signInResponse } from '../../core/interfaces/user';
import { response } from 'express';
import { Router } from '@angular/router';

import { environment } from '../../../environments/environment.development';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss'
})
export class SignInComponent {

  constructor(
    private login: AccountService,
    private router: Router)
    {}

  respForm(request: signIn){
    this.login.SignIn(request).subscribe((response: signInResponse)=>{
      if (response.title==='Authorized') {
        environment.hasSession = true;
        this.router.navigate(['/home']);
      }
    })
  }

}
