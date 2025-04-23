import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PriorityImagesComponent } from './priority-images.component';

describe('PriorityImagesComponent', () => {
  let component: PriorityImagesComponent;
  let fixture: ComponentFixture<PriorityImagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PriorityImagesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PriorityImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
