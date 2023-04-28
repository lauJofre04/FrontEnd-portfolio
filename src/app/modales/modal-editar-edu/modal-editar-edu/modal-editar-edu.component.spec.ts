import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEditarEduComponent } from './modal-editar-edu.component';

describe('ModalEditarEduComponent', () => {
  let component: ModalEditarEduComponent;
  let fixture: ComponentFixture<ModalEditarEduComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalEditarEduComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalEditarEduComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
