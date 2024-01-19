import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginFormComponent } from './login-form.component';
import { MaterialModule } from '../../../material.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    LoginFormComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule
  ],
  exports: [LoginFormComponent]
})
export class LoginFormModule { }
