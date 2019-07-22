import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAlunosAppComponent } from './list-alunos-app.component';

describe('ListAlunosAppComponent', () => {
  let component: ListAlunosAppComponent;
  let fixture: ComponentFixture<ListAlunosAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListAlunosAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAlunosAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
