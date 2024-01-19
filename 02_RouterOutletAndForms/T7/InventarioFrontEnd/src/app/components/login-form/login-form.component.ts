import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup,FormControl, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss'
})
export class LoginFormComponent implements OnChanges{
  
  @Input() isSignUp!: boolean;

  formUser!:FormGroup;
  defaultFields = {
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required)
  }

  extraFields = {
    name: new FormControl(''),
    lastName: new FormControl('')
  }

  constructor(
    private fb: FormBuilder
  ){ }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    this.initForm();
  }

  initForm(){
    this.formUser = this.fb.group({
      // Agregar cada campo directamente al formulario en lugar de usar spread operator
      ...this.defaultFields,
      ...(this.isSignUp ? this.extraFields : {})
    });
  }


  onSubmit() {
    if(this.formUser.invalid){
      alert('Debe ingresar todos los inputs');
      return;
    }
    console.log('Form Submitted:', this.formUser.value);
  }

 

}
