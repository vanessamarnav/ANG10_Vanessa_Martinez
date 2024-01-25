import { Component } from '@angular/core';
import { AccountService } from '../../core/services/account.service';
import { Router } from '@angular/router'; 


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'] 
})
export class SignUpComponent {

  constructor(
    private login: AccountService,
    private router: Router
  ) { }

  respForm(response: any) {
    let request = { ...response.value, status: true };
    this.login.SignUp(request).subscribe(() => this.router.navigate(['/sign-in']));
  }
}
