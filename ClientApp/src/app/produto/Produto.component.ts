import { Component, OnInit } from "@angular/core"
import { ProdutoServico } from "../servicos/produto/produto.service";
import { Produto } from "../modelo/produto";

@Component({
  selector: "app-produto",
  templateUrl:"./produto.component.html",
  styleUrls:["./produto.component.css"]
})
export class ProdutoComponent implements OnInit {
  public nome: string;
  public liberadoParaVenda: boolean;
  public produto:Produto;

  constructor(private produtoServico:ProdutoServico){

  }
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }

  public obterNome(): string {
    return "aislan peixoto";
  }

  public cadastrar():void{
    //this.produto
    this.produtoServico.cadastrar(this.produto)
    .subscribe(
      produtoJson=>{
        console.log(produtoJson);
      },
      e=>{
        console.log(e.error);
      }
    );
  }
}
