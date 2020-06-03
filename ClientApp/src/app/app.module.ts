import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { ProdutoComponent } from './produto/produto.component'
import { LoginComponent } from './ususario/login/login.component';
import { GuardaRotas } from './autorizacao/guarda.rotas';
import { UsuarioService } from './servicos/usuario/usuario.service';
import { CadastroUsuarioComponent } from './ususario/cadastro/cadastro.usuario.component';
import { ProdutoServico } from './servicos/produto/produto.service';
 
@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    ProdutoComponent,
    LoginComponent,
    CadastroUsuarioComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'produto', component: ProdutoComponent},
      { path: 'entrar', component: LoginComponent },
      { path: 'novo-usuario', component:CadastroUsuarioComponent}
    ])
  ],
  providers: [UsuarioService,ProdutoServico],
  bootstrap: [AppComponent]
})
export class AppModule { }

//{ path: 'produto', component: ProdutoComponent,canActivate:[GuardaRotas] },