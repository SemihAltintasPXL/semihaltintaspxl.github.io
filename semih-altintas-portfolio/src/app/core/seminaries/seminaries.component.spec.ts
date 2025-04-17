import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeminariesComponent } from './seminaries.component';

describe('SeminariesComponent', () => {
  let component: SeminariesComponent;
  let fixture: ComponentFixture<SeminariesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeminariesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeminariesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
