import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { 
    console.log('Spotify Listo');
  }

getNewReleases(){
    const headers=new HttpHeaders({
      'Authorization': 'Bearer BQCDmWdcQx0tAyt1QSo6q8PpJeI8gndEil0oQcL1T2l9obdTcVNRzl-ZRXNxHZIu5-0HY7-pM6faErKB4oA'
    });
    
    return this.http.get('https://api.spotify.com/v1/browse/new-releases', {headers});
  
  }

  
getArtista(termino:string){
  const headers=new HttpHeaders({
    'Authorization': 'Bearer BQBTKHBAQzf0h4WTFeiDABt8-PRnTDkaQN37Ey_x_KfQrxkfQD95vCwN0imPfFOLbMQ3ASa7-7NbFCxIxEc'
  });
  
  return this.http.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist&limit=15`, {headers});

}
}
