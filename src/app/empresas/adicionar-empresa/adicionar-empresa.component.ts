import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adicionar-empresa',
  templateUrl: './adicionar-empresa.component.html',
  styleUrls: ['./adicionar-empresa.component.css']
})
export class AdicionarEmpresaComponent implements OnInit {

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
