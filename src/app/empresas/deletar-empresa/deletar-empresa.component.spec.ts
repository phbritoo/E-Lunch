import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletarEmpresaComponent } from './deletar-empresa.component';

describe('DeletarEmpresaComponent', () => {
  let component: DeletarEmpresaComponent;
  let fixture: ComponentFixture<DeletarEmpresaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeletarEmpresaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletarEmpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
