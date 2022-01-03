import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman', 'Ironnam', 'Hulk', 'Thor']
  heroesBorrados: string[] = []; 
  borrarHeroe() {
    console.log("borrando ...")
    const heroesBorrados = this.heroes.shift(); 
    this.heroesBorrados.push(String(heroesBorrados)); 
    console.log("heroesBorrados", this.heroesBorrados)
  }
}
