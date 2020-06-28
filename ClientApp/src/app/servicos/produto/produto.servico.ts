import { Injectable, Inject, OnInit } from "@angular/core";
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produto } from "../../modelo/produto";

@Injectable({
    providedIn:"root",
})
export class ProdutoServico implements OnInit{
    
    private _baseUrl:string;
    public produtos:Produto[];

    constructor(private http:HttpClient,@Inject('BASE_URL') baseUrl: string){
        this._baseUrl= baseUrl;
    }
    ngOnInit(): void {
        this.produtos=[];
    }

    public cadastrar(produto:Produto):Observable<Produto>{
        const headers= new HttpHeaders().set('content-type', 'application/json');
      /*var body = {
            nome:produto.nome,
            descricao:produto.descricao,
            preco: produto.preco,
            nomeArquivo: produto.nomeArquivo
      }*/
      return this.http.post<Produto>(this._baseUrl + "api/produtos", JSON.stringify(produto), { headers });
    }

    public salvar(produto:Produto):Observable<Produto>{
        const headers= new HttpHeaders().set('content-type','application/json');
        
        return this.http.post<Produto>(this._baseUrl+"api/produto",JSON.stringify(produto),{headers});
    }

    public deletar(produto:Produto):Observable<Produto[]>{
        const headers= new HttpHeaders().set('content-type','application/json');

      return this.http.post<Produto[]>(this._baseUrl + "api/produtos/deletar", JSON.stringify(produto), { headers });
    }

    public obterTodosProdutos():Observable<Produto[]>{  
        return this.http.get<Produto[]>(this._baseUrl+"api/produtos");
    }

    public obterProduto(produtoId:number):Observable<Produto>{
        
        return this.http.get<Produto>(this._baseUrl+"api/produto");
    }

    public enviarArquivo(arquivoSelecionado: File): Observable<string> {
        const formData: FormData = new FormData();
        formData.append("arquivoEnviado", arquivoSelecionado, arquivoSelecionado.name);
        return this.http.post<string>(this._baseUrl + "api/produtos/enviararquivo", formData);
    }

}
