import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroFuncionarioComponent } from './cadastro-funcionario.component';

describe('CadastroFuncionarioComponent', () => {
  let component: CadastroFuncionarioComponent;
  let fixture: ComponentFixture<CadastroFuncionarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroFuncionarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroFuncionarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
