import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletarClienteComponent } from './deletar-cliente.component';

describe('DeletarClienteComponent', () => {
  let component: DeletarClienteComponent;
  let fixture: ComponentFixture<DeletarClienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeletarClienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletarClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
