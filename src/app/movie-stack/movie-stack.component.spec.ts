import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieStackComponent } from './movie-stack.component';

describe('MovieStackComponent', () => {
  let component: MovieStackComponent;
  let fixture: ComponentFixture<MovieStackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieStackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieStackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
