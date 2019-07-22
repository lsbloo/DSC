import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMatriculaAppComponent } from './list-matricula-app.component';

describe('ListMatriculaAppComponent', () => {
  let component: ListMatriculaAppComponent;
  let fixture: ComponentFixture<ListMatriculaAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListMatriculaAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListMatriculaAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
