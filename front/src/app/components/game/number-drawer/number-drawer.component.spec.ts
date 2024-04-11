import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberDrawerComponent } from './number-drawer.component';

describe('NumberDrawerComponent', () => {
  let component: NumberDrawerComponent;
  let fixture: ComponentFixture<NumberDrawerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NumberDrawerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NumberDrawerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
