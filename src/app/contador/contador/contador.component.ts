import { Component } from '@angular/core';

@Component({
    selector: 'app-contador',
    template: `
        <h1> {{ title }} </h1>
        <h2> {{ duenio }} </h2>
        <h3>La base es: <strong> {{ base }} </strong> </h3>
        <button (click)=" acumular( base ) "> + {{ base }} </button>

        <span> {{ numero }} </span>

        <button (click)=" acumular( -base ) "> - {{ base }} </button>
    `
})

export class ContadorComponent{
    public title: string = 'Contador App';
    public duenio: string = 'David';
    public numero: number = 10;
    public base: number =5;
  
    sumar(){ //creación del metodo
      this.numero += 1;
    }
  
    restar(){ //creación del metodo
      this.numero -= 1;
    }
  
    acumular ( valor:number ){
      this.numero += valor;
    }
}