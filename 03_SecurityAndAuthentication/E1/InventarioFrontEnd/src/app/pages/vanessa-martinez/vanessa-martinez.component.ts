import { Component } from '@angular/core';
import Swal from 'sweetalert2';

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

  constructor() { }

  contratar() {
    Swal.fire({
      title: '¡Gracias!',
      text: 'Pronto la ingeniera se contactará contigo',
      icon: 'success'
    });
  }

  reportar() {
    Swal.fire({
      title: '¡Vaya!',
      text: 'No esperábamos que reportaras a la ingeniera Vane. Se pondrá en contacto contigo',
      icon: 'error'
    });
  }
}
