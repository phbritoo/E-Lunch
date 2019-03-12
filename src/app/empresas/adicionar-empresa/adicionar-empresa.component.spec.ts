import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdicionarEmpresaComponent } from './adicionar-empresa.component';

describe('AdicionarEmpresaComponent', () => {
  let component: AdicionarEmpresaComponent;
  let fixture: ComponentFixture<AdicionarEmpresaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdicionarEmpresaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdicionarEmpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
