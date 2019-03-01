import { CadastroEmpresaComponent } from './cadastro-empresa/cadastro-empresa.component';
import { MenuComponent } from './menu/menu.component';
import { CadastroFuncionarioComponent } from './cadastro-funcionario/cadastro-funcionario.component';
import { CadastroClienteComponent } from './cadastro-cliente/cadastro-cliente.component';
import { LoginComponent } from './login/login.component';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'cadastroCliente', component: CadastroClienteComponent},
  {path: 'cadastroFuncionario', component: CadastroFuncionarioComponent},
  {path: 'menu', component: MenuComponent},
  {path: 'cadastroEmpresa', component: CadastroEmpresaComponent},
  {path: 'login', component: LoginComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
