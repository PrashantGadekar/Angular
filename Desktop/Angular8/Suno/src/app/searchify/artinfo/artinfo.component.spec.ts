import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtinfoComponent } from './artinfo.component';

describe('ArtinfoComponent', () => {
  let component: ArtinfoComponent;
  let fixture: ComponentFixture<ArtinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
