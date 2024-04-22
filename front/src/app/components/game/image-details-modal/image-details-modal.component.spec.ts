import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageDetailsModalComponent } from './image-details-modal.component';

describe('ImageDetailsModalComponent', () => {
  let component: ImageDetailsModalComponent;
  let fixture: ComponentFixture<ImageDetailsModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ImageDetailsModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ImageDetailsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
