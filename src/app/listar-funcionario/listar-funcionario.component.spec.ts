import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarFuncionarioComponent } from './listar-funcionario.component';

describe('ListarFuncionarioComponent', () => {
  let component: ListarFuncionarioComponent;
  let fixture: ComponentFixture<ListarFuncionarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarFuncionarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarFuncionarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
