import { Component } from '@angular/core';

@Component({
  selector: 'app-vanessa-martinez',
  templateUrl: './vanessa-martinez.component.html',
  styleUrl: './vanessa-martinez.component.scss'
})
export class VanessaMartinezComponent {
  mostrarInfo = false;

  mostrarInformacion() {
    this.mostrarInfo = true;
  }
}
