import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Usuario } from '../modelo/usuario';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class PraticandoServiceService {

  public baseUrl:string;
  public usuario:Usuario;
  constructor(private http:HttpClient,@Inject('BASE_URL') base_url:string ) {
    this.baseUrl=base_url;
  }

  public cadastrar(usuario:Usuario):Observable<Usuario>{
    const headers = new HttpHeaders().set('content-type', 'application/json');
    var body = {
      email: usuario.email,
      senha: usuario.senha,
      nome:usuario.nome
    }
    //this.baseURL = raiz do site que pode ser exemplo.: http://wwww.quickbuy.com/
    return this.http.post<Usuario>(`${this.baseUrl}api/usuario`, body, { headers });
  }

}
