import { Component } from '@angular/core';

interface Componente{
  icon: string;
  name: string;
  redirecTo:string;

}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  componentes : Componente[] =[
    {
      icon: 'home-outline', 
      name: 'Inicio', 
      redirecTo: '/inicio'
    },
    {
      icon: 'person-circle-outline',
      name: 'Registrarse', 
      redirecTo: '/formulario'
    },
    {
      icon: 'grid-outline', 
      name: 'Lista', 
      redirecTo: '/lista'
    }
  ]

  constructor() {}

}
