import { Injectable } from '@angular/core';
import { Http } from '@angular/http'
import 'rxjs/add/operator/map'
// import { map } from 'rxjs/operators';

@Injectable()
export class ProductService {

  private _albumUrl = '../assets/album.json'
  constructor(private _http: Http) { }

  getAlbum(id: number){
    return this._http.get(this._albumUrl).map(response => response.json())
    // .pipe(map(x => x))
  }
}
