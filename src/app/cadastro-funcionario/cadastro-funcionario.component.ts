import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-cadastro-funcionario',
  templateUrl: './cadastro-funcionario.component.html',
  styleUrls: ['./cadastro-funcionario.component.css']
})
export class CadastroFuncionarioComponent implements OnInit {
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
