import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

export interface Login {
  name: string;

}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  loginControl = new FormControl('', [Validators.required]);
  selectFormControl = new FormControl('', Validators.required);
  login: Login[] = [
    {name: 'Funcionario'},
    {name: 'Cliente'},
  ];

  // botao de limpar
  usuario = '';
  senha = '';

  constructor() { }
  // username: string;
  // password: string;
  // showSpinner: boolean;

  ngOnInit() {}

  // fazerLogin(): void {
  //   if (this.username === 'admin' && this.password === 'admin') {
  //     // this.router.navigate(['telaprinciapl']);
  //   } else {
  //     this.snackBar.open(
  //       'Preencha os dados corretamente, dica: admin/admin',
  //       'Ok',
  //       { duration: 3000 }
  //     );
  //   }
  // }

}
