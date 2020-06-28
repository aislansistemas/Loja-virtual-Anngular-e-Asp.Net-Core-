import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../servicos/usuario/usuario.service';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent {
  isExpanded = false;
  emailUsuario:string;

  constructor(private router:Router,private usuarioService:UsuarioService){

  }
  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }

  public usuarioLogado():boolean{
  /*  var usuariologado = sessionStorage.getItem("usuario-atenticado");
    this.emailUsuario=sessionStorage.getItem("email-usuario");
    console.log(this.emailUsuario);
    if(usuariologado == "1"){
      return true;
    }
    return false;*/
    return this.usuarioService.usuario_autenticado();
  }

  sair():void{
    this.usuarioService.limpar_sessao();
    //sessionStorage.setItem('usuario-atenticado',"");
    this.router.navigate(['/']);
  }

  get usuario(){
    return this.usuarioService.usuario;
  }
}
