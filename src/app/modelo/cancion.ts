export class Cancion {

    id: number;
    spotifyId: string;
    name: string;
    minutes: number;
    seconds: number;
    loved: boolean;

    constructor(id: number, spotifyId: string, name: string, minutes: number, seconds: number, loved: boolean) {
        this.id = id;
        this.spotifyId = spotifyId;
        this.name = name;
        this.minutes = minutes;
        this.seconds = seconds;
        this.loved = loved;
    }
}
