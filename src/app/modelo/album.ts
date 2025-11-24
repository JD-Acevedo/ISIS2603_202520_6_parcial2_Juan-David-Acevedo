import { Cancion } from "./cancion";

export class Album {
    id: number;
    spotifyId: string;
    name: string;
    year:string;
    image: string;
    loved: boolean;
    canciones: Cancion[];

    constructor(id: number, spotifyId: string, name: string, year:string, image: string, loved: boolean, canciones: Cancion[]) {
        this.id = id;
        this.spotifyId = spotifyId;
        this.name = name;
        this.year = year;
        this.image = image;
        this.loved = loved;
        this.canciones = canciones;
    }
}