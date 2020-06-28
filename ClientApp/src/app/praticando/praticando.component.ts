import { Component,OnInit } from "@angular/core"
import { PraticandoServiceService } from "./praticando.service.service";
import { Usuario } from "../modelo/usuario";

@Component({
    selector: 'app-praticando',
    templateUrl: './praticando.component.html'
})
export class PraticandoComponent implements OnInit{

    //cursos:string[];
    public usuario:Usuario;

    constructor(private praticandoService:PraticandoServiceService){
    }
    ngOnInit(): void {
        
    }

    cadastrar(){
        this.praticandoService.cadastrar(this.usuario).subscribe(
            dados=>{
                console.log('ok');
            },
            e=>{
                console.log('error');
            }
        )
    }

}