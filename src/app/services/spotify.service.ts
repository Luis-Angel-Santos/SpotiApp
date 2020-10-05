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
      'Authorization': 'Bearer BQBTKHBAQzf0h4WTFeiDABt8-PRnTDkaQN37Ey_x_KfQrxkfQD95vCwN0imPfFOLbMQ3ASa7-7NbFCxIxEc'
    });
    
    return this.http.get('https://api.spotify.com/v1/browse/new-releases', {headers});
  
  }
}
