import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { VanessaMartinezRoutingModule } from './vanessa-martinez-routing.module';
import { VanessaMartinezComponent } from './vanessa-martinez.component';
import { ContactFormComponent } from '../../vanessa-martinez/contact-form/contact-form.component';


@NgModule({
  declarations: [
    ContactFormComponent,
    VanessaMartinezComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    VanessaMartinezRoutingModule
  ]
})
export class VanessaMartinezModule { }
