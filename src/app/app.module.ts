import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule, routing } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSelectModule} from '@angular/material/select';
import { CadastroClienteComponent } from './cadastro-cliente/cadastro-cliente.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CadastroEmpresaComponent } from './cadastro-empresa/cadastro-empresa.component';
import { CadastroFuncionarioComponent } from './cadastro-funcionario/cadastro-funcionario.component';
import {MatMenuModule} from '@angular/material';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatTabsModule} from '@angular/material/tabs';
import {MatRadioModule} from '@angular/material/radio';
import { LayoutModule } from '@angular/cdk/layout';
import { MatListModule } from '@angular/material';
import { ListarFuncionarioComponent } from './listar-funcionario/listar-funcionario.component';
import { ListarEmpresaComponent } from './listar-empresa/listar-empresa.component';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { HeaderComponent } from './header/header.component';
import { BarraLateralComponent } from './header/barra-lateral/barra-lateral.component';
import { ListarClientesComponent } from './listar-clientes/listar-clientes.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CadastroClienteComponent,
    CadastroEmpresaComponent,
    CadastroFuncionarioComponent,
    ListarFuncionarioComponent,
    ListarEmpresaComponent,
    HeaderComponent,
    BarraLateralComponent,
    ListarClientesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatMenuModule,
    routing,
    MatSidenavModule,
    MatTabsModule,
    MatRadioModule,
    LayoutModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
