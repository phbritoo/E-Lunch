import { AdicionarClienteComponent } from './clientes/adicionar-cliente/adicionar-cliente.component';
import { AdicionarFuncionarioComponent } from './funcionarios/adicionar-funcionario/adicionar-funcionario.component';
import { FuncionariosComponent } from './funcionarios/funcionarios.component';
import { EmpresasComponent } from './empresas/empresas.component';
import { AdicionarEmpresaComponent } from './empresas/adicionar-empresa/adicionar-empresa.component';
import { LoginComponent } from './login/login.component';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientesComponent } from './clientes/clientes.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'cadastroCliente', component: AdicionarClienteComponent},
  {path: 'cadastroFuncionario', component: AdicionarFuncionarioComponent},
  {path: 'cadastroEmpresa', component: AdicionarEmpresaComponent},
  {path: 'listarFuncionarios', component: FuncionariosComponent},
  {path: 'listarEmpresas', component: EmpresasComponent},
  {path: 'listarClientes', component: ClientesComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
