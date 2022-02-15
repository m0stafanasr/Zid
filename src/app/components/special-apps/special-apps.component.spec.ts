import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialAppsComponent } from './special-apps.component';

describe('SpecialAppsComponent', () => {
  let component: SpecialAppsComponent;
  let fixture: ComponentFixture<SpecialAppsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecialAppsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialAppsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
