import { Album } from "./album";

export class Artista {
    id: number;
    spotifyId: string;
    name: string;
    image: string;
    albumes: Album[];

    constructor(id: number, spotifyId: string, name: string, image: string, albumes: Album[]) {
        this.id = id;
        this.spotifyId = spotifyId;
        this.name = name;
        this.image = image;
        this.albumes = albumes;
    }
}