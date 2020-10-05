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

getQuery(query: string){
  const url = `https://api.spotify.com/v1/${query}`;
  const headers = new HttpHeaders({
    'Authorization': 'Bearer BQBB4y8laT3hpLF1IqchqEjoYBJeBOpVpgANuw1fI4S3WnzPnhlnoaMA7XwELsK_E4Rxk0tJsZcb4cnnb1U'
  });
  return this.http.get(url, {headers});

}


getNewReleases(){

    return this.getQuery('browse/new-releases')
          .pipe(map(data => data['albums'].items));

  }

getArtista(termino: string){

    return this.getQuery(`search?q=${termino}&type=artist&limit=15`)
          .pipe(map(data => data['artists'].items));
  
}
}
