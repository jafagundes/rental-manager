import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CadastroPessoaComponent } from './cadastro-pessoa/cadastro-pessoa.component';
import { CadastroImovelComponent } from './cadastro-imovel/cadastro-imovel.component';
import { CadastroContratoComponent } from './cadastro-contrato/cadastro-contrato.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'cadastroPessoa', component: CadastroPessoaComponent},
  {path: 'cadastroImovel', component: CadastroImovelComponent},
  {path: 'cadastroContrato', component: CadastroContratoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
