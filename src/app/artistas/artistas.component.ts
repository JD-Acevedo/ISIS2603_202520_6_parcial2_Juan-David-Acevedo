import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Artista } from '../modelo/artista';
import { ArtistaService } from './artista.service';

@Component({
  selector: 'app-artistas',
  templateUrl: './artistas.component.html',
  styleUrl: './artistas.component.css'
})
export class ArtistasComponent implements OnInit {
  artistas:Artista[] = [];
  @Output() selecionnarArtista = new EventEmitter<Artista>();

  constructor(private artistaService: ArtistaService) {
    this.artistaService.getArtistas().subscribe(data => {
      this.artistas = data;
    });
  }

  ngOnInit(): void {
    this.artistaService.getArtistas().subscribe(data => {
      this.artistas = data;
    });
  }

  seleccionarArtista(artista: Artista): void {
    this.selecionnarArtista.emit(artista);
  }
}