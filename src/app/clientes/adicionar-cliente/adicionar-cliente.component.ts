import { Component, OnInit, Inject } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-adicionar-cliente',
  templateUrl: './adicionar-cliente.component.html',
  styleUrls: ['./adicionar-cliente.component.css']
})
export class AdicionarClienteComponent implements OnInit {
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

  modalTitle: string;
  labelLogin: string;
  labelClose: string;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    this.modalTitle = data.title;
    this.labelLogin = data.labelLogin;
    this.labelClose = data.labelClose;
    console.log(data)
  }

  ngOnInit() {
  }

}
