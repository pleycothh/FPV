import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlashComponent } from './flash.component';

describe('FlashComponent', () => {
  let component: FlashComponent;
  let fixture: ComponentFixture<FlashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlashComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
