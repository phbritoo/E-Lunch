import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule, routing } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { MaterialModule } from './material/material.module';
import { BarraLateralComponent } from './menu/barra-lateral/barra-lateral.component';
import { EmpresasComponent } from './empresas/empresas.component';
import { AdicionarEmpresaComponent } from './empresas/adicionar-empresa/adicionar-empresa.component';
import { EditarEmpresaComponent } from './empresas/editar-empresa/editar-empresa.component';
import { DeletarEmpresaComponent } from './empresas/deletar-empresa/deletar-empresa.component';
import { FuncionariosComponent } from './funcionarios/funcionarios.component';
import { AdicionarFuncionarioComponent } from './funcionarios/adicionar-funcionario/adicionar-funcionario.component';
import { EditarFuncionarioComponent } from './funcionarios/editar-funcionario/editar-funcionario.component';
import { DeletarFuncionarioComponent } from './funcionarios/deletar-funcionario/deletar-funcionario.component';
import { ClientesComponent } from './clientes/clientes.component';
import { AdicionarClienteComponent } from './clientes/adicionar-cliente/adicionar-cliente.component';
import { EditarClienteComponent } from './clientes/editar-cliente/editar-cliente.component';
import { DeletarClienteComponent } from './clientes/deletar-cliente/deletar-cliente.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BarraLateralComponent,
    MenuComponent,
    EmpresasComponent,
    AdicionarEmpresaComponent,
    EditarEmpresaComponent,
    DeletarEmpresaComponent,
    FuncionariosComponent,
    AdicionarFuncionarioComponent,
    EditarFuncionarioComponent,
    DeletarFuncionarioComponent,
    ClientesComponent,
    AdicionarClienteComponent,
    EditarClienteComponent,
    DeletarClienteComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    routing,
    LayoutModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
