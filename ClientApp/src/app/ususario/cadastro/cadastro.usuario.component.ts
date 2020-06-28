import {Component, OnInit} from "@angular/core";
import { Usuario } from "src/app/modelo/usuario";
import { UsuarioService } from "src/app/servicos/usuario/usuario.service";
@Component({
    selector:"cadastro-usuario",
    templateUrl:"./cadastro.usuario.component.html",
    styleUrls:["./cadastro.usuario.component.css"]
})
export class CadastroUsuarioComponent implements OnInit{
    
    public usuario:Usuario;
    public ativar_spiner:boolean;
    public mensagem:string;
    public usuarioCadastrado:boolean;

    constructor(private usuarioServico:UsuarioService){

    }
    ngOnInit(): void {
        this.usuario= new Usuario();
    }

    public cadastrar(){
        this.usuarioServico.cadastrarUsuario(this.usuario)
        .subscribe(
            usurioSubscribe=>{
                this.usuarioCadastrado=true;
                this.mensagem="";
            },
            e=>{
                this.mensagem=e.error;
            }
        );
    }
}