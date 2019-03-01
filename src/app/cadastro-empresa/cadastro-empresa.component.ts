import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro-empresa',
  templateUrl: './cadastro-empresa.component.html',
  styleUrls: ['./cadastro-empresa.component.css']
})
export class CadastroEmpresaComponent implements OnInit {
  // botao de limpar
  nome = '';
  endereco = '';
  andar = '';
  cep = '';
  numero = '';
  uf = '';
  cidade = '';
  bairro = '';
  unidade = '';


  constructor() { }

  ngOnInit() {
  }

}
