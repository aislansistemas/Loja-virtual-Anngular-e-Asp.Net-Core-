import { Injectable, Inject } from '@angular/core';
import { Usuario } from 'src/app/modelo/usuario';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { b } from '@angular/core/src/render3';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private baseURL: string;
  private _usuario: Usuario;

  set usuario(usuario:Usuario){
    sessionStorage.setItem("usuario-atenticado",JSON.stringify(usuario));
    this._usuario=usuario;
  }
  
  get usuario():Usuario{
    let usuario_json=sessionStorage.getItem("usuario-atenticado");
    this._usuario=JSON.parse(usuario_json);
    return this._usuario;
  }

  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.baseURL = "https://localhost:44330/";
  }

  public usuario_autenticado():boolean{
    return this._usuario != null && this._usuario.email != "" && this._usuario.senha != "";
  }

  public cadastrarUsuario(usuario:Usuario):Observable<Usuario>{
    const headers = new HttpHeaders().set('content-type', 'application/json');

    var body = {
        email: usuario.email,
        senha: usuario.senha,
        nome:usuario.nome,
        sobreNome:usuario.sobreNome
    }
    return this.http.post<Usuario>(this.baseURL+"api/usuario",body,{headers});
  }

  public limpar_sessao(){
    sessionStorage.setItem("usuario-atenticado","");
    this._usuario=null;
  }
 
  
  public verificarUsuario(usuario: Usuario): Observable<Usuario> {

    const headers = new HttpHeaders().set('content-type', 'application/json');

    var body = {
        email: usuario.email,
        senha: usuario.senha
    }

    //this.baseURL = raiz do site que pode ser exemplo.: http://wwww.quickbuy.com/
    return this.http.post<Usuario>(this.baseURL + "api/usuario/verificarusuario", body, { headers });
  }



}