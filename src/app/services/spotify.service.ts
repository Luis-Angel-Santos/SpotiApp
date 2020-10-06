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
    'Authorization': 'Bearer BQCJvnv8dQtqRUbewFzenyWh4OCwQvtT9_Da7NXT-GNA2FWTmSI5PhiWxlblgL3z9cyv7liUX4wBqfZMX3M'
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
