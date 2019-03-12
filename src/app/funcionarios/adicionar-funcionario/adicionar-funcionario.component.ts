import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-adicionar-funcionario',
  templateUrl: './adicionar-funcionario.component.html',
  styleUrls: ['./adicionar-funcionario.component.css']
})
export class AdicionarFuncionarioComponent implements OnInit {
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
