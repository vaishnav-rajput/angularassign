import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrevPageComponent } from './prev-page.component';

describe('PrevPageComponent', () => {
  let component: PrevPageComponent;
  let fixture: ComponentFixture<PrevPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrevPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrevPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
