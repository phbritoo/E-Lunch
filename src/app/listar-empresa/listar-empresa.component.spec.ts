import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarEmpresaComponent } from './listar-empresa.component';

describe('ListarEmpresaComponent', () => {
  let component: ListarEmpresaComponent;
  let fixture: ComponentFixture<ListarEmpresaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarEmpresaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarEmpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
