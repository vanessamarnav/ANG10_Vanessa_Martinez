import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss'
})
export class LoginFormComponent {
  @Input() isSignUp: boolean = true;

  constructor(){}
  onSubmitForm(form: NgForm): void {
    console.log('Valores del formulario:', form.value);
    console.log('Objeto NgForm:', form);
  }

 

}
