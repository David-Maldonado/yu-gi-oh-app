import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CardService {
  API_URL = "https://db.ygoprodeck.com/api/v7/cardinfo.php";
  constructor(
    private http : HttpClient
  ) { }

  obtenerCarta(id:string){
    const params = {id}
    return this.http.get(this.API_URL, {params})
    .pipe(map((res:any) => res.data[0]));
  }

  obtenerCartas(name:string | null, offset: number = 0){
    //!params para paginar de a 100
    const params:any = {
      num: 100,
      offset: offset
      
    }
    if(name) params.fname = name;
    //?map para filtrar solo la data y no las demas propiedades que no nos importan
    return this.http.get<any[]>(this.API_URL, {params}).pipe(
      map( (res:any) => res.data)
    )
  }
}
