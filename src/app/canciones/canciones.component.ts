import { Component, Input, input } from '@angular/core';
import { Album } from '../modelo/album';
import { Cancion } from '../modelo/cancion';

@Component({
  selector: 'app-canciones',
  templateUrl: './canciones.component.html',
  styleUrl: './canciones.component.css'
})
export class CancionesComponent {

  @Input() album:Album | null = null;

  getcanciones(): Cancion[] {
    return this.album?.canciones || [];
  }
}


