import { Component } from '@angular/core';
import { AccountService } from '../../core/services/account.service';
import { signIn } from '../../core/interfaces/user';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment.development';
import Swal from 'sweetalert2';
import { SwalAlertService } from '../../core/services/swal-alert.service';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss'
})
export class SignInComponent {

  constructor(
    private login: AccountService,
    private router: Router,
    private alertS: SwalAlertService)
    {}

  respForm(request: signIn){
    this.login.SignIn(request).subscribe((response: any) => {
      if (response.hasError) {
       this.alertS.errorAlert('Usuario o contraseña incorresto, favor de validar las credenciales','Error');
      }
      if (response.message==='Authorized') {
        environment.hasSession = true;
        this.router.navigate(['/home']);
      }
    
    }, (error: any) => console.log(error));
  }

}
