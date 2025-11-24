import { Component, EventEmitter, Output } from '@angular/core';
import { Album } from '../modelo/album';
import { Artista } from '../modelo/artista';

@Component({
  selector: 'app-albumes',
  templateUrl: './albumes.component.html',
  styleUrl: './albumes.component.css'
})
export class AlbumesComponent {

  @Output() seleccionarAlbum=new EventEmitter<Album>();
  albumes: Album[] = [];
  artista: Artista | null = null;

  constructor() { }

  setAlbumes(albumes: Album[]): void {
    this.albumes = albumes;
  }
  setArtista(artista: Artista): void {
    this.artista = artista;
  }
  openTracks(album: Album): void {
    this.seleccionarAlbum.emit(album);
  }

}
