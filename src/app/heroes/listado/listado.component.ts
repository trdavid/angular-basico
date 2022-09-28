import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent{
  title : String = "Listado de Héroes";
  heroes: string[] = ['Spiderman','Iroman','Hulk','Thor'];
  heroeBorrado: string = '';
  estado: boolean = false;

  borrarHeroe():void{
    
    this.heroeBorrado = this.heroes.shift() || '';
  
    console.log("estoy eliminando... " + this.heroeBorrado);

    console.log("Aqui entre");
  }
}
