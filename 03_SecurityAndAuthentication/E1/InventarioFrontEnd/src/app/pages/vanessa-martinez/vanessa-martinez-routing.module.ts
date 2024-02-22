import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VanessaMartinezComponent } from './vanessa-martinez.component';
import Swal from 'sweetalert2';

const routes: Routes = [{ path: '', component: VanessaMartinezComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VanessaMartinezRoutingModule { }
