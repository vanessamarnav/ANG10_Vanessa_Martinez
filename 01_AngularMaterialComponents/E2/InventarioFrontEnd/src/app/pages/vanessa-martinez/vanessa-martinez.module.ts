import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VanessaMartinezRoutingModule } from './vanessa-martinez-routing.module';
import { VanessaMartinezComponent } from './vanessa-martinez.component';


@NgModule({
  declarations: [
    VanessaMartinezComponent
  ],
  imports: [
    CommonModule,
    VanessaMartinezRoutingModule
  ]
})
export class VanessaMartinezModule { }
