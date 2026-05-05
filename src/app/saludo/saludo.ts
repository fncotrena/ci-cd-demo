import { Component } from '@angular/core';

@Component({
  selector: 'app-saludo',
  template: `<h1>{{ mensaje }}</h1>`
})
export class SaludoComponent {
  mensaje = 'Hola CI/CD';

  cambiarMensaje(nuevo: string) {
    this.mensaje = nuevo;
  }
}