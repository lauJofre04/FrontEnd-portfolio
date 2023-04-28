import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEditarProyComponent } from './modal-editar-proy.component';

describe('ModalEditarProyComponent', () => {
  let component: ModalEditarProyComponent;
  let fixture: ComponentFixture<ModalEditarProyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalEditarProyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalEditarProyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
