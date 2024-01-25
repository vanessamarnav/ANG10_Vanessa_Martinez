import { Component } from '@angular/core';
import { AccountService } from '../../core/services/account.service';
import { signIn } from '../../core/interfaces/user';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss'
})
export class SignInComponent {

  constructor(
    private login: AccountService){

  }

  respForm(response: signIn){
    console.log('Respuesta desde Sign In', response);
    this.login.SignIn(response).subscribe(console.log);
  }

}
