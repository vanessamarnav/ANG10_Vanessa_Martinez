import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss'
})
export class LoginFormComponent {
  
  @Input() isSignUp: boolean = true;

  formUser!:FormGroup;

  constructor(
    private fb: FormBuilder
  ){
    this.initForm();
  }

  initForm(){
    this.formUser = this.fb.group({
    name:[''],
    lastName:[''],
    email: ['', Validators.required],
    password: ['']
    })
  }


  onSubmit() {
    if(this.formUser.invalid){
      alert('Debe ingresar todos los inputs');
      return;
    }
    console.log('Form Submitted:', this.formUser.value);
  }

 

}
