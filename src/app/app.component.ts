import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend_examen2';


  onArtistaSeleccionado(artista: any): void {
    console.log('Artista seleccionado:', artista);
  }


}
