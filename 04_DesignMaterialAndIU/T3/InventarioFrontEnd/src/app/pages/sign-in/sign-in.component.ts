import { Component } from '@angular/core';
import { AccountService } from '../../core/services/account.service';
import { signIn } from '../../core/interfaces/user';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment.development';
import Swal from 'sweetalert2';
import { SwalAlertService } from '../../core/services/swal-alert.service';
import { CookieService } from 'ngx-cookie';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss'
})
export class SignInComponent {

  constructor(
    private login: AccountService,
    private router: Router,
    private alertS: SwalAlertService,
    private cookie: CookieService)
    {}

  respForm(request: signIn){
    this.login.SignIn(request).subscribe((response: any) => {
      if (response.hasError) {
       this.alertS.errorAlert('Usuario o contraseña incorresto, favor de validar las credenciales','Error');
      }
      if (response.message==='Authorized') {
        const session={
          ...response.model, hasSession: true
        };
        let objTemp= btoa(JSON.stringify(session));
        this.cookie.put('session',objTemp);
        this.router.navigate(['/home']);
      }
    
    }, (error: any) => console.log(error));
  }

}
