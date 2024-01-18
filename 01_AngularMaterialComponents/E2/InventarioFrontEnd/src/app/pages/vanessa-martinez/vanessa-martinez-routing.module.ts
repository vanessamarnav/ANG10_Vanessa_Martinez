import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VanessaMartinezComponent } from './vanessa-martinez.component';

const routes: Routes = [{ path: '', component: VanessaMartinezComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VanessaMartinezRoutingModule { }
