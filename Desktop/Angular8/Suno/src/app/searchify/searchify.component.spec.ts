import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchifyComponent } from './searchify.component';

describe('SearchifyComponent', () => {
  let component: SearchifyComponent;
  let fixture: ComponentFixture<SearchifyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchifyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
