import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEditarSkillComponent } from './modal-editar-skill.component';

describe('ModalEditarSkillComponent', () => {
  let component: ModalEditarSkillComponent;
  let fixture: ComponentFixture<ModalEditarSkillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalEditarSkillComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalEditarSkillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
