import { Component, OnInit } from "@angular/core";
import { Usuario } from "../../modelo/usuario";
import { Router, ActivatedRoute } from "@angular/router";
import { UsuarioService } from "../../servicos/usuario/usuario.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls:["./login.component.css"]
})
export class LoginComponent implements OnInit {
  public usuario;
  public usuarioAtenticado: boolean;
  public usuarios=["usuario1","usuario2","usuario3"];
  public returnUrl:string;
  public mensagem:string;

  constructor(private router:Router,private activatedRouter:ActivatedRoute,private usuarioService:UsuarioService) {
    
  }
  ngOnInit(): void {
    this.usuario = new Usuario();
    this.returnUrl=this.activatedRouter.snapshot.queryParams['returnUrl'];
  }
  entrar(): void{

    this.usuarioService.verificarUsuario(this.usuario)
    .subscribe(
      usuario_json=>{
        this.usuarioService.usuario=usuario_json;
        //var usuarioRetorno:Usuario;
        //usuarioRetorno=data;
        //console.log(data);
       // sessionStorage.setItem("usuario-atenticado","1");
       // sessionStorage.setItem("email-usuario",usuarioRetorno.email);
        
        alert(this.returnUrl);
        if(this.returnUrl == null){
          this.router.navigate(["/"]);
        }else{
        this.router.navigate([this.returnUrl]);
        }
      },
      err=>{
        console.log(err.error);
        this.mensagem=err.error;
      }
    );
    ///if (this.usuario.email == "aislan" && this.usuario.senha == "1234") {
   ///   sessionStorage.setItem("usuario-atenticado","1");
    //  this.router.navigate([this.returnUrl]);
    //}
  }
}
