import { Component } from '@angular/core';
import { AccountService } from '../../core/services/account.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss'
})
export class SignInComponent {

  constructor(
    private login: AccountService){

  }

  respForm(response: any){
    console.log('Respuesta desde Sign In', response);
    this.login.SignIn(response.value).subscribe(console.log);
  }

}
