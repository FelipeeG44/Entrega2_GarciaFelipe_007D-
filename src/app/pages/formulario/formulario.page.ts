import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.page.html',
  styleUrls: ['./formulario.page.scss'],
})
export class FormularioPage implements OnInit {

  usuario = {
    nombres:'',
    apellidos:'',
    email:'',
    password:'',
    telefono:'',
    pais:''
  }

  constructor() { }

  ngOnInit() {
  }
  
  onSubmit(){
    console.log('submit');
    console.log(this.usuario);
  }
    

}
