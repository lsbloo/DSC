import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTurmaAppComponent } from './list-turma-app.component';

describe('ListTurmaAppComponent', () => {
  let component: ListTurmaAppComponent;
  let fixture: ComponentFixture<ListTurmaAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListTurmaAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTurmaAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
