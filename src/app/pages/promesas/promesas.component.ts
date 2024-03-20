import { Component, OnInit, resolveForwardRef } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: ``
})
export class PromesasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
    this.getUsuarios().then( usuarios => {
      console.log(usuarios);
    } );

    const promesa = new Promise( (resolve, reject) => {

      if (false) {
        resolve('Promesa creada');

      } else {
       reject('Algo salio mal');
      }

    });

    promesa.then( (m) => {
      console.log(m);
    })
    .catch( error => console.warn(error));

    console.log('Fin del init');
    
  }

  getUsuarios(){    
    return new Promise( (resolve) => {
      fetch('https://reqres.in/api/users')
        .then( resp => resp.json() )
        .then( body => resolve(body.data));
    });
  }


}
