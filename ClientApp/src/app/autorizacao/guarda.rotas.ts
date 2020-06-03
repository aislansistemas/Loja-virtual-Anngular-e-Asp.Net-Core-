import { Injectable } from "@angular/core";
import { Route,CanActivate,ActivatedRouteSnapshot,RouterStateSnapshot, Router } from "@angular/router";
import { UsuarioService } from "../servicos/usuario/usuario.service";

@Injectable({
   providedIn:"root" 
})
export class GuardaRotas implements CanActivate{

    constructor(private router:Router,private usuarioService:UsuarioService){
        
    }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
       // this.usuarioService
       // var autenticado = sessionStorage.getItem("usuario-atenticado");
        if(this.usuarioService.usuario_autenticado()){
            return true;
        }
            this.router.navigate(['/entrar'],{queryParams:{returnUrl:state.url}});
            return false;
    }
   

}