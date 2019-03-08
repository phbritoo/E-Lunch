import { ListarClientesComponent } from './listar-clientes/listar-clientes.component';
import { ListarFuncionarioComponent } from './listar-funcionario/listar-funcionario.component';
import { CadastroEmpresaComponent } from './cadastro-empresa/cadastro-empresa.component';
import { CadastroFuncionarioComponent } from './cadastro-funcionario/cadastro-funcionario.component';
import { CadastroClienteComponent } from './cadastro-cliente/cadastro-cliente.component';
import { LoginComponent } from './login/login.component';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarEmpresaComponent } from './listar-empresa/listar-empresa.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'cadastroCliente', component: CadastroClienteComponent},
  {path: 'cadastroFuncionario', component: CadastroFuncionarioComponent},
  {path: 'cadastroEmpresa', component: CadastroEmpresaComponent},
  {path: 'listarFuncionarios', component: ListarFuncionarioComponent},
  {path: 'listarEmpresas', component: ListarEmpresaComponent},
  {path: 'listarClientes', component: ListarClientesComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
