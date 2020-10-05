import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { 
    console.log('Spotify Listo');
  }

getNewReleases(){
    const headers = new HttpHeaders({
      'Authorization' : 'Bearer BQBB4y8laT3hpLF1IqchqEjoYBJeBOpVpgANuw1fI4S3WnzPnhlnoaMA7XwELsK_E4Rxk0tJsZcb4cnnb1U'
    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases', {headers})
      .pipe(map(data => data['albums'].items));

  }


getArtista(termino: string){
  const headers = new HttpHeaders({
    'Authorization' : 'Bearer BQBB4y8laT3hpLF1IqchqEjoYBJeBOpVpgANuw1fI4S3WnzPnhlnoaMA7XwELsK_E4Rxk0tJsZcb4cnnb1U'
  });

  return this.http.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist&limit=15`, {headers})
    .pipe(map(data => data['artists'].items));
}
}
