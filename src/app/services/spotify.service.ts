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
    'Authorization': 'Bearer BQBddaBhlJ8yXfSxNWM8m45ASBmWQXzPBl4feD1f56U9CAOo5m5rSHPLeMokHQtGdBzFNaYZrExW5dK5SYk'
  });
  return this.http.get(url, {headers});

}

getNewReleases(){

    return this.getQuery('browse/new-releases')
          .pipe(map(data => data['albums'].items));

  }

getArtistas(termino: string){

    return this.getQuery(`search?q=${termino}&type=artist&limit=15`)
          .pipe(map(data => data['artists'].items));
  
}

getArtista(id: string){

  return this.getQuery(`artists/${ id }`);
      //  .pipe(map(data => data['artists'].items));

}
}
