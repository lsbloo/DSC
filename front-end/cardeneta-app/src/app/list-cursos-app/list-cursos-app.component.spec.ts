import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCursosAppComponent } from './list-cursos-app.component';

describe('ListCursosAppComponent', () => {
  let component: ListCursosAppComponent;
  let fixture: ComponentFixture<ListCursosAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListCursosAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCursosAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
