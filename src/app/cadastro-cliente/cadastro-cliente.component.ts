import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-cadastro-cliente',
  templateUrl: './cadastro-cliente.component.html',
  styleUrls: ['./cadastro-cliente.component.css']
})
export class CadastroClienteComponent implements OnInit {
  // validacao de email
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  // botao de limpar
  nome = '';
  tel = '';
  email = '';
  login = '';
  senha = '';
  cpf = '';

  constructor() { }

  ngOnInit() {
  }

}
